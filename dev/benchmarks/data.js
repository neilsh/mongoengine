window.BENCHMARK_DATA = {
  "lastUpdate": 1755648819734,
  "repoUrl": "https://github.com/neilsh/mongoengine",
  "entries": {
    "Pytest Benchmark (python 3.12 x mongo 7.0)": [
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
          "id": "9ff4d278347dfe37a7a05d9a5b0883c620bba6a0",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/9ff4d278347dfe37a7a05d9a5b0883c620bba6a0"
        },
        "date": 1755648819292,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 39243.1146708551,
            "unit": "iter/sec",
            "range": "stddev: 0.000002314068186843995",
            "extra": "mean: 25.48217715100671 usec\nrounds: 6311"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 4318216.265772487,
            "unit": "iter/sec",
            "range": "stddev: 1.9093008625388582e-8",
            "extra": "mean: 231.5770999999023 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 808801.8344919651,
            "unit": "iter/sec",
            "range": "stddev: 6.752925279906905e-8",
            "extra": "mean: 1.2363968000000058 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 87142.16237771364,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016120709361102968",
            "extra": "mean: 11.4755013269644 usec\nrounds: 22608"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 143463.2116089304,
            "unit": "iter/sec",
            "range": "stddev: 8.276564632339993e-7",
            "extra": "mean: 6.970428089438862 usec\nrounds: 34974"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3437.3624387487216,
            "unit": "iter/sec",
            "range": "stddev: 0.00008117133416623043",
            "extra": "mean: 290.9207329221945 usec\nrounds: 2108"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 37763.12129492034,
            "unit": "iter/sec",
            "range": "stddev: 0.000002979032707263745",
            "extra": "mean: 26.48086190201957 usec\nrounds: 17350"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3273.2100544663394,
            "unit": "iter/sec",
            "range": "stddev: 0.00001558146451208868",
            "extra": "mean: 305.51048767416756 usec\nrounds: 1866"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1127.4364273027838,
            "unit": "iter/sec",
            "range": "stddev: 0.000035789221077772245",
            "extra": "mean: 886.9679706840273 usec\nrounds: 921"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 144.5905893714958,
            "unit": "iter/sec",
            "range": "stddev: 0.0018025559539173992",
            "extra": "mean: 6.916079423611073 msec\nrounds: 144"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 422.1747262922915,
            "unit": "iter/sec",
            "range": "stddev: 0.000022029971713396578",
            "extra": "mean: 2.368687507142843 msec\nrounds: 420"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 51.48364857698054,
            "unit": "iter/sec",
            "range": "stddev: 0.003073767077182985",
            "extra": "mean: 19.42364280000003 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 51.35786806768589,
            "unit": "iter/sec",
            "range": "stddev: 0.003444195199110559",
            "extra": "mean: 19.47121322641496 msec\nrounds: 53"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 52.630287081571566,
            "unit": "iter/sec",
            "range": "stddev: 0.0029439886340872595",
            "extra": "mean: 19.000466375000048 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 21.581870160106078,
            "unit": "iter/sec",
            "range": "stddev: 0.004307510024372428",
            "extra": "mean: 46.33518747826091 msec\nrounds: 23"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5706.28842364474,
            "unit": "iter/sec",
            "range": "stddev: 0.000014930319190333545",
            "extra": "mean: 175.24526027397624 usec\nrounds: 4234"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 7099.9329491178405,
            "unit": "iter/sec",
            "range": "stddev: 0.000014910952394738848",
            "extra": "mean: 140.84640054583178 usec\nrounds: 6229"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2736.0394022367955,
            "unit": "iter/sec",
            "range": "stddev: 0.000020864208502696152",
            "extra": "mean: 365.49181242874994 usec\nrounds: 1754"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3210.12388436824,
            "unit": "iter/sec",
            "range": "stddev: 0.00001638592454133683",
            "extra": "mean: 311.51445739197766 usec\nrounds: 2523"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3077.5469809860774,
            "unit": "iter/sec",
            "range": "stddev: 0.00001838019985322692",
            "extra": "mean: 324.9341134930749 usec\nrounds: 2379"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3175.8636059738174,
            "unit": "iter/sec",
            "range": "stddev: 0.000018323610843043116",
            "extra": "mean: 314.87498333335043 usec\nrounds: 2520"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3217.6629240259554,
            "unit": "iter/sec",
            "range": "stddev: 0.0000193910930617948",
            "extra": "mean: 310.78457365223176 usec\nrounds: 2634"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3727.9446126744083,
            "unit": "iter/sec",
            "range": "stddev: 0.000020573320285438373",
            "extra": "mean: 268.24432868454153 usec\nrounds: 2653"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3785.1467162169097,
            "unit": "iter/sec",
            "range": "stddev: 0.000014439282506505828",
            "extra": "mean: 264.1905519053319 usec\nrounds: 1522"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3754.506948399751,
            "unit": "iter/sec",
            "range": "stddev: 0.00001675468829534076",
            "extra": "mean: 266.34655728263357 usec\nrounds: 1737"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2277.636415420327,
            "unit": "iter/sec",
            "range": "stddev: 0.000021005350793197817",
            "extra": "mean: 439.0516384571656 usec\nrounds: 1737"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2261.8801826962926,
            "unit": "iter/sec",
            "range": "stddev: 0.000020565632308693656",
            "extra": "mean: 442.1100673900161 usec\nrounds: 1751"
          }
        ]
      }
    ]
  }
}