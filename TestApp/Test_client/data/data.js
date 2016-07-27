    var testinputDate = new Date(2015,0,21);
    var testexpectedDate = '2015-01-21';



var tempArry=[1,2,3,4,5,3,4,2,5,67,23,5,6,2,3,5,3,2,3,4];

var tempArry_uniq=[ 1, 2, 3, 4, 5, 67, 23, 6 ];

var dataTofirstDropDown = ["AclTest","ArBgpPerfPolicyScaleTest","AradIp6HostComprMapRefCntOverFlowTest","AradIp6HostHwEncodeTests","AradIp6HostPrefixAllocatorTest","AradIp6HostRouteCliTest","AradIp6HostRouteRandomWalkTest","AradIp6HostTcamAllocFailTest","AradIp6HostTcamAllocFreeB2BTest","AradIp6HostTcamAllocTest","AradIp6HostTcamFreeAllocB2BTest"]

var tempData= [{
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "434.040148800937",
		"dut" : "bh321",
		"project" : "id.boise-th",
		"release" : "null",
		"client" : "arastra.atest330.var_AutoTest_1_workspace_bh321",
		"changeNum" : "null",
		"testTime" : "2016-05-30T15:21:09.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "389.799627420027",
		"dut" : "tg249",
		"project" : "ga.peachtree",
		"release" : "null",
		"client" : "arastra.atest308.var_AutoTest_1_workspace_tg249",
		"changeNum" : "null",
		"testTime" : "2016-05-31T13:49:00.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "397.909474943997",
		"dut" : "bh201",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest316.var_AutoTest_1_workspace_bh201",
		"changeNum" : "null",
		"testTime" : "2016-06-01T09:21:41.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "350.375911206007",
		"dut" : "in457",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest349.var_AutoTest_1_workspace_in457",
		"changeNum" : "null",
		"testTime" : "2016-06-01T10:22:43.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "386.247876017122",
		"dut" : "bh310",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_bh310",
		"changeNum" : "null",
		"testTime" : "2016-06-01T10:29:14.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "341.298096654937",
		"dut" : "bh336",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-01T12:29:38.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "367.330160305835",
		"dut" : "bh330",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest308.var_AutoTest_1_workspace_bh330",
		"changeNum" : "null",
		"testTime" : "2016-06-01T20:07:53.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "359.76732564182",
		"dut" : "tg248",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_tg248",
		"changeNum" : "null",
		"testTime" : "2016-06-05T04:46:44.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "773.884689484723",
		"dut" : "yo654",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest337.var_AutoTest_1_workspace_yo654",
		"changeNum" : "null",
		"testTime" : "2016-06-07T09:07:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "693.830828000791",
		"dut" : "bn105",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-08T12:04:25.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "312.075198736973",
		"dut" : "tg333",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest336.var_AutoTest_1_workspace_tg333",
		"changeNum" : "null",
		"testTime" : "2016-06-08T20:26:55.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "313.59968797816",
		"dut" : "tg333",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest336.var_AutoTest_1_workspace_tg333",
		"changeNum" : "null",
		"testTime" : "2016-06-09T05:57:24.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "692.821988312062",
		"dut" : "bn105",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-10T01:21:43.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "693.428557238076",
		"dut" : "bn105",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-10T07:56:49.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "319.122093101963",
		"dut" : "tg333",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest336.var_AutoTest_1_workspace_tg333",
		"changeNum" : "null",
		"testTime" : "2016-06-12T14:24:35.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "385.646278031636",
		"dut" : "in445",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest309.var_AutoTest_1_workspace_in445",
		"changeNum" : "null",
		"testTime" : "2016-06-12T22:53:52.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "438.84888138203",
		"dut" : "tg207",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest342.var_AutoTest_1_workspace_tg207",
		"changeNum" : "null",
		"testTime" : "2016-06-14T03:08:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "395.438908425625",
		"dut" : "bh331",
		"project" : "eos-trunk-veos.2",
		"release" : "null",
		"client" : "arastra.atest310.var_AutoTest_1_workspace_bh331",
		"changeNum" : "null",
		"testTime" : "2016-06-14T23:27:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "402.179019213188",
		"dut" : "bh331",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest310.var_AutoTest_1_workspace_bh331",
		"changeNum" : "null",
		"testTime" : "2016-06-16T03:05:27.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "330.740030094981",
		"dut" : "in438",
		"project" : "jericho-permitOnlySecurityAcls-adityavd",
		"release" : "null",
		"client" : "arastra.atest321.var_AutoTest_1_workspace_in438",
		"changeNum" : "null",
		"testTime" : "2016-06-16T10:46:12.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "308.753997602966",
		"dut" : "in475",
		"project" : "il.decatur-base",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_in475",
		"changeNum" : "null",
		"testTime" : "2016-06-17T12:55:05.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "324.497377324849",
		"dut" : "in360",
		"project" : "eos-trunk-veos.2",
		"release" : "null",
		"client" : "arastra.atest316.var_AutoTest_1_workspace_in360",
		"changeNum" : "null",
		"testTime" : "2016-06-19T07:37:15.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "322.270796346013",
		"dut" : "tg206",
		"project" : "adityavd.caldwell",
		"release" : "null",
		"client" : "arastra.atest320.var_AutoTest_1_workspace_tg206",
		"changeNum" : "null",
		"testTime" : "2016-06-20T12:05:59.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "397.688924644142",
		"dut" : "in350",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest303.var_AutoTest_1_workspace_in350",
		"changeNum" : "null",
		"testTime" : "2016-06-21T11:22:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "404.161647454835",
		"dut" : "in350",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest303.var_AutoTest_1_workspace_in350",
		"changeNum" : "null",
		"testTime" : "2016-06-21T11:49:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "347.031939296983",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T14:05:32.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "350.96449369425",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T14:27:39.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "348.077581071295",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T14:49:53.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "371.94596479414",
		"dut" : "bh335",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh335",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:02:14.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "349.525742535014",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:12:30.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "345.796770711895",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:34:28.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "348.303336041048",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:56:43.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "387.055594032165",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T16:19:05.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "480.007512573153",
		"dut" : "yo614",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest321.var_AutoTest_1_workspace_yo614",
		"changeNum" : "null",
		"testTime" : "2016-06-22T07:52:21.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "303.6286518001",
		"dut" : "in312",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest320.var_AutoTest_1_workspace_in312",
		"changeNum" : "null",
		"testTime" : "2016-06-22T20:20:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "439.457529829815",
		"dut" : "tg293",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest347.var_AutoTest_1_workspace_tg293",
		"changeNum" : "null",
		"testTime" : "2016-06-23T00:30:09.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "370.799120995216",
		"dut" : "bh335",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh335",
		"changeNum" : "null",
		"testTime" : "2016-06-23T18:53:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "326.262601628434",
		"dut" : "tg457",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest305.var_AutoTest_1_workspace_tg457",
		"changeNum" : "null",
		"testTime" : "2016-06-23T21:08:40.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "494.891214306001",
		"dut" : "yo305",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest349.var_AutoTest_1_workspace_yo305",
		"changeNum" : "null",
		"testTime" : "2016-06-24T06:07:55.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "372.260804828256",
		"dut" : "bh335",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh335",
		"changeNum" : "null",
		"testTime" : "2016-06-24T09:34:06.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "679.398491040338",
		"dut" : "tg461",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest330.var_AutoTest_1_workspace_tg461",
		"changeNum" : "null",
		"testTime" : "2016-06-24T22:51:51.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "329.740234551951",
		"dut" : "in204",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest337.var_AutoTest_1_workspace_in204",
		"changeNum" : "null",
		"testTime" : "2016-06-26T12:58:06.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "343.182589025237",
		"dut" : "in449",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_in449",
		"changeNum" : "null",
		"testTime" : "2016-06-26T22:19:13.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "385.45533508528",
		"dut" : "in449",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_in449",
		"changeNum" : "null",
		"testTime" : "2016-06-27T04:09:20.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "470.833928228356",
		"dut" : "tg455",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest347.var_AutoTest_1_workspace_tg455",
		"changeNum" : "null",
		"testTime" : "2016-06-27T19:40:57.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "706.925054340623",
		"dut" : "bn105",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-28T10:23:17.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "383.550568769686",
		"dut" : "in449",
		"project" : "secondary-vip",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_in449",
		"changeNum" : "null",
		"testTime" : "2016-06-29T00:05:48.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "599.874120730907",
		"dut" : "tg409",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_tg409",
		"changeNum" : "null",
		"testTime" : "2016-06-29T03:35:05.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "410.844421080314",
		"dut" : "tg401",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest333.var_AutoTest_1_workspace_tg401",
		"changeNum" : "null",
		"testTime" : "2016-06-29T13:31:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "613.982377104461",
		"dut" : "yo654",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest337.var_AutoTest_1_workspace_yo654",
		"changeNum" : "null",
		"testTime" : "2016-06-29T18:33:09.000Z"
	}
];


