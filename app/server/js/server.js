/**
 * Contains all the files for server side scripting.
 *
 * @module server
 */
/**
 * Creates the server in the host and gives response to the  UI.
 *
 * @class server.js
 * @constructor
 */

var http = require('http');
var fs = require('fs');
var path = require('path');
var thisFile = require('./server.js');
var status = require('./status.js');
var queries = require("./queries.js");
var dbConf = require("./dbConfig.js");
var url = require("./url.js");
var common = require("./common.js");

/**
 * Creates a server which listens for the clients on port 7000.
 * when got a request from client, checks all the request parameters sent from client.
 * @method createServer
 *
 * @param {Object} request. this request will contain the method of request either "GET" or "POST" and an url.
 * @param {Object} response. an Object which contains the response properties of server(http)
 **/
http.createServer(function (request, response) {
	console.log("server started");
	console.log("request type is " + request.method);
	//var filePath = url.templatePath + request.url;
	var filePath = "../../client" + request.url;
	var indexPage = "../../client/template/index.html";
	console.log(filePath);

	if (filePath == "../../client" + "/")
		filePath = indexPage;
	if (request.url == "/server/message.json")
		filePath = url.JSON;
	var extname = path.extname(filePath);
	console.log(extname + "--------");
	var contentType = 'text/html';
	switch (extname) {
	case '.js':
		contentType = 'text/javascript';
		break;
	case '.css':
		contentType = 'text/css';
		break;
	case '.json':
		contentType = 'application/json';
		break;
	}
	fs.exists(filePath, function (exists) {
		if (exists) {
			fs.readFile(filePath, function (error, content) {
				if (error) {
					response.writeHead(status.response.serverProblem);
					response.end();
				} else {
					if (request.method == 'POST') {
                        postRequestTime = common.DisplayCurrentUTCTime();
						request.on('data', function (chunk) {
                            
							requestParameter = decodeURIComponent(String(chunk));
							var requestParameterArry = requestParameter.split("&");
							var tempObj = {};
							requestParameterArry.forEach(function (d, i) {

								var key_value = d.split("=");
								tempObj[key_value[0]] = key_value[1];
							})

							requestJson = tempObj;
							console.log(requestJson);
                            requestJson.Value = decodeURIComponent(requestJson.Value);
							if (requestJson.Fetch == 'firstDropDownValue') {
								//console.log("so its firstDropDownValue dude")
								thisFile.getBenchmarks(response);
							}
							if (requestJson.Fetch == 'ids') {
								//console.log("so its id dude")
								thisFile.getIDs(response, requestJson.Value);
							}
							if (requestJson.Fetch == 'data') {
								//console.log("so its data dude");
                                //requestJson.Value = decodeURIComponent(requestJson.Value);
								thisFile.getData(response, requestJson.Value);
							}
							if (requestJson.Fetch == 'description') {
								//console.log("so its description dude");
                                //requestJson.Value = decodeURIComponent(requestJson.Value);
								thisFile.getDescription(response, requestJson.Value);
							}
							if (requestJson.Fetch == 'moreData') {
								//console.log("so its description dude");
                                //requestJson.Value = decodeURIComponent(requestJson.Value);
								thisFile.getDataFromServer(response, requestJson.Value);
							}                            

						});
						request.on('error', function (e) {
							console.log('problem with request: ' + e.message);
						});
					} else {
						//console.log(status.response.successful);
						console.log("failure");
						response.writeHead("failure", {
							'Content-Type' : contentType
						});
						response.end(content, 'utf-8');
					}
				}
			});
		} else {
			console.log("server response");
			response.writeHead(404);
			response.end();
		}
	});
}).listen(7777);


exports.getDataFromServer = function(response,value){
    var dataQuery;
console.log(value);
    value = value.split("-");
    recordsNumber = value[0];
    benchmarkName = value[1];
     console.log(recordsNumber);
    if(recordsNumber=="ALL")
        dataQuery = queries.moreData("all",benchmarkName);
    else{
        recordsNumber = parseInt(recordsNumber);
        dataQuery = queries.moreData("",benchmarkName,recordsNumber);
    }
    
    console.log(dataQuery);
    var pool = dbConf.dbPool();
	pool.getConnection(function (err, cursor) {
		console.log("trying to connect... to DB");
		if (err) {
			console.log(err);
			return;
		} else {
			cursor.query(dataQuery, function (err, Run_recordset) {
				if (err) {
					console.log("error" + err);
					return;
				} else {
                    thisFile.giveResponse(Run_recordset, response);
                    cursor.destroy();
/*					Run_recordset = JSON.stringify(Run_recordset);
					Run_recordset = JSON.parse(Run_recordset);
					var Data = common.clone(Run_recordset);
					decisionMaking(Data);*/

				}
			});

		}

	});

}

exports.getDescription = function (response, value) {
    
	//value = value.replace(/[+]/g, " ");
    //console.log(value+" this is the value in getDescription function");
	//var file = "../DataBase/localData.db";

	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var db = new sqlite3.Database(url.rawFile);
	db.serialize(function () {

		db.all(queries.Info("getDescription", value), function (error, Data) {
			if (error) {
				console.log(error);
				return;
			} else {
				console.log("got the description");
				thisFile.giveResponse(Data, response);

			}
		})
	});

}

