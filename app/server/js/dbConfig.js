
exports.dbPool = function(){
var DB = require("../lib/node_modules/mysql");
var pool = DB.createPool({
		connectionLimit : 30,
        connectTimeout  : 60 * 60 * 1000,
        aquireTimeout   : 60 * 60 * 1000,    
		host : "benchmark.aristanetworks.com",
		database : "benchmark",
		user : "arastra",
		port : 3306,
		timezone : "UTC"
	});
return pool;	
}
