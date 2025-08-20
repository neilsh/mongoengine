window.BENCHMARK_DATA = {
  "lastUpdate": 1755665429919,
  "repoUrl": "https://github.com/neilsh/mongoengine",
  "entries": {
    "Pytest Benchmark": [
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
          "id": "4311098070749c830c929ce86f378bf4ec8524c0",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/4311098070749c830c929ce86f378bf4ec8524c0"
        },
        "date": 1755665429573,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 937.0456163421251,
            "unit": "iter/sec",
            "range": "stddev: 0.00005957344182057947",
            "extra": "mean: 1.067183904988132 msec\nrounds: 421"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3707141.7344113737,
            "unit": "iter/sec",
            "range": "stddev: 2.7931710697199167e-8",
            "extra": "mean: 269.7495999997912 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 33895.72210120617,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031235155967956893",
            "extra": "mean: 29.502248012719434 usec\nrounds: 6290"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 2596.490406245698,
            "unit": "iter/sec",
            "range": "stddev: 0.00009146026640556537",
            "extra": "mean: 385.135257035636 usec\nrounds: 1599"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 31575.699561954578,
            "unit": "iter/sec",
            "range": "stddev: 0.0000035508525329965863",
            "extra": "mean: 31.6699238298079 usec\nrounds: 17369"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 2664.6451228241053,
            "unit": "iter/sec",
            "range": "stddev: 0.00011658597169414435",
            "extra": "mean: 375.2844952727353 usec\nrounds: 1375"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 730182.3579325355,
            "unit": "iter/sec",
            "range": "stddev: 3.76796011069578e-8",
            "extra": "mean: 1.369520900000154 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 81820.06510968665,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015742112057222322",
            "extra": "mean: 12.221940897497653 usec\nrounds: 25092"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 142992.94618410294,
            "unit": "iter/sec",
            "range": "stddev: 9.260131652502869e-7",
            "extra": "mean: 6.99335195676368 usec\nrounds: 42187"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 18.301686625697553,
            "unit": "iter/sec",
            "range": "stddev: 0.006504574605551509",
            "extra": "mean: 54.63977285000014 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 45.669325496273466,
            "unit": "iter/sec",
            "range": "stddev: 0.0041878833028883115",
            "extra": "mean: 21.896535346938684 msec\nrounds: 49"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 45.70073558231478,
            "unit": "iter/sec",
            "range": "stddev: 0.004779540729229161",
            "extra": "mean: 21.881485872340726 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 46.258996648838945,
            "unit": "iter/sec",
            "range": "stddev: 0.0036105498471320843",
            "extra": "mean: 21.617416555555558 msec\nrounds: 45"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 138.08462855339215,
            "unit": "iter/sec",
            "range": "stddev: 0.0022333175812985413",
            "extra": "mean: 7.241935691729347 msec\nrounds: 133"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 358.8735482308679,
            "unit": "iter/sec",
            "range": "stddev: 0.00006111496765866455",
            "extra": "mean: 2.786496817415719 msec\nrounds: 356"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 2677.207184981193,
            "unit": "iter/sec",
            "range": "stddev: 0.00010238395430707622",
            "extra": "mean: 373.52357546695623 usec\nrounds: 1981"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2652.2240756062274,
            "unit": "iter/sec",
            "range": "stddev: 0.00002697526582056879",
            "extra": "mean: 377.04204904761934 usec\nrounds: 2100"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 2759.842834213532,
            "unit": "iter/sec",
            "range": "stddev: 0.000031115669670548665",
            "extra": "mean: 362.3394736841847 usec\nrounds: 2261"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 2725.517891245572,
            "unit": "iter/sec",
            "range": "stddev: 0.00003156318035407562",
            "extra": "mean: 366.9027465246233 usec\nrounds: 2158"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2251.2503844529006,
            "unit": "iter/sec",
            "range": "stddev: 0.00008817507434287988",
            "extra": "mean: 444.1975921052514 usec\nrounds: 1368"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 5742.6003227870215,
            "unit": "iter/sec",
            "range": "stddev: 0.00002059940168624876",
            "extra": "mean: 174.13714063155908 usec\nrounds: 4750"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 4335.5886368580705,
            "unit": "iter/sec",
            "range": "stddev: 0.00010549974155300207",
            "extra": "mean: 230.6491883244448 usec\nrounds: 3563"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3058.224515070981,
            "unit": "iter/sec",
            "range": "stddev: 0.0000330340954793151",
            "extra": "mean: 326.98711133600017 usec\nrounds: 1976"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 1794.8582143307838,
            "unit": "iter/sec",
            "range": "stddev: 0.00020396830312975208",
            "extra": "mean: 557.1470726855446 usec\nrounds: 1307"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3094.7497105235843,
            "unit": "iter/sec",
            "range": "stddev: 0.00005668316489001313",
            "extra": "mean: 323.1279080823681 usec\nrounds: 1262"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 1692.7514010511093,
            "unit": "iter/sec",
            "range": "stddev: 0.00032245650744185724",
            "extra": "mean: 590.754200161378 usec\nrounds: 1239"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3024.99848965149,
            "unit": "iter/sec",
            "range": "stddev: 0.00009342324532537509",
            "extra": "mean: 330.57867745091335 usec\nrounds: 1020"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1164.6613951788554,
            "unit": "iter/sec",
            "range": "stddev: 0.000030682340379919605",
            "extra": "mean: 858.6186544342628 usec\nrounds: 981"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3881255.3221727996,
            "unit": "iter/sec",
            "range": "stddev: 6.03570461859287e-8",
            "extra": "mean: 257.64859999990455 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 40927.25519674032,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024215207540610424",
            "extra": "mean: 24.43359553903448 usec\nrounds: 2690"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3363.3553714259374,
            "unit": "iter/sec",
            "range": "stddev: 0.000016088561264173043",
            "extra": "mean: 297.32213506063056 usec\nrounds: 1814"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 38979.942500067555,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029885262571625424",
            "extra": "mean: 25.654219474496838 usec\nrounds: 18763"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3511.806105330051,
            "unit": "iter/sec",
            "range": "stddev: 0.0000726278924749059",
            "extra": "mean: 284.7537620263966 usec\nrounds: 2349"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 953508.5443424536,
            "unit": "iter/sec",
            "range": "stddev: 9.473712565778717e-8",
            "extra": "mean: 1.04875829999993 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 96519.23284125658,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013870947369444212",
            "extra": "mean: 10.360629385074803 usec\nrounds: 27109"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 172308.13846514613,
            "unit": "iter/sec",
            "range": "stddev: 8.967806442149055e-7",
            "extra": "mean: 5.803556401384235 usec\nrounds: 41905"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 24.78180837751099,
            "unit": "iter/sec",
            "range": "stddev: 0.0033825412456817486",
            "extra": "mean: 40.35218030769217 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 61.15913967099506,
            "unit": "iter/sec",
            "range": "stddev: 0.0021846248905960223",
            "extra": "mean: 16.3507859230769 msec\nrounds: 65"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 59.324713783320924,
            "unit": "iter/sec",
            "range": "stddev: 0.002756854405684591",
            "extra": "mean: 16.8563813666666 msec\nrounds: 60"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 59.60832573872726,
            "unit": "iter/sec",
            "range": "stddev: 0.0026889230339885942",
            "extra": "mean: 16.77617996491226 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 169.72456309502883,
            "unit": "iter/sec",
            "range": "stddev: 0.0015449461061878538",
            "extra": "mean: 5.891899096774223 msec\nrounds: 155"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 473.71509001678874,
            "unit": "iter/sec",
            "range": "stddev: 0.00003284383862850056",
            "extra": "mean: 2.1109734966740437 msec\nrounds: 451"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3312.894857509827,
            "unit": "iter/sec",
            "range": "stddev: 0.000015352613100907514",
            "extra": "mean: 301.85081115180964 usec\nrounds: 2457"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3236.046880423803,
            "unit": "iter/sec",
            "range": "stddev: 0.00003071951589080539",
            "extra": "mean: 309.0190089795722 usec\nrounds: 2450"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3280.6052238848997,
            "unit": "iter/sec",
            "range": "stddev: 0.00003015728044062962",
            "extra": "mean: 304.8218032207477 usec\nrounds: 2546"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3319.2894594743675,
            "unit": "iter/sec",
            "range": "stddev: 0.000028151125978823238",
            "extra": "mean: 301.2692963988615 usec\nrounds: 1805"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2856.057828153699,
            "unit": "iter/sec",
            "range": "stddev: 0.00023932653595260358",
            "extra": "mean: 350.13296654656705 usec\nrounds: 1943"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6876.757734147242,
            "unit": "iter/sec",
            "range": "stddev: 0.000014678442337479171",
            "extra": "mean: 145.41736653516205 usec\nrounds: 6084"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5692.1207269170345,
            "unit": "iter/sec",
            "range": "stddev: 0.000012398799764024782",
            "extra": "mean: 175.68144598043688 usec\nrounds: 4702"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3810.5744145769117,
            "unit": "iter/sec",
            "range": "stddev: 0.00001660752291268381",
            "extra": "mean: 262.4276267049439 usec\nrounds: 2786"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2283.941195592375,
            "unit": "iter/sec",
            "range": "stddev: 0.000022530104166131117",
            "extra": "mean: 437.8396440021454 usec\nrounds: 1809"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3803.618891379973,
            "unit": "iter/sec",
            "range": "stddev: 0.000015152275178224352",
            "extra": "mean: 262.90751743458577 usec\nrounds: 1606"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2302.944355893466,
            "unit": "iter/sec",
            "range": "stddev: 0.00002068284732719166",
            "extra": "mean: 434.2267312889691 usec\nrounds: 1924"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3834.197419165541,
            "unit": "iter/sec",
            "range": "stddev: 0.000015257316583312044",
            "extra": "mean: 260.8107748968325 usec\nrounds: 1697"
          }
        ]
      }
    ]
  }
}