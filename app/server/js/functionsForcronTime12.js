/**
 * Contains all the files for server side scripting.
 *
 * @module server
 */
 /**
 * This file contains functions which will be active at 12:00 AM every morning
 * 
 *
 *
 * @class functionsForcronTime12.js
 * @constructor
 */


var dbConf = require("./dbConfig.js");
var queries = require("./queries.js");
var common = require("./common.js");
var async = require("../lib/node_modules/async");
//var pool = dbConf.dbPool();
var thisFile = require('./functionsForcronTime12.js');
var url = require('./url.js');

/**
 * checks and deletes the records of those benchmarks which doesnot fall in the last 365 days
 * 
 *
 * @function deleteBenchmarks()
 * @return {}      : null
**/

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

/**
 * This function maintains the table in such a way, Anytime  latest 50 records of all the benchmarks
 * of current day to last 365 days will be there. Data is refined everyday
 *
 *
 * @function updateLocal_RunTable()
 * @return {}      : null
**/ 
 
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
														console.log("done with the changes");														                                process.exit(1);
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