var tempData= [{
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "434.040148800937",
		"dut" : "bh321",
		"project" : "id.boise-th",
		"release" : "null",
		"client" : "arastra.atest330.var_AutoTest_1_workspace_bh321",
		"changeNum" : "null",
		"testTime" : "2016-05-30T15:21:09.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "389.799627420027",
		"dut" : "tg249",
		"project" : "ga.peachtree",
		"release" : "null",
		"client" : "arastra.atest308.var_AutoTest_1_workspace_tg249",
		"changeNum" : "null",
		"testTime" : "2016-05-31T13:49:00.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "397.909474943997",
		"dut" : "bh201",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest316.var_AutoTest_1_workspace_bh201",
		"changeNum" : "null",
		"testTime" : "2016-06-01T09:21:41.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "350.375911206007",
		"dut" : "in457",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest349.var_AutoTest_1_workspace_in457",
		"changeNum" : "null",
		"testTime" : "2016-06-01T10:22:43.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "386.247876017122",
		"dut" : "bh310",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_bh310",
		"changeNum" : "null",
		"testTime" : "2016-06-01T10:29:14.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "341.298096654937",
		"dut" : "bh336",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-01T12:29:38.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "367.330160305835",
		"dut" : "bh330",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest308.var_AutoTest_1_workspace_bh330",
		"changeNum" : "null",
		"testTime" : "2016-06-01T20:07:53.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "359.76732564182",
		"dut" : "tg248",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_tg248",
		"changeNum" : "null",
		"testTime" : "2016-06-05T04:46:44.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "773.884689484723",
		"dut" : "yo654",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest337.var_AutoTest_1_workspace_yo654",
		"changeNum" : "null",
		"testTime" : "2016-06-07T09:07:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "693.830828000791",
		"dut" : "bn105",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-08T12:04:25.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "312.075198736973",
		"dut" : "tg333",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest336.var_AutoTest_1_workspace_tg333",
		"changeNum" : "null",
		"testTime" : "2016-06-08T20:26:55.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "313.59968797816",
		"dut" : "tg333",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest336.var_AutoTest_1_workspace_tg333",
		"changeNum" : "null",
		"testTime" : "2016-06-09T05:57:24.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "692.821988312062",
		"dut" : "bn105",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-10T01:21:43.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "693.428557238076",
		"dut" : "bn105",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-10T07:56:49.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "319.122093101963",
		"dut" : "tg333",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest336.var_AutoTest_1_workspace_tg333",
		"changeNum" : "null",
		"testTime" : "2016-06-12T14:24:35.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "385.646278031636",
		"dut" : "in445",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest309.var_AutoTest_1_workspace_in445",
		"changeNum" : "null",
		"testTime" : "2016-06-12T22:53:52.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "438.84888138203",
		"dut" : "tg207",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest342.var_AutoTest_1_workspace_tg207",
		"changeNum" : "null",
		"testTime" : "2016-06-14T03:08:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "395.438908425625",
		"dut" : "bh331",
		"project" : "eos-trunk-veos.2",
		"release" : "null",
		"client" : "arastra.atest310.var_AutoTest_1_workspace_bh331",
		"changeNum" : "null",
		"testTime" : "2016-06-14T23:27:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "402.179019213188",
		"dut" : "bh331",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest310.var_AutoTest_1_workspace_bh331",
		"changeNum" : "null",
		"testTime" : "2016-06-16T03:05:27.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "330.740030094981",
		"dut" : "in438",
		"project" : "jericho-permitOnlySecurityAcls-adityavd",
		"release" : "null",
		"client" : "arastra.atest321.var_AutoTest_1_workspace_in438",
		"changeNum" : "null",
		"testTime" : "2016-06-16T10:46:12.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "308.753997602966",
		"dut" : "in475",
		"project" : "il.decatur-base",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_in475",
		"changeNum" : "null",
		"testTime" : "2016-06-17T12:55:05.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "324.497377324849",
		"dut" : "in360",
		"project" : "eos-trunk-veos.2",
		"release" : "null",
		"client" : "arastra.atest316.var_AutoTest_1_workspace_in360",
		"changeNum" : "null",
		"testTime" : "2016-06-19T07:37:15.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "322.270796346013",
		"dut" : "tg206",
		"project" : "adityavd.caldwell",
		"release" : "null",
		"client" : "arastra.atest320.var_AutoTest_1_workspace_tg206",
		"changeNum" : "null",
		"testTime" : "2016-06-20T12:05:59.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "397.688924644142",
		"dut" : "in350",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest303.var_AutoTest_1_workspace_in350",
		"changeNum" : "null",
		"testTime" : "2016-06-21T11:22:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "404.161647454835",
		"dut" : "in350",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest303.var_AutoTest_1_workspace_in350",
		"changeNum" : "null",
		"testTime" : "2016-06-21T11:49:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "347.031939296983",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T14:05:32.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "350.96449369425",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T14:27:39.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "348.077581071295",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T14:49:53.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "371.94596479414",
		"dut" : "bh335",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh335",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:02:14.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "349.525742535014",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:12:30.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "345.796770711895",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:34:28.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "348.303336041048",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:56:43.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "387.055594032165",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T16:19:05.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "480.007512573153",
		"dut" : "yo614",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest321.var_AutoTest_1_workspace_yo614",
		"changeNum" : "null",
		"testTime" : "2016-06-22T07:52:21.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "303.6286518001",
		"dut" : "in312",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest320.var_AutoTest_1_workspace_in312",
		"changeNum" : "null",
		"testTime" : "2016-06-22T20:20:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "439.457529829815",
		"dut" : "tg293",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest347.var_AutoTest_1_workspace_tg293",
		"changeNum" : "null",
		"testTime" : "2016-06-23T00:30:09.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "370.799120995216",
		"dut" : "bh335",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh335",
		"changeNum" : "null",
		"testTime" : "2016-06-23T18:53:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "326.262601628434",
		"dut" : "tg457",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest305.var_AutoTest_1_workspace_tg457",
		"changeNum" : "null",
		"testTime" : "2016-06-23T21:08:40.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "494.891214306001",
		"dut" : "yo305",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest349.var_AutoTest_1_workspace_yo305",
		"changeNum" : "null",
		"testTime" : "2016-06-24T06:07:55.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "372.260804828256",
		"dut" : "bh335",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh335",
		"changeNum" : "null",
		"testTime" : "2016-06-24T09:34:06.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "679.398491040338",
		"dut" : "tg461",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest330.var_AutoTest_1_workspace_tg461",
		"changeNum" : "null",
		"testTime" : "2016-06-24T22:51:51.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "329.740234551951",
		"dut" : "in204",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest337.var_AutoTest_1_workspace_in204",
		"changeNum" : "null",
		"testTime" : "2016-06-26T12:58:06.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "343.182589025237",
		"dut" : "in449",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_in449",
		"changeNum" : "null",
		"testTime" : "2016-06-26T22:19:13.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "385.45533508528",
		"dut" : "in449",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_in449",
		"changeNum" : "null",
		"testTime" : "2016-06-27T04:09:20.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "470.833928228356",
		"dut" : "tg455",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest347.var_AutoTest_1_workspace_tg455",
		"changeNum" : "null",
		"testTime" : "2016-06-27T19:40:57.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "706.925054340623",
		"dut" : "bn105",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-28T10:23:17.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "383.550568769686",
		"dut" : "in449",
		"project" : "secondary-vip",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_in449",
		"changeNum" : "null",
		"testTime" : "2016-06-29T00:05:48.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "599.874120730907",
		"dut" : "tg409",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_tg409",
		"changeNum" : "null",
		"testTime" : "2016-06-29T03:35:05.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "410.844421080314",
		"dut" : "tg401",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest333.var_AutoTest_1_workspace_tg401",
		"changeNum" : "null",
		"testTime" : "2016-06-29T13:31:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "613.982377104461",
		"dut" : "yo654",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest337.var_AutoTest_1_workspace_yo654",
		"changeNum" : "null",
		"testTime" : "2016-06-29T18:33:09.000Z"
	}
];
var tempData1= [{
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "434.040148800937",
		"dut" : "bh321",
		"project" : "id.boise-th",
		"release" : "null",
		"client" : "arastra.atest330.var_AutoTest_1_workspace_bh321",
		"changeNum" : "null",
		"testTime" : "2016-05-30T15:21:09.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "389.799627420027",
		"dut" : "tg249",
		"project" : "ga.peachtree",
		"release" : "null",
		"client" : "arastra.atest308.var_AutoTest_1_workspace_tg249",
		"changeNum" : "null",
		"testTime" : "2016-05-31T13:49:00.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "397.909474943997",
		"dut" : "bh201",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest316.var_AutoTest_1_workspace_bh201",
		"changeNum" : "null",
		"testTime" : "2016-06-01T09:21:41.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "350.375911206007",
		"dut" : "in457",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest349.var_AutoTest_1_workspace_in457",
		"changeNum" : "null",
		"testTime" : "2016-06-01T10:22:43.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "386.247876017122",
		"dut" : "bh310",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_bh310",
		"changeNum" : "null",
		"testTime" : "2016-06-01T10:29:14.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "341.298096654937",
		"dut" : "bh336",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-01T12:29:38.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "367.330160305835",
		"dut" : "bh330",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest308.var_AutoTest_1_workspace_bh330",
		"changeNum" : "null",
		"testTime" : "2016-06-01T20:07:53.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "359.76732564182",
		"dut" : "tg248",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_tg248",
		"changeNum" : "null",
		"testTime" : "2016-06-05T04:46:44.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "773.884689484723",
		"dut" : "yo654",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest337.var_AutoTest_1_workspace_yo654",
		"changeNum" : "null",
		"testTime" : "2016-06-07T09:07:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "693.830828000791",
		"dut" : "bn105",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-08T12:04:25.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "312.075198736973",
		"dut" : "tg333",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest336.var_AutoTest_1_workspace_tg333",
		"changeNum" : "null",
		"testTime" : "2016-06-08T20:26:55.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "313.59968797816",
		"dut" : "tg333",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest336.var_AutoTest_1_workspace_tg333",
		"changeNum" : "null",
		"testTime" : "2016-06-09T05:57:24.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "692.821988312062",
		"dut" : "bn105",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-10T01:21:43.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "693.428557238076",
		"dut" : "bn105",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-10T07:56:49.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "319.122093101963",
		"dut" : "tg333",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest336.var_AutoTest_1_workspace_tg333",
		"changeNum" : "null",
		"testTime" : "2016-06-12T14:24:35.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "385.646278031636",
		"dut" : "in445",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest309.var_AutoTest_1_workspace_in445",
		"changeNum" : "null",
		"testTime" : "2016-06-12T22:53:52.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "438.84888138203",
		"dut" : "tg207",
		"project" : "jericho-permitOnlySecurityAcls",
		"release" : "null",
		"client" : "arastra.atest342.var_AutoTest_1_workspace_tg207",
		"changeNum" : "null",
		"testTime" : "2016-06-14T03:08:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "395.438908425625",
		"dut" : "bh331",
		"project" : "eos-trunk-veos.2",
		"release" : "null",
		"client" : "arastra.atest310.var_AutoTest_1_workspace_bh331",
		"changeNum" : "null",
		"testTime" : "2016-06-14T23:27:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "402.179019213188",
		"dut" : "bh331",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest310.var_AutoTest_1_workspace_bh331",
		"changeNum" : "null",
		"testTime" : "2016-06-16T03:05:27.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "330.740030094981",
		"dut" : "in438",
		"project" : "jericho-permitOnlySecurityAcls-adityavd",
		"release" : "null",
		"client" : "arastra.atest321.var_AutoTest_1_workspace_in438",
		"changeNum" : "null",
		"testTime" : "2016-06-16T10:46:12.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "308.753997602966",
		"dut" : "in475",
		"project" : "il.decatur-base",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_in475",
		"changeNum" : "null",
		"testTime" : "2016-06-17T12:55:05.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "324.497377324849",
		"dut" : "in360",
		"project" : "eos-trunk-veos.2",
		"release" : "null",
		"client" : "arastra.atest316.var_AutoTest_1_workspace_in360",
		"changeNum" : "null",
		"testTime" : "2016-06-19T07:37:15.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "322.270796346013",
		"dut" : "tg206",
		"project" : "adityavd.caldwell",
		"release" : "null",
		"client" : "arastra.atest320.var_AutoTest_1_workspace_tg206",
		"changeNum" : "null",
		"testTime" : "2016-06-20T12:05:59.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "397.688924644142",
		"dut" : "in350",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest303.var_AutoTest_1_workspace_in350",
		"changeNum" : "null",
		"testTime" : "2016-06-21T11:22:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "404.161647454835",
		"dut" : "in350",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest303.var_AutoTest_1_workspace_in350",
		"changeNum" : "null",
		"testTime" : "2016-06-21T11:49:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "347.031939296983",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T14:05:32.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "350.96449369425",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T14:27:39.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "348.077581071295",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T14:49:53.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "371.94596479414",
		"dut" : "bh335",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh335",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:02:14.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "349.525742535014",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:12:30.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "345.796770711895",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:34:28.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "348.303336041048",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T15:56:43.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "387.055594032165",
		"dut" : "bh336",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh336",
		"changeNum" : "null",
		"testTime" : "2016-06-21T16:19:05.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "480.007512573153",
		"dut" : "yo614",
		"project" : "baptiste.kni-lag.3",
		"release" : "null",
		"client" : "arastra.atest321.var_AutoTest_1_workspace_yo614",
		"changeNum" : "null",
		"testTime" : "2016-06-22T07:52:21.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "303.6286518001",
		"dut" : "in312",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest320.var_AutoTest_1_workspace_in312",
		"changeNum" : "null",
		"testTime" : "2016-06-22T20:20:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "439.457529829815",
		"dut" : "tg293",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest347.var_AutoTest_1_workspace_tg293",
		"changeNum" : "null",
		"testTime" : "2016-06-23T00:30:09.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "370.799120995216",
		"dut" : "bh335",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh335",
		"changeNum" : "null",
		"testTime" : "2016-06-23T18:53:47.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "326.262601628434",
		"dut" : "tg457",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest305.var_AutoTest_1_workspace_tg457",
		"changeNum" : "null",
		"testTime" : "2016-06-23T21:08:40.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "494.891214306001",
		"dut" : "yo305",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest349.var_AutoTest_1_workspace_yo305",
		"changeNum" : "null",
		"testTime" : "2016-06-24T06:07:55.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "372.260804828256",
		"dut" : "bh335",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest302.var_AutoTest_1_workspace_bh335",
		"changeNum" : "null",
		"testTime" : "2016-06-24T09:34:06.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "679.398491040338",
		"dut" : "tg461",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest330.var_AutoTest_1_workspace_tg461",
		"changeNum" : "null",
		"testTime" : "2016-06-24T22:51:51.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "329.740234551951",
		"dut" : "in204",
		"project" : "id.boise-dev.copp",
		"release" : "null",
		"client" : "arastra.atest337.var_AutoTest_1_workspace_in204",
		"changeNum" : "null",
		"testTime" : "2016-06-26T12:58:06.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "343.182589025237",
		"dut" : "in449",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_in449",
		"changeNum" : "null",
		"testTime" : "2016-06-26T22:19:13.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "385.45533508528",
		"dut" : "in449",
		"project" : "2016.aclleak.0",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_in449",
		"changeNum" : "null",
		"testTime" : "2016-06-27T04:09:20.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "470.833928228356",
		"dut" : "tg455",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest347.var_AutoTest_1_workspace_tg455",
		"changeNum" : "null",
		"testTime" : "2016-06-27T19:40:57.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "706.925054340623",
		"dut" : "bn105",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_bn105",
		"changeNum" : "null",
		"testTime" : "2016-06-28T10:23:17.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "383.550568769686",
		"dut" : "in449",
		"project" : "secondary-vip",
		"release" : "null",
		"client" : "arastra.atest317.var_AutoTest_1_workspace_in449",
		"changeNum" : "null",
		"testTime" : "2016-06-29T00:05:48.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "599.874120730907",
		"dut" : "tg409",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest352.var_AutoTest_1_workspace_tg409",
		"changeNum" : "null",
		"testTime" : "2016-06-29T03:35:05.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "410.844421080314",
		"dut" : "tg401",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest333.var_AutoTest_1_workspace_tg401",
		"changeNum" : "null",
		"testTime" : "2016-06-29T13:31:42.000Z"
	}, {
		"benchmark" : "AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute",
		"result" : "613.982377104461",
		"dut" : "yo654",
		"project" : "id.caldwell-dev",
		"release" : "null",
		"client" : "arastra.atest337.var_AutoTest_1_workspace_yo654",
		"changeNum" : "null",
		"testTime" : "2016-06-29T18:33:09.000Z"
	}
]

