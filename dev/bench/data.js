window.BENCHMARK_DATA = {
  "lastUpdate": 1755666151560,
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
          "id": "b79a201f1b9deb8049446c8d10f6607ba4766590",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/b79a201f1b9deb8049446c8d10f6607ba4766590"
        },
        "date": 1755666150614,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 39829.41402646784,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031950042281021026",
            "extra": "mean: 25.107072861666254 usec\nrounds: 2841"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 5125122.17010403,
            "unit": "iter/sec",
            "range": "stddev: 1.5683022207512288e-8",
            "extra": "mean: 195.1172999998363 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 932380.328751618,
            "unit": "iter/sec",
            "range": "stddev: 6.175027332619963e-8",
            "extra": "mean: 1.0725237000001053 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 93188.16990881981,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022167762430193035",
            "extra": "mean: 10.730975841444815 usec\nrounds: 25581"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 163560.5712937378,
            "unit": "iter/sec",
            "range": "stddev: 8.952254459799976e-7",
            "extra": "mean: 6.113942939243614 usec\nrounds: 38976"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3353.362477679616,
            "unit": "iter/sec",
            "range": "stddev: 0.00010695019850910535",
            "extra": "mean: 298.2081438127015 usec\nrounds: 1495"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 38144.03324915651,
            "unit": "iter/sec",
            "range": "stddev: 0.000003295932366376824",
            "extra": "mean: 26.216420100832238 usec\nrounds: 18248"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3276.78753069047,
            "unit": "iter/sec",
            "range": "stddev: 0.00001637687997404307",
            "extra": "mean: 305.1769425493647 usec\nrounds: 1671"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1125.4392428587737,
            "unit": "iter/sec",
            "range": "stddev: 0.00003478980822472394",
            "extra": "mean: 888.5419682539766 usec\nrounds: 756"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 160.55111212190704,
            "unit": "iter/sec",
            "range": "stddev: 0.0026858643392106167",
            "extra": "mean: 6.228546079710095 msec\nrounds: 138"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 451.19896324686647,
            "unit": "iter/sec",
            "range": "stddev: 0.00005386669373943827",
            "extra": "mean: 2.2163171493212537 msec\nrounds: 442"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 54.31084637076121,
            "unit": "iter/sec",
            "range": "stddev: 0.00449424138443545",
            "extra": "mean: 18.412528377358523 msec\nrounds: 53"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 56.102973079880094,
            "unit": "iter/sec",
            "range": "stddev: 0.00419194471490374",
            "extra": "mean: 17.82436732142854 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 55.83637851898065,
            "unit": "iter/sec",
            "range": "stddev: 0.004304723293012729",
            "extra": "mean: 17.909470967213007 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 22.62405175517291,
            "unit": "iter/sec",
            "range": "stddev: 0.005638345078093075",
            "extra": "mean: 44.20074754166673 msec\nrounds: 24"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5462.305146444931,
            "unit": "iter/sec",
            "range": "stddev: 0.000016438249905304784",
            "extra": "mean: 183.0728919732426 usec\nrounds: 2990"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6603.0953569579515,
            "unit": "iter/sec",
            "range": "stddev: 0.000017150399700938475",
            "extra": "mean: 151.4441252080752 usec\nrounds: 5407"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2772.960046677617,
            "unit": "iter/sec",
            "range": "stddev: 0.000025397803331025925",
            "extra": "mean: 360.62546274265145 usec\nrounds: 1597"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3192.50001868476,
            "unit": "iter/sec",
            "range": "stddev: 0.000016232411727478517",
            "extra": "mean: 313.2341406882679 usec\nrounds: 1976"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3052.401157773654,
            "unit": "iter/sec",
            "range": "stddev: 0.000021588295123394443",
            "extra": "mean: 327.61093588674146 usec\nrounds: 2402"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3134.6613740894104,
            "unit": "iter/sec",
            "range": "stddev: 0.000025030701001056596",
            "extra": "mean: 319.0137245017384 usec\nrounds: 2559"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3345.2048151139825,
            "unit": "iter/sec",
            "range": "stddev: 0.000022958540658174114",
            "extra": "mean: 298.9353583020975 usec\nrounds: 2403"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3704.749217891114,
            "unit": "iter/sec",
            "range": "stddev: 0.000018713451531614163",
            "extra": "mean: 269.9238035251516 usec\nrounds: 1929"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3694.509490264832,
            "unit": "iter/sec",
            "range": "stddev: 0.00001863581676383853",
            "extra": "mean: 270.6719261745129 usec\nrounds: 1043"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3692.538330902085,
            "unit": "iter/sec",
            "range": "stddev: 0.000015527637132261323",
            "extra": "mean: 270.8164168889482 usec\nrounds: 1125"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2227.078004334809,
            "unit": "iter/sec",
            "range": "stddev: 0.000023172443758697378",
            "extra": "mean: 449.0188480392644 usec\nrounds: 1224"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2234.6659045498063,
            "unit": "iter/sec",
            "range": "stddev: 0.000021671307149547217",
            "extra": "mean: 447.49418602753457 usec\nrounds: 1231"
          }
        ]
      }
    ]
  }
}