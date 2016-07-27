var dbConf = require("./dbConfig.js");
var queries = require("./queries.js");
var common = require("./common.js");
var async = require("../lib/node_modules/async");
//var pool = dbConf.dbPool();
var thisFile = require('./functionsForcronTime12.js');
var url = require('./url.js');


 exports.deleteBenchmarks = function() {
	var dates = common.createDateObject();
	console.log(dates);
	//var file = "../DataBase/localData.db";
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var connection = new sqlite3.Database(url.rawFile);
	connection.all(queries.deleteQuery("deleteNotDateIds",dates.removeDate), function (error, result) {
		if (error)
			console.log(error);
		else {
			console.log(result);
			console.log("deleted the records successfully");
			thisFile.updateLocal_RunTable();
		}
	});

}

 exports.updateLocal_RunTable = function() {
	var file = "../DataBase/localData.db";
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var connection = new sqlite3.Database(url.rawFile);
	connection.all(queries.BenchmarkTable("allBencmarks"), function (error, benchmarks) {
		if (error)
			console.log(error);
		else {
			connection.all('CREATE TABLE IF NOT EXISTS Local_Run_temp (benchmark,result,dut,project,release,client,changeNum,testTime);', function (error) {
				if (error)
					console.log(error);
				else {
					var stm = queries.updateLocal_RunQuery("middleSet", "");
					benchmarks.map(function (d, i) {
						id = d.id;
						if ((i % 30) == 0 || (i + 1) == (benchmarks.length)) {
							if ((i + 1) == (benchmarks.length))
								stm = stm + queries.updateLocal_RunQuery("secondSet", id);
							else
								stm = stm + ' select * from (select * from Local_Run where benchmark = "' + id + '" order by testTime desc limit 50)';

							var fullStm = stm;
							//console.log(fullStm + "\n");
                            
							connection.all(fullStm, function (error) {
								if (error) {
									console.log(error);
									console.log("value of i is " + i);
								} else {
									console.log("updating the Local_Run table");
									if ((i + 1) == (benchmarks.length))
										connection.all(queries.updateLocal_RunQuery("AlterRunTable"), function (error) {
											if (error)
												console.log(error);
											else {
												console.log("successfully updated the table ");
												connection.all(queries.updateLocal_RunQuery("AlterTempTable"), function (error) {
													if (error)
														console.log(error);
													else {
														console.log("done with the changes");														
													}
												})
											}
										})
								}
							});
							stm = queries.updateLocal_RunQuery("middleSet", ""); ;
						} else {
							stm = stm + ' select * from (select * from Local_Run where benchmark = "' + id + '" order by testTime desc limit 50)union';

						}
					});
				}
			});
		}
	});
}
//thisFile.deleteBenchmarks();

/*changes are there in sometest.js file*/