var outputDates =
[ '2016-05-30', '2016-05-31', '2016-06-01', '2016-06-02', '2016-06-03', '2016-06-04', '2016-06-05', '2016-06-06', '2016-06-07', '2016-06-08', '2016-06-09', '2016-06-10', '2016-06-11', '2016-06-12', '2016-06-13', '2016-06-14', '2016-06-15', '2016-06-16', '2016-06-17', '2016-06-18', '2016-06-19', '2016-06-20', '2016-06-21', '2016-06-22', '2016-06-23', '2016-06-24', '2016-06-25', '2016-06-26', '2016-06-27', '2016-06-28', '2016-06-29' ] 
var nullDates = 
[ '2016-06-02', '2016-06-03', '2016-06-04', '2016-06-06', '2016-06-11', '2016-06-13', '2016-06-15', '2016-06-18', '2016-06-25' ] 

var ex = [ { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '434.040148800937', dut: 'bh321', project: 'id.boise-th', release: 'null', client: 'arastra.atest330.var_AutoTest_1_workspace_bh321', changeNum: 'null', testTime: '2016-05-30T15:21:09.000Z', group: '2016-05-30', name: '2016-05-30T15:21:09.000Z', number: '434.040148800937' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '389.799627420027', dut: 'tg249', project: 'ga.peachtree', release: 'null', client: 'arastra.atest308.var_AutoTest_1_workspace_tg249', changeNum: 'null', testTime: '2016-05-31T13:49:00.000Z', group: '2016-05-31', name: '2016-05-31T13:49:00.000Z', number: '389.799627420027' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '397.909474943997', dut: 'bh201', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest316.var_AutoTest_1_workspace_bh201', changeNum: 'null', testTime: '2016-06-01T09:21:41.000Z', group: '2016-06-01', name: '2016-06-01T09:21:41.000Z', number: '397.909474943997' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '350.375911206007', dut: 'in457', project: '2016.aclleak.0', release: 'null', client: 'arastra.atest349.var_AutoTest_1_workspace_in457', changeNum: 'null', testTime: '2016-06-01T10:22:43.000Z', group: '2016-06-01', name: '2016-06-01T10:22:43.000Z', number: '350.375911206007' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '386.247876017122', dut: 'bh310', project: '2016.aclleak.0', release: 'null', client: 'arastra.atest317.var_AutoTest_1_workspace_bh310', changeNum: 'null', testTime: '2016-06-01T10:29:14.000Z', group: '2016-06-01', name: '2016-06-01T10:29:14.000Z', number: '386.247876017122' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '341.298096654937', dut: 'bh336', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh336', changeNum: 'null', testTime: '2016-06-01T12:29:38.000Z', group: '2016-06-01', name: '2016-06-01T12:29:38.000Z', number: '341.298096654937' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '367.330160305835', dut: 'bh330', project: '2016.aclleak.0', release: 'null', client: 'arastra.atest308.var_AutoTest_1_workspace_bh330', changeNum: 'null', testTime: '2016-06-01T20:07:53.000Z', group: '2016-06-01', name: '2016-06-01T20:07:53.000Z', number: '367.330160305835' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', changeNum: 'null', client: 'null', dut: 'null', project: 'null', release: 'null', result: 0, testTime: '2016-06-02T00:00:00', group: '2016-06-02', name: '2016-06-02T00:00:00', number: 0 }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', changeNum: 'null', client: 'null', dut: 'null', project: 'null', release: 'null', result: 0, testTime: '2016-06-03T00:00:00', group: '2016-06-03', name: '2016-06-03T00:00:00', number: 0 }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', changeNum: 'null', client: 'null', dut: 'null', project: 'null', release: 'null', result: 0, testTime: '2016-06-04T00:00:00', group: '2016-06-04', name: '2016-06-04T00:00:00', number: 0 }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '359.76732564182', dut: 'tg248', project: 'jericho-permitOnlySecurityAcls', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_tg248', changeNum: 'null', testTime: '2016-06-05T04:46:44.000Z', group: '2016-06-05', name: '2016-06-05T04:46:44.000Z', number: '359.76732564182' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', changeNum: 'null', client: 'null', dut: 'null', project: 'null', release: 'null', result: 0, testTime: '2016-06-06T00:00:00', group: '2016-06-06', name: '2016-06-06T00:00:00', number: 0 }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '773.884689484723', dut: 'yo654', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest337.var_AutoTest_1_workspace_yo654', changeNum: 'null', testTime: '2016-06-07T09:07:47.000Z', group: '2016-06-07', name: '2016-06-07T09:07:47.000Z', number: '773.884689484723' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '693.830828000791', dut: 'bn105', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest352.var_AutoTest_1_workspace_bn105', changeNum: 'null', testTime: '2016-06-08T12:04:25.000Z', group: '2016-06-08', name: '2016-06-08T12:04:25.000Z', number: '693.830828000791' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '312.075198736973', dut: 'tg333', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest336.var_AutoTest_1_workspace_tg333', changeNum: 'null', testTime: '2016-06-08T20:26:55.000Z', group: '2016-06-08', name: '2016-06-08T20:26:55.000Z', number: '312.075198736973' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '313.59968797816', dut: 'tg333', project: 'jericho-permitOnlySecurityAcls', release: 'null', client: 'arastra.atest336.var_AutoTest_1_workspace_tg333', changeNum: 'null', testTime: '2016-06-09T05:57:24.000Z', group: '2016-06-09', name: '2016-06-09T05:57:24.000Z', number: '313.59968797816' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '692.821988312062', dut: 'bn105', project: 'id.boise-dev.copp', release: 'null', client: 'arastra.atest352.var_AutoTest_1_workspace_bn105', changeNum: 'null', testTime: '2016-06-10T01:21:43.000Z', group: '2016-06-10', name: '2016-06-10T01:21:43.000Z', number: '692.821988312062' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '693.428557238076', dut: 'bn105', project: 'jericho-permitOnlySecurityAcls', release: 'null', client: 'arastra.atest352.var_AutoTest_1_workspace_bn105', changeNum: 'null', testTime: '2016-06-10T07:56:49.000Z', group: '2016-06-10', name: '2016-06-10T07:56:49.000Z', number: '693.428557238076' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', changeNum: 'null', client: 'null', dut: 'null', project: 'null', release: 'null', result: 0, testTime: '2016-06-11T00:00:00', group: '2016-06-11', name: '2016-06-11T00:00:00', number: 0 }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '319.122093101963', dut: 'tg333', project: 'id.boise-dev.copp', release: 'null', client: 'arastra.atest336.var_AutoTest_1_workspace_tg333', changeNum: 'null', testTime: '2016-06-12T14:24:35.000Z', group: '2016-06-12', name: '2016-06-12T14:24:35.000Z', number: '319.122093101963' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '385.646278031636', dut: 'in445', project: '2016.aclleak.0', release: 'null', client: 'arastra.atest309.var_AutoTest_1_workspace_in445', changeNum: 'null', testTime: '2016-06-12T22:53:52.000Z', group: '2016-06-12', name: '2016-06-12T22:53:52.000Z', number: '385.646278031636' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', changeNum: 'null', client: 'null', dut: 'null', project: 'null', release: 'null', result: 0, testTime: '2016-06-13T00:00:00', group: '2016-06-13', name: '2016-06-13T00:00:00', number: 0 }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '438.84888138203', dut: 'tg207', project: 'jericho-permitOnlySecurityAcls', release: 'null', client: 'arastra.atest342.var_AutoTest_1_workspace_tg207', changeNum: 'null', testTime: '2016-06-14T03:08:42.000Z', group: '2016-06-14', name: '2016-06-14T03:08:42.000Z', number: '438.84888138203' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '395.438908425625', dut: 'bh331', project: 'eos-trunk-veos.2', release: 'null', client: 'arastra.atest310.var_AutoTest_1_workspace_bh331', changeNum: 'null', testTime: '2016-06-14T23:27:47.000Z', group: '2016-06-14', name: '2016-06-14T23:27:47.000Z', number: '395.438908425625' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', changeNum: 'null', client: 'null', dut: 'null', project: 'null', release: 'null', result: 0, testTime: '2016-06-15T00:00:00', group: '2016-06-15', name: '2016-06-15T00:00:00', number: 0 }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '402.179019213188', dut: 'bh331', project: '2016.aclleak.0', release: 'null', client: 'arastra.atest310.var_AutoTest_1_workspace_bh331', changeNum: 'null', testTime: '2016-06-16T03:05:27.000Z', group: '2016-06-16', name: '2016-06-16T03:05:27.000Z', number: '402.179019213188' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '330.740030094981', dut: 'in438', project: 'jericho-permitOnlySecurityAcls-adityavd', release: 'null', client: 'arastra.atest321.var_AutoTest_1_workspace_in438', changeNum: 'null', testTime: '2016-06-16T10:46:12.000Z', group: '2016-06-16', name: '2016-06-16T10:46:12.000Z', number: '330.740030094981' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '308.753997602966', dut: 'in475', project: 'il.decatur-base', release: 'null', client: 'arastra.atest352.var_AutoTest_1_workspace_in475', changeNum: 'null', testTime: '2016-06-17T12:55:05.000Z', group: '2016-06-17', name: '2016-06-17T12:55:05.000Z', number: '308.753997602966' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', changeNum: 'null', client: 'null', dut: 'null', project: 'null', release: 'null', result: 0, testTime: '2016-06-18T00:00:00', group: '2016-06-18', name: '2016-06-18T00:00:00', number: 0 }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '324.497377324849', dut: 'in360', project: 'eos-trunk-veos.2', release: 'null', client: 'arastra.atest316.var_AutoTest_1_workspace_in360', changeNum: 'null', testTime: '2016-06-19T07:37:15.000Z', group: '2016-06-19', name: '2016-06-19T07:37:15.000Z', number: '324.497377324849' }, 
          { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '322.270796346013', dut: 'tg206', project: 'adityavd.caldwell', release: 'null', client: 'arastra.atest320.var_AutoTest_1_workspace_tg206', changeNum: 'null', testTime: '2016-06-20T12:05:59.000Z', group: '2016-06-20', name: '2016-06-20T12:05:59.000Z', number: '322.270796346013' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '397.688924644142', dut: 'in350', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest303.var_AutoTest_1_workspace_in350', changeNum: 'null', testTime: '2016-06-21T11:22:47.000Z', group: '2016-06-21', name: '2016-06-21T11:22:47.000Z', number: '397.688924644142' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '404.161647454835', dut: 'in350', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest303.var_AutoTest_1_workspace_in350', changeNum: 'null', testTime: '2016-06-21T11:49:42.000Z', group: '2016-06-21', name: '2016-06-21T11:49:42.000Z', number: '404.161647454835' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '347.031939296983', dut: 'bh336', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh336', changeNum: 'null', testTime: '2016-06-21T14:05:32.000Z', group: '2016-06-21', name: '2016-06-21T14:05:32.000Z', number: '347.031939296983' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '350.96449369425', dut: 'bh336', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh336', changeNum: 'null', testTime: '2016-06-21T14:27:39.000Z', group: '2016-06-21', name: '2016-06-21T14:27:39.000Z', number: '350.96449369425' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '348.077581071295', dut: 'bh336', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh336', changeNum: 'null', testTime: '2016-06-21T14:49:53.000Z', group: '2016-06-21', name: '2016-06-21T14:49:53.000Z', number: '348.077581071295' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '371.94596479414', dut: 'bh335', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh335', changeNum: 'null', testTime: '2016-06-21T15:02:14.000Z', group: '2016-06-21', name: '2016-06-21T15:02:14.000Z', number: '371.94596479414' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '349.525742535014', dut: 'bh336', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh336', changeNum: 'null', testTime: '2016-06-21T15:12:30.000Z', group: '2016-06-21', name: '2016-06-21T15:12:30.000Z', number: '349.525742535014' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '345.796770711895', dut: 'bh336', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh336', changeNum: 'null', testTime: '2016-06-21T15:34:28.000Z', group: '2016-06-21', name: '2016-06-21T15:34:28.000Z', number: '345.796770711895' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '348.303336041048', dut: 'bh336', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh336', changeNum: 'null', testTime: '2016-06-21T15:56:43.000Z', group: '2016-06-21', name: '2016-06-21T15:56:43.000Z', number: '348.303336041048' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '387.055594032165', dut: 'bh336', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh336', changeNum: 'null', testTime: '2016-06-21T16:19:05.000Z', group: '2016-06-21', name: '2016-06-21T16:19:05.000Z', number: '387.055594032165' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '480.007512573153', dut: 'yo614', project: 'baptiste.kni-lag.3', release: 'null', client: 'arastra.atest321.var_AutoTest_1_workspace_yo614', changeNum: 'null', testTime: '2016-06-22T07:52:21.000Z', group: '2016-06-22', name: '2016-06-22T07:52:21.000Z', number: '480.007512573153' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '303.6286518001', dut: 'in312', project: 'id.boise-dev.copp', release: 'null', client: 'arastra.atest320.var_AutoTest_1_workspace_in312', changeNum: 'null', testTime: '2016-06-22T20:20:42.000Z', group: '2016-06-22', name: '2016-06-22T20:20:42.000Z', number: '303.6286518001' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '439.457529829815', dut: 'tg293', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest347.var_AutoTest_1_workspace_tg293', changeNum: 'null', testTime: '2016-06-23T00:30:09.000Z', group: '2016-06-23', name: '2016-06-23T00:30:09.000Z', number: '439.457529829815' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '370.799120995216', dut: 'bh335', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh335', changeNum: 'null', testTime: '2016-06-23T18:53:47.000Z', group: '2016-06-23', name: '2016-06-23T18:53:47.000Z', number: '370.799120995216' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '326.262601628434', dut: 'tg457', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest305.var_AutoTest_1_workspace_tg457', changeNum: 'null', testTime: '2016-06-23T21:08:40.000Z', group: '2016-06-23', name: '2016-06-23T21:08:40.000Z', number: '326.262601628434' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '494.891214306001', dut: 'yo305', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest349.var_AutoTest_1_workspace_yo305', changeNum: 'null', testTime: '2016-06-24T06:07:55.000Z', group: '2016-06-24', name: '2016-06-24T06:07:55.000Z', number: '494.891214306001' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '372.260804828256', dut: 'bh335', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest302.var_AutoTest_1_workspace_bh335', changeNum: 'null', testTime: '2016-06-24T09:34:06.000Z', group: '2016-06-24', name: '2016-06-24T09:34:06.000Z', number: '372.260804828256' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '679.398491040338', dut: 'tg461', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest330.var_AutoTest_1_workspace_tg461', changeNum: 'null', testTime: '2016-06-24T22:51:51.000Z', group: '2016-06-24', name: '2016-06-24T22:51:51.000Z', number: '679.398491040338' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', changeNum: 'null', client: 'null', dut: 'null', project: 'null', release: 'null', result: 0, testTime: '2016-06-25T00:00:00', group: '2016-06-25', name: '2016-06-25T00:00:00', number: 0 }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '329.740234551951', dut: 'in204', project: 'id.boise-dev.copp', release: 'null', client: 'arastra.atest337.var_AutoTest_1_workspace_in204', changeNum: 'null', testTime: '2016-06-26T12:58:06.000Z', group: '2016-06-26', name: '2016-06-26T12:58:06.000Z', number: '329.740234551951' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '343.182589025237', dut: 'in449', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest317.var_AutoTest_1_workspace_in449', changeNum: 'null', testTime: '2016-06-26T22:19:13.000Z', group: '2016-06-26', name: '2016-06-26T22:19:13.000Z', number: '343.182589025237' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '385.45533508528', dut: 'in449', project: '2016.aclleak.0', release: 'null', client: 'arastra.atest317.var_AutoTest_1_workspace_in449', changeNum: 'null', testTime: '2016-06-27T04:09:20.000Z', group: '2016-06-27', name: '2016-06-27T04:09:20.000Z', number: '385.45533508528' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '470.833928228356', dut: 'tg455', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest347.var_AutoTest_1_workspace_tg455', changeNum: 'null', testTime: '2016-06-27T19:40:57.000Z', group: '2016-06-27', name: '2016-06-27T19:40:57.000Z', number: '470.833928228356' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '706.925054340623', dut: 'bn105', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest352.var_AutoTest_1_workspace_bn105', changeNum: 'null', testTime: '2016-06-28T10:23:17.000Z', group: '2016-06-28', name: '2016-06-28T10:23:17.000Z', number: '706.925054340623' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '383.550568769686', dut: 'in449', project: 'secondary-vip', release: 'null', client: 'arastra.atest317.var_AutoTest_1_workspace_in449', changeNum: 'null', testTime: '2016-06-29T00:05:48.000Z', group: '2016-06-29', name: '2016-06-29T00:05:48.000Z', number: '383.550568769686' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '599.874120730907', dut: 'tg409', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest352.var_AutoTest_1_workspace_tg409', changeNum: 'null', testTime: '2016-06-29T03:35:05.000Z', group: '2016-06-29', name: '2016-06-29T03:35:05.000Z', number: '599.874120730907' }, { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '410.844421080314', dut: 'tg401', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest333.var_AutoTest_1_workspace_tg401', changeNum: 'null', testTime: '2016-06-29T13:31:42.000Z', group: '2016-06-29', name: '2016-06-29T13:31:42.000Z', number: '410.844421080314' },
          { benchmark: 'AclTest.PAcl.Modular.defaultConfigReloadTimeAbsolute', result: '613.982377104461', dut: 'yo654', project: 'id.caldwell-dev', release: 'null', client: 'arastra.atest337.var_AutoTest_1_workspace_yo654', changeNum: 'null', testTime: '2016-06-29T18:33:09.000Z', group: '2016-06-29', name: '2016-06-29T18:33:09.000Z', number: '613.982377104461' } ]


