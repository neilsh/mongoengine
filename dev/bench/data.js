window.BENCHMARK_DATA = {
  "lastUpdate": 1755666143566,
  "repoUrl": "https://github.com/neilsh/mongoengine",
  "entries": {
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
          "id": "b79a201f1b9deb8049446c8d10f6607ba4766590",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/b79a201f1b9deb8049446c8d10f6607ba4766590"
        },
        "date": 1755666143098,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 33812.381757075345,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027824320891903826",
            "extra": "mean: 29.574964792024655 usec\nrounds: 6419"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3683036.4130774993,
            "unit": "iter/sec",
            "range": "stddev: 2.021426401552063e-8",
            "extra": "mean: 271.5150999998972 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 736985.3364238224,
            "unit": "iter/sec",
            "range": "stddev: 3.649778587704873e-8",
            "extra": "mean: 1.3568791000000635 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 82082.06783054373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015245181478472348",
            "extra": "mean: 12.1829289445348 usec\nrounds: 25079"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 146366.90512407996,
            "unit": "iter/sec",
            "range": "stddev: 8.693991732714048e-7",
            "extra": "mean: 6.832145553342593 usec\nrounds: 44719"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 2713.81936394478,
            "unit": "iter/sec",
            "range": "stddev: 0.00007200111765473835",
            "extra": "mean: 368.4843631399292 usec\nrounds: 1465"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 31920.39211291742,
            "unit": "iter/sec",
            "range": "stddev: 0.000003978396444437411",
            "extra": "mean: 31.327935962143897 usec\nrounds: 19020"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 2691.634344736567,
            "unit": "iter/sec",
            "range": "stddev: 0.00001878400286077987",
            "extra": "mean: 371.5214891485831 usec\nrounds: 1797"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 951.8732699007726,
            "unit": "iter/sec",
            "range": "stddev: 0.00004356252692132262",
            "extra": "mean: 1.0505600184615378 msec\nrounds: 650"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 142.71163515327197,
            "unit": "iter/sec",
            "range": "stddev: 0.0019537699639519666",
            "extra": "mean: 7.007137147058839 msec\nrounds: 136"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 364.47702311065933,
            "unit": "iter/sec",
            "range": "stddev: 0.00002971484596284994",
            "extra": "mean: 2.7436571761517836 msec\nrounds: 369"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 48.66991172668259,
            "unit": "iter/sec",
            "range": "stddev: 0.0029498870301687403",
            "extra": "mean: 20.546575173913126 msec\nrounds: 46"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 48.48873886861001,
            "unit": "iter/sec",
            "range": "stddev: 0.0033154858803066036",
            "extra": "mean: 20.623345199999967 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 48.117769883454855,
            "unit": "iter/sec",
            "range": "stddev: 0.0031938733224526933",
            "extra": "mean: 20.782343039215682 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 19.817610396860463,
            "unit": "iter/sec",
            "range": "stddev: 0.00484553728096573",
            "extra": "mean: 50.46017052380955 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 4567.203721256073,
            "unit": "iter/sec",
            "range": "stddev: 0.00001499087104368072",
            "extra": "mean: 218.95235269360393 usec\nrounds: 3564"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 5647.034818371399,
            "unit": "iter/sec",
            "range": "stddev: 0.000018484094357120456",
            "extra": "mean: 177.08408610244757 usec\nrounds: 5447"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2326.9949987193445,
            "unit": "iter/sec",
            "range": "stddev: 0.00002244629289497921",
            "extra": "mean: 429.73878351708856 usec\nrounds: 1723"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 2722.782315452106,
            "unit": "iter/sec",
            "range": "stddev: 0.000018776326554958006",
            "extra": "mean: 367.2713732290987 usec\nrounds: 2047"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2633.271588197621,
            "unit": "iter/sec",
            "range": "stddev: 0.000022991220802657293",
            "extra": "mean: 379.7557397733 usec\nrounds: 2029"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 2727.5549465389495,
            "unit": "iter/sec",
            "range": "stddev: 0.00002784165087264522",
            "extra": "mean: 366.62872778013895 usec\nrounds: 2329"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 2731.027890622332,
            "unit": "iter/sec",
            "range": "stddev: 0.000028503155813098638",
            "extra": "mean: 366.16250000000014 usec\nrounds: 2050"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3112.463029498835,
            "unit": "iter/sec",
            "range": "stddev: 0.000018448096196226735",
            "extra": "mean: 321.2889568558245 usec\nrounds: 1692"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3159.841221381004,
            "unit": "iter/sec",
            "range": "stddev: 0.000015736208538889234",
            "extra": "mean: 316.47159776052024 usec\nrounds: 1161"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3112.179276948863,
            "unit": "iter/sec",
            "range": "stddev: 0.00002158770842571238",
            "extra": "mean: 321.3182503356253 usec\nrounds: 1490"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 1856.9871290104563,
            "unit": "iter/sec",
            "range": "stddev: 0.00003087581170086056",
            "extra": "mean: 538.5066941917232 usec\nrounds: 1429"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 1863.2950377141024,
            "unit": "iter/sec",
            "range": "stddev: 0.00002299199007226113",
            "extra": "mean: 536.683659731528 usec\nrounds: 1490"
          }
        ]
      }
    ]
  }
}