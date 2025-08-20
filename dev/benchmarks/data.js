window.BENCHMARK_DATA = {
  "lastUpdate": 1755648821348,
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
    ],
    "Pytest Benchmark (python 3.10 x mongo 7.0)": [
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
        "date": 1755648820405,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 33775.083298679325,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023660411175017136",
            "extra": "mean: 29.60762498072365 usec\nrounds: 6485"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3582288.0216864008,
            "unit": "iter/sec",
            "range": "stddev: 2.091913542242472e-8",
            "extra": "mean: 279.1512000001717 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 716954.7319083731,
            "unit": "iter/sec",
            "range": "stddev: 3.4893968665812397e-8",
            "extra": "mean: 1.3947882000000522 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 80787.1641220682,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013540867361697709",
            "extra": "mean: 12.378204023711179 usec\nrounds: 27835"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 145892.97262583283,
            "unit": "iter/sec",
            "range": "stddev: 8.309140345726638e-7",
            "extra": "mean: 6.854339739616307 usec\nrounds: 41938"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 2771.268957676887,
            "unit": "iter/sec",
            "range": "stddev: 0.00006469548752329329",
            "extra": "mean: 360.8455242966691 usec\nrounds: 1564"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 31596.662385049134,
            "unit": "iter/sec",
            "range": "stddev: 0.000003371440425127635",
            "extra": "mean: 31.64891240136739 usec\nrounds: 18756"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 2673.467872810456,
            "unit": "iter/sec",
            "range": "stddev: 0.000017917065256358353",
            "extra": "mean: 374.04601348313946 usec\nrounds: 1780"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 943.3946495038405,
            "unit": "iter/sec",
            "range": "stddev: 0.00005067861175466869",
            "extra": "mean: 1.0600017718204466 msec\nrounds: 802"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 142.14244568000436,
            "unit": "iter/sec",
            "range": "stddev: 0.001576843244655659",
            "extra": "mean: 7.03519624427479 msec\nrounds: 131"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 371.3445460955839,
            "unit": "iter/sec",
            "range": "stddev: 0.00004672412135338963",
            "extra": "mean: 2.692916889487857 msec\nrounds: 371"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 48.78325841460333,
            "unit": "iter/sec",
            "range": "stddev: 0.002700414348734134",
            "extra": "mean: 20.49883571739129 msec\nrounds: 46"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 48.698875900599795,
            "unit": "iter/sec",
            "range": "stddev: 0.0031006171945314564",
            "extra": "mean: 20.534354880000087 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 48.4066495242518,
            "unit": "iter/sec",
            "range": "stddev: 0.0030405346940619513",
            "extra": "mean: 20.658318843137423 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 19.90495221653665,
            "unit": "iter/sec",
            "range": "stddev: 0.003954886200742468",
            "extra": "mean: 50.23875411111107 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 4534.961889272776,
            "unit": "iter/sec",
            "range": "stddev: 0.000014720724902488686",
            "extra": "mean: 220.50901957201663 usec\nrounds: 3832"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 5793.508907070308,
            "unit": "iter/sec",
            "range": "stddev: 0.000013773349872223294",
            "extra": "mean: 172.60696687280753 usec\nrounds: 4528"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2318.330741092699,
            "unit": "iter/sec",
            "range": "stddev: 0.00002558529915164535",
            "extra": "mean: 431.3448388855293 usec\nrounds: 1651"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 2710.824579167562,
            "unit": "iter/sec",
            "range": "stddev: 0.00001799651721722242",
            "extra": "mean: 368.8914464199964 usec\nrounds: 2081"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2689.197657593532,
            "unit": "iter/sec",
            "range": "stddev: 0.000017402812124012872",
            "extra": "mean: 371.85812548076694 usec\nrounds: 2080"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 2817.2900321649213,
            "unit": "iter/sec",
            "range": "stddev: 0.00001976473488643209",
            "extra": "mean: 354.95103045232406 usec\nrounds: 2233"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 2772.610123327969,
            "unit": "iter/sec",
            "range": "stddev: 0.00003083923875104359",
            "extra": "mean: 360.67097627116 usec\nrounds: 2360"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3110.716996742662,
            "unit": "iter/sec",
            "range": "stddev: 0.000017396819462010433",
            "extra": "mean: 321.4692950362036 usec\nrounds: 1793"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3127.1027387898457,
            "unit": "iter/sec",
            "range": "stddev: 0.000015241994011936406",
            "extra": "mean: 319.7848243345497 usec\nrounds: 1315"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3115.291841242435,
            "unit": "iter/sec",
            "range": "stddev: 0.00001639262867664772",
            "extra": "mean: 320.9972134107287 usec\nrounds: 1551"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 1855.4170784250011,
            "unit": "iter/sec",
            "range": "stddev: 0.000021669113920521354",
            "extra": "mean: 538.9623775851331 usec\nrounds: 1499"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 1860.7488060872527,
            "unit": "iter/sec",
            "range": "stddev: 0.000023072154730581255",
            "extra": "mean: 537.4180527369415 usec\nrounds: 1498"
          }
        ]
      }
    ]
  }
}