var temData_uniqProject=["id.boise-th","ga.peachtree","id.caldwell-dev","2016.aclleak.0","jericho-permitOnlySecurityAcls","id.boise-dev.copp","eos-trunk-veos.2","jericho-permitOnlySecurityAcls-adityavd","il.decatur-base","adityavd.caldwell","baptiste.kni-lag.3","secondary-vip"];

var temData_uniqDut=["bh321","tg249","bh201","in457","bh310","bh336","bh330","tg248","yo654","bn105","tg333","in445","tg207","bh331","in438","in475","in360","tg206","in350","bh335","yo614","in312","tg293","tg457","yo305","tg461","in204","in449","tg455","tg409","tg401"];

var tempData_uniqResult=[434.040148800937,389.799627420027,397.909474943997,350.375911206007,386.247876017122,341.298096654937,367.330160305835,359.76732564182,773.884689484723,693.830828000791,312.075198736973,313.59968797816,692.821988312062,693.428557238076,319.122093101963,385.646278031636,438.84888138203,395.438908425625,402.179019213188,330.740030094981,308.753997602966,324.497377324849,322.270796346013,397.688924644142,404.161647454835,347.031939296983,350.96449369425,348.077581071295,371.94596479414,349.525742535014,345.796770711895,348.303336041048,387.055594032165,480.007512573153,303.6286518001,439.457529829815,370.799120995216,326.262601628434,494.891214306001,372.260804828256,679.398491040338,329.740234551951,343.182589025237,385.45533508528,470.833928228356,706.925054340623,383.550568769686,599.874120730907,410.844421080314,613.982377104461];

