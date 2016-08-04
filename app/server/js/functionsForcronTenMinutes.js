/**
 * Contains all the files for server side scripting.
 *
 * @module server
 */
 /**
 * This file contains functions which will be active every 10 minutes
 * 
 *
 *
 * @class functionsForcronTenMinutes.js
 * @constructor
 */


var dbConf = require("./dbConfig.js");
var queries = require("./queries.js");
var common = require("./common.js");
var async = require("../lib/node_modules/async");
var url = require("./url.js");

var yearBenchmarks = [];
var timeStamp;
var usserverconnection;
var maintainA = [];
var maintainB = [];
var thisFile = require('./functionsForcronTenMinutes.js');
var multiplePushTorun = false;
var connectionTimes = 0;
var tryingToConnectAt,connectedAt,firedAt,fetchedAt;
/*exports.checkFlagInTable = function() {
	//var file = "../DataBase/localData.db";
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var connection = new sqlite3.Database(url.rawFile);
	connection.all(queries.updateFlag("select"), function (error, result) {
		if (error)
			console.log(error);
		else {
			if (result[0].Flag == "false") {
				console.log("Flag is false in the table. so continuing...");
				thisFile.getAllBenchmarksFrom_LocalBenchmark();
			} 
			else{
				console.log("another cronjob is running. so exiting....");
				process.exit(1);
            }

		}
	});

}*/

/**
 * This function fires the query to localData.db and 
 * fetches all the benchmark Names from the Local_Benchmark table
 *
 *
 * @function getAllBenchmarksFrom_LocalBenchmark()
 * @return {}      : null
**/

exports.getAllBenchmarksFrom_LocalBenchmark = function() {

	//var file = "../DataBase/localData.db";
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var connection = new sqlite3.Database(url.rawFile);
	connection.all(queries.BenchmarkTable("allBencmarks"), function (error, benchmarks) {
		if (error){
            
			console.log(error);}
		else {

			benchmarks.map(function (d, i) {
				yearBenchmarks.push(d.id);
			});
			thisFile.getLatestTimestamp();
		}
	});

}

/**
 * fires query and fetches the timestamp of the last record fetched and
 * calls fetchDataFromTable_Run() function with this timestamp as input parameter
 *
 *
 * @function getLatestTimestamp()
 * @return {}      : null
**/

exports.getLatestTimestamp = function() {
    var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var connection = new sqlite3.Database(url.rawFile);
	connection.each(queries.Local_RunTable("timestamp"), function (error, result) {
		if (error)
        {
			console.log(error);
        }
		else {
			timeStamp = result.testTime;
			console.log(timeStamp);
			thisFile.fetchDataFromTable_Run(timeStamp);
		}
	});

}

/**
 * fires query to the benchmark Database and fetches the data that is updated from the last timestamp
 *
 *
 * @function fetchDataFromTable_Run()
 * @return {}      : null
**/

exports.fetchDataFromTable_Run = function() {
    tryingToConnectAt = common.DisplayCurrentUTCTime();
    var pool = dbConf.dbPool();
	pool.getConnection(function (err, cursor) {
		console.log("trying to connect... to DB");
		if (err) {
            console.log(err);
			connectionTimes++;
			if(connectionTimes==6){
				console.log("unable to connect to database. \n exiting.");
				process.exit(1);
			}
			else{
			setTimeout(function(){
				thisFile.fetchDataFromTable_Run();
			},2000);
		}
		} else {
            connectedAt = common.DisplayCurrentUTCTime();
            firedAt = common.DisplayCurrentUTCTime();
            usserverconnection = cursor;
			cursor.query(queries.RunTable("testTime", timeStamp), function (err, Run_recordset) {
				if (err) {
					console.log("error" + err);
					return;
				} else {
                    fetchedAt = common.DisplayCurrentUTCTime();
					Run_recordset = JSON.stringify(Run_recordset);
					Run_recordset = JSON.parse(Run_recordset);
					var Data = common.clone(Run_recordset);
					if(Data.length==0)
						thisFile.updateTimeAndExit();
					else
					thisFile.decisionMaking(Data);

				}
			});

		}

	});

}