exports.getData = function (response, value) {

	//value = value.replace(/[+]/g, " ");

	//console.log("---------------------------" + value)

	//var file = "../DataBase/localData.db";
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var db = new sqlite3.Database(url.rawFile);
	db.serialize(function () {
		db.all(queries.Local_RunTable("data", value), function (error, Data) {
			if (error) {
				console.log(error);
				return;
			} else {
				//console.log(Data[0]);
				console.log("got all Data");
				thisFile.giveResponse(Data, response);

			}
		})
	});

}

exports.getIDs = function (response, value) {
	var file = "../DataBase/localData.db";
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var db = new sqlite3.Database(url.rawFile);
	db.serialize(function () {
		console.log("id is" + value);
		db.all(queries.Local_RunTable("getIds", value), function (error, ids) {
			if (error) {
				console.log(error);
				return;
			} else {
				//console.log(ids);
				console.log("got all ids");
				thisFile.giveResponse(ids, response);

			}
		})
	});
}

/**
 * creates a Database Connection, with rawData.db
 * @function getBenchmarks()
 *
 *
 * @param {String} timeframeRequestValue. this is a String which will be either "daily" or "weekly"
 * @param {Object} response. an Object which contains the response properties of server(http)
 **/

exports.getBenchmarks = function (response) {
	console.log("getting benchmarks");
	var file = "../DataBase/localData.db";
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var db = new sqlite3.Database(url.rawFile);
	db.serialize(function () {
		db.all("select firstDropDownValue from Local_Benchmark group by firstDropDownValue", function (error, benchmarks) {
			if (error) {
				console.log(error);
				return;
			} else {
				//console.log(benchmarks);
				console.log("got all benchmarks");
				//thisFile.giveResponse(benchmarks, response);
                var finalObject = {};
                finalObject["benchmarks"] = benchmarks;
                thisFile.prepareTimeValues(finalObject,response);

			}
		})
	});

}

/**
 * Using the Database Connection, fires a query to Database(rawData),
 * fetches single row from "timeValues" Table based on "daily" or "weekly",
 * adds different timings to the Json Object with the values fetched from Database.
 * @function prepareTimeValues()
 *
 *
 * @param {Object} db. db is the Database Connection
 * @param {String} timeframeRequestValue. this is a String which will be either "daily" or "weekly"
 * @param {Object} finalObject. this is an Array of json objects according to the dates.
 * @param {Object} response. an Object which contains the response properties of server(http)
 **/
exports.prepareTimeValues = function (finalObject, response) {
	var file = "../DataBase/localData.db";
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var db = new sqlite3.Database(url.rawFile);    
	db.all(queries.checkPointTimesTable(), function (err, row) {
		if (err) {
			console.log(err);
			setTimeout(function () {
				prepareTimeValues(finalObject, response);
			}, 500);

		}
		finalObject["tryingToConnectAt"] = row[0].tryingToConnectAt;
		finalObject["connectedAt"] = row[0].connectedAt;
		finalObject["firedAt"] = row[0].firedAt;
		finalObject["fetchedAt"] = row[0].fetchedAt;
		console.log(finalObject);
		//thisFile.fetchDatafromSqlite(db, timeframeRequestValue, finalObject, response);
        thisFile.giveResponse(finalObject, response);
	});
}

/**
 * Using the Database Connection, fires a query to Database(rawData),
 * fetches all the data from the Table based on timeFrameValue.
 * @function fetchDatafromSqlite()
 *
 *
 * @param {Object} db. db is the Database Connection
 * @param {String} timeframeRequestValue. this is a String which will be either "daily" or "weekly"
 * @param {Object} finalObject. this is an Array of json objects according to the dates.
 * @param {Object} response. an Object which contains the response properties of server(http)
 **/
exports.fetchDatafromSqlite = function (db, timeframeRequestValue, finalObject, response) {

	db.all(queries.selectFromTable(timeframeRequestValue), function (err, result) {

		if (err) {
			console.log(err);
			setTimeout(function () {
				thisFile.fetchDatafromSqlite(db, timeframeRequestValue, finalObject, response);
			}, 500);
		}
		finalObject["globalData"] = result;
		thisFile.giveResponse(finalObject, response, timeframeRequestValue);

	});

}

/**
 * provides the Array of Json objects as a response,
 * for the request from html page based on timeFramValue.
 * @method giveResponse()
 *
 * @param {Array} result. result is an Array of json objects.
 * @param {Object} response. an Object which contains the response properties of server(http)
 * @param {String} timeframeRequestValue. a String which is either "daily" or "weekly"
 **/
exports.giveResponse = function (result, response) {
    console.log("postRequestTime is"+postRequestTime);
    result["postRequestTime"] = postRequestTime;
	response.setHeader('Access-Control-Allow-Origin', "*");
	response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	response.setHeader('Access-Control-Allow-Credentials', true);
	response.writeHead(status.response.successful, {
		'Content-Type' : "application/json"
	});
    result["responseTimeToUI"] = common.DisplayCurrentUTCTime();
	response.write(JSON.stringify(result));
	response.end();
	console.log("given response successfully");
}