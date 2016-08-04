/**
 * Contains all the files for server side scripting.
 *
 * @module server
 */
 /**
 * Initaiation of Data fetching/Updation process happens from this file
 * 
 *
 *
 * @class benchmarkDashboard_Process.js
 * @constructor
 */
var url = require("./url.js");
var common = require(url.commonJs);
var timeStamp = common.DisplaytimeStamp();
console.log("current timeStamp in the server is "+timeStamp);
if(timeStamp.slice(0,5)=="01:00") {
var func = require('./functionsForcronTime12.js');
func.deleteBenchmarks();
}
else {
var func = require('./functionsForcronTenMinutes.js');
func.getAllBenchmarksFrom_LocalBenchmark();
}
