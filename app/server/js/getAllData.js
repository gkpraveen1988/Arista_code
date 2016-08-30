/**
 * Contains all the files for server side scripting.
 *
 * @module server
 */
 /**
 * This file contains functions which will fetch all the last 365 days Data from benchmark Database (SERVER)
 * 
 *
 *
 * @class getAllData.js
 * @constructor
 */



var dbConf = require("./dbConfig.js");
var queries = require("./queries.js");
var common = require("./common.js");
var async = require("../lib/node_modules/async");
var thisFile = require("./getAllData.js");
var url = require('./url.js');
var globalConnection;
var usserverconnection2;
var GlobalId = 0;
var Local_ID;
var GLOBALARRAY = [];
var asyncArray = [];
var fullStm = [];
var fullStmArrayIndex = 0;
/**
 * A connection to the database is made and control is passed to other function
 *
 *
 * @function ConnectToDataBase()
 * @return {} : null
**/
var pool = dbConf.dbPool();
exports.ConnectToDataBase = function () {


	pool.getConnection(function (err, cursor) {
		console.log("trying to connect... to DB first connection");
		if (err) {
			console.log(err);
			return;
		} else {
			console.log("connected successfully");
			exports.usserverconnection = cursor;
			thisFile.fetchDataFromTable_Run();
	
		}

	});
}

			function fetch() {
						//console.log("in function fetch");
								//console.log(fullStm);
						pool.getConnection(function (err, cursor) {
							console.log("trying to connect... to DB");
							if (err) {
								console.log(err);
								console.log("here is the error");
								fetch();								
								return;
							} else {     
                                console.log("connected");
                                cursor.query(fullStm[fullStmArrayIndex], function (error, result) {
								//thisFile.usserverconnection.query(fullStm, function (error, result) {
									if (error){
										console.log(error);

										}
									else {
										console.log("number of records for this benchmarks is "+result.length);
										//console.log("total number of benchmarks is "+Benchmark_recordset.length);
										//console.log("i value is "+i);
										result = JSON.stringify(result);
										result = JSON.parse(result);
										var Data = common.clone(result);
										GLOBALARRAY.push(Data);
                                        cursor.release();
/*										if (i == Benchmark_recordset.length || (i + 1) == Benchmark_recordset.length) {
											var finalARRAY = [].concat.apply([], GLOBALARRAY);
											console.log("total no. of records is " + finalARRAY.length);
										}*/
										thisFile.PushToTable_LocalRun(Data);
										
									}
								});
                        							}

						});
                fullStmArrayIndex += 1;
					}


/**
 * This function will fire queries and fetches all the data from current date to last 365 days,
 * from the Run table (Database in server).
 *
 *
 * @function fetchDataFromTable_Run()
 * @return {} : null
**/

 exports.fetchDataFromTable_Run = function() {
	console.log("in fetchDataFromTable_Run() function");
	stm = "";
			var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
			var connection = new sqlite3.Database(url.rawFile);
	connection.all(queries.BenchmarkTable("allBencmarks"), function (err, Benchmark_recordset) {
		if (err) {
			console.log("error" + err);
			return;
		} else {
			console.log("got the benchmarks");
			console.log(Benchmark_recordset.length);
			Benchmark_recordset.map(function (d, i) {
				benchmark = d.id;
				if ((i % 30) == 0 || (i + 1) == (Benchmark_recordset.length)) {
					console.log("i value is " + i + " control in the if loop");
					stm = stm + "(select * from benchmark.Run where benchmark = '" + benchmark + "' order by testTime desc limit 50)";
					var fullStm = stm;

					function fetch() {
								thisFile.usserverconnection.query(fullStm, function (error, result) {
									if (error){
										console.log(error);

										}
									else {
										console.log("number of records for this benchmarks is "+result.length);
										console.log("total number of benchmarks is "+Benchmark_recordset.length);
										console.log("i value is "+i);
										result = JSON.stringify(result);
										result = JSON.parse(result);
										Data = common.clone(result);
										GLOBALARRAY.push(Data);
										if (i == Benchmark_recordset.length || (i + 1) == Benchmark_recordset.length) {
											var finalARRAY = [].concat.apply([], GLOBALARRAY);
											console.log("total no. of records is " + finalARRAY.length);
										}
										thisFile.PushToTable_LocalRun(Data);
										
									}
								});
					}
					asyncArray.push(fetch);

					stm = "";
				} else {

					stm = stm + "(select * from benchmark.Run where benchmark = '" + benchmark + "' order by testTime desc limit 50) union all";
				}
			});
			console.log("starting the async parallel");
			async.parallel(asyncArray);
		}

	});

}

/**
 * This function will connect to localData.db and pushes the data into the Local_Run table
 *
 *
 * @function PushToTable_LocalRun()
 * @param  {Array} : Run_data
 * @return {}      : null
**/
 
 exports.PushToTable_LocalRun = function(Run_data) {
	var stm = "";

	Run_data.map(function (d, i) {
		Local_ID = GlobalId + i + 1;
		benchmark = d.benchmark;
		result = d.result;
		dut = d.dut;
		project = d.project;
		release = d.release;
		client = d.client;
		changeNum = d.changeNum;
		testTime = d.testTime;

		if ((i + 1) == (Run_data.length)) {
			stm = stm + '("' + benchmark + '","' + result + '","' + dut + '","' + project + '","' + release + '","' + client + '","' + changeNum + '","' + testTime + '")';
			var fullStm = 'INSERT OR REPLACE INTO Local_Run (benchmark, result, dut, project, release, client, changeNum, testTime) VALUES' + stm;
			console.log("about to push into Local_Run table");
			var file = "../DataBase/localData.db";
			var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
			var connection = new sqlite3.Database(url.rawFile);
			connection.run(fullStm, function (error) {
				if (error)
					console.log(error);
				else {
					console.log("pushed Data to Local_Run Table");
					GlobalId = GlobalId + parseInt(Run_data.length);
					return;
				}
			});

		} else {

			stm = stm + '("' + benchmark + '","' + result + '","' + dut + '","' + project + '","' + release + '","' + client + '","' + changeNum + '","' + testTime + '"),';
		}
	});

}