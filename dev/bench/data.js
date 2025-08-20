window.BENCHMARK_DATA = {
  "lastUpdate": 1755648028091,
  "repoUrl": "https://github.com/neilsh/mongoengine",
  "entries": {
    "Pytest Benchmark (python 3.11 x mongo 6.0)": [
      {
        "commit": {
          "author": {
            "name": "neilsh",
            "username": "neilsh"
          },
          "committer": {
            "name": "neilsh",
            "username": "neilsh"
          },
          "id": "7ae3e280ecdc93b2191c77f64b479f46225566bd",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/7ae3e280ecdc93b2191c77f64b479f46225566bd"
        },
        "date": 1755648027225,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 40009.91352090683,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025183453954873736",
            "extra": "mean: 24.993805584644882 usec\nrounds: 2865"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 5151760.5626628315,
            "unit": "iter/sec",
            "range": "stddev: 2.0893038506132887e-8",
            "extra": "mean: 194.10839999969286 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 936389.6467141568,
            "unit": "iter/sec",
            "range": "stddev: 4.3326254721888e-8",
            "extra": "mean: 1.0679315000000855 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 96122.83357063122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012887771002989696",
            "extra": "mean: 10.403355403221633 usec\nrounds: 17943"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 170604.98344626723,
            "unit": "iter/sec",
            "range": "stddev: 7.63179066914278e-7",
            "extra": "mean: 5.861493490985592 usec\nrounds: 42710"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3436.7321968966016,
            "unit": "iter/sec",
            "range": "stddev: 0.00007421897692149327",
            "extra": "mean: 290.9740831429951 usec\nrounds: 2189"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 39394.73486840919,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028438635247056346",
            "extra": "mean: 25.384102808162424 usec\nrounds: 19016"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3339.7950841510624,
            "unit": "iter/sec",
            "range": "stddev: 0.000014757359662122558",
            "extra": "mean: 299.41956760924705 usec\nrounds: 1945"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1172.6933905586639,
            "unit": "iter/sec",
            "range": "stddev: 0.000030117182056391348",
            "extra": "mean: 852.7378154008409 usec\nrounds: 948"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 165.9868045266541,
            "unit": "iter/sec",
            "range": "stddev: 0.0019238287849829058",
            "extra": "mean: 6.024575283870956 msec\nrounds: 155"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 455.2207429113274,
            "unit": "iter/sec",
            "range": "stddev: 0.00018062303248412925",
            "extra": "mean: 2.1967364527472557 msec\nrounds: 455"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 59.22964281053452,
            "unit": "iter/sec",
            "range": "stddev: 0.002704222485616643",
            "extra": "mean: 16.88343796363636 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 59.54076913302886,
            "unit": "iter/sec",
            "range": "stddev: 0.0030181217741527115",
            "extra": "mean: 16.795214683333228 msec\nrounds: 60"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 59.37460830415321,
            "unit": "iter/sec",
            "range": "stddev: 0.003106478284807674",
            "extra": "mean: 16.84221637096763 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 24.414121141941273,
            "unit": "iter/sec",
            "range": "stddev: 0.004321230627112317",
            "extra": "mean: 40.95990161538478 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5620.173280957112,
            "unit": "iter/sec",
            "range": "stddev: 0.000014947491942127402",
            "extra": "mean: 177.93045694664073 usec\nrounds: 3786"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6880.909656825281,
            "unit": "iter/sec",
            "range": "stddev: 0.000013824990756787404",
            "extra": "mean: 145.32962208101142 usec\nrounds: 6295"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2836.3821448452422,
            "unit": "iter/sec",
            "range": "stddev: 0.000019746043139529513",
            "extra": "mean: 352.5618019480805 usec\nrounds: 1848"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3261.464121947841,
            "unit": "iter/sec",
            "range": "stddev: 0.0000178729956111222",
            "extra": "mean: 306.6107621023809 usec\nrounds: 2169"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3187.908922142599,
            "unit": "iter/sec",
            "range": "stddev: 0.00002221745045201603",
            "extra": "mean: 313.68524773533943 usec\nrounds: 2539"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3223.7390479529818,
            "unit": "iter/sec",
            "range": "stddev: 0.00002287657627751306",
            "extra": "mean: 310.1988049048147 usec\nrounds: 2732"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3222.1143206996394,
            "unit": "iter/sec",
            "range": "stddev: 0.000025818622509064478",
            "extra": "mean: 310.3552203519779 usec\nrounds: 2614"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3808.9760295853466,
            "unit": "iter/sec",
            "range": "stddev: 0.000015989987208150204",
            "extra": "mean: 262.5377508896695 usec\nrounds: 2810"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3793.559983598513,
            "unit": "iter/sec",
            "range": "stddev: 0.000015764305363002527",
            "extra": "mean: 263.60463636360254 usec\nrounds: 1331"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3817.5868634982285,
            "unit": "iter/sec",
            "range": "stddev: 0.000014878870388138446",
            "extra": "mean: 261.9455786485116 usec\nrounds: 1761"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2279.5374686261557,
            "unit": "iter/sec",
            "range": "stddev: 0.000024011992172568012",
            "extra": "mean: 438.6854850000275 usec\nrounds: 1800"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2295.979549977688,
            "unit": "iter/sec",
            "range": "stddev: 0.000022314450119827882",
            "extra": "mean: 435.54394899106046 usec\nrounds: 1784"
          }
        ]
      }
    ]
  }
}