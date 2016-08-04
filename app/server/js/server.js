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
 * Creates a server which listens for the clients on port 7777.
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
								thisFile.getBenchmarks(response);
							}
							if (requestJson.Fetch == 'ids') {
								thisFile.getIDs(response, requestJson.Value);
							}
							if (requestJson.Fetch == 'data') {
								thisFile.getData(response, requestJson.Value);
							}
							if (requestJson.Fetch == 'description') {
								thisFile.getDescription(response, requestJson.Value);
							}
							if (requestJson.Fetch == 'moreData') {
								thisFile.getDataFromServer(response, requestJson.Value);
							}                            

						});
						request.on('error', function (e) {
							console.log('problem with request: ' + e.message);
						});
					} else {
						console.log(status.response.successful);
						//console.log("failure");
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

http.createServer(function (request, response) {
    
    
    
    console.log(request.url);
        
    var filePath = "../../../docs" + request.url;
	if (filePath == "../../../docs" + "/"){
		filePath = "../../../docs/index.html"
    }else{
            ext=filePath.slice(filePath.length-7,filePath.length);
        
           if(ext=="?pjax=1"){
           
           filePath=filePath.slice(0,filePath.length-7);
           console.log(filePath);
           }
          
    
    }
    
    
	var extname = path.extname(filePath);
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
			
                        
                    
						console.log(status.response.successful);
						response.writeHead(status.response.successful, {
							'Content-Type' : contentType
						});
						response.end(content, 'utf-8');
					
                    
				}
			});
		} else {
			console.log("server response");
			response.writeHead(status.response.pageNotFound);
			response.end();
		}
	});
}).listen(3001);



/**
 * connects to the Database in the server and fetches Data for the requested benchmark from the Run table
 * and gives result to giveResponse() function.
 * @function getDescription()
 *
 *
 * @param {Object} response. an Object which contains the response properties of server(http)
 * @param {String} value. this is name of the Benchmark Name
 **/

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

/**
 * connects to the localData.db and fetches description for the requested benchmark from the Info table
 * and gives result to giveResponse() function.
 * @function getDescription()
 *
 *
 * @param {Object} response. an Object which contains the response properties of server(http)
 * @param {String} value. this is name of the Benchmark Name
 **/

exports.getDescription = function (response, value) {
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

/**
 * connects to the localData.db and fetches Data for the requested benchmark from the Local_Run table
 * and gives result to giveResponse() function.
 * @function getData()
 *
 *
 * @param {Object} response. an Object which contains the response properties of server(http)
 * @param {String} value. this is name of the Benchmark Name
 **/

exports.getData = function (response, value) {
	var sqlite3 = require("../lib/node_modules/sqlite3").verbose();
	var db = new sqlite3.Database(url.rawFile);
	db.serialize(function () {
		db.all(queries.Local_RunTable("data", value), function (error, Data) {
			if (error) {
				console.log(error);
				return;
			} else {
				console.log("got all Data");
				thisFile.giveResponse(Data, response);

			}
		})
	});

}


/**
 * connects to the localData.db and fetches all the benchmarks from the Local_Run table
 * and gives result to giveResponse() function.
 * @function getIDs()
 *
 *
 * @param {Object} response. an Object which contains the response properties of server(http)
 * @param {String} value. this is name of the Benchmark Name
 **/

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
				console.log("got all ids");
				thisFile.giveResponse(ids, response);

			}
		})
	});
}

/**
 * connects to the localData.db and fetches all the firstDropDown values from the Local_Benchmark table
 * and gives result to prepareTimeValues() function.
 * @function getBenchmarks()
 *
 *
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
				console.log("got all benchmarks");
                var finalObject = {};
                finalObject["benchmarks"] = benchmarks;
                thisFile.prepareTimeValues(finalObject,response);

			}
		})
	});

}

/**
 * Using the Database Connection, fires a query to Database(localData.db),
 * fetches data from "checkPointTimes" Table,adds all the timings to the Json Object.
 * @function prepareTimeValues()
 *
 *
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
        thisFile.giveResponse(finalObject, response);
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