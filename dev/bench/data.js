window.BENCHMARK_DATA = {
  "lastUpdate": 1755649686053,
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
          "id": "035c252e9e5b656933e941582084b019158e4aad",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/035c252e9e5b656933e941582084b019158e4aad"
        },
        "date": 1755649043916,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 40022.319417190956,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029123681261899574",
            "extra": "mean: 24.986058143608382 usec\nrounds: 2855"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 5175118.238515404,
            "unit": "iter/sec",
            "range": "stddev: 2.1674187033062677e-8",
            "extra": "mean: 193.23229999994584 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 939093.8476863665,
            "unit": "iter/sec",
            "range": "stddev: 3.3551444734094355e-8",
            "extra": "mean: 1.0648562999999278 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 97080.8574666589,
            "unit": "iter/sec",
            "range": "stddev: 0.0000013577550996060006",
            "extra": "mean: 10.300691877834272 usec\nrounds: 28453"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 169969.72801888242,
            "unit": "iter/sec",
            "range": "stddev: 7.414544670785187e-7",
            "extra": "mean: 5.88340060112885 usec\nrounds: 39925"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3443.6307378492515,
            "unit": "iter/sec",
            "range": "stddev: 0.00007566460387962457",
            "extra": "mean: 290.3911819025516 usec\nrounds: 2155"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 36576.64899528562,
            "unit": "iter/sec",
            "range": "stddev: 0.000011071265105666221",
            "extra": "mean: 27.339847347111824 usec\nrounds: 19017"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3344.235907695493,
            "unit": "iter/sec",
            "range": "stddev: 0.000014779377294215446",
            "extra": "mean: 299.021967229907 usec\nrounds: 1953"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1155.468094093971,
            "unit": "iter/sec",
            "range": "stddev: 0.00003342118240009584",
            "extra": "mean: 865.4501194030138 usec\nrounds: 938"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 161.58485435734525,
            "unit": "iter/sec",
            "range": "stddev: 0.0022660248686880314",
            "extra": "mean: 6.188698835526365 msec\nrounds: 152"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 456.9794348581022,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952729686593549",
            "extra": "mean: 2.18828228082192 msec\nrounds: 438"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 59.165290565649464,
            "unit": "iter/sec",
            "range": "stddev: 0.0027005211498148753",
            "extra": "mean: 16.901801553571442 msec\nrounds: 56"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 57.74022803524461,
            "unit": "iter/sec",
            "range": "stddev: 0.0033507601390455432",
            "extra": "mean: 17.318947881355793 msec\nrounds: 59"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 59.23314741959122,
            "unit": "iter/sec",
            "range": "stddev: 0.003088639679006692",
            "extra": "mean: 16.88243903225802 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 23.961092575060714,
            "unit": "iter/sec",
            "range": "stddev: 0.00470006031105202",
            "extra": "mean: 41.734323961538564 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5548.863075794082,
            "unit": "iter/sec",
            "range": "stddev: 0.000013103115426164825",
            "extra": "mean: 180.2170978704305 usec\nrounds: 4414"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6666.1477685696345,
            "unit": "iter/sec",
            "range": "stddev: 0.000020144511638255",
            "extra": "mean: 150.01167611599035 usec\nrounds: 6138"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2841.4014707407964,
            "unit": "iter/sec",
            "range": "stddev: 0.000021140525806812815",
            "extra": "mean: 351.939002741237 usec\nrounds: 1824"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3252.1041284838866,
            "unit": "iter/sec",
            "range": "stddev: 0.000017018116405103285",
            "extra": "mean: 307.4932291501363 usec\nrounds: 2518"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3163.0270630717914,
            "unit": "iter/sec",
            "range": "stddev: 0.00003020230926757069",
            "extra": "mean: 316.1528434817894 usec\nrounds: 2447"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3355.1224366327638,
            "unit": "iter/sec",
            "range": "stddev: 0.000021000091603100097",
            "extra": "mean: 298.0517161107273 usec\nrounds: 2818"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3224.5142087358745,
            "unit": "iter/sec",
            "range": "stddev: 0.00002006277615482262",
            "extra": "mean: 310.12423430816136 usec\nrounds: 2804"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3803.941906251409,
            "unit": "iter/sec",
            "range": "stddev: 0.000018597279623583228",
            "extra": "mean: 262.88519242541463 usec\nrounds: 2614"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3697.1489031185783,
            "unit": "iter/sec",
            "range": "stddev: 0.000025327467779224664",
            "extra": "mean: 270.4786921501839 usec\nrounds: 1465"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3745.0442042973964,
            "unit": "iter/sec",
            "range": "stddev: 0.00001644288122941852",
            "extra": "mean: 267.0195451504982 usec\nrounds: 1495"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2253.858768756917,
            "unit": "iter/sec",
            "range": "stddev: 0.000019901043598970505",
            "extra": "mean: 443.68352350291025 usec\nrounds: 1553"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2251.8367211772224,
            "unit": "iter/sec",
            "range": "stddev: 0.000021901383799404068",
            "extra": "mean: 444.08193124997837 usec\nrounds: 1760"
          }
        ]
      }
    ],
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
          "id": "035c252e9e5b656933e941582084b019158e4aad",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/035c252e9e5b656933e941582084b019158e4aad"
        },
        "date": 1755649048105,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 39449.74778765989,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026593619651402995",
            "extra": "mean: 25.348704518531946 usec\nrounds: 5909"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 4604931.421062748,
            "unit": "iter/sec",
            "range": "stddev: 1.7131483945555665e-8",
            "extra": "mean: 217.1584999998144 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 830561.6797943097,
            "unit": "iter/sec",
            "range": "stddev: 3.9993063625467515e-8",
            "extra": "mean: 1.204004500000111 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 86998.06576230077,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016882947997774853",
            "extra": "mean: 11.494508426569343 usec\nrounds: 21183"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 130949.48806903465,
            "unit": "iter/sec",
            "range": "stddev: 0.000004265952021187966",
            "extra": "mean: 7.6365323358333 usec\nrounds: 32147"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3256.3197108714407,
            "unit": "iter/sec",
            "range": "stddev: 0.00012752909713781288",
            "extra": "mean: 307.09515305313334 usec\nrounds: 1261"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 37512.7774724277,
            "unit": "iter/sec",
            "range": "stddev: 0.000003860333537323963",
            "extra": "mean: 26.6575835589623 usec\nrounds: 17359"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3180.26584096307,
            "unit": "iter/sec",
            "range": "stddev: 0.000027336493932646422",
            "extra": "mean: 314.4391223902129 usec\nrounds: 1389"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1078.2859297163393,
            "unit": "iter/sec",
            "range": "stddev: 0.00007048071535984057",
            "extra": "mean: 927.3978009367761 usec\nrounds: 854"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 140.06132735073874,
            "unit": "iter/sec",
            "range": "stddev: 0.002994110091310888",
            "extra": "mean: 7.139729566433569 msec\nrounds: 143"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 418.86969353161805,
            "unit": "iter/sec",
            "range": "stddev: 0.00006105231426171355",
            "extra": "mean: 2.387377304785876 msec\nrounds: 397"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 48.22397378683017,
            "unit": "iter/sec",
            "range": "stddev: 0.0042308612195358294",
            "extra": "mean: 20.73657397916671 msec\nrounds: 48"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 49.8676897743533,
            "unit": "iter/sec",
            "range": "stddev: 0.004356021667829778",
            "extra": "mean: 20.053064509803995 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 50.95015903746061,
            "unit": "iter/sec",
            "range": "stddev: 0.003590196421035812",
            "extra": "mean: 19.627024113207572 msec\nrounds: 53"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 19.905445267635145,
            "unit": "iter/sec",
            "range": "stddev: 0.006433631134287674",
            "extra": "mean: 50.23750971428555 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5468.592392631905,
            "unit": "iter/sec",
            "range": "stddev: 0.000018989787185220945",
            "extra": "mean: 182.86241288477592 usec\nrounds: 3151"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6949.877750986539,
            "unit": "iter/sec",
            "range": "stddev: 0.000022567148958254886",
            "extra": "mean: 143.88742303532598 usec\nrounds: 6477"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2652.940707868081,
            "unit": "iter/sec",
            "range": "stddev: 0.000025929223436129955",
            "extra": "mean: 376.9401996185606 usec\nrounds: 1573"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3114.113717474404,
            "unit": "iter/sec",
            "range": "stddev: 0.000020716702373437294",
            "extra": "mean: 321.11865227934453 usec\nrounds: 2062"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2992.3459912607564,
            "unit": "iter/sec",
            "range": "stddev: 0.000019456165252110886",
            "extra": "mean: 334.1859540709973 usec\nrounds: 1916"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3036.985784749057,
            "unit": "iter/sec",
            "range": "stddev: 0.00002768768954101775",
            "extra": "mean: 329.27384942719743 usec\nrounds: 2444"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3045.587745018414,
            "unit": "iter/sec",
            "range": "stddev: 0.00002836524271268864",
            "extra": "mean: 328.34384812444597 usec\nrounds: 2186"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3583.512271928882,
            "unit": "iter/sec",
            "range": "stddev: 0.000023539467813317465",
            "extra": "mean: 279.05583241151686 usec\nrounds: 1808"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3628.0450119857815,
            "unit": "iter/sec",
            "range": "stddev: 0.000019087025178513566",
            "extra": "mean: 275.6305384019086 usec\nrounds: 1289"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3561.538387066025,
            "unit": "iter/sec",
            "range": "stddev: 0.00002553454527610706",
            "extra": "mean: 280.7775436680873 usec\nrounds: 1374"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2155.937827250348,
            "unit": "iter/sec",
            "range": "stddev: 0.000026844831829787098",
            "extra": "mean: 463.8352680491652 usec\nrounds: 1302"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2159.587687811009,
            "unit": "iter/sec",
            "range": "stddev: 0.00013353353781260703",
            "extra": "mean: 463.05135264667825 usec\nrounds: 1398"
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
          "id": "035c252e9e5b656933e941582084b019158e4aad",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/035c252e9e5b656933e941582084b019158e4aad"
        },
        "date": 1755649051099,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 33564.234312465676,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028736630138845113",
            "extra": "mean: 29.79361872791486 usec\nrounds: 5660"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3692894.464830803,
            "unit": "iter/sec",
            "range": "stddev: 2.477888256411635e-8",
            "extra": "mean: 270.79030000003445 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 734310.7891110836,
            "unit": "iter/sec",
            "range": "stddev: 8.269147855007902e-8",
            "extra": "mean: 1.3618211999997243 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 82231.54960351957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014428067106798174",
            "extra": "mean: 12.160782629313351 usec\nrounds: 27414"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 146212.69576665456,
            "unit": "iter/sec",
            "range": "stddev: 9.03877946179541e-7",
            "extra": "mean: 6.83935136245577 usec\nrounds: 43818"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 2757.622741563236,
            "unit": "iter/sec",
            "range": "stddev: 0.00007241875928004494",
            "extra": "mean: 362.6311840731056 usec\nrounds: 1532"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 31482.401664597717,
            "unit": "iter/sec",
            "range": "stddev: 0.000003394981661976294",
            "extra": "mean: 31.763777447910215 usec\nrounds: 18526"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 2639.9471256951624,
            "unit": "iter/sec",
            "range": "stddev: 0.000018192724483152796",
            "extra": "mean: 378.79546535867667 usec\nrounds: 1631"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 947.246080998937,
            "unit": "iter/sec",
            "range": "stddev: 0.00003415903679419393",
            "extra": "mean: 1.0556918841463354 msec\nrounds: 820"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 142.37991433536803,
            "unit": "iter/sec",
            "range": "stddev: 0.0015342075741436609",
            "extra": "mean: 7.023462576642344 msec\nrounds: 137"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 368.7244502574702,
            "unit": "iter/sec",
            "range": "stddev: 0.000030195062309754885",
            "extra": "mean: 2.712052317934781 msec\nrounds: 368"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 49.27872853465502,
            "unit": "iter/sec",
            "range": "stddev: 0.002710852768393118",
            "extra": "mean: 20.292731361702135 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 47.59270509111783,
            "unit": "iter/sec",
            "range": "stddev: 0.0025293171906933098",
            "extra": "mean: 21.011623484848496 msec\nrounds: 33"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 47.40216725720112,
            "unit": "iter/sec",
            "range": "stddev: 0.002996532730239108",
            "extra": "mean: 21.096081843137345 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 19.705250348969663,
            "unit": "iter/sec",
            "range": "stddev: 0.004065907178977359",
            "extra": "mean: 50.74789623529383 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 4577.222033595862,
            "unit": "iter/sec",
            "range": "stddev: 0.000015684416930283112",
            "extra": "mean: 218.47312467260866 usec\nrounds: 3818"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 5742.536593100011,
            "unit": "iter/sec",
            "range": "stddev: 0.000015140681935811997",
            "extra": "mean: 174.13907317570388 usec\nrounds: 4906"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2307.048699901954,
            "unit": "iter/sec",
            "range": "stddev: 0.000035739731414601144",
            "extra": "mean: 433.45422228949843 usec\nrounds: 1651"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 2684.5990674396694,
            "unit": "iter/sec",
            "range": "stddev: 0.000017991288675837254",
            "extra": "mean: 372.49510071301285 usec\nrounds: 2244"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2638.970886225647,
            "unit": "iter/sec",
            "range": "stddev: 0.000022683373105956913",
            "extra": "mean: 378.9355938785049 usec\nrounds: 2189"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 2759.841996952954,
            "unit": "iter/sec",
            "range": "stddev: 0.000017257564374680047",
            "extra": "mean: 362.3395836080708 usec\nrounds: 2123"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 2787.406920304092,
            "unit": "iter/sec",
            "range": "stddev: 0.000024775183790052722",
            "extra": "mean: 358.756374146802 usec\nrounds: 2344"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3086.777441935082,
            "unit": "iter/sec",
            "range": "stddev: 0.000018148336020683473",
            "extra": "mean: 323.9624556064872 usec\nrounds: 2399"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3116.888908505,
            "unit": "iter/sec",
            "range": "stddev: 0.000014763871888515353",
            "extra": "mean: 320.83273717947327 usec\nrounds: 1404"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3076.5038007382923,
            "unit": "iter/sec",
            "range": "stddev: 0.000017638783944023425",
            "extra": "mean: 325.0442920824679 usec\nrounds: 1503"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 1839.7280240554974,
            "unit": "iter/sec",
            "range": "stddev: 0.00002613400369200722",
            "extra": "mean: 543.5586059050183 usec\nrounds: 1558"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 1856.475734396042,
            "unit": "iter/sec",
            "range": "stddev: 0.00002342788935744216",
            "extra": "mean: 538.6550340908846 usec\nrounds: 1584"
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
          "id": "02d827e88d1171441d594faa4b5104dfb9d3ce36",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/02d827e88d1171441d594faa4b5104dfb9d3ce36"
        },
        "date": 1755649685717,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 34099.76256186995,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028204896258317168",
            "extra": "mean: 29.32571739130498 usec\nrounds: 6440"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3584799.874961363,
            "unit": "iter/sec",
            "range": "stddev: 3.270520269729535e-8",
            "extra": "mean: 278.9556000000637 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 732523.4554010502,
            "unit": "iter/sec",
            "range": "stddev: 4.0754225758432875e-8",
            "extra": "mean: 1.3651439999999848 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 83878.60460242044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018274200125474876",
            "extra": "mean: 11.921991367643036 usec\nrounds: 27339"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 147761.2067562019,
            "unit": "iter/sec",
            "range": "stddev: 8.358791355845878e-7",
            "extra": "mean: 6.767676184791497 usec\nrounds: 41885"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 2806.869631067328,
            "unit": "iter/sec",
            "range": "stddev: 0.00008792239139930648",
            "extra": "mean: 356.26877320260303 usec\nrounds: 1530"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 31945.570521909674,
            "unit": "iter/sec",
            "range": "stddev: 0.000003190320018304069",
            "extra": "mean: 31.303244351643563 usec\nrounds: 18678"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 2709.584837330363,
            "unit": "iter/sec",
            "range": "stddev: 0.00001822211279158698",
            "extra": "mean: 369.06022879329987 usec\nrounds: 1674"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 965.3871746040489,
            "unit": "iter/sec",
            "range": "stddev: 0.00003569835481700942",
            "extra": "mean: 1.0358538276729723 msec\nrounds: 795"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 144.19895021325166,
            "unit": "iter/sec",
            "range": "stddev: 0.0018354928795484952",
            "extra": "mean: 6.934863246376821 msec\nrounds: 138"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 369.53749833584,
            "unit": "iter/sec",
            "range": "stddev: 0.00005414068324270732",
            "extra": "mean: 2.7060853215258502 msec\nrounds: 367"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 50.11065418492373,
            "unit": "iter/sec",
            "range": "stddev: 0.0020840246968225045",
            "extra": "mean: 19.955836064516188 msec\nrounds: 31"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 49.17611613604663,
            "unit": "iter/sec",
            "range": "stddev: 0.0027126219190975027",
            "extra": "mean: 20.335074800000097 msec\nrounds: 50"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 48.03193606133344,
            "unit": "iter/sec",
            "range": "stddev: 0.0028935559398188494",
            "extra": "mean: 20.81948141176466 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 19.789616642020338,
            "unit": "iter/sec",
            "range": "stddev: 0.004452859291036565",
            "extra": "mean: 50.531549857143126 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 4618.387983647674,
            "unit": "iter/sec",
            "range": "stddev: 0.00001570998034380708",
            "extra": "mean: 216.525766899771 usec\nrounds: 3861"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 5729.35655529401,
            "unit": "iter/sec",
            "range": "stddev: 0.00001747044447742945",
            "extra": "mean: 174.53966956830175 usec\nrounds: 5629"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2334.2199242494175,
            "unit": "iter/sec",
            "range": "stddev: 0.000023124881491275576",
            "extra": "mean: 428.40864719358274 usec\nrounds: 1746"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 2743.5574037903953,
            "unit": "iter/sec",
            "range": "stddev: 0.000017857911553996008",
            "extra": "mean: 364.49027770238655 usec\nrounds: 2211"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2631.413576313329,
            "unit": "iter/sec",
            "range": "stddev: 0.00003925418406564607",
            "extra": "mean: 380.0238810810663 usec\nrounds: 2035"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 2826.414312934205,
            "unit": "iter/sec",
            "range": "stddev: 0.00004072277240560718",
            "extra": "mean: 353.8051712460595 usec\nrounds: 1565"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 2804.289396001629,
            "unit": "iter/sec",
            "range": "stddev: 0.00003224163092687223",
            "extra": "mean: 356.59657716703754 usec\nrounds: 2365"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3138.4762192288013,
            "unit": "iter/sec",
            "range": "stddev: 0.000018231060219536957",
            "extra": "mean: 318.6259605451858 usec\nrounds: 1394"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3163.4542884120115,
            "unit": "iter/sec",
            "range": "stddev: 0.000016439712116680958",
            "extra": "mean: 316.1101469564712 usec\nrounds: 1150"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3152.392322906501,
            "unit": "iter/sec",
            "range": "stddev: 0.00001807827152874636",
            "extra": "mean: 317.2193996075976 usec\nrounds: 1529"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 1874.8334134984468,
            "unit": "iter/sec",
            "range": "stddev: 0.0000273876072639437",
            "extra": "mean: 533.3807221485325 usec\nrounds: 1508"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 1872.2468914526032,
            "unit": "iter/sec",
            "range": "stddev: 0.000028510759802513478",
            "extra": "mean: 534.11759130984 usec\nrounds: 1588"
          }
        ]
      }
    ]
  }
}