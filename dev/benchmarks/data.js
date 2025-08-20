window.BENCHMARK_DATA = {
  "lastUpdate": 1755648829047,
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
    ],
    "Pytest Benchmark (python 3.11 x mongo 7.0)": [
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
        "date": 1755648828514,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 39586.32171418806,
            "unit": "iter/sec",
            "range": "stddev: 0.0000023148480890198906",
            "extra": "mean: 25.261250772930286 usec\nrounds: 2911"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 5253485.950603431,
            "unit": "iter/sec",
            "range": "stddev: 4.925147176256502e-9",
            "extra": "mean: 190.34979999996705 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 936591.9740811046,
            "unit": "iter/sec",
            "range": "stddev: 4.418140245158543e-8",
            "extra": "mean: 1.0677008000000265 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 96314.38060805999,
            "unit": "iter/sec",
            "range": "stddev: 0.000001157528307581916",
            "extra": "mean: 10.382665534333675 usec\nrounds: 28849"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 172904.89832861786,
            "unit": "iter/sec",
            "range": "stddev: 7.792030138420141e-7",
            "extra": "mean: 5.783526144525009 usec\nrounds: 44560"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3468.0826642288416,
            "unit": "iter/sec",
            "range": "stddev: 0.00007725134339832156",
            "extra": "mean: 288.3437613279494 usec\nrounds: 2229"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 38938.874504596075,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029388142485470377",
            "extra": "mean: 25.681276429342276 usec\nrounds: 18540"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3355.1803775216467,
            "unit": "iter/sec",
            "range": "stddev: 0.000013809151515970537",
            "extra": "mean: 298.04656903086226 usec\nrounds: 1847"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1156.9095689039862,
            "unit": "iter/sec",
            "range": "stddev: 0.000029879173122582865",
            "extra": "mean: 864.3717943722804 usec\nrounds: 924"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 164.7875560005095,
            "unit": "iter/sec",
            "range": "stddev: 0.0018896502263875238",
            "extra": "mean: 6.068419389610391 msec\nrounds: 154"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 457.96173384606703,
            "unit": "iter/sec",
            "range": "stddev: 0.00011867704255516721",
            "extra": "mean: 2.1835885535714348 msec\nrounds: 448"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 59.26995277571865,
            "unit": "iter/sec",
            "range": "stddev: 0.0028326895177867967",
            "extra": "mean: 16.87195540350884 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 58.73498814463616,
            "unit": "iter/sec",
            "range": "stddev: 0.003028890246538579",
            "extra": "mean: 17.025627000000043 msec\nrounds: 35"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 59.564524836752945,
            "unit": "iter/sec",
            "range": "stddev: 0.0031710935290476675",
            "extra": "mean: 16.788516365079314 msec\nrounds: 63"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 23.993433189283603,
            "unit": "iter/sec",
            "range": "stddev: 0.005107352141612027",
            "extra": "mean: 41.678070499999926 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5616.586276388338,
            "unit": "iter/sec",
            "range": "stddev: 0.000014214608259451421",
            "extra": "mean: 178.04409133781436 usec\nrounds: 4029"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6947.421171797805,
            "unit": "iter/sec",
            "range": "stddev: 0.000014410146446203533",
            "extra": "mean: 143.93830102878692 usec\nrounds: 6707"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2864.7042342888262,
            "unit": "iter/sec",
            "range": "stddev: 0.000018965347326487563",
            "extra": "mean: 349.0761761827234 usec\nrounds: 1226"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3303.30663462131,
            "unit": "iter/sec",
            "range": "stddev: 0.00001496210491084936",
            "extra": "mean: 302.726967432934 usec\nrounds: 2610"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3218.8592433600393,
            "unit": "iter/sec",
            "range": "stddev: 0.000021332507389955797",
            "extra": "mean: 310.66906764029227 usec\nrounds: 2602"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3290.84680276684,
            "unit": "iter/sec",
            "range": "stddev: 0.00002288821185463823",
            "extra": "mean: 303.873154824233 usec\nrounds: 2674"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3279.144272860142,
            "unit": "iter/sec",
            "range": "stddev: 0.000019894934349438206",
            "extra": "mean: 304.9576099095445 usec\nrounds: 2543"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3785.2204174120593,
            "unit": "iter/sec",
            "range": "stddev: 0.000021467506716712355",
            "extra": "mean: 264.1854079091374 usec\nrounds: 2731"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3789.7652237750635,
            "unit": "iter/sec",
            "range": "stddev: 0.00001470857031983487",
            "extra": "mean: 263.86858840925225 usec\nrounds: 1691"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3824.6438456791157,
            "unit": "iter/sec",
            "range": "stddev: 0.000013546506300056544",
            "extra": "mean: 261.46225383305904 usec\nrounds: 1761"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2281.363674780659,
            "unit": "iter/sec",
            "range": "stddev: 0.00002113285413376088",
            "extra": "mean: 438.3343221663879 usec\nrounds: 1791"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2302.61229267133,
            "unit": "iter/sec",
            "range": "stddev: 0.00002144416857185073",
            "extra": "mean: 434.2893517865614 usec\nrounds: 1987"
          }
        ]
      }
    ]
  }
}