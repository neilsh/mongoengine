window.BENCHMARK_DATA = {
  "lastUpdate": 1755648852270,
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
    ],
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
          "id": "9ff4d278347dfe37a7a05d9a5b0883c620bba6a0",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/9ff4d278347dfe37a7a05d9a5b0883c620bba6a0"
        },
        "date": 1755648829837,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 41220.45163412122,
            "unit": "iter/sec",
            "range": "stddev: 0.0000021989257104890456",
            "extra": "mean: 24.2598021214359 usec\nrounds: 2734"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 5149396.87689422,
            "unit": "iter/sec",
            "range": "stddev: 1.4530723728223757e-8",
            "extra": "mean: 194.1974999998708 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 937825.7185947871,
            "unit": "iter/sec",
            "range": "stddev: 3.789380474348792e-8",
            "extra": "mean: 1.0662962000001164 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 95546.484130198,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011442810908132245",
            "extra": "mean: 10.466109863732227 usec\nrounds: 27079"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 168716.0051961775,
            "unit": "iter/sec",
            "range": "stddev: 8.06173811607193e-7",
            "extra": "mean: 5.92711994832519 usec\nrounds: 41026"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3431.008638289405,
            "unit": "iter/sec",
            "range": "stddev: 0.00008467936687458916",
            "extra": "mean: 291.45948186786524 usec\nrounds: 2013"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 39450.15226884129,
            "unit": "iter/sec",
            "range": "stddev: 0.000002800729060980889",
            "extra": "mean: 25.34844461905474 usec\nrounds: 18454"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3338.3562201575146,
            "unit": "iter/sec",
            "range": "stddev: 0.00001846408319513438",
            "extra": "mean: 299.54862035448593 usec\nrounds: 1749"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1148.3589734167,
            "unit": "iter/sec",
            "range": "stddev: 0.000040937914375809564",
            "extra": "mean: 870.8078424507894 usec\nrounds: 914"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 166.81935164277448,
            "unit": "iter/sec",
            "range": "stddev: 0.0022227333542598586",
            "extra": "mean: 5.994508371794846 msec\nrounds: 156"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 472.07805568453716,
            "unit": "iter/sec",
            "range": "stddev: 0.00004933196432827079",
            "extra": "mean: 2.118293760869586 msec\nrounds: 460"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 57.784106270957025,
            "unit": "iter/sec",
            "range": "stddev: 0.003500595007595616",
            "extra": "mean: 17.30579677586208 msec\nrounds: 58"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 58.47653219225218,
            "unit": "iter/sec",
            "range": "stddev: 0.0030610397695160535",
            "extra": "mean: 17.100877266666892 msec\nrounds: 60"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 59.6480501885705,
            "unit": "iter/sec",
            "range": "stddev: 0.0032057213373872114",
            "extra": "mean: 16.765007352941364 msec\nrounds: 34"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 24.009052411535777,
            "unit": "iter/sec",
            "range": "stddev: 0.004832487037948306",
            "extra": "mean: 41.650956599999915 msec\nrounds: 25"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5597.158646960515,
            "unit": "iter/sec",
            "range": "stddev: 0.000015869414394288266",
            "extra": "mean: 178.66207893589734 usec\nrounds: 4586"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6864.463671069343,
            "unit": "iter/sec",
            "range": "stddev: 0.000015682878659959915",
            "extra": "mean: 145.6778049849043 usec\nrounds: 6620"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2862.0903837158266,
            "unit": "iter/sec",
            "range": "stddev: 0.00001916313212209401",
            "extra": "mean: 349.39497567568384 usec\nrounds: 1110"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3243.1180025394515,
            "unit": "iter/sec",
            "range": "stddev: 0.000018544513687855806",
            "extra": "mean: 308.34524035726486 usec\nrounds: 2463"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3169.951068700697,
            "unit": "iter/sec",
            "range": "stddev: 0.000032955644940325224",
            "extra": "mean: 315.46228264333473 usec\nrounds: 2512"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3249.516353095439,
            "unit": "iter/sec",
            "range": "stddev: 0.000023584202158916523",
            "extra": "mean: 307.73810356344734 usec\nrounds: 2694"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3369.3715629512976,
            "unit": "iter/sec",
            "range": "stddev: 0.000023708257445889955",
            "extra": "mean: 296.79125062837556 usec\nrounds: 2785"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3813.2646233295377,
            "unit": "iter/sec",
            "range": "stddev: 0.000018652898184151942",
            "extra": "mean: 262.2424874166886 usec\nrounds: 2702"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3772.901678719037,
            "unit": "iter/sec",
            "range": "stddev: 0.000020162726516035186",
            "extra": "mean: 265.04798830048406 usec\nrounds: 1624"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3809.275197834339,
            "unit": "iter/sec",
            "range": "stddev: 0.000017054795163360324",
            "extra": "mean: 262.51713201727273 usec\nrounds: 1621"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2274.5273224454786,
            "unit": "iter/sec",
            "range": "stddev: 0.000023437033666110846",
            "extra": "mean: 439.65178616752814 usec\nrounds: 1576"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2289.08728550494,
            "unit": "iter/sec",
            "range": "stddev: 0.000020813813386792262",
            "extra": "mean: 436.85533807830063 usec\nrounds: 1686"
          }
        ]
      }
    ],
    "Pytest Benchmark (python 3.10 x mongo 6.0)": [
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
        "date": 1755648851430,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 34016.68442384825,
            "unit": "iter/sec",
            "range": "stddev: 0.000002916804753454482",
            "extra": "mean: 29.39733889229148 usec\nrounds: 6536"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3766847.2242123443,
            "unit": "iter/sec",
            "range": "stddev: 1.4420750621551285e-8",
            "extra": "mean: 265.4739999998545 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 622298.9890255455,
            "unit": "iter/sec",
            "range": "stddev: 4.249044120987794e-7",
            "extra": "mean: 1.6069445999999044 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 82336.67452782614,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013744657580935216",
            "extra": "mean: 12.145256117455222 usec\nrounds: 23907"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 143808.1179335379,
            "unit": "iter/sec",
            "range": "stddev: 9.124669846241795e-7",
            "extra": "mean: 6.953710363292274 usec\nrounds: 44069"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 2754.265084793938,
            "unit": "iter/sec",
            "range": "stddev: 0.00007331615469603166",
            "extra": "mean: 363.0732588235295 usec\nrounds: 1530"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 32057.55163141781,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032191022395440836",
            "extra": "mean: 31.193898133504245 usec\nrounds: 18966"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 2696.1780557812726,
            "unit": "iter/sec",
            "range": "stddev: 0.000017974023585373994",
            "extra": "mean: 370.89538573157387 usec\nrounds: 1654"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 956.4305857137965,
            "unit": "iter/sec",
            "range": "stddev: 0.00004533184086086028",
            "extra": "mean: 1.0455541833740993 msec\nrounds: 818"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 140.7992980713681,
            "unit": "iter/sec",
            "range": "stddev: 0.0022359153197631628",
            "extra": "mean: 7.102308134328353 msec\nrounds: 134"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 367.17828374858885,
            "unit": "iter/sec",
            "range": "stddev: 0.00002607551512781877",
            "extra": "mean: 2.7234726133332856 msec\nrounds: 375"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 49.27647359068958,
            "unit": "iter/sec",
            "range": "stddev: 0.002954551527139095",
            "extra": "mean: 20.293659978723447 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 49.05604454556627,
            "unit": "iter/sec",
            "range": "stddev: 0.003148101409249798",
            "extra": "mean: 20.384847764705903 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 48.03312852785883,
            "unit": "iter/sec",
            "range": "stddev: 0.00286651186777119",
            "extra": "mean: 20.818964549019704 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 19.879401214941417,
            "unit": "iter/sec",
            "range": "stddev: 0.00445416615413821",
            "extra": "mean: 50.3033260000003 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 4699.122118673501,
            "unit": "iter/sec",
            "range": "stddev: 0.000014530767246832792",
            "extra": "mean: 212.80570599052373 usec\nrounds: 3806"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 5725.920428370192,
            "unit": "iter/sec",
            "range": "stddev: 0.000017115870325098104",
            "extra": "mean: 174.6444108872531 usec\nrounds: 5162"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2360.0923723337455,
            "unit": "iter/sec",
            "range": "stddev: 0.00002193655068476702",
            "extra": "mean: 423.7122291154916 usec\nrounds: 1628"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 2746.084921843995,
            "unit": "iter/sec",
            "range": "stddev: 0.00001754720047388623",
            "extra": "mean: 364.154797998199 usec\nrounds: 2198"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2652.466811835287,
            "unit": "iter/sec",
            "range": "stddev: 0.000023641100171586015",
            "extra": "mean: 377.00754465164556 usec\nrounds: 2038"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 2694.4202213928124,
            "unit": "iter/sec",
            "range": "stddev: 0.00004221094915326476",
            "extra": "mean: 371.13735714285696 usec\nrounds: 2016"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 2788.2249566099235,
            "unit": "iter/sec",
            "range": "stddev: 0.000028268493856983975",
            "extra": "mean: 358.651118744685 usec\nrounds: 2358"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3173.5603002340567,
            "unit": "iter/sec",
            "range": "stddev: 0.000019206108702596927",
            "extra": "mean: 315.1035132139282 usec\nrounds: 2346"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3180.999461471993,
            "unit": "iter/sec",
            "range": "stddev: 0.000015195634152273483",
            "extra": "mean: 314.3666046196859 usec\nrounds: 1472"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3170.007110685641,
            "unit": "iter/sec",
            "range": "stddev: 0.000016638808940712642",
            "extra": "mean: 315.45670564243943 usec\nrounds: 1471"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 1911.890869635962,
            "unit": "iter/sec",
            "range": "stddev: 0.000025244499286669996",
            "extra": "mean: 523.0424057573994 usec\nrounds: 1459"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 1897.930456409541,
            "unit": "iter/sec",
            "range": "stddev: 0.00002145269887493206",
            "extra": "mean: 526.8896953641682 usec\nrounds: 1510"
          }
        ]
      }
    ]
  }
}