/**
 * Contains all the files for server side scripting.
 *
 * @module server
 */
 /**
 * This file contains functions for connecting to benchmark Database, fetching and updating the 
 * Info,Local_Benchmark and Local_run tables
 * 
 *
 *
 * @class functionsFordbConnect.js
 * @constructor
 */

var dbConf = require("./dbConfig.js") ;
var queries = require("./queries.js");
var common = require("./common.js");
var GetAllData = require("./getAllData.js");
var pool  = dbConf.dbPool();
var globalconnection;

var GlobalId;
var fs = require("fs");
var url = require('./url.js');
var ldb;
var thisFile = require('./functionsFordbConnect.js');
var func  = require('./functionsFordbConnect.js');

/**
 * checks whether Database file/(.db file) is created, if not creates one
 * with localData as database name
 *
 *
 * @function DatabaseFileCheck()
 * @return {}      : null
**/

 exports.DatabaseFileCheck = function(){
     
var exists = fs.existsSync(url.rawFile);
     console.log(exists);
if (!exists) {
	console.log("Creating DB file.");
	fs.openSync(url.rawFile, "w");
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	ldb = new sqlite3.Database(url.rawFile);
	thisFile.createTables(ldb);
	thisFile.ConnectToDataBase();
} else {
    
	thisFile.ConnectToDataBase();
}
}

/**
 * pushes the fetched benhcmark names and their descriptions into the Info table (localData.db)
 *
 *
 * @function PushToTable_Info()
 * @param  {Array} : data
 * @return {}      : null
**/ 
 
  exports.PushToTable_Info = function(data){
    var stm = "";
	var i = 0;

	data.map(function (d, i) {
		i = i + 1;
		id = common.clone(d.id);
		description = (d.description).replace(/"/g, '\""');
		if (i == (data.length)) {
			stm = stm + '("' + i + '","' + id + '","' + description + '")';
			var fullStm = queries.Info("insert","") + stm;
			console.log("about to push into Info Table");
			var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
			var connection = new sqlite3.Database(url.rawFile);
			connection.run(fullStm, function (err) {
				if (err)
					console.log(err);
				else {
					console.log("pushed Data to Info Table");
                    thisFile.fetchBenchmarksFromTable_Run();
				}

			});

		} else {

			stm = stm + '("' + i + '","' + id + '","' + description + '"),';
		}
	});


}

/**
 * Fires query to benchmark Database and fetches all the benchmark names and their descriptions
 * from benchmark table
 *
 * @function fetchDataFromTable_Benchmark()
 * @return {}      : null
**/   
  
 exports.fetchDataFromTable_Benchmark = function(){
   func.usserverconnection.query(queries.BenchmarkTable("all"),function (err,result) {
       
        if(err) {
            console.log(err);
            return;
        }
        else{
            result = JSON.stringify(result);
			result = JSON.parse(result);
			var Data = common.clone(result);
			thisFile.PushToTable_Info(Data);
        
        }
        
    
    
    });
    
    
}

/**
 * A connection to the database is made and control is passed to other function
 *
 *
 * @function ConnectToDataBase()
 * @return {} : null
**/
 
 exports.ConnectToDataBase = function() {
	pool.getConnection(function (err, cursor) {
		console.log("trying to connect... to DB");
		if (err) {
			console.log(err);
			return;
		} else {
			console.log("successfully connected");
			globalconnection = cursor;
            exports.usserverconnection  = globalconnection;
            thisFile.fetchDataFromTable_Benchmark();
		}

	});
}

/**
 * fires query to benchmark database and fetches all the benchmarks which lies between
 * current day and last 365 days from the Run table
 *
 *
 * @function fetchBenchmarksFromTable_Run()
 * @return {}      : null
**/ 

 exports.fetchBenchmarksFromTable_Run = function() {
    var dates = common.createDateObject();
    console.log(dates);
	func.usserverconnection.query(queries.RunTable("allBenchmarks","",dates.lastDate,dates.currentDate), function (err, Benchmark_recordset) {
		if (err) {
			console.log("error" + err);
			return;
		} else {
            
			Benchmark_recordset = JSON.stringify(Benchmark_recordset);
			Benchmark_recordset = JSON.parse(Benchmark_recordset);
			var Data = common.clone(Benchmark_recordset);
            func.usserverconnection.destroy();
            console.log("destroyed the usserverconnection");
			thisFile.PushToTable_LocalBenchmark(Data);
		}
	});

}

/**
 * Creates the tables Local_Benchmark,
 *                    Local_Run,
 *                    Info,
 *                    timeValue,
 *                    checkPointTimes.
 * @function createTables()
 * @param {Object} ldb. ldb is database connection Object.
 */ 
 
 exports.createTables = function(ldb) {
	ldb.run(queries.createTable("Benchmark"), function (err) {
		if (err)
			console.log(err);
        else {
		console.log("Benchmark table created");
		ldb.run(queries.createTable("Run"), function (err) {
			if (err)
				console.log(err);
            else{
			     console.log("Run table created");
                ldb.run(queries.createTable("Info"),function (err){
                    if (err)
                        console.log(err);
                    else {
                        console.log("Info table created");
                        ldb.run(queries.createTable("updateFlag"),function (err){
                            if(err)
                                console.log(err);
                            else{
                                console.log("updateFlag table created");
                                ldb.run(queries.createTable("checkPointTimes"),function(err){
                                    if(err)
                                        console.log(err);
                                    else{
                                        console.log("checkPointTimes table created");
                                        ldb.run(queries.updateFlag("insert","false"),function (err){
                                            if(err)
                                                console.log(err);
                                            else
                                            {
                                            console.log("updated the flag as false");
                                            }
                                        })                                        
                                    
                                    }
                                })

                            }
                        
                        })
                    }
                
                
                });
            }
		});
        }
	});
}


/**
 * From the fetched benchmark names, first dropdown value is derived and then pushes into 
 * Local_Benchmark table in localData.db
 *
 *
 * @function PushToTable_LocalBenchmark()
 * @param  {Array} : Benchmark_data
 * @return {}      : null
**/ 

 exports.PushToTable_LocalBenchmark = function(Benchmark_data) {
    console.log(Benchmark_data.length+" is how many records");
	var stm = "";
	Benchmark_data.map(function (d, i) {
		id = common.clone(d.benchmark);
		tempValue = common.clone(d.benchmark);
		DotIndex = tempValue.indexOf(".");
		if (DotIndex == -1) {
			Value = tempValue;
			Flag = false;
		} else {
			Value = tempValue.slice(0, DotIndex);
			Flag = true;
		}
		if ((i+1) == (Benchmark_data.length)) {
			stm = stm + '("' + id + '","' + Value + '","' + Flag + '")';
			var fullStm = queries.BenchmarkTable("insert") + stm;
			console.log("about to push into Local_Benchmark Table");
			var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
			var connection = new sqlite3.Database(url.rawFile);
			connection.run(fullStm, function (err) {
				if (err)
					console.log(err);
				else {
					console.log("pushed Data to Local_Benchmark Table");
                    GetAllData.ConnectToDataBase();
				}

			});

		} else {

			stm = stm + '("' + id + '","' + Value + '","' + Flag + '"),';
		}
	});

}


