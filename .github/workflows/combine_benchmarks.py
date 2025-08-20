"""
Combines multiple pytest-benchmark JSON output files into a single file.

This script is designed to be run in a GitHub Actions workflow. It expects to find
benchmark results in directories matching the pattern 'benchmark-results/benchmark-result-*'.

It extracts the Python and MongoDB versions from the directory names, appends them
to the benchmark names, and then combines all benchmarks into a single JSON file
named 'output.json'.
"""

import json
import glob
import os
from collections import defaultdict
import plotly.graph_objects as go

def generate_charts(data_dir="benchmark-results", output_dir="dev/bench"):
    """
    Generates interactive charts from benchmark data and saves them as an HTML file.

    :param data_dir: Directory containing benchmark JSON artifacts.
    :param output_dir: Directory to save the output HTML file.
    """
    # Group data by benchmark name
    benchmarks = defaultdict(lambda: defaultdict(list))
    
    artifact_dirs = sorted(glob.glob(os.path.join(data_dir, 'benchmark-result-*')))
    if not artifact_dirs:
        print("No benchmark artifacts found.")
        return

    for artifact_dir in artifact_dirs:
        json_file = glob.glob(os.path.join(artifact_dir, '*.json'))
        if not json_file:
            continue

        with open(json_file[0], 'r') as f:
            data = json.load(f)
            commit_info = data.get('commit_info', {})
            commit_hash = commit_info.get('id', 'unknown')
            
            matrix_combo = os.path.basename(artifact_dir).replace('benchmark-result-', '')
            
            for bench in data.get('benchmarks', []):
                base_name = bench['name']
                # Store as (commit_hash, mean_performance)
                benchmarks[base_name][matrix_combo].append((commit_hash, bench['stats']['mean']))

    if not benchmarks:
        print("No benchmark data found to plot.")
        return

    # Create figures
    figs = []
    for base_name, matrix_data in benchmarks.items():
        fig = go.Figure()
        for matrix_combo, points in matrix_data.items():
            # Sort by commit date if available, otherwise by hash
            points.sort(key=lambda x: x[0]) 
            commits = [p[0][:7] for p in points]
            means = [p[1] for p in points]
            
            fig.add_trace(go.Scatter(x=commits, y=means, mode='lines+markers', name=matrix_combo))
        
        fig.update_layout(
            title=base_name,
            xaxis_title="Commit",
            yaxis_title="Time (seconds)",
            legend_title="Matrix Combination"
        )
        figs.append(fig.to_html(full_html=False, include_plotlyjs='cdn'))

    # Write to HTML file
    os.makedirs(output_dir, exist_ok=True)
    with open(os.path.join(output_dir, "index.html"), "w") as f:
        f.write("<html><head><title>Benchmark Results</title></head><body>")
        for fig_html in figs:
            f.write(fig_html)
        f.write("</body></html>")
    
    print(f"Generated benchmark report at {os.path.join(output_dir, 'index.html')}")

if __name__ == "__main__":
    generate_charts()
