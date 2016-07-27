/**
 * Contains all the files for server side scripting.
 *
 * @module server
 */
 /**
 * All server file urls are stored  in variables.
 *
 * @class url.js
 * @constructor
 */
	var rootPath=exports.rootPath="./";
	//exports.functionsJs="../js/functions.js";
	exports.serverJs=rootPath+"server.js";
	//exports.dbConnectJs=rootPath+"dbConnect.js";
	exports.dbConfigJs=rootPath+"dbConfig.js";
    exports.queriesJs = rootPath+"queries.js";
    exports.cronTenMinutesJs = rootPath+"cronTenMinutes.js";
    exports.cronTime12Js = rootPath+"cronTime12.js";
	//exports.getDataJs="../js/getData.js";
	exports.commonJs=rootPath+"common.js";
    //exports.removeJs=rootPath+"remove.js";
   // exports.globalJs=rootPath+"globalDeclaration.js";
	var backUrl=exports.backUrl="../";
	exports.templatePath="../../client";
	exports.statusJs=rootPath+"status.js";
	exports.indexPage=backUrl+backUrl+"client/template/index.html";
	//exports.dbType=backUrl+"lib/node_modules/";
	exports.JSONfile=backUrl;
	exports.async=backUrl+"lib/node_modules/async";
    exports.jsonfile=backUrl+"lib/node_modules/jsonfile";
    var DataUrl = "../../server/DataBase/";
    exports.rawFile = DataUrl+"localData.db";
    exports.values = DataUrl+"values.json";
    exports.database = "../lib/node_modules/mysql";
    exports.sqlite = "../lib/node_modules/sqlite3";