var inputResponseJsonSample=[{
	"meanBt": "3:05:28",
	"medianBt": "1:03:12",
	"meanBpd": "0.91",
	"medianBpd": "0.81",
	"hosts": "134",
	"passP": "71",
	"date": "2015-07-25",
	"zeroTOoneHr": "140",
	"oneTOtwoHr": "210",
	"twoTOthreeHr": "56",
	"greateThanr3Hr": "20",
	"sum": "426",
	"uniq": "410"
},
{
	"meanBt": "2:15:20",
	"medianBt": "1:03:12",
	"meanBpd": "0.91",
	"medianBpd": "0.81",
	"hosts": "134",
	"passP": "71",
	"date": "2015-07-26",
	"zeroTOoneHr": "140",
	"oneTOtwoHr": "210",
	"twoTOthreeHr": "56",
	"greateThanr3Hr": "20",
	"sum": "426",
	"uniq": "400"
}];
var outputExpectedJsonSample=[{
	"meanBt": "3:05:28",
	"medianBt": "1:03:12",
	"meanBpd": "0.91",
	"medianBpd": "0.81",
	"hosts": "134",
	"passP": "71",
	"date": "2015-07-25",
	"zeroTOoneHr": "140",
	"oneTOtwoHr": "210",
	"twoTOthreeHr": "56",
	"greateThanr3Hr": "20",
	"sum": "426",
	"uniq": "410",
	"text01": "0-1 Hr",
	"val01": "140",
	"text12": "1-2 Hr",
	"val12": "210",
	"text23": "2-3 Hr",
	"val23": "56",
	"text3": ">3 Hr",
	"val3": "20",
	"meanValue": 426
},
{
	"meanBt": "2:15:20",
	"medianBt": "1:03:12",
	"meanBpd": "0.91",
	"medianBpd": "0.81",
	"hosts": "134",
	"passP": "71",
	"date": "2015-07-26",
	"zeroTOoneHr": "140",
	"oneTOtwoHr": "210",
	"twoTOthreeHr": "56",
	"greateThanr3Hr": "20",
	"sum": "426",
	"uniq": "400",
	"text01": "0-1 Hr",
	"val01": "140",
	"text12": "1-2 Hr",
	"val12": "210",
	"text23": "2-3 Hr",
	"val23": "56",
	"text3": ">3 Hr",
	"val3": "20",
	"meanValue": 426
}];
var weekDataSample=[{
	"medianBt": "01:34:46",
	"meanBt": "03:04:18",
	"date": "2015-12-10",
	"sum": "1915",
	"uniq": "1033",
	"hosts": "132",
	"passP": "56",
	"meanBpd": "1.82",
	"medianBpd": "1.00",
	"zeroTOoneHr": 588,
	"oneTOtwoHr": 602,
	"twoTOthreeHr": 167,
	"greateThanr3Hr": 558
},
{
	"medianBt": "01:25:06",
	"meanBt": "02:39:59",
	"date": "2015-12-11",
	"sum": "2093",
	"uniq": "1199",
	"hosts": "136",
	"passP": "55",
	"meanBpd": "1.75",
	"medianBpd": "1.00",
	"zeroTOoneHr": 676,
	"oneTOtwoHr": 706,
	"twoTOthreeHr": 184,
	"greateThanr3Hr": 527
},
{
	"medianBt": "01:15:41",
	"meanBt": "02:28:14",
	"date": "2015-12-12",
	"sum": "2271",
	"uniq": "1430",
	"hosts": "131",
	"passP": "57",
	"meanBpd": "1.56",
	"medianBpd": "1.00",
	"zeroTOoneHr": 811,
	"oneTOtwoHr": 770,
	"twoTOthreeHr": 172,
	"greateThanr3Hr": 518
},
{
	"medianBt": "01:14:26",
	"meanBt": "02:32:17",
	"date": "2015-12-13",
	"sum": "2258",
	"uniq": "1433",
	"hosts": "136",
	"passP": "61",
	"meanBpd": "1.57",
	"medianBpd": "1.00",
	"zeroTOoneHr": 861,
	"oneTOtwoHr": 699,
	"twoTOthreeHr": 147,
	"greateThanr3Hr": 551
},
{
	"medianBt": "01:17:22",
	"meanBt": "02:22:23",
	"date": "2015-12-14",
	"sum": "2293",
	"uniq": "1468",
	"hosts": "131",
	"passP": "60",
	"meanBpd": "1.54",
	"medianBpd": "1.00",
	"zeroTOoneHr": 796,
	"oneTOtwoHr": 801,
	"twoTOthreeHr": 167,
	"greateThanr3Hr": 529
},
{
	"medianBt": "01:25:38",
	"meanBt": "02:36:51",
	"date": "2015-12-15",
	"sum": "2072",
	"uniq": "1382",
	"hosts": "134",
	"passP": "60",
	"meanBpd": "1.48",
	"medianBpd": "1.00",
	"zeroTOoneHr": 707,
	"oneTOtwoHr": 638,
	"twoTOthreeHr": 168,
	"greateThanr3Hr": 559
},
{
	"medianBt": "01:22:14",
	"meanBt": "02:47:26",
	"date": "2015-12-16",
	"sum": "2044",
	"uniq": "1368",
	"hosts": "135",
	"passP": "62",
	"meanBpd": "1.51",
	"medianBpd": "1.00",
	"zeroTOoneHr": 705,
	"oneTOtwoHr": 600,
	"twoTOthreeHr": 181,
	"greateThanr3Hr": 558
}]

  var dateobject={"brushfromDt" :"2015-12-13",
     		  "brushtoDt" : "2015-12-16",
              "sliderfromDt" : "2015-12-10",
              "slidertoDt" : "2015-12-16"
            }



