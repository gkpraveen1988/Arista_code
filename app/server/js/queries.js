/**
 * Contains all the files for server side scripting.
 *
 * @module server
 */
 /**
 * This file is for Queries.
 * where ever required, parameters are passed to return the required query string.
 *
 *
 * @class queries.js
 * @constructor
 */
module.exports = {

	
	"createTable" : function (input) {
		if (input == "Benchmark") {
			var query = "CREATE TABLE Local_Benchmark (id TEXT PRIMARY KEY, firstDropDownValue TEXT, DropDownFlag TEXT)";
		}
		if (input == "Run") {
			var query = "CREATE TABLE Local_Run ( benchmark TEXT , result TEXT , dut TEXT, project TEXT, release TEXT, client TEXT, changeNum INTEGER, testTime TEXT)";

		}
        if (input == "Info") {
            var query = "CREATE TABLE Info (key INTEGER PRIMARY KEY, id TEXT, description TEXT)" ; 
        }
        if (input == "timeValue"){
            var query = "CREATE TABLE timeValue (key INTEGER PRIMARY KEY, lastUpdated TEXT)";
        }
		if (input == "checkPointTimes") {
			var query = "CREATE TABLE checkPointTimes (key INTEGER PRIMARY KEY,tryingToConnectAt TEXT,connectedAt TEXT,firedAt TEXT, fetchedAt TEXT)";

		}        
        if(input == "updateFlag")
        	var query = "CREATE TABLE updateFlag (key INTEGER PRIMARY KEY, Flag TEXT)";
		
		return query;

	},

	"BenchmarkTable" : function (input) {
		var query;

		if (input == "limit")
			query = "select * from Benchmark  limit 1";

		if (input == "all")
			query = "select * from Benchmark";
        
        if(input =="allBencmarks")
            query="select id from Local_Benchmark";

		if (input == "insert")
			query = 'INSERT OR REPLACE INTO Local_Benchmark (id,firstDropDownValue,DropDownFlag) VALUES ';

		if (input == "replace")
			query = 'REPLACE INTO Local_Benchmark (id,firstDropDownValue,DropDownFlag) VALUES ';

       // console.log(query);
		return query;

	},
    
    "Info" : function (input,value){
        var query;
        if(input=="insert")
            query = 'INSERT OR REPLACE INTO Info (key,id,description) VALUES ';
        
        if(input=="getDescription")
            query = 'select description from Info where id = "' + value + '" union select lastUpdated from timeValue';
        
        return query;
    
    },

	"RunTable" : function (input,timeValue,lastDate,currentDate) {
		var query;
		if(input == "count")
			query = 'select count(*) as count from benchmark.Run';
		if(input == "testTime")	
			query = 'select * from benchmark.Run where testTime >"' + timeValue + '"';
		if(input == "allBenchmarks")
			query = "select benchmark  from benchmark.Run  where substr(testTime,1,10) >='" + lastDate + "' and substr(testTime,1,10) <='" + currentDate + "' group by benchmark order by benchmark";

		//console.log(query);
		return query;

	},
	"AllData_RunTable" : function(limit, offset){
		var query = 'select * from Run limit '+limit+' offset '+offset+'';
		return query;

	},
	"Local_RunTable" : function(input,value){
		var query;
		if(input == "maxID")
			query='SELECT * FROM Local_Run WHERE key = (SELECT MAX(key) FROM Local_Run)';
		if(input == "insert")
			query = 'INSERT OR REPLACE INTO Local_Run (benchmark, result, dut, project, release, client, changeNum, testTime) VALUES';		
		if(input == "getIds")
			query = 'select id,DropDownFlag from Local_Benchmark where firstDropDownValue = "'+value+'"';
		if(input=="data")
			query = 'select * from Local_Run where benchmark = "'+value+'" order by testTime limit 50';
        
        if(input == "timestamp")
            query = 'select testTime from Local_Run order by testTime desc limit 1';

		
		return query;
	},
    
    "deleteQuery" : function (input,lastDate){
    var query;
        if(input=="idsNotINLocal_Benchmark")
        query = 'select * from (select benchmark from Local_Run  group by benchmark ) where benchmark NOT IN(SELECT id FROM Local_Benchmark)';
        
        if(input=="idsInINLocal_Benchmark")
        query = 'select * from (select benchmark from Local_Run  group by benchmark ) where benchmark IN(SELECT id FROM Local_Benchmark)';
        
		if(input == "notDateIds")
			query = "select * from (select benchmark from Local_Run where substr(testTime,1,10) ='" + lastDate + "' group by benchmark) where benchmark NOT IN(SELECT id FROM Local_Benchmark)";

		if(input == "deleteNotDateIds")
			query = "delete from Local_Run where benchmark in (select * from (select benchmark from Local_Run where substr(testTime,1,10) ='" + lastDate + "' group by benchmark) where benchmark NOT IN(SELECT id FROM Local_Benchmark))";        

           return query;
    
    },
    
    "updateLocal_RunQuery" : function(input,value){
        var query;
        if(input=="firstSet")
        query='CREATE TABLE Local_Run_temp (benchmark,result,dut,project,release,client,changeNum,testTime); INSERT INTO Local_Run_temp'
        

        
        if(input=="secondSet")
        query=' select * from (select * from Local_Run where benchmark = "'+value+'" order by testTime desc limit 50);COMMIT; ' ; 
        
        if(input=="middleSet")
            query='INSERT INTO Local_Run_temp';        
        
        if(input=="AlterTempTable")
            query='ALTER Table Local_Run_temp RENAME TO Local_Run; COMMIT;'
            
        if(input=="AlterRunTable")    
            query = 'DROP TABLE Local_Run';
     
    return query;
    },
    "timeValue" : function (input,value){
        if(input=="insert")
            var query = 'INSERT OR REPLACE INTO timeValue values (1,"'+value+'")';
        
        if(input=="get")
            var query = 'select lastUpdated from timeValue';
        
        return query;
    },
    "updateFlag" : function (input,value) {
    	if(input=="insert")
    		var query = 'insert or replace into updateFlag values(1,"'+value+'") ';
    	if(input=="select")
    		var query = 'select Flag from updateFlag';

    	return query;

    },
    "moreData" : function (input,benchmark,limit_value){
        if(input=="all")
            var query = 'select * from Run where benchmark = "'+benchmark+'" order by testTime';
        else
            var query = 'select * from Run where benchmark = "'+benchmark+'" order by testTime desc limit '+limit_value+'';
        
        return query;
    
    },
	"InsertIntoCheckPointTimes" : function (tryingToConnectAt,connectedAt, firedAt, fetchedAt) {
		var query = 'INSERT OR REPLACE INTO checkPointTimes (key,tryingToConnectAt, connectedAt, firedAt, fetchedAt) VALUES (1,"' + tryingToConnectAt + '","' + connectedAt + '","' + firedAt + '","' + fetchedAt + '")';
        
		return query;

	},
    "checkPointTimesTable" : function(){
        var query = 'select * from checkPointTimes';
    
        return query;
    
    }
    

}
    

    
    
    
    
    
    