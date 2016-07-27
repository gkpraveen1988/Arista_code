
var dbConf = require("./dbConfig.js") ;
var queries = require("./queries.js");
var common = require("./common.js");
var GetAllData = require("./GetAllData.js");
var pool  = dbConf.dbPool();
var globalconnection;

var GlobalId;
var fs = require("fs");
var url = require('./url.js');
var ldb;
var thisFile = require('./functionsFordbConnect.js');
var func  = require('./functionsFordbConnect.js');

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
			//var file = "../DataBase/localData.db";
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



 exports.fetchBenchmarksFromTable_Run = function() {
	//var query = "select benchmark from benchmark.Run group by benchmark order by benchmark";
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

/*function fetchDataFromTable_Run(timeValue) {
	//var query = 'select * from benchmark.Run where testTime >="' + timeValue + '"';
	usserverconnection.query(queries.RunTable("testTime",timeValue,"",""), function (err, Run_recordset) {
		if (err) {
			console.log("error" + err);
			return;
		} else {
			Run_recordset = JSON.stringify(Run_recordset);
			Run_recordset = JSON.parse(Run_recordset);
			var Data = common.clone(Run_recordset);
			//PushToTable_Run(Data);

		}
	});

}*/

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
		//description = d.description;
		//description = description.replace(/"/g, '\""');
		if ((i+1) == (Benchmark_data.length)) {
			stm = stm + '("' + id + '","' + Value + '","' + Flag + '")';
			var fullStm = queries.BenchmarkTable("insert") + stm;
			console.log("about to push into Local_Benchmark Table");
			//var file = "../DataBase/localData.db";
			var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
			var connection = new sqlite3.Database(url.rawFile);
			connection.run(fullStm, function (err) {
				if (err)
					console.log(err);
				else {
					console.log("pushed Data to Local_Benchmark Table");
					//getIdFromLocal_Run();
                    GetAllData.ConnectToDataBase();
				}

			});

		} else {

			stm = stm + '("' + id + '","' + Value + '","' + Flag + '"),';
		}
	});

}

/*function PushToTable_LocalRun(Run_data) {
	var stm = "";
	var i = 0;
	var Local_Id;
	Run_data.map(function (d, i) {
		Local_Id = GlobalId + i + 1;
		console.log("Local_Id is " + Local_Id);
		i = i + 1;
		benchmark = d.benchmark;
		result = d.result;
		dut = d.dut;
		project = d.project;
		release = d.release;
		client = d.client;
		changeNum = d.changeNum;
		testTime = d.testTime;

		if (i == (Run_data.length)) {
			stm = stm + '("' + Local_Id + '","' + benchmark + '","' + result + '","' + dut + '","' + project + '","' + release + '","' + client + '","' + changeNum + '","' + testTime + '")';
			var fullStm = queries.Local_RunTable("insert") + stm;
			console.log("about to push into Local_Run table");
			var file = "../DataBase/localData.db";
			var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
			var connection = new sqlite3.Database(file);
			connection.run(fullStm, function (error) {
				if (error)
					console.log(error);
				else {
					console.log("pushed Data to Local_Run Table");
					process.exit(1);
				}
			});

		} else {

			stm = stm + '("' + Local_Id + '","' + benchmark + '","' + result + '","' + dut + '","' + project + '","' + release + '","' + client + '","' + changeNum + '","' + testTime + '"),';
		}
	});

}

function getIdFromLocal_Run() {
	console.log("getting the Last Id in the Local_Run Table");
	var file = "../DataBase/localData.db";
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var connection = new sqlite3.Database(file);
	connection.each(queries.Local_RunTable("maxID"), function (error, result) {
		if (error)
			console.log(error);
		else {
			GlobalId = result.key;
			//fetchDataFromTable_Run(result.testTime);
		}
	});

}*/

