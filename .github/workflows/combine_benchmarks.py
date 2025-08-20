"""
Combines multiple pytest-benchmark JSON output files into a single file.

This script is designed to be run in a GitHub Actions workflow. It expects to find
benchmark results in directories matching the pattern 'benchmark-results/benchmark-result-*'.

It extracts the Python and MongoDB versions from the directory names, appends them
to the benchmark names, and then combines all benchmarks into a single JSON file
named 'output.json'.
"""

import glob
import json
import os


def combine_benchmark_results(
    results_path="benchmark-results", output_file="output.json"
):
    """
    Finds, combines, and writes benchmark results.

    :param results_path: The directory containing the benchmark result artifacts.
    :param output_file: The name of the combined JSON file to write.
    """
    all_benchmarks = []
    template_data = None
    artifact_dirs = sorted(glob.glob(os.path.join(results_path, "benchmark-result-*")))

    if not artifact_dirs:
        print(f"Warning: No benchmark artifact directories found in '{results_path}'.")
        # Create an empty output file to prevent the workflow from failing
        with open(output_file, "w") as f:
            json.dump({"benchmarks": []}, f)
        return

    print(f"Found {len(artifact_dirs)} benchmark artifact directories.")

    for artifact_dir in artifact_dirs:
        try:
            fname = os.path.basename(artifact_dir)
            # e.g., benchmark-result-3.10-7.0 -> ['3.10', '7.0']
            parts = fname.replace("benchmark-result-", "").split("-")
            py_ver, mongo_ver = parts[0], parts[1]
            prefix = f"py{py_ver}, mongo{mongo_ver}: "

            json_files = glob.glob(os.path.join(artifact_dir, "*.json"))
            if not json_files:
                print(f"Warning: No JSON file found in '{artifact_dir}'. Skipping.")
                continue

            json_file_path = json_files[0]

            with open(json_file_path) as f:
                data = json.load(f)
                if template_data is None:
                    # Use the metadata from the first file as a template
                    template_data = data.copy()
                    template_data["benchmarks"] = []

                for bench in data.get("benchmarks", []):
                    bench["name"] = prefix + bench["name"]
                    all_benchmarks.append(bench)
            print(f"Processed '{json_file_path}' for py{py_ver}, mongo{mongo_ver}.")

        except (IndexError, ValueError) as e:
            print(f"Error processing directory '{artifact_dir}': {e}. Skipping.")
            continue

    if template_data is None:
        print(
            "Warning: No valid benchmark data was processed. Creating empty output file."
        )
        template_data = {"benchmarks": []}

    # Sort for consistent output
    all_benchmarks.sort(key=lambda x: x["name"])
    template_data["benchmarks"] = all_benchmarks

    with open(output_file, "w") as f:
        json.dump(template_data, f, indent=2)

    print(
        f"Successfully combined {len(all_benchmarks)} benchmarks into '{output_file}'."
    )


if __name__ == "__main__":
    combine_benchmark_results()
