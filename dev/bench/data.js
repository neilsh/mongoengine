window.BENCHMARK_DATA = {
  "lastUpdate": 1755661361200,
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
        "date": 1755649716989,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 40551.46133348874,
            "unit": "iter/sec",
            "range": "stddev: 0.0000027184600871392137",
            "extra": "mean: 24.66002376033159 usec\nrounds: 2904"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 5060774.845113168,
            "unit": "iter/sec",
            "range": "stddev: 3.994659756902482e-8",
            "extra": "mean: 197.5982000000709 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 945895.8006860341,
            "unit": "iter/sec",
            "range": "stddev: 3.1170694210630733e-8",
            "extra": "mean: 1.0571989000001114 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 94729.86131054202,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012008346645245798",
            "extra": "mean: 10.556333411296938 usec\nrounds: 25653"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 169384.33826776387,
            "unit": "iter/sec",
            "range": "stddev: 7.922013968727008e-7",
            "extra": "mean: 5.903733546009392 usec\nrounds: 38243"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3408.661128408912,
            "unit": "iter/sec",
            "range": "stddev: 0.0001031429485227354",
            "extra": "mean: 293.3703182359984 usec\nrounds: 1678"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 38125.90920363699,
            "unit": "iter/sec",
            "range": "stddev: 0.000003081094927463706",
            "extra": "mean: 26.2288826912646 usec\nrounds: 18430"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3293.2961574231645,
            "unit": "iter/sec",
            "range": "stddev: 0.000018819057495192652",
            "extra": "mean: 303.64715233580716 usec\nrounds: 1477"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1128.851664584429,
            "unit": "iter/sec",
            "range": "stddev: 0.00004038610291020303",
            "extra": "mean: 885.8559821215625 usec\nrounds: 839"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 163.43361977375403,
            "unit": "iter/sec",
            "range": "stddev: 0.0023985671474229826",
            "extra": "mean: 6.118692111111101 msec\nrounds: 153"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 444.90900771952937,
            "unit": "iter/sec",
            "range": "stddev: 0.00011041656246053975",
            "extra": "mean: 2.247650604166684 msec\nrounds: 432"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 56.61257989990733,
            "unit": "iter/sec",
            "range": "stddev: 0.00335752441011992",
            "extra": "mean: 17.66391854545454 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 56.4994917940102,
            "unit": "iter/sec",
            "range": "stddev: 0.0038959335124879612",
            "extra": "mean: 17.699274245613925 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 57.405646965824374,
            "unit": "iter/sec",
            "range": "stddev: 0.0035175872466465833",
            "extra": "mean: 17.419889032786887 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 23.349996866061687,
            "unit": "iter/sec",
            "range": "stddev: 0.004955602236519851",
            "extra": "mean: 42.82655821052641 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5469.410011100266,
            "unit": "iter/sec",
            "range": "stddev: 0.00001561419497602913",
            "extra": "mean: 182.83507690417835 usec\nrounds: 4070"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6899.5348605980835,
            "unit": "iter/sec",
            "range": "stddev: 0.000014609854450200098",
            "extra": "mean: 144.93730667422346 usec\nrounds: 5289"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2796.950771977244,
            "unit": "iter/sec",
            "range": "stddev: 0.000024296495773237953",
            "extra": "mean: 357.5322133013702 usec\nrounds: 1669"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3256.9069225771036,
            "unit": "iter/sec",
            "range": "stddev: 0.000018845902155874653",
            "extra": "mean: 307.03978460911213 usec\nrounds: 2456"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3172.2085691085535,
            "unit": "iter/sec",
            "range": "stddev: 0.00003548420811294647",
            "extra": "mean: 315.23778409091733 usec\nrounds: 2552"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3242.767919394303,
            "unit": "iter/sec",
            "range": "stddev: 0.00002449413980329415",
            "extra": "mean: 308.3785287313388 usec\nrounds: 2680"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3263.712819911848,
            "unit": "iter/sec",
            "range": "stddev: 0.000029358809032777626",
            "extra": "mean: 306.3995073031609 usec\nrounds: 2807"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3734.2680582478893,
            "unit": "iter/sec",
            "range": "stddev: 0.000019085952275630354",
            "extra": "mean: 267.79009551585267 usec\nrounds: 2743"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3759.891528638981,
            "unit": "iter/sec",
            "range": "stddev: 0.000017440585383022193",
            "extra": "mean: 265.9651195740702 usec\nrounds: 1221"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3691.0613250044175,
            "unit": "iter/sec",
            "range": "stddev: 0.000018291248242975375",
            "extra": "mean: 270.92478611116087 usec\nrounds: 1440"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2259.2364170344185,
            "unit": "iter/sec",
            "range": "stddev: 0.000024876452165584628",
            "extra": "mean: 442.6274260011476 usec\nrounds: 1723"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2234.720608613711,
            "unit": "iter/sec",
            "range": "stddev: 0.00002288743409521225",
            "extra": "mean: 447.4832317496464 usec\nrounds: 1726"
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
    ],
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
          "id": "e8238e83cbd03fea4c5fda8d1a899f3c960ce145",
          "message": "feat(benchmarks): add continuous benchmarking",
          "timestamp": "2025-08-19T22:11:57Z",
          "url": "https://github.com/neilsh/mongoengine/pull/1/commits/e8238e83cbd03fea4c5fda8d1a899f3c960ce145"
        },
        "date": 1755661360878,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 937.4294439339665,
            "unit": "iter/sec",
            "range": "stddev: 0.00006228278004013606",
            "extra": "mean: 1.0667469498327824 msec\nrounds: 598"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_create_delete",
            "value": 1163.4017886272522,
            "unit": "iter/sec",
            "range": "stddev: 0.00003508060038854557",
            "extra": "mean: 859.5482745302833 usec\nrounds: 958"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 3652395.661099718,
            "unit": "iter/sec",
            "range": "stddev: 3.504690378963798e-8",
            "extra": "mean: 273.792900000025 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_get_attr",
            "value": 5119965.921510992,
            "unit": "iter/sec",
            "range": "stddev: 2.3376723542887777e-8",
            "extra": "mean: 195.3137999998411 nsec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 33505.04501299894,
            "unit": "iter/sec",
            "range": "stddev: 0.00000470024618867444",
            "extra": "mean: 29.846251500692816 usec\nrounds: 6497"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_initialization",
            "value": 41678.150364405774,
            "unit": "iter/sec",
            "range": "stddev: 0.00000233279860816023",
            "extra": "mean: 23.9933872126443 usec\nrounds: 2784"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 2684.7268171098704,
            "unit": "iter/sec",
            "range": "stddev: 0.000018871074871889612",
            "extra": "mean: 372.47737595756877 usec\nrounds: 1697"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_db",
            "value": 3366.9633845345475,
            "unit": "iter/sec",
            "range": "stddev: 0.000013924184103426717",
            "extra": "mean: 297.0035268554728 usec\nrounds: 2048"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 31774.750241473088,
            "unit": "iter/sec",
            "range": "stddev: 0.000003757344670831141",
            "extra": "mean: 31.471529827944277 usec\nrounds: 18657"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_load_from_son",
            "value": 38949.3064998944,
            "unit": "iter/sec",
            "range": "stddev: 0.000002716589511972295",
            "extra": "mean: 25.674398079532203 usec\nrounds: 19162"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 2757.91530747576,
            "unit": "iter/sec",
            "range": "stddev: 0.00008274715767048809",
            "extra": "mean: 362.59271533442086 usec\nrounds: 1226"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_save",
            "value": 3500.845168865813,
            "unit": "iter/sec",
            "range": "stddev: 0.00007219754752571547",
            "extra": "mean: 285.6453089937637 usec\nrounds: 2246"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 738439.4352651674,
            "unit": "iter/sec",
            "range": "stddev: 4.279505220344212e-8",
            "extra": "mean: 1.3542071999999683 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_set_attr",
            "value": 948511.387258574,
            "unit": "iter/sec",
            "range": "stddev: 3.996891712822729e-8",
            "extra": "mean: 1.0542836000000388 usec\nrounds: 100"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 83380.62471014746,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015879729374902253",
            "extra": "mean: 11.993193904174474 usec\nrounds: 25296"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_to_mongo",
            "value": 96560.17359708763,
            "unit": "iter/sec",
            "range": "stddev: 0.0000012543581866917135",
            "extra": "mean: 10.356236559522518 usec\nrounds: 28124"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 144999.6226341297,
            "unit": "iter/sec",
            "range": "stddev: 9.081056267993907e-7",
            "extra": "mean: 6.896569672620804 usec\nrounds: 41817"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_basic_doc_validation",
            "value": 165674.33265099808,
            "unit": "iter/sec",
            "range": "stddev: 8.635311494441283e-7",
            "extra": "mean: 6.035937999560584 usec\nrounds: 41161"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 19.644052151018407,
            "unit": "iter/sec",
            "range": "stddev: 0.004837694347903614",
            "extra": "mean: 50.905993952381 msec\nrounds: 21"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_create_delete",
            "value": 24.243083134387284,
            "unit": "iter/sec",
            "range": "stddev: 0.004072770632041332",
            "extra": "mean: 41.24887888461526 msec\nrounds: 26"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 47.93252426904053,
            "unit": "iter/sec",
            "range": "stddev: 0.0031821434802547137",
            "extra": "mean: 20.86266090196082 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_db",
            "value": 59.342685688273896,
            "unit": "iter/sec",
            "range": "stddev: 0.002950519595175446",
            "extra": "mean: 16.85127641935491 msec\nrounds: 62"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 48.03119568522344,
            "unit": "iter/sec",
            "range": "stddev: 0.0035003225847851783",
            "extra": "mean: 20.819802333333236 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_load_from_son",
            "value": 59.654130339766525,
            "unit": "iter/sec",
            "range": "stddev: 0.0029362209131387983",
            "extra": "mean: 16.76329860655737 msec\nrounds: 61"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 49.12859256491638,
            "unit": "iter/sec",
            "range": "stddev: 0.00310685479671375",
            "extra": "mean: 20.354745531914915 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_save",
            "value": 59.36790800865573,
            "unit": "iter/sec",
            "range": "stddev: 0.002687944317916595",
            "extra": "mean: 16.844117192982477 msec\nrounds: 57"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 139.58067281800797,
            "unit": "iter/sec",
            "range": "stddev: 0.0026070510761191114",
            "extra": "mean: 7.164315659259275 msec\nrounds: 135"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_to_mongo",
            "value": 167.1278705024032,
            "unit": "iter/sec",
            "range": "stddev: 0.0020816327587733024",
            "extra": "mean: 5.983442480263162 msec\nrounds: 152"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 372.2461127630649,
            "unit": "iter/sec",
            "range": "stddev: 0.00005700109194772733",
            "extra": "mean: 2.686394741847851 msec\nrounds: 368"
          },
          {
            "name": "benchmarks/test_basic_doc_ops.py::test_big_doc_validation",
            "value": 469.83623694136736,
            "unit": "iter/sec",
            "range": "stddev: 0.000026887913681475082",
            "extra": "mean: 2.1284011776315874 msec\nrounds: 456"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 2740.5458428957327,
            "unit": "iter/sec",
            "range": "stddev: 0.000018935498988428282",
            "extra": "mean: 364.89081275260617 usec\nrounds: 2227"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_single_assignment",
            "value": 3288.0041711329663,
            "unit": "iter/sec",
            "range": "stddev: 0.00001500683561283283",
            "extra": "mean: 304.13586721680593 usec\nrounds: 2666"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 2738.3753315578656,
            "unit": "iter/sec",
            "range": "stddev: 0.00002421752374379915",
            "extra": "mean: 365.18003521127923 usec\nrounds: 2272"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0",
            "value": 3175.8656049365727,
            "unit": "iter/sec",
            "range": "stddev: 0.000028674821681835054",
            "extra": "mean: 314.8747851438038 usec\nrounds: 2504"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 2825.3374777594568,
            "unit": "iter/sec",
            "range": "stddev: 0.00002542751280172799",
            "extra": "mean: 353.94001880193724 usec\nrounds: 2287"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate",
            "value": 3278.6196306651145,
            "unit": "iter/sec",
            "range": "stddev: 0.00003745205620781496",
            "extra": "mean: 305.0064089920476 usec\nrounds: 2758"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 2830.0997016724914,
            "unit": "iter/sec",
            "range": "stddev: 0.000026298873856322662",
            "extra": "mean: 353.3444420382202 usec\nrounds: 2355"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w0_novalidate_force",
            "value": 3331.969338050851,
            "unit": "iter/sec",
            "range": "stddev: 0.000028478035191683867",
            "extra": "mean: 300.1228098290316 usec\nrounds: 2808"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2378.3892975961962,
            "unit": "iter/sec",
            "range": "stddev: 0.000023046545374424802",
            "extra": "mean: 420.45261514197256 usec\nrounds: 1585"
          },
          {
            "name": "benchmarks/test_inserts.py::test_mongoengine_insert_w1",
            "value": 2879.2916460859046,
            "unit": "iter/sec",
            "range": "stddev: 0.000020321240462377174",
            "extra": "mean: 347.3076446977489 usec\nrounds: 2018"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 5816.941856968631,
            "unit": "iter/sec",
            "range": "stddev: 0.000015663702264485874",
            "extra": "mean: 171.91163752170073 usec\nrounds: 5181"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w0",
            "value": 6903.64193976362,
            "unit": "iter/sec",
            "range": "stddev: 0.00001538989874942705",
            "extra": "mean: 144.85108131697802 usec\nrounds: 6530"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 4628.507433151115,
            "unit": "iter/sec",
            "range": "stddev: 0.000015573460879125613",
            "extra": "mean: 216.05236989307244 usec\nrounds: 3647"
          },
          {
            "name": "benchmarks/test_inserts.py::test_pymongo_insert_w1",
            "value": 5676.139846891256,
            "unit": "iter/sec",
            "range": "stddev: 0.000013336309711521351",
            "extra": "mean: 176.17606806282024 usec\nrounds: 4775"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3147.456851039962,
            "unit": "iter/sec",
            "range": "stddev: 0.0000188170844578219",
            "extra": "mean: 317.7168257825636 usec\nrounds: 2428"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[0 indexes]",
            "value": 3800.12386303469,
            "unit": "iter/sec",
            "range": "stddev: 0.00001669042320832351",
            "extra": "mean: 263.1493172439446 usec\nrounds: 2714"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 1880.6408528361878,
            "unit": "iter/sec",
            "range": "stddev: 0.00002869091298276019",
            "extra": "mean: 531.7336366972479 usec\nrounds: 1090"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index (auto_create)]",
            "value": 2292.1568615498522,
            "unit": "iter/sec",
            "range": "stddev: 0.00002084757445752787",
            "extra": "mean: 436.2703167373307 usec\nrounds: 1888"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3142.8895743066746,
            "unit": "iter/sec",
            "range": "stddev: 0.00001651322306979538",
            "extra": "mean: 318.1785348664696 usec\nrounds: 1348"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[1 index]",
            "value": 3796.9713377860066,
            "unit": "iter/sec",
            "range": "stddev: 0.000014684594012117215",
            "extra": "mean: 263.3678031878678 usec\nrounds: 1443"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 1894.9114079275496,
            "unit": "iter/sec",
            "range": "stddev: 0.000020518499099882546",
            "extra": "mean: 527.7291570552591 usec\nrounds: 1630"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes (auto_create)]",
            "value": 2281.234077176144,
            "unit": "iter/sec",
            "range": "stddev: 0.00002105140347629683",
            "extra": "mean: 438.3592240730786 usec\nrounds: 1861"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3166.6182142839084,
            "unit": "iter/sec",
            "range": "stddev: 0.000016475461452128696",
            "extra": "mean: 315.7943055747052 usec\nrounds: 1453"
          },
          {
            "name": "benchmarks/test_save_with_indexes.py::test_save_with_indexes[2 indexes]",
            "value": 3796.670458489832,
            "unit": "iter/sec",
            "range": "stddev: 0.000014908079568469503",
            "extra": "mean: 263.38867461195485 usec\nrounds: 1804"
          }
        ]
      }
    ]
  }
}