var weekDataResult=[{
	"date": "2015-12-10-2015-12-16",
	"weekArry": [{
		"medianBt": "01:34:46",
		"meanBt": "03:04:18",
		"date": "2015-12-10",
		"sum": "1915",
		"uniq": "1033",
		"hosts": "132",
		"passP": "56",
		"meanBpd": "1.82",
		"medianBpd": "1.00",
		"zeroTOoneHr": 588,
		"oneTOtwoHr": 602,
		"twoTOthreeHr": 167,
		"greateThanr3Hr": 558
	},
	{
		"medianBt": "01:25:06",
		"meanBt": "02:39:59",
		"date": "2015-12-11",
		"sum": "2093",
		"uniq": "1199",
		"hosts": "136",
		"passP": "55",
		"meanBpd": "1.75",
		"medianBpd": "1.00",
		"zeroTOoneHr": 676,
		"oneTOtwoHr": 706,
		"twoTOthreeHr": 184,
		"greateThanr3Hr": 527
	},
	{
		"medianBt": "01:15:41",
		"meanBt": "02:28:14",
		"date": "2015-12-12",
		"sum": "2271",
		"uniq": "1430",
		"hosts": "131",
		"passP": "57",
		"meanBpd": "1.56",
		"medianBpd": "1.00",
		"zeroTOoneHr": 811,
		"oneTOtwoHr": 770,
		"twoTOthreeHr": 172,
		"greateThanr3Hr": 518
	},
	{
		"medianBt": "01:14:26",
		"meanBt": "02:32:17",
		"date": "2015-12-13",
		"sum": "2258",
		"uniq": "1433",
		"hosts": "136",
		"passP": "61",
		"meanBpd": "1.57",
		"medianBpd": "1.00",
		"zeroTOoneHr": 861,
		"oneTOtwoHr": 699,
		"twoTOthreeHr": 147,
		"greateThanr3Hr": 551
	},
	{
		"medianBt": "01:17:22",
		"meanBt": "02:22:23",
		"date": "2015-12-14",
		"sum": "2293",
		"uniq": "1468",
		"hosts": "131",
		"passP": "60",
		"meanBpd": "1.54",
		"medianBpd": "1.00",
		"zeroTOoneHr": 796,
		"oneTOtwoHr": 801,
		"twoTOthreeHr": 167,
		"greateThanr3Hr": 529
	},
	{
		"medianBt": "01:25:38",
		"meanBt": "02:36:51",
		"date": "2015-12-15",
		"sum": "2072",
		"uniq": "1382",
		"hosts": "134",
		"passP": "60",
		"meanBpd": "1.48",
		"medianBpd": "1.00",
		"zeroTOoneHr": 707,
		"oneTOtwoHr": 638,
		"twoTOthreeHr": 168,
		"greateThanr3Hr": 559
	},
	{
		"medianBt": "01:22:14",
		"meanBt": "02:47:26",
		"date": "2015-12-16",
		"sum": "2044",
		"uniq": "1368",
		"hosts": "135",
		"passP": "62",
		"meanBpd": "1.51",
		"medianBpd": "1.00",
		"zeroTOoneHr": 705,
		"oneTOtwoHr": 600,
		"twoTOthreeHr": 181,
		"greateThanr3Hr": 558
	}],
	"hosts": "135",
	"meanBpd": "11.230000000000002",
	"medianBpd": "7",
	"sum": "14946",
	"uniq": "9313",
	"passP": 58.714285714285715,
	"meanBt": "18:34:31",
	"medianBt": "9:37:16",
	"zeroTOoneHr": 5144,
	"oneTOtwoHr": 4816,
	"twoTOthreeHr": 1186,
	"greateThanr3Hr": 3800
}]
