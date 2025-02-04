'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3e20bc41ea0ab1b9200ab4f1ef6558a5",
"version.json": "1d0fe8ed804bf198c586573b8d427ef7",
"index.html": "61bb13136f96645258784636b5da865d",
"/": "61bb13136f96645258784636b5da865d",
"main.dart.js": "4ff87fd6703395b1ace29c5022e493a8",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"README.md": "c51c370ffcb7b94e3eacc9653ed68e5f",
"favicon.png": "a63431ffa5b0df37ba6a41846719d302",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f7d03aa54566c65a1d219638dafff5a5",
".git/ORIG_HEAD": "e0418b5201cda548f8c7ac7cfec60427",
".git/config": "0d72d4071ccf5dac234c824e65dd7ee4",
".git/objects/61/0071610ec4e450f5d1ad88333fc12b56685829": "a96848cafe5600e29c843363526e37c2",
".git/objects/0d/a8c324201ab1b142ed0def36b15b249f5a98bc": "80dc9d8b517bc930a5174bc8567d750b",
".git/objects/0d/8993e1f7dbd62353fd0af00f26cbd0258c4b9e": "57de7398d56521d77cd515ccfd740296",
".git/objects/95/87cd11e0a3880db97d9786ee65e996a53412da": "8dfebf467d6f5fbe45a401e801811883",
".git/objects/95/8c794f71b105946d55e619aee9e27c9fa8e6d1": "9823c9bd86679b831aba6d7f9692dead",
".git/objects/95/3f8dfec63b9ac403b678920a48e52535087725": "a01086d58c240e648e3ebbce5eb3665d",
".git/objects/59/b7cdf5b5a6b68399ed44320708355e32d50299": "66c0e744928f2363214a61160e60f64a",
".git/objects/59/4c2c74b06b1bb66ae18e3ec60b1f337985a860": "6e080946c5faee347c3f31cb70ee8f22",
".git/objects/59/197d152126bc23d38b3723aaff7e2fc05857c2": "34ca21fe9864c6a4bd9a684f48f77159",
".git/objects/0c/46e11fe92e8f10270078c7968f4b8fb74da3c2": "733e7123a4513b394d5a4d33f7ef2d47",
".git/objects/0c/cdcabec0a14c21f785ccb439a8f10834193fd9": "b6bcb485c27120c26b6bdcb8a33355a4",
".git/objects/3e/825d8ff8616b2f8745332d1c682f57ba83624b": "43edeaf6e13324605a9c56e16bc23072",
".git/objects/50/fe5b63b0d09adefa7a1b95e33f4e0fe5732679": "7dbd3aa90fbac94b01566160efaf72dd",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "4cc2558c9e12addcb402656321450f48",
".git/objects/68/0b83e896de22b6c091a53b94525bf0bdb8a1f0": "0ab17cc798ea92e3abfd6b707a0ce02b",
".git/objects/68/a207959dfdd5f0ab723c4ea4be02b148429527": "6536f898fd46517192bfb421e2b14a5b",
".git/objects/68/43f7b1dc5bebd33e95a267346cfb98cf4d1f09": "4b215a7a669218da754fe7c378fb1f2b",
".git/objects/68/978a45210911f8da9161752aa9175f8ab82bb5": "8c7108875ad899a4c215ecb8e8fc1751",
".git/objects/57/a75b5adc70e0c0a03492122762596f4f59e7ed": "fb8e41b797cc37adb4e50cfb7a2f8a7a",
".git/objects/57/e349fa787d06487b66b7e8f09a2490c7fa6eb1": "36cbb242c39c9f9a746e8222db5f3edc",
".git/objects/57/54265db14e734593e1faa71a9bf0224ea397da": "72ce80c623fce94c8b60853743431aac",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "84952f0b32156fc57ec4fab01243ea17",
".git/objects/9b/bdfc4440096b5c67a5aaa516bd6884c344493e": "11e8e8ff65c4307c25dbd74d4d1bbb7c",
".git/objects/9b/4405d9fd165aa8a3850c455de04a2c12429919": "39531b748a1bbde6da45b544b2f12e33",
".git/objects/9b/3911ed0358210367e89c5d9c14f18513080162": "473031b27754d951a07f4112eb96cf2a",
".git/objects/9b/feb3d95ad05e73acce5937c614d5914568ab1e": "c9fd031086c500b31cc104ca2b5e142b",
".git/objects/9b/d38af3b53c923c8c74b8227e6fa4ff4f1a8987": "64dddd34a65a1f3fe70df47a7e56c483",
".git/objects/9e/23a95186e2979ebf2802d4bd39991c920c5699": "a939d4b86f427ce4d2d6bf5d5df3fb85",
".git/objects/04/45eafebc67dab1e495dd9e78ca1928b8087f82": "59104f080dcde0372e87b6ea8a286b7f",
".git/objects/32/b0811eae2cbfeb5f6ddaf34015ecaa726b006a": "844321c0f81a25c6fbd183ab8a5ca332",
".git/objects/32/ec84532ed247b4696c313ae8a07191606986d9": "1bbf8869b5a3c99010ace4302a5af01e",
".git/objects/32/c45b50b6d7d5b0bffa48e2ef71ea9950ea1a1f": "296527e89448e059f8c81299b50df576",
".git/objects/69/ec014cef7db49cf2919dfcd57b79b3f19e1207": "18f12576344269f51974d0389baf630f",
".git/objects/69/c5c33c506cea706134d4a4ad3bd9c5d1edbef5": "4aee2469d67f72f94ed06098dfb31caa",
".git/objects/3c/4808ec2a62605252b38e9dc5d677612107ad55": "00452311a16f1dc780cea1996dc35e29",
".git/objects/3c/0f05836076180d2e397a402d44e211241329d6": "f2275a4abed1ef97b92fe87d2267f5d7",
".git/objects/3c/6f1fc8e40d910efa844a3f82b97bfe24439090": "6de62d74a8f176885a8ace7f612212c0",
".git/objects/56/47cd587362be589d3118a60d6264a6f601dd47": "f878b6e649202b8ef9d14a6129579caa",
".git/objects/51/c0ed02d15bd3cd1eeb9bb7daed9ae993d84e22": "390de71fc6dd80e1e8a86ff5bbd308e6",
".git/objects/51/14fa1a7ee6a17feacf79e3fc0542f81a23f2af": "cac33f77b38c114cd6040cf6da91c872",
".git/objects/58/5d673bd1a44a5f7878adcdfba026a7e69cada1": "6c8c6c3fd518492a97cf3a79b1e4b7c5",
".git/objects/67/0221a42fde7965036746d24c5fbe6506cbab6d": "11b4b2f988d9bd8a17fc391408b3e763",
".git/objects/93/ea20cfd4ad37cd1ecfa0bd36ec1161446a24b4": "9dcba25290cd460fcd7723596ee79182",
".git/objects/93/99e873ffd597721d5907ca60710ae98b037cde": "c62b9f38cd7cb637f5cc9f801cefeb54",
".git/objects/93/e1dcc72d022d73bc2fbee90cd18d6db1fd0e39": "8ad4411f74967c14642e6c2bb1684935",
".git/objects/93/6006dda72e4a85b80d9950ebd979d8d8c1e7c4": "e1100b2329ffc24b3c4469f3fc8ceb13",
".git/objects/94/cb78cbff7ddc632374084d04f60a842f347ab8": "3150d732c517eafb06d1e909b0fecac5",
".git/objects/5a/d2748e8f498b85becae37e155f643e97fa4078": "1cd210bab270e5036cf63b47a799f929",
".git/objects/33/4d1b64d03925e35c2e3db975d58c39f7dd4997": "3457ba793d20aa130a9e7fcc3a91ff8e",
".git/objects/33/e3dea57021b5195dcfe2e579752fd1239ab235": "0e0c6dd31677560d4d54f1b90da25612",
".git/objects/33/6afcb976489b1e13d7544dd0bbb94b95eddb59": "9a7e887b4ccb62dfbf0d3793ada6c78f",
".git/objects/33/3efc82a063c13ebc50056d9540a0f6640d969d": "56e96f17f174c6c28750d87e355e86b9",
".git/objects/05/40291428f32069aae2972d548be7176c334a15": "a27afbf995f698ccddb1c182ee8232fa",
".git/objects/9d/a876cc9e13ce60b3c4cc6d4adce0939c625161": "16ff974763e065c482bffa83e5323d7f",
".git/objects/9d/15969e2f55267984f10e55317e8360de03a1c7": "88b9a5c9bd0f7ba31e8435fca8ce8917",
".git/objects/9c/c9c30e586070fcb0f7adc029792e2e423c9fd6": "3966679685dd58e80a86bf7fc3659aad",
".git/objects/9c/f6a5580ed90cfeb796afc90c3923dcf534c0af": "603c770a411c92507e7139e48b8b5117",
".git/objects/a4/f5d371cff5e4b6493f91fe5d9e2b3f7fb9f6d1": "dc9e107d39ca0ab88ec9d6f4f21aca5d",
".git/objects/a4/4ba1745de3b90abdae48ff443ca0d31e8205c0": "5c376da594eac645f6e4392a87a96343",
".git/objects/b5/0b75198f5256997cb9d281cc6afd7a3d6bebfc": "fba7c7f768d39a0d37fe399e835b3a3e",
".git/objects/b5/6e809170ba6330ca0f3323089c2bb1550482f6": "6bfab1161ea2791a5f00d7c95fca642f",
".git/objects/b5/4ba9600f0dd4c53b4e7b853e3e4d06f96aee92": "008fb9af52d94d095d0a4ae9a1f28e6f",
".git/objects/b5/e6d40c45042957517ab22793a40ac4e912ab3c": "e20d6ee82fed6be6ecd5db31a4181671",
".git/objects/b2/6f7f34beb01e69a2d3f0b6031df726924b5b4e": "928449c57aa64f0a68a46d98d2a1f8e9",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "ed310b1af04f0c79482b60c448199e6c",
".git/objects/d9/1feabdd29e803c8cc7e961404b078c8f0b7309": "133abb989dde514af82d61520f2e0bd3",
".git/objects/ac/3380e91996315052371f9390805479619d9a97": "dd90c37a90fdb26c22d352465b1429dc",
".git/objects/ad/ff14f7e47ce6b526ffae5c3f080b8feaf09c10": "91001483893b287fc132c858999526c5",
".git/objects/bb/cd00942d12c177406cd86e585099f8bc7eb7e8": "a6fbbcf4bef93ebe262646218efce635",
".git/objects/d0/13a44bb6211fa9e7407c5e1ed8592b52564d92": "00f3ed4b510eadd42b183d8926c6344f",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/63bb0ce7281a11e94df3ceb0082ddf4be6ab45": "7cac203a6eba19b91d3c5e9f62831241",
".git/objects/df/0948ad04b4e90110d4130d385828e9263c3c8b": "66124cee3f24ec95dd07dd02b4c9c9d2",
".git/objects/da/a7c2425351b471407cbfd41f873a5acd7ae5e1": "bfc6a910a00a0cff2f005f2611ea25a5",
".git/objects/a2/b40cb9e516300e43b486eb46533bdad8386cd3": "652bac5f4422f2f257f7ccd8f8d51a87",
".git/objects/a2/7a566506f04427bce331e9649a7dddbf7fac56": "713af03a71507bbd3044534921a7cdd9",
".git/objects/a5/333acb63ffcd1a937d58d0173ab301847c0092": "25302fa3e2aa3d7652cf97cc6688a90f",
".git/objects/bd/87d00275b4708b154f303fce32af33da311ab9": "c8fea672b9e53fb40d0fda70f1891887",
".git/objects/bd/bfa77c905602df22dd078cfc7916ef653666ca": "43ed127a11191b48ec640c1cb357a728",
".git/objects/d1/252814fac4b1774b8fbdd6afd86916f2c70dca": "be03393dcdb4ac3e8ad592783cfb51b7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/4dd2a5dd7dc11de1fd49adf149eb128a6d6f08": "5c6e9fd5d513956f5881bdcd71182488",
".git/objects/ae/ecd9416af4c14269131b76da35fba492eb3b41": "ef1cc27f62ca44950e6ac94542887fc7",
".git/objects/ae/2027a5e4635cafba9fc5182b74d3ff2ac43367": "e6be3c3c5379fa8d6af4da1274e33735",
".git/objects/d8/366ac2b4ac2fde092d918eb0ec40242ad63f0e": "a03601291080c1be07444e87af326554",
".git/objects/ab/650509c12b53106d93a85ad48ccfdcea245a88": "93ff31feeb1402fc9733f148a9bb27e3",
".git/objects/e5/a74667cb388084d848bbc6d0944f7c07b5bc3e": "ff7e17c377f704038b6762c836aaf645",
".git/objects/e2/7770bc5d1db06488a5eac6373ba51b970522d6": "04c78413efa3f453fba30fcbb7bd2d06",
".git/objects/f4/44166a12efafc518258eafd92cff0b3ce348aa": "1fcfc70e3f3a20ef2b2574b0e46b3b06",
".git/objects/f3/f0cbaea68d8cc774a46540ec90bf15ecf0cc63": "e263827e93a71cb0492d97e12018693f",
".git/objects/f3/d8a3f4e5c7cb0a2512cba7cc52762bc14a1fef": "e58d1ace1c0bee9d58f07f079c9ebd8d",
".git/objects/f3/4d6816d648d9a7b666c37b000c67caeff30c44": "828fc543bbc39035f92e7b1a98e3f11d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/cbbcec1c2f303647cacc4cda6eca7b6d47d1f7": "0e59e33aec2f94e836d01ea2479a2135",
".git/objects/c9/f92b325bc5d2e2d5a7947d47c94ae6458aee92": "2dfc49f4e0f6aea33d418b43ec2babfd",
".git/objects/fc/5f209ffd8f0764305437039a4cdc4b0a7ee922": "d664b4b167bb565fa7c71b82870d99df",
".git/objects/fc/d230cd61b361e8e4155feb894cfc7ce42ea509": "12d8e93955d969ad8ca193d364d6d64f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/40387b54d9bb1f3d2860499f5ecf46535b1d21": "db20ebcc98d31873c94cdaab3210be05",
".git/objects/f2/5663e00ce8ec71ed3f21da52bf63f4b9061106": "c0e6908bf2d375f5e900db6004348d4f",
".git/objects/f2/a13ce4d54796bc7a471f4d72a154a9c7edc3c5": "ea519945ca04c8778c8d45015d427fd6",
".git/objects/f2/8ab723c67e2d7bce3f3c1d6c15ddfd8cf135f9": "bd3d8c5426e41d196946b2f6c801360a",
".git/objects/f2/c0d61099ddec3802169483e6374be055e949ac": "41e423481a7e789961c59fb7b21e39d8",
".git/objects/f5/65c064ea4d8d22c75a27e512a4e7ce8fdeadab": "63d3a8fca278bc799669df1f5a31f7c4",
".git/objects/f5/d860b3fc790f0c0386d4bb8c7f702b17f19563": "1d6f74cadbf1cdfa03a2cac9b9b4cc29",
".git/objects/ca/8c4c32c7adfa363b7ecdb2a774d5c4cfede51c": "bf4aa9798e9f2a7ee99f7bd828094c24",
".git/objects/ca/1333bc269cdfd63bba89f8f16e2868443dea94": "150cc41ec1a42d8acd9edf4d4fd7cf70",
".git/objects/e4/114efcf4785a5590111a28b2a1c39d72d57d5f": "311f906c6abeaf17241c9e90991819d0",
".git/objects/fb/253b82a0a6c2c7617407f3fe0cc5a1004e56c9": "926cfeabeb0564267a213c21f02448ba",
".git/objects/c1/a7767134b7a7c5eeae6ede4881d84ffd6598f6": "b88cc01f3d7d6bb20027f710cd664392",
".git/objects/c6/65a9afe26bafa8dde1023b0f4e280ceb066814": "e537033e20fb6d3ae3ea79484ca610d5",
".git/objects/ec/670877fc5aa6ee53b1d0ddba39d28b1b959672": "e77b5ce3c681143913feb8dd543c291b",
".git/objects/4b/dcda22f9c1b95395b5734247dc61a7e261621d": "1c26ad59f8092f69298761c5960590eb",
".git/objects/pack/pack-a6528e07ef2a420759d52e42257aff0883afbbea.rev": "a3d5d90a8cfa44acf0b34560c177e4b9",
".git/objects/pack/pack-a6528e07ef2a420759d52e42257aff0883afbbea.pack": "45de7896e8affe25ba613111b717d183",
".git/objects/pack/pack-a6528e07ef2a420759d52e42257aff0883afbbea.idx": "ec0248a506ca262ba3e4fae123aa1d44",
".git/objects/7d/1a01d7dad51c6aec32be4689249e9980a3d8d8": "ff5a13746a953ade33a6e32bdbaa15f1",
".git/objects/29/b84bbb9f90c5aa13f0f7924e7458dbe150d5e6": "eb100eb152974bc59f843a31a6f7ab38",
".git/objects/29/e9b194cd10a49592f42331ad4fadb50c8c2b36": "9b069b9a201340ac05d77128a198815a",
".git/objects/42/2345bcdd27f62ce601ebf4723bd778ec2f62d1": "f1f8439130a962e50d38ff622369cf37",
".git/objects/42/48b2e980961dbed3ad6507c9bb7064f842742b": "079554060bbb12062771bbafdd5150ba",
".git/objects/89/70af554b782670d120e02da842b1f6c2fc5d81": "12ff061ad7a7904b322108540b251382",
".git/objects/45/f2e94fb7f154fcdf43d8f4b937445d8b6563ee": "2ac52618514b81b1dfcd511a86cf3632",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/cc2c3d7fb4ff2025c24171edc4748bf078b8bb": "936a9124d389dab7cdbc887e722aaf3c",
".git/objects/73/6417c0947d7b68bea9bb41779a8becd708ae5c": "9baef2ffbb72288283597b23ddad864f",
".git/objects/87/0b61a5c1a9acdef7777e7b0ca08f8264a1906a": "c3e4261cded2a04a33ebb72eabeb4b07",
".git/objects/87/b9ed3671b7a2a9e8380155a9d7f3407d4fa902": "e7f95035bea083f5b9817c24e463a416",
".git/objects/87/1b2dfbc6d5423d99b1c195f6bf0eb1094f9d55": "f88d654514a20ae95f84be8c5a6ffd00",
".git/objects/80/d7d9ed311cece93aeb7ff1a9ad4e65c02eb0db": "ae75480ecfb8af084de7725630c1179d",
".git/objects/80/06be024742c1979bf390e177c9ebf935781dbc": "ee0e44fa4831cc43ce883ab6b81cd9c9",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "17b115a3efca1deac9198fa7f5805925",
".git/objects/1a/a796fbba6ed660b2674b98047f0db86b62cae4": "64399863f1b124d72ceda0baa356590d",
".git/objects/17/facf842be5c715aa300b100fccd22253a777a1": "bf036b9e63028fd2b2b4ae75b6eb2d2f",
".git/objects/17/3ddcda322b3b7c6959e7b9b2b9d7a5062b6ff5": "a98919d54320bfa017cad6042d4c3066",
".git/objects/17/2a4443669843889546f2f0215cf8901b1e8a9e": "91a7c5c84fa5f670a05fa88ad8de0614",
".git/objects/7b/ae0cc34f5d33872579b65c87ed5139b8cb4f92": "6ea02c360bd544f11d468525ddd2b185",
".git/objects/7b/12a272b72ce112bd9cd3be5893223c70ce87b5": "8219991e610e4a60e242cad1ab5ee1b8",
".git/objects/7b/7744190a5a5642d05ad5b1ffcf64df464cee4f": "a10db677fb93ffb52b217b369a23799b",
".git/objects/8f/70502b54c7c7e3aa76d935da7bd6f232ee8fca": "0ef4e235f7b8031d7730b1580551b6f9",
".git/objects/8a/2f3036d783bdb2b65e8df1e5f012403f8a264c": "15d8b9828718c6aea5a90ff96d617a42",
".git/objects/10/69409c586aa3aaee8aead42046d07f9435dcbe": "2c3d3fa19c11ff9d0e1e21117988517f",
".git/objects/10/010e1c50d884b95526b227a34dd3c8713ad8ea": "8b01b19a873eb03cc7f906fe61441702",
".git/objects/19/d6a5d7af1880e8db1f32d2e9657c3a04bfd3b1": "8346b9d4320c18c1abd021c0d08f5966",
".git/objects/4c/86a7807aaca30408cc44440880f9982cb7355e": "c50bc9cbdb7b4df740ec3233ba1678e0",
".git/objects/4c/5d11330d54ce24cab7ba7f365ef4a0cb6852d2": "58ed08b68da8b67d21a6936a30e837cc",
".git/objects/4c/b3f5cd03765efb3e71722a542f233cb0e8f100": "4e01103027df35e56137a33f334de9cb",
".git/objects/26/faa1d469ed4c84dd410638e15a0f5e9fab4d99": "d31da632a31996894414a7c5db923137",
".git/objects/21/46fe55b78a4d628e4ddb8617bdd240ec9a84e0": "1f341e5795d8016c24007d26c31175cf",
".git/objects/21/93e9660a4f48b29a0c1c14169b9ca6b8c0b755": "90115955d24383f99e4648d2790822b9",
".git/objects/21/5d6d7730edd44943586140fd4a7ec15a790e3c": "ae99c106e4a76fa5b1eb76e39d50d14a",
".git/objects/75/d10972d79d8af601cda721e72b4de507a11de9": "ffe583169f5263415ada6b6251f4bff7",
".git/objects/86/e4ac629968fb8fac55614807a979a2982bf948": "1a0cb7f71ebfa30b22144032338f8a2c",
".git/objects/86/b7e7c75ab6f1923d61eb231cc2600b16529651": "bab8f46b0c882ae43a6efae7ccc04a94",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/81ce99de6c7b5c6db9985b9cedd2dc78df31f9": "22d6e4839eb5ca1ae6ad9c709fbc0ac4",
".git/objects/2a/baa8ca802e6697038a95004f1b58f02d45e6b6": "8a5f22417b6823ee0d8c41afd29b045c",
".git/objects/2a/b6cb919b1e2618eff2fa36e9d834b86ee14934": "7359bb5be14c1bb28ed199ae64dc2999",
".git/objects/2a/926402e106a9be507ec03bbd4f5c8aa70240bf": "38eadaeb3bd8ed145db18c025ee55612",
".git/objects/2a/76f56579eb1bebeea6bbd9bdce650e85747d86": "6c675070ab2928927e467cf7150b59ea",
".git/objects/43/4f1b9bf564cab9065d8b33580a1f77a02b0eba": "deb85873581ec30442f7230633cb4c66",
".git/objects/88/8efcc927ed6843f5c95842de441474d3e1f463": "95620010bcf67d27dd6a0ec11d712071",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e03ad72627a24b00d46614100d1906b924ebd3": "5e1c172cf84e697e04519e2667f65889",
".git/objects/9f/2f81f6772e394eb3d7360a979d76bb50d57819": "70e23d04641fc7a5b4b74ef54527e383",
".git/objects/9f/fa379c5b7e5f271f83bc184dc7656763bced29": "f11e5c5ec148d3644f1680146c52a9b3",
".git/objects/9f/91f4a3cdc0a82eb27a4ecdaaa9e71f517a055c": "39593890a2d1e0512d95d0582ed6109c",
".git/objects/07/3967987793ea2f949e048ee64e773cadce6d28": "a57b5ecd9e95125924f446de24d6e3e5",
".git/objects/07/569f91650a50443548bf32c1115a19f5578325": "c1e09f1ff9aa5070eac28372e1c84bcb",
".git/objects/38/ef831ef3f6b355b982cb5b4c0d1188ddb7bbc0": "a8019bc4591219e9a18fa545aac51ebc",
".git/objects/38/5db84f6be3b6d326b2dd1cc0e5d77b219556c8": "82399e3b25c5d5b0a1f24db09005fe32",
".git/objects/38/b9b7242d14020518a150300450e054eecd1e59": "a659f14b7f0845739e4586110a29f9b7",
".git/objects/6e/96fc9a2ba6e78dcbad0dff0592c6cf47ed46b3": "f77327e70ecb099c4d1eb956ca027dea",
".git/objects/6e/99d269a60f2261465d0f649223073fea8425a4": "85ad9057c6e5d361f1144e030a553dca",
".git/objects/9a/25459770b76bee192f778fb92bcf6d6fd33be3": "3c741b7162bc904143873d37559002a4",
".git/objects/36/168f6c0a63102f81186bacd10f6402d7bddaa7": "174bec4ff8c3c8c7d77e4d584b1e5267",
".git/objects/36/24f5c05dc953c0f7cd18ce258538f56dbe19de": "9b595f896a8f49a46aae9b4636c1ab05",
".git/objects/5c/29e1a699f49eed6fc1e68565b76cd8e6b32f0b": "15c30bccbfa9f9c4bfb1a81c1d5d78fc",
".git/objects/5c/8bfcaec8b4aa1672e0b52d61d8e4b4e98d304f": "2e92ca60d508acfd7fc09ad6be717eb8",
".git/objects/09/a013a39ae1fb9274238b8688979682d4eb9f2b": "f9c32a1acbd4c1f82beca95a24189631",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "77f94a0c5a85b8f9539afea3910084d7",
".git/objects/5d/d674e2eeb215041848ef1a2126af9c872c48b8": "434df885a510e6f8996a9028bd69e4a9",
".git/objects/31/8351b0e1d6ba3301a8e6ab6fde7447c76e61df": "48494fa19abad68594bc126dc0a2014d",
".git/objects/31/b04e0cbd0fc862494becdfcf33119f0d6da975": "5841cfbf997268cb9e73ab5f860dcedf",
".git/objects/31/07147a79d5a61402c7958a77de9e08f1084871": "f94a0454f3f112b6dbf76492cba87c14",
".git/objects/91/fbce14161a2ea2bcd37820a6d4b592b209b215": "d69e705e972dbdf06388ec5a0e28bf0b",
".git/objects/65/04efb1bafe5edaca62db96ca096dd8557988a5": "c2a29687a646f03ba570b551c577a12d",
".git/objects/65/02bd70b5b699057458072d7d0442772da48d88": "394e2b66a9593f32278a4ae86fd8aac2",
".git/objects/62/a1027d44effa0f383fc48223e36c273dc75fe9": "25963570994992ec9bb4189aa8d7cb13",
".git/objects/62/b157a68a6014442b1641ef337ec19746813d6b": "9fe087a48ae01fbc39a803cd2e288e6a",
".git/objects/3a/9bd6bbe28fd9b89b9d51736f88ea5b00ff3e9c": "718d9ca6c2fb776eb042626ad125b772",
".git/objects/3a/afda4b32d7e8d2bef6812f33acaeabd5f7e37d": "89daa380f38f2a4d53c700850b7ee05b",
".git/objects/54/212fa73696d3b6e8cd3ea109f5343f7e95c924": "52adb9d2fce8b99e12622f8cb529bf85",
".git/objects/54/09e68427b7a3f062c91338fd0d6e52de622fec": "e17ae6cf8d19f49341b96d5780587943",
".git/objects/98/3e98a83a143d294383bfea70476109c2fc6ab4": "bc2ff691b7a78259558cef75233d14d2",
".git/objects/53/b037d4370a878d8b17acb08ddc2ac8aaa7d645": "7dcf2542fce5eaba16782f23e58e20f8",
".git/objects/53/499364fc7cfcd2157d83a1e4f5916036434b94": "16ff6c1ee8d28906adb00e7ec3d606ca",
".git/objects/3f/df1a34aa5a8163478de54ca74f0952547568c6": "0b3ce41dc34980aadd588266a326da15",
".git/objects/5e/d8864bc6fc7619ad097c71468e8a4bbf005d39": "4c3d8e580d390dac22b3eda0f058bda8",
".git/objects/5e/3f2135f1b18a23862e6198ce775f3c7fd40041": "519946147907748316e1ff3da26cfa45",
".git/objects/5e/896eb7bac4c07e7d10f192e03f95675d562ba9": "f06bc64a58460add1a103a1e8df15551",
".git/objects/5b/4ea3f276701750c0d9f9593ccf7299d60a6ee3": "d4d0027a99709ae7d3d97d7167ea9d89",
".git/objects/5b/ac19b973c65e7a220eab0276038c1bdba91e88": "a27244d45ec84fc1c06b5eaaac276b7e",
".git/objects/37/69e6b75137a4f984f1d8e0501725cf78c0fa74": "0f53f5bb0d635439802b4b2c27ae36e7",
".git/objects/37/8d079fb1b6cbb560e54816f10e2fd1fc2b6f71": "0dcf44fdb037296c455b6feb27b11bbb",
".git/objects/37/09bd553941cd758161b83b61cd3d1b3be6dca9": "efb388252791acc637a0e20351b94e40",
".git/objects/08/a7fc946493ea799d7838b41b9ab4ba4a11795a": "6872625b4427330e732a82bc62de86b2",
".git/objects/08/acec153c28cf9c8691842a406f8ab8e060ffa3": "91eacca6ad9cbff02ced1eb9e05dca6a",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/e273fa6a3f3a0e7cb5faf141412e8ee8227b7c": "9bf8ef02bb749ab009b7ec3cba5ac908",
".git/objects/01/9db1d98a711a86ced6aba0356dbd723701e8eb": "d7307a06fe2e67cc9cb52ae2dda027fd",
".git/objects/01/209c83255d658fa4d2e2560d75ed87d076cc1c": "f35ed92541dc4f5d6ace2618e6779c79",
".git/objects/39/238b006cd9148d7fa70a71b47250d46d0399cd": "a702c7dac53884104887aaefed1afaac",
".git/objects/99/70ed21af952e7b3831a2a106ad08ee1c98ed92": "e311b184679fa093b137f2881e83f392",
".git/objects/99/00317df6a88e78d383d6564839b20ac2bf155e": "111f67c3a30594b4d85acf29dbc2ef69",
".git/objects/55/ee93455917000bffbafbb47872fe3608b950d5": "29a10897001236ec878b8d7fc75aab8e",
".git/objects/97/60ce03893bf44abfd18b457dca6b77f6199f1c": "c118fcbbdcbb8b44290629fa5f5b9bc8",
".git/objects/97/9781e0701ce9b1d34cb14c51ae5020f3b3971a": "9f6373c3e350d451b12ef70111ab00fc",
".git/objects/63/ceab74720f82a5970e246adb2336d21799ad52": "72493c891205ceb3b158b12f7a981efd",
".git/objects/0f/d3039cf6af5fe6a84714fbb20ebc2fbc427149": "e50a409b61602ed11466a0b11cfacada",
".git/objects/0f/b021b5d205ca2259d148e9f2a56399c0056905": "ea26a000c1c28894f7bd1ccc247ae7da",
".git/objects/0a/d14159bf613476a7817b4db12e77447b2f17fe": "a594b272a37f29b5b9cbb98722df60f1",
".git/objects/0a/c98be45423044ac13a45d73e7e07e5753a4bc5": "cb4255fb4a566eea524a0c69fc6d6bb3",
".git/objects/0a/999d41c1cd7ac601c3b2521e2599c3f55f0c2c": "9d70003cafacefa967854ef5ff4c26b6",
".git/objects/90/250a546dc9eec937c28302b766e1f78bc92282": "3ffe4ff170054efb5803d4a785fbc8e5",
".git/objects/90/a367009a400a9b7069beda57c9b08deb2cbcb2": "1ad4ab98adb078ccf53d1ceb4870626d",
".git/objects/bf/65a756b39edf091594470d1a8eddfdfefafecf": "3f7930433e2f62165d0afb89b97768db",
".git/objects/d3/dcf31ab61474c657bf90bbbb79cc16bf341263": "bfd6bb37b0add37d1ae0b3ebfa5dbd56",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/df9090c577358e23ff703e65d82531217023d8": "ff690beaf774fb0a90956bab296e6dc4",
".git/objects/d4/2f60518fd5875a559835ffd786742cd21c1002": "5e731769d29988c9caea3a1a3bb8a606",
".git/objects/ba/941a5539e35cf313d12535584bf5ac4a4afb47": "b7d60700bf5e1b5a5c0409e8dfa6792c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/bb0694c953ce10d362be512081f2d3de6c8c75": "d3781e362a5de966d1802eb43fe5d5f3",
".git/objects/a7/1298acc70c0f6c69cecce088f02143ae059972": "12ceef24326cdc4018a3104c0d656791",
".git/objects/a7/7ee266a2b469294daa85bf6609477395a24f0c": "f5d02ee6738891843de333f54ee752a3",
".git/objects/b8/df6a0bbf3969a32c46cf957595c9cef8eccdd6": "6a006d2929ba821ceebb46794adbf71a",
".git/objects/b8/b3de3fc96d277c7e3a96f89e9231338b114bed": "2477dd19903efc2c337c198328a3425d",
".git/objects/b8/bee28c7859de1bb7ec6bd851d156fcd145715f": "1c4508db14d12fea950d2aba37ea1745",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/8c39ab1a53d8b317034a36bb249a3c89c2756a": "e1e4ff14b124987c3ae658c9a42c967d",
".git/objects/b1/44c0450e85350671d2d5563d723a09cde2a9d1": "ed94b3157dab125479ad59a0f99a7c91",
".git/objects/dd/cf17618d0877c4533c0f8dcf4d78898ee2e059": "da37ae3aa740a8873fab7e9099e4956b",
".git/objects/dc/d000dadd7692b1d0cb571dfa43397d6f6a75d0": "1022cd3512f743c18c98f6f802887d6a",
".git/objects/b6/77f66cd64e9eea2fa257edc50992ada2a1f95e": "ffdcad5321192eec521a6b28a17d9a36",
".git/objects/a9/9675f34d8151256523664767faad5cd3df1c2d": "e90e4983b86ef89ddf310c4902b239fe",
".git/objects/d5/8aadbcfc5d816fa9f83839bdf6e000d748c96c": "aeba6220cb9580a9b8484fc3544eb267",
".git/objects/aa/18819f09c9f05f0510465b46355906f0664ba5": "99c240b250e8ada1635d9cfe95bd75fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9ebfda2d0f406fb858266e456893e48d3d8292": "86de18c5b22debfd61574a6f726ffbb2",
".git/objects/b7/6cfcd114b8ec8b8cb00d415306c1a5497cac87": "d2cd7cf198338e253a11882da5a4083a",
".git/objects/db/7cd045e8c0d4c6b27355a664bbda14a3ff8844": "5f38d50ec96e952df4158efb98f4af13",
".git/objects/a8/c25c1430059b9f44e487b6e133b3993db56251": "23c7ea5e75335399279994a5301f37cc",
".git/objects/de/5bbd566e4174133543f446cbb6833737a5f1fc": "756cc73756eed8bb6695904b5dafa113",
".git/objects/b0/ae1dbff32a5b14ad2949d1ac09cc3f4103e9cd": "f17bdf21decf744249bc56e9797681ac",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/1f2900f54f6d500b0b639b101ec69b821db230": "369bb7237b162b249f57d7852128a32d",
".git/objects/b9/d2b89af5293009795f530c4117b258299f18ed": "c5da853fdd4147912f60c29fb4244c51",
".git/objects/a1/2d448dc5b4f575676a539f60ee3941f300e10c": "61f5de96b2eb344c5fffeef655d3626d",
".git/objects/ef/80dfe49f7bef4b01973f08680d0664e91586e0": "c12d994ed5c1bef990e763b04b0478ea",
".git/objects/c3/5ca2862fd24372194c0593a84352e024abe1a3": "a27e4d3a606d66e0d0567d23bea37856",
".git/objects/c3/652d67326fff3a4325cdb380c0978cbf8c4fc0": "93cf1160c021af58807a6973cffbd5bf",
".git/objects/c4/b53beac19ee09782bae72f46a6ca0117aaa250": "5127569825a517bbde41e7b517c2fd41",
".git/objects/e1/6f43ee22d0282d0c0152125d135a65dd803fb1": "56e6e5a10eb04575268a01aa7db63a89",
".git/objects/e1/d1421008f8914f358e1040dd0bab2eea12bf3b": "c0c4ebfcd2d035f863f6af76a3f0cfe8",
".git/objects/cd/be089b840cf62f9fe3b8730bb5fce23df32cba": "c8fb231cf030b62623869412c2aa5ab0",
".git/objects/cd/63b7f2bd190f7569c096b4f1454e938a92ce3c": "cb701c7e8cc12c4bdd2d3205596684fa",
".git/objects/cd/cb8fea82d376551607bf29e3e32e97d2f21bcd": "dad489dc1c00506fa6de863f6c45b92e",
".git/objects/cc/39b4e2e9f1ea8e597bbc347dcba7ebecb7d724": "0a8a91dca3b4984fd1bd527d8bb82a52",
".git/objects/e6/20da706f85524c9621f2088dc33633b31e20f6": "fb967d4679424df8aac6f60a4280d46c",
".git/objects/f0/f10caf7a60191ec8f0ea9839767c855c19e8b4": "fd42cca6f0191595b9568e0300561fca",
".git/objects/f0/d5f4a6fa68da814240fb55b413d9d5e6945a54": "6806e290de5269bb8eb32f33e5dde040",
".git/objects/f7/82562e9ded51dcac2ad6ae89a7788cbbad5af2": "f77d0e3e86616d7483b34c6336dad179",
".git/objects/f7/ae760dcf40a2eb9e35a60beef0155087d6b75d": "728948d75334ac283589524366f47902",
".git/objects/f7/38921988e0790da586fde7916cf47013d56b5e": "677a1cdfaf19545b1956f52e10364987",
".git/objects/e8/f78428bb6e94a7f95c7f010b904beed6ba16d8": "4fc30fbf41c946927b1d02f18b58aa8a",
".git/objects/e8/78f2a6aa7c3c44973388e1fa478dd7329d4d39": "24e3e3382743fd5798450a80d37e1494",
".git/objects/e8/d98e085b5d9dc5c2f2b62dcce89e76dae2155f": "10b03896cf6c527cef97d16ccc45955b",
".git/objects/e8/dd8bd57a5e09f9e6061c88c5c8c36b4b2f293d": "a2ddf731269a78d64a5903670e5e609b",
".git/objects/fa/9142b6376eef3d52884419425fc108b492f52f": "663f5146c317117fbea0706868021672",
".git/objects/fa/4929c1d1b648632bfa33daad4f8097caed7408": "727faeb36f046f32fb1bf43648aebe0d",
".git/objects/ff/dc5f0dbea177f18046d6926a2d4e24b63f419d": "d0a882cf7c37d622c55c7ea9c529836a",
".git/objects/c5/244f9bc8303e4e848cf518a6f2dae0d3a3a74a": "8feab018e81ded7b01cdfd332f40b978",
".git/objects/c5/a413b6416bc921c762bf61fdb507daf465c21b": "2191d70d1defae0d33d12c8113851753",
".git/objects/f6/344c167ec7a089d118c4628dafaa7ddc0160ad": "5e80a52dd591230af5dddd994e8895b1",
".git/objects/e9/e19c3adcdc8b2c18e7e133eb1c9877e16f8501": "ad13b7a112023bcaad85a6e376d3477e",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f1/dac1867fd43731f607287d43ed13fe114d17c6": "f34e36f47678740fd11a9a7b8f1fadf3",
".git/objects/cb/dcabe05f3d9ac10176a650d6d0802ca5e08ec5": "3304a13310d8cd4e59a6e8dfa9204b0e",
".git/objects/f8/443778b6fa374a80966a36e151d4d509935e99": "780ea8d0b5095c5c1a83b657d199db1d",
".git/objects/ce/decebfc85ce38d106c39710ddd37d84d1362bf": "65c602918af787ba910daa9e7335b0fe",
".git/objects/e0/bfc90c40e267d622f4ea6c586f46d34f28b469": "3c03a7c97f81968b91c1682fc79f753a",
".git/objects/e0/ca3d5c8d1c79bde0b1fd40cb3849b996fbfc52": "e7c91a03747c473ef895b70c5b392f62",
".git/objects/e0/20076d6504bd39356d86da6d6b0b1926d5a57e": "44faee4cbb59a67f141d54e701580315",
".git/objects/46/f2ce69282f5222a36c5fef1e081b556fd05b04": "8419c43bdb7cdae85f89b31ef67690cd",
".git/objects/2c/1bb8eaa8c3b75a3d7ae10deec48a3bb67c7c96": "69d0e41b5553aa22e15676cab88923fe",
".git/objects/2c/1d7a8c8f52d32075c8f74949722031778408c5": "a18e28aab6b44ba1cbecf9211cb40a54",
".git/objects/79/24b6aa7ad83673ddfe74b25d4146c55d5a5bc5": "1d13da05475012b99a67dd41bcd5e6f0",
".git/objects/2d/620575d9c0cf9a6e8ea2fe6227bda6e6f025de": "ffafbe7048c3a24c91dd883cc21fbc33",
".git/objects/41/b6f17011ad143b5649f282a0922637b59fb506": "b160851f8a623183767b397b71da19a9",
".git/objects/41/d068837180c8cc162ae4532b95e74b157a9d30": "2e49da8e316a209c9c576cae51b9c506",
".git/objects/83/cb48ef7b21000319c23165b31b3443a00883d7": "8a731344dcdac6cc71f10b212cdeadd8",
".git/objects/83/b81cec1e3b0a65876b29ef0211be39a2e6fbba": "59a7847f254df530f19f8b80c1e8298f",
".git/objects/83/e3eb966ed4e336b8248565f89bc166e5113d77": "282ded2015490131cf106730d7332c4e",
".git/objects/1b/bea9bbcaad441efce9f9e3a116657d502fec88": "4f2b6154e89ec017d14ffb900d363fa7",
".git/objects/77/4721317dacc37150987cbecfcf957d708f6bb7": "42e9f4d234ae1efabf3cdd6d4b11e2a3",
".git/objects/77/1884126d9e43465e6471a75369f6569926312a": "126eb8f91e389b1417829c5154e0d641",
".git/objects/77/3396fee1a5eb649049ce19ae0628d3042b2378": "02b560209398316fc38e61b89519eb89",
".git/objects/77/2b94c678db21334841f1af7ac90126cedc7d39": "fe0f5a74312030aa3aafb3be685f1202",
".git/objects/48/b647562ca24ce161af6a7436549f3181bc7a01": "1209d92bf0f36bff5d88a0250c919fbc",
".git/objects/70/094399430708301a3f80f9e4c343fc45efab2a": "9ddb5c0cdf69019c86c30946d9d536b4",
".git/objects/70/21a98c6ba21389615092e2fed04140a7fd7315": "36eea4a0140772bcf0e80b103af7d2f9",
".git/objects/70/912851b7f4e22226aad4a5e18ef9ed812d95f8": "ddf7d986ba599ab189807597558f75e6",
".git/objects/70/e06c2c2fe6a9f0df22b68ff359b62bd43743a7": "c6e59563a8fe80d9738a2de97ba6c833",
".git/objects/1e/c98df9748b5b57915aab21e9915bf8ac21bc29": "692b3168bd111c1e3747d0b06b236ecd",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "5078a0be35852253005f6e4cc71802d1",
".git/objects/23/e3259ef5d4f23ef9b81affa76f51ba9eec217d": "d936236bbbf6459426ac4c1a7ffc3609",
".git/objects/23/223456a38d1a767613523c2a1a238e2adaffe2": "a3571b76de3c0737dad927ccec6ccd85",
".git/objects/4f/c0a2da03ed7133401e616c44bc124dd11c3073": "31cf2615f6a382b41ed94902a63f172f",
".git/objects/4f/aafb9c1240c8d4aa7081b8432e199f68c25d7c": "d069b797654c815b0bb84dd1bf72fc2d",
".git/objects/8d/5f7e0626ea380c91d2ab42e9149579a63f98ba": "b28abc17bde7c6177531cc17f9430ced",
".git/objects/8d/70d54d5289b94c0184c5b4063d4297df36971c": "a79538cf30fafb55c624c65e285643fa",
".git/objects/12/7940287cc28e489d652b018858ff8aaebddec6": "763dab4d327e041d75876512651285b1",
".git/objects/12/cb0b7990b874c9bff6a2569c9c01a6496818f9": "a6390c9b4d008859589dbe1e92701db5",
".git/objects/12/9f76a3cfd8d0044e2df366c1fcc4d1bb3d1725": "f4cd6399da7071618bf6a223b10eabb5",
".git/objects/12/0f803c00d1d9e46e44980bfafab0f1f794b552": "fef7ed964265dda70f9edee42abdccb6",
".git/objects/12/06e8d4a5359750369ae4acd8038fff8e3ec5c2": "191c5c4432115ba1f0400d76eba3c595",
".git/objects/8c/5985408d3a94f178453916f84f164c35f1bfff": "aaac88a9962b3048b3f7138e22c76987",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/c14fab08881ac296ef2ffe5b8890ade42c0844": "b143a1eb8b801afac9e3494524bf7a2e",
".git/objects/76/4b98c2cb5aa5721bd8c3eac39e2e2eaa10935c": "2a2e4065d1cdb095b3b24147541b2320",
".git/objects/49/2013ce13d05017ebf9de04c67b5a0af0374702": "4100da3f84569d9a42d67e7992f383b6",
".git/objects/49/d796c4154ac12d4652ae53f23a75ddf3ed1f37": "8683006a1f9779f51e30886470651cd0",
".git/objects/49/90d85cae67c26a621a70ffd8bbf0a263040a67": "e8f5cec8cf0a5364ac9b786344dba9b7",
".git/objects/2b/ab6c5789b8c3e3b0da79adf225d980c910e788": "38358bc1aae2a50c852fa85e79b18165",
".git/objects/2b/2ee0154cbf6e3b7002923dc6b227ad6275d835": "55a0ed285d60fe14e9c06b09c37b5e8b",
".git/objects/47/02266ddd2a546986ae3abbd7760ea3b3d59cd9": "db7170c2e57ec4b808b28079379861a7",
".git/objects/47/a513f1081c047eff76bea9dd7b0c312c48ca57": "834c8bf69eca1099566ac11ae423b2f4",
".git/objects/47/c88f2fc9f92ee79f053145ec6330c98f39a18d": "714f193fecc99adf063daf8656a5f6c5",
".git/objects/47/ea1bd160e6f29646bc488c0fc28f485f60e733": "dfc82719d186bc7399204726d252452f",
".git/objects/47/b8fe53e91f044aa36074ec58ce1bc53e029f29": "35d41da5fc26058ff42eb37736ed00f7",
".git/objects/78/a5a4eb281b62adf916b0f70d50e3289a5721f2": "1fe92966cde8445b6de4b0f8cfbb79b5",
".git/objects/13/589c566926230403ec820d7b660ab02981461f": "2a0dc651ca4a78bf923a7ca470e80ade",
".git/objects/13/6cebe3b9fdd22a7506722e9233e8ab13540be9": "f049a5fe28e0a9cb11a9bfa6c98eb9b3",
".git/objects/7f/c65952afd425c8e446d6d35ec47f5998c68f76": "e3b2fa1b3f1d75ed53a0621f8978bba4",
".git/objects/7f/3d029d26b9202aada077c0b36f5220a4c6c805": "e98adeb8d0222ac9b33c083497e90ad9",
".git/objects/14/c0a1819d961e2edc8acdb021a783b84c799a23": "497787ac1c103b99d5283e90e4c74b52",
".git/objects/14/5bbda5e95dbcbcc28637d72c6f9e2a091001d2": "f716b1084912d2c03da7cb03b199a4ea",
".git/objects/8e/687a18e4c3a65d6a5f3b9ead540aed4896c150": "770f1f5156c2af172ac5639c8eae9454",
".git/objects/22/17f20a80bda435dfde922174800e75247bceb7": "3247b7d4604728d34f095f6cae632f79",
".git/objects/25/5be9e3a42b59f03b5cbdfae5387cedf29948c9": "108bd20a12911bc2086b1b89e310cab0",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77098c443105192ee96c548a044474c1",
".git/logs/refs/heads/main": "74b0fd94cc4c6d2699e1236c10699b74",
".git/logs/refs/remotes/origin/main": "a99d75ea8428094ea1548146ee8cdb6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e0418b5201cda548f8c7ac7cfec60427",
".git/refs/tags/0.3.0": "e0418b5201cda548f8c7ac7cfec60427",
".git/refs/tags/0.1.0": "7bedbd4929e836256077a4b5be32d6a4",
".git/refs/tags/0.2.0": "8843b66ea1ee1d058ea5a3ebe4ff09a3",
".git/refs/remotes/origin/main": "e0418b5201cda548f8c7ac7cfec60427",
".git/index": "84308d3766da0fd566a2198e8ed06e87",
".git/COMMIT_EDITMSG": "af15a93247a7644f4b767e649f3cb77c",
".git/FETCH_HEAD": "4416072c1acb309bbd98cc3c23e071af",
".git/sourcetreeconfig": "ca0830780e2124412e579cad1a617385",
"assets/AssetManifest.json": "6f44da74a3de411f0fecc02a55d929c0",
"assets/NOTICES": "f0087849dcf729ea46fcd70e0c2f6f3e",
"assets/FontManifest.json": "ff7d45e66c231400493b9488ec6f7bb3",
"assets/AssetManifest.bin.json": "6b273cd0f96d8485aeae2a76a456a49e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "f4f24ff0970411f73244e4db4e325edc",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "ddeaae7b9054d49d23a85c5524354c54",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "d3909e1fc3766765cd1a5d7149c8fb64",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "52c25589ae1cce73c9cfa0a3e7c5186a",
"assets/fonts/MaterialIcons-Regular.otf": "5a2ff9c1272e957ebda7cb7debf793f8",
"assets/assets/images/hunger_meter.png": "97da8ecd490756b228b622e63ca9c84c",
"assets/assets/images/frame_2_thin.png": "b34c5c6fefb180271ac9584325d1e6de",
"assets/assets/images/priority.png": "8eb66c81e8f7d5bd10c4367f8d34ba6e",
"assets/assets/images/crock_pot.png": "85386866dd831df3a3ff7f36b891f5fc",
"assets/assets/images/compost_overlay_full.png": "861d8307839acceda24087d8f4cc50d4",
"assets/assets/images/growth_formula_overlay_full.png": "85d7b330824534a3ac3097b13131002e",
"assets/assets/images/frame_1.png": "f77a9c1a5cc7a7909441f611e10dd1f0",
"assets/assets/images/manure_overlay_full.png": "e376d9521e631a8082e0e44282d9d4de",
"assets/assets/images/health_meter.png": "2a36ccb9506f76a9abd6b6f34d9d89c0",
"assets/assets/images/frame_2_thick.png": "0d18b900d380a70bb38b78cb0c43b840",
"assets/assets/images/nutrients_growth_formula_icon.png": "3ab1c2583474df457f27300d8f9c2d02",
"assets/assets/images/rot.png": "d5e437d6d96a535c7bca9281da56fe69",
"assets/assets/images/sanity_meter.png": "68dfb20d3706fcb07dcbfd970e69d6e0",
"assets/assets/images/nutrients_manure_icon.png": "cd8ef7a9eb4f3678493d29cede79b393",
"assets/assets/images/bg_loading_loading_charlie2.png": "3a6c83276b4b165651ffd2eb9a7f1d0b",
"assets/assets/images/nutrients_compost_icon.png": "e6622260cbfed062e40ec0b066ee17bf",
"assets/assets/images/giant_carrots.png": "bc156af74307385f3b826f2245627022",
"assets/assets/images/items/meats.png": "e662d38099ac8367b8d049582168cfb8",
"assets/assets/images/items/mushy_cake.png": "2c36564fb1735e118ae0724d3d7062cf",
"assets/assets/images/items/moleworm.png": "f497f4fed0278498c2ddfce090446350",
"assets/assets/images/items/inedible.png": "5ee2cac326b35bb916b33a6c78721fdc",
"assets/assets/images/items/monster_foods.png": "ffc8ccaa6ead81a65fcbcc0c1188e704",
"assets/assets/images/items/breakfast_skillet.png": "8f02a97e2444c86fe7dd2bc84feba4bb",
"assets/assets/images/items/tree_jam.png": "3c610bb47b51f75611114123a06d7cd7",
"assets/assets/images/items/compost.png": "794c66ae9bca550f4dfa969c58ac9196",
"assets/assets/images/items/fruits.png": "2efe3a2aa34c72d60c3e41eefc649d7e",
"assets/assets/images/items/ceviche.png": "73780779942d0e82f22275709f41a47a",
"assets/assets/images/items/fire_nettle_fronds.png": "bcc495566d3e86320c40227cf82f50fa",
"assets/assets/images/items/bacon_and_eggs.png": "32bb53489817aad0a911f23357f3a84b",
"assets/assets/images/items/toma_roots.png": "87a7d240ba9ae210fb914dacde8c72b4",
"assets/assets/images/items/guano.png": "835a2cf4b46d858125c04a4ce94b9e46",
"assets/assets/images/items/figatoni.png": "832c6dc81c7ad1e5dc7f33a9a2714d24",
"assets/assets/images/items/eels.png": "8a409e465897411bea7fd697d832eca6",
"assets/assets/images/items/onions.png": "f094bf050df6185850a4a6d230364bb8",
"assets/assets/images/items/beefy_greens.png": "702b04497c1fef9fae4a3a0ee93003cf",
"assets/assets/images/items/fishes.png": "4ca2cbbf55496da5a664145e205b6b07",
"assets/assets/images/items/fist_full_of_jam.png": "21960d7646b1cae1ba523ea05667990a",
"assets/assets/images/items/flower_salad.png": "4973b790a0a841458a0c3f16343c6e0b",
"assets/assets/images/items/glommer_fuel.png": "ab4aa218106edc52458be43b329685e3",
"assets/assets/images/items/drumstick.png": "b6e55cb93ba6f7d0a6444d38bf886efa",
"assets/assets/images/items/tallbird_eggs.png": "de7ebda56ab59de4fff3e492cfb812be",
"assets/assets/images/items/glow_berry_mousse.png": "00841124d857d4224f3806bdaf02e931",
"assets/assets/images/items/twigs.png": "dd01b74cb6b9b4ad94f2123bf8f29134",
"assets/assets/images/items/soothing_tea.png": "0dd765282011122491d4a39f3ed71ead",
"assets/assets/images/items/plain_omelette.png": "835e10c3796a447f5e38f24ea1906793",
"assets/assets/images/items/fish_cordon_bleu.png": "c98b2807e3c3997038cc1e771cc89239",
"assets/assets/images/items/fancy_spiralled_tubers.png": "59569ae66d94c08b518d392defaadf12",
"assets/assets/images/items/ripe_stone_fruit.png": "3ce73abfabe27bf115840a00b49cd638",
"assets/assets/images/items/tall_scotch_eggs.png": "bc54c7df2772fb0e8826315299be68e6",
"assets/assets/images/items/toma_root_seeds.png": "4845ea6f413812cc19725e800664f728",
"assets/assets/images/items/kelp_fronds.png": "443b3e7f894e00d1700ad19377ac88ee",
"assets/assets/images/items/eggplants.png": "f8eeac081bd477f5b4108e0deeae38d6",
"assets/assets/images/items/potato.png": "61e672cf3ed266923d2f975e359e7d28",
"assets/assets/images/items/melonsicle.png": "5e0c03bdbf03a1414664aa3624db2c23",
"assets/assets/images/items/corn.png": "b519bb921257364a345273f555fdec66",
"assets/assets/images/items/meaty_stew.png": "977d720570090345700a84b158ae0610",
"assets/assets/images/items/manure.png": "e3830c0e85311a91c7fbe75d005694e0",
"assets/assets/images/items/salsa_fresca.png": "ac1604f39400989f0631f0067a147b06",
"assets/assets/images/items/bunny_stew.png": "68cfcfaaf4a0a39aafc0ebcb1dc262f1",
"assets/assets/images/items/fish_tacos.png": "545e5ed0bdd20b58ec84f3ac4187c8b9",
"assets/assets/images/items/figs.png": "db4c4a25cdc10828c6f5e8f0c967b2df",
"assets/assets/images/items/durian.png": "4c430fd11b607b278fa9783e06d61c18",
"assets/assets/images/items/stuffed_fish_heads.png": "5ebee26044ae9446c9cc940af8132c01",
"assets/assets/images/items/taffy.png": "ee5136b68a92929f075927640eb20002",
"assets/assets/images/items/banana_pop.png": "4868e40605a7fe437029405ebf170137",
"assets/assets/images/items/barnacle_linguine.png": "2adf1907c8608e74e3270dbb07ca0698",
"assets/assets/images/items/compost_wrap.png": "be8046d81db94fa4afef56d21be5797d",
"assets/assets/images/items/stuffed_pepper_poppers.png": "84c2153c8b4687a169087b79bbe09773",
"assets/assets/images/items/toma_root.png": "d1b65cb14d87625188f245c5e5dc209f",
"assets/assets/images/items/carrot.png": "31d5a73a74fdae341822815f5553bdae",
"assets/assets/images/items/figgy_frogwich.png": "474107ec053c53d21cd791a37351701a",
"assets/assets/images/items/fig.png": "afce69a3009621baa8ab2a5b7308a796",
"assets/assets/images/items/pomegranate_seeds.png": "00c7e205dc9b9f0281c9207aa96fd90e",
"assets/assets/images/items/mashedpotatoes.png": "324378ef54a496b377ca4118a7f87516",
"assets/assets/images/items/tillweeds.png": "21e25e1bfea9946c4132e139e22dc299",
"assets/assets/images/items/sweetener.png": "1d2eff7ba4b96b5bc0bf075e954393ef",
"assets/assets/images/items/steamed_twigs.png": "d22af9d823ff103a4c8dffa23f0699b4",
"assets/assets/images/items/honey.png": "cd8512536272c43a3b69236738eae23e",
"assets/assets/images/items/figkabab.png": "073eb2ef88541a0b7fe76cf0f2b20d8d",
"assets/assets/images/items/pepper_seeds.png": "f6a37811213a5121a6aa9672fa25beda",
"assets/assets/images/items/trail_mix.png": "93a307a5c35756a911895b98c25f1101",
"assets/assets/images/items/waffles.png": "91391b191b3dbe26f7804d75f5576074",
"assets/assets/images/items/watermelon_seeds.png": "51d4e92baacd6b655f5f3e72368b31e8",
"assets/assets/images/items/grim_galette.png": "16688291b9238f07fcc0a25710d656c1",
"assets/assets/images/items/leafy_meats.png": "07cc515c02849d8c595722d3c34fa5be",
"assets/assets/images/items/moqueca.png": "d4c4aa25aae4f57b6dc1d7c2cf4f030e",
"assets/assets/images/items/fresh_fruit_crepes.png": "da7d9592e7025ab53ee6d60d2513f523",
"assets/assets/images/items/dairy_product.png": "365a3a655d9b8cda471330a58c1d7d6f",
"assets/assets/images/items/onion.png": "4031e0a0928b4b89e68ac4ea90d5d116",
"assets/assets/images/items/veggie_burger.png": "9e6ff296db26e079f6293f4a4b7d0cb1",
"assets/assets/images/items/monster_meats.png": "dd410f7270b3d10ad004070043790375",
"assets/assets/images/items/wobster_bisque.png": "c230dfd4cebe72f48cc8f114557a3908",
"assets/assets/images/items/toasted_seeds.png": "e3c72cf913545ece1b1e020034e2101e",
"assets/assets/images/items/roasted_birchnut.png": "4b1323a7d4fe210a75e45abde11b790f",
"assets/assets/images/items/froggle_bunwich.png": "926bcb716e3524cc84c29cd7b436c8fd",
"assets/assets/images/items/butter.png": "b98ad9533d4334633fa7c2b53178039a",
"assets/assets/images/items/green_cap.png": "da14867a2ac1222cb7255a929225aa09",
"assets/assets/images/items/wobster_dinner.png": "324161d82d7089978d7ad0c5383cc24e",
"assets/assets/images/items/garlic_seeds.png": "ebe07ba814a867dfc9957be3c5fda2aa",
"assets/assets/images/items/stuffed_eggplant.png": "bbc93da6560c5f412a5fd76809f9005f",
"assets/assets/images/items/moon_shroom.png": "06ed66b27e62243e31a8b76ffc60dd57",
"assets/assets/images/items/bucket-o-poop.png": "5c6b17d20e89eece3c7a2a4822cb0648",
"assets/assets/images/items/jellybeans.png": "6b1b2dc27795ef37d64589bceb7bb66d",
"assets/assets/images/items/onion_seeds.png": "7f4cee0d4063d61c205d4369b74c0597",
"assets/assets/images/items/eggs.png": "0a0496fe61f2a916872f7521f05bfc99",
"assets/assets/images/items/hot_dragon_chili_salad.png": "2c4752f2d76e678eae925f8ce3149027",
"assets/assets/images/items/leafy_meat.png": "74d0b08cfeeb82019d12358229581083",
"assets/assets/images/items/collected_dust.png": "28d3e6ef1cd99a38609d1c95b6f4bd79",
"assets/assets/images/items/asparagus.png": "7b85395e8a6c50fd68a1fead47d931e5",
"assets/assets/images/items/rotten_egg.png": "7781c72482a1cab92320745dd305d802",
"assets/assets/images/items/mandrake_soup.png": "4ee0b044bc7d41997bdefbaedb271327",
"assets/assets/images/items/meat.png": "59af88d0210a3ed840771383d82705f5",
"assets/assets/images/items/fermenting_growth_formula.png": "730dfdcda7af6b134364359a8e205bfd",
"assets/assets/images/items/pepper.png": "47168f0332cedaaf0206f560c69d9026",
"assets/assets/images/items/watermelon.png": "a21d3486451f78a284c6a62c4e7c7e4e",
"assets/assets/images/items/stuffed_night_cap.png": "5e52d2fa9f4cd22627477ad6783a9387",
"assets/assets/images/items/spoiled_fish.png": "08f77cc10c9be9e4dfe861af84afed63",
"assets/assets/images/items/volt_goat_chaud_froid.png": "2e991c5c8a7b234b8afb0cca179d6bd9",
"assets/assets/images/items/pumpkin_seeds.png": "1da33490e76d7136457b8b2c1e7aafe8",
"assets/assets/images/items/koalefant_trunks.png": "974bd0e5a132000cf74c6a7dd54c72e3",
"assets/assets/images/items/guacamole.png": "3547de5881a3112d5f861b9194105a6b",
"assets/assets/images/items/wobster.png": "17efdae6ff8b74686f4bd1563606f060",
"assets/assets/images/items/frozen_banana_daiquiri.png": "85778cf199f90af5e4c9e036fad4f137",
"assets/assets/images/items/pomegranate.png": "31ffe57ec0ea75645a6ee2c63ced2c13",
"assets/assets/images/items/dragon_fruit_seeds.png": "52929c19b2c87be426786a7722cf4ca1",
"assets/assets/images/items/rot.png": "d5e437d6d96a535c7bca9281da56fe69",
"assets/assets/images/items/barnacle_nigiri.png": "76c545d8df06db7fdd9576d22db14e78",
"assets/assets/images/items/fruit_medley.png": "874f123d0c960197a3d7350c1ca63b97",
"assets/assets/images/items/meatballs.png": "0c6349703ad04f331a6585fdb6c69557",
"assets/assets/images/items/spiny_bindweed.png": "ead8822fdd46206d3a3f67a93deb55fb",
"assets/assets/images/items/dragon_fruit.png": "27f31b680603305ce331f2db3b7e16be",
"assets/assets/images/items/garlic.png": "a3122620cb59736835d9992a1b1ba380",
"assets/assets/images/items/powdercake.png": "40f6eb7efd5dcb8af3ba8ec16ebf7f2d",
"assets/assets/images/items/ice.png": "756f52dd2cfd944bcdb47e56f9a268ea",
"assets/assets/images/items/potato_seeds.png": "236024dcd32a58495a5182ab3b6babdf",
"assets/assets/images/items/kabobs.png": "0d5986c9a5c797f437f9dd26384f26fe",
"assets/assets/images/items/koalefant_trunk.png": "aeb41c2fe9553c44e99959422561e763",
"assets/assets/images/items/forget_me_lots.png": "84950523cffbb1ed02cefaccd2e4e531",
"assets/assets/images/items/blue_cap.png": "8a3190ef885cdaedc2c8d7eebafe49a9",
"assets/assets/images/items/turkey_dinner.png": "07eee3fdd2cc0708ecafeb6fa1f3548b",
"assets/assets/images/items/asparagus_soup.png": "c3e9558fb3edc5fb613d1d1b85c8b8ff",
"assets/assets/images/items/ice_cream.png": "f0dfe15f4d2aac4325f4afea2e07b9fe",
"assets/assets/images/items/corn_seeds.png": "b8af960c48deb9b8e7a02a9f9ca6f74e",
"assets/assets/images/items/california_roll.png": "6f545d12b20ee8024a614816e032343e",
"assets/assets/images/items/pierogi.png": "715f19fbf89ee771b2d633077fb1e72d",
"assets/assets/images/items/fermented_growth_formula.png": "338c0f4dd58451276e55b79cff0d4829",
"assets/assets/images/items/unagi.png": "60a6db9800cc3e13e73da5b0f6eb5528",
"assets/assets/images/items/seafood_gumbo.png": "a26e24a7c727968e3bad7815cd498347",
"assets/assets/images/items/surf_n_turf.png": "058374838ca22e93e0d1fb746ffd9fdf",
"assets/assets/images/items/super_growth_formula.png": "300fb9d2e492d18e2f07171f4955835c",
"assets/assets/images/items/growth_formula_starter.png": "7eff74eeebdd1ee1f519870eede2eb27",
"assets/assets/images/items/jelly_salad.png": "3d8f96e4c581b389695dd663294bfeec",
"assets/assets/images/items/spicy_chili.png": "09284d48adaf4905e4fbc5af1df2d53f",
"assets/assets/images/items/asparagus_seeds.png": "bd768bc3323ee0b248f6e035cc8df05a",
"assets/assets/images/items/honey_nuggets.png": "a85e3c622e81176c50a0adc5a489ab60",
"assets/assets/images/items/beefalo_treats.png": "9040a75d5360766e3f1a06012458db72",
"assets/assets/images/items/naked_nostrils.png": "7bb0e55e88d654f21493b2517d5ed3fa",
"assets/assets/images/items/none.png": "483a7c7f8cc7fbe91ee77cd3f6cfa2d5",
"assets/assets/images/items/vegetable_stinger.png": "a29fb33ad90d87b664a2273fb5267071",
"assets/assets/images/items/cave_bananas.png": "358ea27f1a354f74c327ed341a9a73da",
"assets/assets/images/items/wet_goop.png": "3028c93d684e63203057c2da44a9f8ee",
"assets/assets/images/items/spoiled_fish_morsel.png": "b381abb727d2b80b6c6ea62c11e7c701",
"assets/assets/images/items/amberosia.png": "4b0bfae4a8d2ca83f5410e787ccbf8d5",
"assets/assets/images/items/barnacle_pita.png": "476ac5dad275a785bdac723305679b50",
"assets/assets/images/items/eggplant.png": "f86b7469b62a722567941608cd99acb5",
"assets/assets/images/items/butter_muffin.png": "1d6261a026a4ceae93f6e796f63c7797",
"assets/assets/images/items/red_cap.png": "64f4b963bb7ba3df53885289b0d93332",
"assets/assets/images/items/durian_seeds.png": "69f24abcd61d43015dc85d4c6706ee8a",
"assets/assets/images/items/honey_ham.png": "e31ea1daa8818449e8d7c8bc983b4c32",
"assets/assets/images/items/peppers.png": "868787574b31808d94348b0c7935f268",
"assets/assets/images/items/egg.png": "8cf3d68184e1e0dc106cc65333798e6d",
"assets/assets/images/items/carrot_seeds.png": "6f2f19fea2c05f0a162d64533e4aaeb0",
"assets/assets/images/items/butterfly_wings.png": "b9035eb2b038319284b0d9fd8a02c9b3",
"assets/assets/images/items/berries.png": "82f31c9386a862137208b4c1ebe1a80e",
"assets/assets/images/items/dragonpie.png": "604a599a2ec2d002d5723608d4c4d286",
"assets/assets/images/items/eggplant_seeds.png": "6f7d3806ada855a08cf885fd33e9b178",
"assets/assets/images/items/fig_stuffed_trunk.png": "d812c8dc2252d95377e6bb4d8d88e0bd",
"assets/assets/images/items/vegetables.png": "c46402ececb6a71ea675c4eface5865b",
"assets/assets/images/items/leafy_meatloaf.png": "97a92bf4fce1ca1db7db630ab100a7e9",
"assets/assets/images/items/asparagazpacho.png": "1b4fdcb4dfd9edda66e912eef99dd126",
"assets/assets/images/items/bone_bouillon.png": "5d59ae45188c82aa42c77c1158f861ce",
"assets/assets/images/items/pumpkin_cookie.png": "548c75a41d8da85e9c129415fe9d56bb",
"assets/assets/images/items/seeds.png": "beeafec9472d569ffd8ae2888a13b8d4",
"assets/assets/images/items/pumpkin.png": "29cb08a494d8a835b42ce8bd8fe15b72",
"assets/assets/images/items/monster_tartare.png": "a2c80bdc02868ffd7d4d82112d4aa94d",
"assets/assets/images/items/monster_lasagna.png": "8126c6fac034e8d42712880dbe846a3d",
"assets/assets/images/items/fishsticks.png": "ce00b91c6d173f011fb728aed385bf99",
"assets/assets/images/items/milkmade_hat.png": "0b631dd57835c3bd3a0901db3b2ff3e6",
"assets/assets/images/items/nightmare_fuel.png": "018a9a92daed76b5e0cee3772e891ee2",
"assets/assets/images/items/banana_shake.png": "8c9fac33b6a6ec765cb7e6ff34273155",
"assets/assets/images/items/morsel.png": "ad95fc4a1512d33142941c7433715fd0",
"assets/assets/images/items/frog_legs.png": "822b2807fc3b6993c275266529616baa",
"assets/assets/images/items/puffed_potato_souffle.png": "e8500ad43619eb985de42039809ef8c3",
"assets/assets/images/items/tallbird_egg.png": "889eb3d05ca2b49bf76b9dbfcd3984f5",
"assets/assets/images/items/ratatouille.png": "821f5007b98d6b7a4f0df0484e9da8de",
"assets/assets/images/items/birchnut.png": "37238e346353b305587b9063b57f808b",
"assets/assets/images/giant_dragon_fruit.png": "56672e1c4b6dc302d11a313ab6a4e658",
"assets/assets/custom_icon/CustomIcon.ttf": "36e2910c5ba995e21eb422b032b0a755",
"assets/assets/fonts/PretendardVariable.ttf": "872a6c5775ec910058a9a409a201972a",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