/**
 * Based on the
 *
 *
 * @function decisionMaking()
 * @param {Array}  : Data
 * @return {}      : null
**/

exports.decisionMaking = function(Data) {
    

	Data.map(function (d, i) {

		if ((i + 1) == Data.length) {
			console.log(maintainB);
			if(maintainA.length!=0){
				thisFile.PushToTable_LocalRun(maintainA);
			if(maintainB.length!=0){
				multiplePushTorun = true;
				thisFile.fetchBenchmarksFromTable_Run(); 	
			}
			}
			
		} else {


			if ((yearBenchmarks.indexOf(d.benchmark)) != -1) {
				maintainA.push(d);
			} else {
                if(maintainB.indexOf(d.benchmark)==-1)
				    maintainB.push(d.benchmark);

			}

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
	console.log(Run_data.length);
	Run_data.map(function (d, i) {
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
			var fullStm = queries.Local_RunTable("insert") + stm;
			console.log("about to push into Local_Run table");
			//var file = "../DataBase/localData.db";
			var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
			var connection = new sqlite3.Database(url.rawFile);
			connection.run(fullStm, function (error) {
				if (error)
					console.log(error);
				else {
					console.log("pushed Data to Local_Run Table");
					if(multiplePushTorun)
					             return;
					else
					 	thisFile.updateTimeAndExit();
				}
			});

		} else {

			stm = stm + '("' + benchmark + '","' + result + '","' + dut + '","' + project + '","' + release + '","' + client + '","' + changeNum + '","' + testTime + '"),';
		}
	});

}

/**
 * If any new benchmark has added in a day. then fetches its latest 50 records from Run table of benchmark Database
 *
 *
 * @function fetchBenchmarksFromTable_Run()
 * @return {}      : null
**/

exports.fetchBenchmarksFromTable_Run = function() {
	var stm = "";
	maintainB.map(function (d, i) {
		var benchmark = d;
		if ((i + 1) == (maintainB.length)) {
			stm = stm + "(select * from benchmark.Run where benchmark = '" + benchmark + "' order by testTime desc limit 50)";
			var fullStm = stm;
			fetch();
			function fetch() {
				usserverconnection.query(fullStm, function (error, result) {
					if (error) {
						console.log(error);
					} else {
						console.log("number of records for this benchmarks is " + result.length);
						result = JSON.stringify(result);
						result = JSON.parse(result);
						Data = common.clone(result);
						setTimeout(function(){
							multiplePushTorun = false;
							thisFile.PushToTable_LocalRun(Data);
						},5000);
						
					}
				});

			}

			stm = "";
		} else {

			stm = stm + "(select * from benchmark.Run where benchmark = '" + benchmark + "' order by testTime desc limit 50) union all";
		}

	});

   /* else{
    console.log("there are no new benchmarks for which data to be fetched!!");
            
        updateFlag();
        
    }*/

}

/**
 * This function will connect to localData.db and updates the Time in timeValue table
 * and exits the process.
 *
 *
 * @function updateTimeAndExit()
 * @return {}      : null
**/

exports.updateTimeAndExit = function(){
			var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
			var connection = new sqlite3.Database(url.rawFile);
            var lastUpdated = (new Date()).toUTCString();
			connection.run(queries.timeValue("insert",lastUpdated), function (error) {
                if(error)
                    console.log(error);
                else 
                {
                    console.log("time updated");
                    connection.run(queries.InsertIntoCheckPointTimes(tryingToConnectAt,connectedAt,firedAt,fetchedAt),function(error){
                        if(error)
                            console.log(error);
                        else{
                            console.log("updated checkPointTimes Table");
                            process.exit(1);
                        }
                    });
                }
            });
}