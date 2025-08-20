window.BENCHMARK_DATA = {
  "lastUpdate": 1755665211023,
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
          "id": "9a5205581dd68283739d1e0af5d285827886993e",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/9a5205581dd68283739d1e0af5d285827886993e"
        },
        "date": 1755663022007,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 936.2923208078396,
            "unit": "iter/sec",
            "range": "stddev: 0.00003550683875892524",
            "extra": "mean: 1.0680425095628179 msec\nrounds: 732"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1144.9794996221185,
            "unit": "iter/sec",
            "range": "stddev: 0.000034552152236492086",
            "extra": "mean: 873.3780826032549 usec\nrounds: 799"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3693610.570819201,
            "unit": "iter/sec",
            "range": "stddev: 2.948102603579429e-8",
            "extra": "mean: 270.73779999990944 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 5151465.978431091,
            "unit": "iter/sec",
            "range": "stddev: 2.381778642641881e-8",
            "extra": "mean: 194.11949999998956 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 33475.268150668315,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026606558446236777",
            "extra": "mean: 29.872800286441784 usec\nrounds: 6284"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 39057.660925875585,
            "unit": "iter/sec",
            "range": "stddev: 0.0000022529918815599357",
            "extra": "mean: 25.60317172853285 usec\nrounds: 2667"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 2634.620325965933,
            "unit": "iter/sec",
            "range": "stddev: 0.0000185672280567268",
            "extra": "mean: 379.561331909701 usec\nrounds: 1639"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3286.685470815816,
            "unit": "iter/sec",
            "range": "stddev: 0.000016557059242636568",
            "extra": "mean: 304.25789412449666 usec\nrounds: 1719"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 32044.524214569505,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032470862025877802",
            "extra": "mean: 31.206579735870616 usec\nrounds: 14084"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 38440.32690874359,
            "unit": "iter/sec",
            "range": "stddev: 0.000003074865394090793",
            "extra": "mean: 26.014346922022174 usec\nrounds: 18275"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 2772.138395529453,
            "unit": "iter/sec",
            "range": "stddev: 0.00006596649944082955",
            "extra": "mean: 360.7323507414604 usec\nrounds: 1551"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3417.3678217290494,
            "unit": "iter/sec",
            "range": "stddev: 0.0000775577774064372",
            "extra": "mean: 292.6228758992764 usec\nrounds: 2224"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 728515.3360127361,
            "unit": "iter/sec",
            "range": "stddev: 1.4533179380929145e-7",
            "extra": "mean: 1.3726547000000533 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 937819.2981640656,
            "unit": "iter/sec",
            "range": "stddev: 3.5235731186822476e-8",
            "extra": "mean: 1.0663035000001209 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 82470.08206057092,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014548012880982785",
            "extra": "mean: 12.125609372687913 usec\nrounds: 27036"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 94016.5689818517,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014459654467042382",
            "extra": "mean: 10.636423035103878 usec\nrounds: 25752"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 146502.50876428364,
            "unit": "iter/sec",
            "range": "stddev: 8.790933911139294e-7",
            "extra": "mean: 6.825821676603217 usec\nrounds: 42765"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 167244.20134688358,
            "unit": "iter/sec",
            "range": "stddev: 7.803395188845044e-7",
            "extra": "mean: 5.979280548722199 usec\nrounds: 39437"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 19.4299695203555,
            "unit": "iter/sec",
            "range": "stddev: 0.0046210547071669885",
            "extra": "mean: 51.46688464705855 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 23.725758562075566,
            "unit": "iter/sec",
            "range": "stddev: 0.004923142350079487",
            "extra": "mean: 42.14828357894739 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 47.49981042825686,
            "unit": "iter/sec",
            "range": "stddev: 0.003166260680991826",
            "extra": "mean: 21.05271559999988 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 58.694892538109926,
            "unit": "iter/sec",
            "range": "stddev: 0.003486639205880197",
            "extra": "mean: 17.03725753225822 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 47.96259469183871,
            "unit": "iter/sec",
            "range": "stddev: 0.00322847584608286",
            "extra": "mean: 20.84958093750002 msec\nrounds: 48"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 57.90791833218802,
            "unit": "iter/sec",
            "range": "stddev: 0.003570797757225291",
            "extra": "mean: 17.26879550847456 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 49.48522744721921,
            "unit": "iter/sec",
            "range": "stddev: 0.002090842224029731",
            "extra": "mean: 20.208050999999887 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 57.9675444290522,
            "unit": "iter/sec",
            "range": "stddev: 0.003170070546085631",
            "extra": "mean: 17.2510326226415 msec\nrounds: 53"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 141.76786140756764,
            "unit": "iter/sec",
            "range": "stddev: 0.001989979169125165",
            "extra": "mean: 7.053784899280561 msec\nrounds: 139"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 160.00274450270538,
            "unit": "iter/sec",
            "range": "stddev: 0.0024187485952185724",
            "extra": "mean: 6.249892794701979 msec\nrounds: 151"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 362.8347425624815,
            "unit": "iter/sec",
            "range": "stddev: 0.00012283869528925063",
            "extra": "mean: 2.7560756528925734 msec\nrounds: 363"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 467.3348266966678,
            "unit": "iter/sec",
            "range": "stddev: 0.00004438940049616676",
            "extra": "mean: 2.1397934475982643 msec\nrounds: 458"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 2662.4741847228534,
            "unit": "iter/sec",
            "range": "stddev: 0.000019471618918906113",
            "extra": "mean: 375.59049614000054 usec\nrounds: 1943"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3259.1717839181756,
            "unit": "iter/sec",
            "range": "stddev: 0.000015100178364096768",
            "extra": "mean: 306.82641674008363 usec\nrounds: 2270"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2624.959017235439,
            "unit": "iter/sec",
            "range": "stddev: 0.00002650730854961238",
            "extra": "mean: 380.95832865732984 usec\nrounds: 1996"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3114.3059560447523,
            "unit": "iter/sec",
            "range": "stddev: 0.00002904684602235872",
            "extra": "mean: 321.09883040201527 usec\nrounds: 2388"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 2729.619637127734,
            "unit": "iter/sec",
            "range": "stddev: 0.00002285424153922013",
            "extra": "mean: 366.3514089648983 usec\nrounds: 2164"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3176.697401277783,
            "unit": "iter/sec",
            "range": "stddev: 0.000024783711443828698",
            "extra": "mean: 314.79233734940055 usec\nrounds: 2407"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 2700.7664321600223,
            "unit": "iter/sec",
            "range": "stddev: 0.00003857240961916096",
            "extra": "mean: 370.265265478814 usec\nrounds: 2245"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3223.9594051185795,
            "unit": "iter/sec",
            "range": "stddev: 0.00002223720752489409",
            "extra": "mean: 310.17760286073434 usec\nrounds: 2377"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2295.6604214397275,
            "unit": "iter/sec",
            "range": "stddev: 0.000021996542567557127",
            "extra": "mean: 435.604495621721 usec\nrounds: 1713"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2821.408211760403,
            "unit": "iter/sec",
            "range": "stddev: 0.00002206235819676965",
            "extra": "mean: 354.4329373650101 usec\nrounds: 1852"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 5540.531866941078,
            "unit": "iter/sec",
            "range": "stddev: 0.000016358441853225522",
            "extra": "mean: 180.4880874283463 usec\nrounds: 4884"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6711.427576804023,
            "unit": "iter/sec",
            "range": "stddev: 0.000017152089887941984",
            "extra": "mean: 148.9995963684673 usec\nrounds: 6003"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 4453.953747558616,
            "unit": "iter/sec",
            "range": "stddev: 0.00001662137949599873",
            "extra": "mean: 224.51961934901968 usec\nrounds: 3318"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5593.474884651908,
            "unit": "iter/sec",
            "range": "stddev: 0.000013745520128978346",
            "extra": "mean: 178.77974257896963 usec\nrounds: 4211"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3081.099895649703,
            "unit": "iter/sec",
            "range": "stddev: 0.000020168406404339097",
            "extra": "mean: 324.5594215922469 usec\nrounds: 1658"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3776.676254203468,
            "unit": "iter/sec",
            "range": "stddev: 0.000016410765571330445",
            "extra": "mean: 264.7830877446783 usec\nrounds: 2758"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 1815.302527154188,
            "unit": "iter/sec",
            "range": "stddev: 0.0000241016964022189",
            "extra": "mean: 550.8723670250596 usec\nrounds: 1395"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2267.757087609541,
            "unit": "iter/sec",
            "range": "stddev: 0.00002883868668558715",
            "extra": "mean: 440.96433672889856 usec\nrounds: 1767"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3077.6556681280417,
            "unit": "iter/sec",
            "range": "stddev: 0.000022684439059139087",
            "extra": "mean: 324.92263847314723 usec\nrounds: 1336"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3793.5851242043655,
            "unit": "iter/sec",
            "range": "stddev: 0.000016357135468814703",
            "extra": "mean: 263.6028894197363 usec\nrounds: 1465"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 1818.0734770930962,
            "unit": "iter/sec",
            "range": "stddev: 0.000023386881470495556",
            "extra": "mean: 550.0327751323298 usec\nrounds: 1134"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2251.8160493642695,
            "unit": "iter/sec",
            "range": "stddev: 0.000022742124023530805",
            "extra": "mean: 444.08600795003616 usec\nrounds: 1761"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3050.806029415949,
            "unit": "iter/sec",
            "range": "stddev: 0.0000168029958469203",
            "extra": "mean: 327.7822288136232 usec\nrounds: 1298"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3777.7717115782016,
            "unit": "iter/sec",
            "range": "stddev: 0.000014302463248582475",
            "extra": "mean: 264.70630740740023 usec\nrounds: 1620"
          }
        ]
      },
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
          "id": "f2c8f59daa45fa8ca19a4eef37bd96bc933aee9b",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/f2c8f59daa45fa8ca19a4eef37bd96bc933aee9b"
        },
        "date": 1755665210501,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 938.9764548759347,
            "unit": "iter/sec",
            "range": "stddev: 0.000036379053914233163",
            "extra": "mean: 1.0649894305732386 msec\nrounds: 785"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3675901.6343410877,
            "unit": "iter/sec",
            "range": "stddev: 2.652225915914926e-8",
            "extra": "mean: 272.04210000011386 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 32840.396792891304,
            "unit": "iter/sec",
            "range": "stddev: 0.000006026560352384931",
            "extra": "mean: 30.450301995634288 usec\nrounds: 6414"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 2633.4115770999683,
            "unit": "iter/sec",
            "range": "stddev: 0.000017490616298407477",
            "extra": "mean: 379.73555242786813 usec\nrounds: 1421"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 31502.96855105243,
            "unit": "iter/sec",
            "range": "stddev: 0.000003691445581185939",
            "extra": "mean: 31.743040290931337 usec\nrounds: 19111"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 2778.2537360474935,
            "unit": "iter/sec",
            "range": "stddev: 0.00007290206344806851",
            "extra": "mean: 359.9383263757106 usec\nrounds: 1581"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 698942.1370966015,
            "unit": "iter/sec",
            "range": "stddev: 3.020636105378212e-7",
            "extra": "mean: 1.4307336000001225 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 82975.55253130836,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014772374231091073",
            "extra": "mean: 12.051742585536623 usec\nrounds: 25457"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 144557.58772819178,
            "unit": "iter/sec",
            "range": "stddev: 8.7092149622435e-7",
            "extra": "mean: 6.917658323686727 usec\nrounds: 43190"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 19.402339044874847,
            "unit": "iter/sec",
            "range": "stddev: 0.005332008874640592",
            "extra": "mean: 51.54017758823524 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 48.29689124076209,
            "unit": "iter/sec",
            "range": "stddev: 0.0032209868846648135",
            "extra": "mean: 20.70526641176461 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 48.36045498978907,
            "unit": "iter/sec",
            "range": "stddev: 0.0028703952203043277",
            "extra": "mean: 20.678051937500218 msec\nrounds: 32"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 49.01380199777403,
            "unit": "iter/sec",
            "range": "stddev: 0.002876392663664365",
            "extra": "mean: 20.402416446808495 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 142.42247806774307,
            "unit": "iter/sec",
            "range": "stddev: 0.0020717328656479116",
            "extra": "mean: 7.0213635766423845 msec\nrounds: 137"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 359.6761642278985,
            "unit": "iter/sec",
            "range": "stddev: 0.00005538633956888697",
            "extra": "mean: 2.7802787603305807 msec\nrounds: 363"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 2674.2063530809046,
            "unit": "iter/sec",
            "range": "stddev: 0.000018700256828557794",
            "extra": "mean: 373.9427209302372 usec\nrounds: 2064"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2745.5174536203285,
            "unit": "iter/sec",
            "range": "stddev: 0.000025780074758444295",
            "extra": "mean: 364.23006478482495 usec\nrounds: 2161"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 2786.5561132433113,
            "unit": "iter/sec",
            "range": "stddev: 0.00002182468604539095",
            "extra": "mean: 358.8659116704763 usec\nrounds: 2185"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 2740.9075559263265,
            "unit": "iter/sec",
            "range": "stddev: 0.000029481977100201965",
            "extra": "mean: 364.84265871638877 usec\nrounds: 2306"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2284.217456494205,
            "unit": "iter/sec",
            "range": "stddev: 0.00002244227095878555",
            "extra": "mean: 437.78669021065554 usec\nrounds: 1614"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 5608.756196132542,
            "unit": "iter/sec",
            "range": "stddev: 0.0000180902014933335",
            "extra": "mean: 178.29264903501056 usec\nrounds: 5596"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 4572.641018127034,
            "unit": "iter/sec",
            "range": "stddev: 0.00001558328084872336",
            "extra": "mean: 218.69199791450123 usec\nrounds: 3836"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3085.7392769128196,
            "unit": "iter/sec",
            "range": "stddev: 0.000018293206458743357",
            "extra": "mean: 324.0714494195592 usec\nrounds: 2412"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 1857.7498587045577,
            "unit": "iter/sec",
            "range": "stddev: 0.00002432723254719498",
            "extra": "mean: 538.2856014303874 usec\nrounds: 1538"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3103.5042204060537,
            "unit": "iter/sec",
            "range": "stddev: 0.000015286019601885964",
            "extra": "mean: 322.21641376378176 usec\nrounds: 1177"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 1836.4986173898344,
            "unit": "iter/sec",
            "range": "stddev: 0.000029767548551519338",
            "extra": "mean: 544.5144311740746 usec\nrounds: 1482"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3042.191893488401,
            "unit": "iter/sec",
            "range": "stddev: 0.000023848330834672824",
            "extra": "mean: 328.7103624660989 usec\nrounds: 1476"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1156.6881544731102,
            "unit": "iter/sec",
            "range": "stddev: 0.000033185741759127355",
            "extra": "mean: 864.5372533061997 usec\nrounds: 983"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 5169703.264200107,
            "unit": "iter/sec",
            "range": "stddev: 1.965255037573674e-8",
            "extra": "mean: 193.43470000008358 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 40798.14587262802,
            "unit": "iter/sec",
            "range": "stddev: 0.00000247681537995083",
            "extra": "mean: 24.510917803029685 usec\nrounds: 2640"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3319.226753666608,
            "unit": "iter/sec",
            "range": "stddev: 0.000015966315592071803",
            "extra": "mean: 301.2749878854594 usec\nrounds: 1816"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 39471.003055334084,
            "unit": "iter/sec",
            "range": "stddev: 0.00000285027097627695",
            "extra": "mean: 25.33505415603723 usec\nrounds: 18816"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3419.406823433925,
            "unit": "iter/sec",
            "range": "stddev: 0.0000857686207077093",
            "extra": "mean: 292.44838407257845 usec\nrounds: 1984"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 936327.6592502705,
            "unit": "iter/sec",
            "range": "stddev: 8.413761441084814e-8",
            "extra": "mean: 1.0680021999998512 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 97114.67482706644,
            "unit": "iter/sec",
            "range": "stddev: 0.000001259250660981978",
            "extra": "mean: 10.297104961538667 usec\nrounds: 26000"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 170672.607931527,
            "unit": "iter/sec",
            "range": "stddev: 7.281587156932117e-7",
            "extra": "mean: 5.859171029959272 usec\nrounds: 35982"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 24.041518163210675,
            "unit": "iter/sec",
            "range": "stddev: 0.005027521729011993",
            "extra": "mean: 41.594711000000046 msec\nrounds: 25"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 57.90834979861528,
            "unit": "iter/sec",
            "range": "stddev: 0.003515813357585662",
            "extra": "mean: 17.26866684126979 msec\nrounds: 63"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 58.66177975994043,
            "unit": "iter/sec",
            "range": "stddev: 0.003352460299710599",
            "extra": "mean: 17.046874542372652 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 58.966619594737125,
            "unit": "iter/sec",
            "range": "stddev: 0.0030493818435860056",
            "extra": "mean: 16.95874728571437 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 162.34087325202717,
            "unit": "iter/sec",
            "range": "stddev: 0.0028134296945295997",
            "extra": "mean: 6.159878162337733 msec\nrounds: 154"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 458.16404839901764,
            "unit": "iter/sec",
            "range": "stddev: 0.00003220162626846205",
            "extra": "mean: 2.1826243318181406 msec\nrounds: 440"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3297.4069904490084,
            "unit": "iter/sec",
            "range": "stddev: 0.000014764574458308514",
            "extra": "mean: 303.2685995075876 usec\nrounds: 2437"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3145.302655179294,
            "unit": "iter/sec",
            "range": "stddev: 0.00002369824460992848",
            "extra": "mean: 317.9344278215402 usec\nrounds: 2286"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3288.317207274831,
            "unit": "iter/sec",
            "range": "stddev: 0.000025262195295109074",
            "extra": "mean: 304.106914560333 usec\nrounds: 2809"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3298.999448602279,
            "unit": "iter/sec",
            "range": "stddev: 0.000026793811612472635",
            "extra": "mean: 303.1222088938755 usec\nrounds: 2676"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2867.604936391986,
            "unit": "iter/sec",
            "range": "stddev: 0.00002046685681649186",
            "extra": "mean: 348.72307105810665 usec\nrounds: 1928"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6778.1528013271745,
            "unit": "iter/sec",
            "range": "stddev: 0.000014890183118055648",
            "extra": "mean: 147.53282041741494 usec\nrounds: 6181"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5574.045354230164,
            "unit": "iter/sec",
            "range": "stddev: 0.000014664149311673825",
            "extra": "mean: 179.40291771058094 usec\nrounds: 4630"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3790.548787106454,
            "unit": "iter/sec",
            "range": "stddev: 0.000016615556624236326",
            "extra": "mean: 263.81404281129386 usec\nrounds: 2803"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2264.3005926202136,
            "unit": "iter/sec",
            "range": "stddev: 0.000021547658219747715",
            "extra": "mean: 441.63747660500115 usec\nrounds: 1838"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3769.0154111055226,
            "unit": "iter/sec",
            "range": "stddev: 0.00001547712234820711",
            "extra": "mean: 265.3212818004056 usec\nrounds: 1533"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2269.97069081111,
            "unit": "iter/sec",
            "range": "stddev: 0.00002173953350219777",
            "extra": "mean: 440.5343223364167 usec\nrounds: 1849"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3829.9986863298814,
            "unit": "iter/sec",
            "range": "stddev: 0.000014647339938760659",
            "extra": "mean: 261.0966952989365 usec\nrounds: 1723"
          }
        ]
      }
    ]
  }
}