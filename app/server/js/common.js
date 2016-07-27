var common = require('./common.js');
exports.clone = function (obj) {
	var copy;
	if (null == obj || "object" != typeof obj)
		return obj;
	if (obj instanceof Date) {
		copy = new Date();
		copy.setTime(obj.getTime());
		return copy;
	}

	if (obj instanceof Array) {
		copy = [];
		for (var i = 0, len = obj.length; i < len; i++) {
			copy[i] = common.clone(obj[i]);
		}
		return copy;
	}

	if (obj instanceof Object) {
		copy = {};
		for (var attr in obj) {
			if (obj.hasOwnProperty(attr))
				copy[attr] = common.clone(obj[attr]);
		}
		return copy;
	}

	throw new Error("Unable to copy obj! Its type isn't supported.");
}

exports.nextRequiredDate = function (date) {
	var date = date;
	var year = date.getFullYear();
	var month = (date.getMonth()) + 1;
	month = month < 10 ? "0" + month : month;
	var day = date.getDate();
	day = day < 10 ? "0" + day : day;
	var finalDate = year + "-" + month + "-" + day;
	return finalDate;
}

exports.createDateObject = function (){
	var DateObject365 = {};
	var lastDay = new Date();
	var removeDay = new Date();
	var today = new Date();
	var next365days = lastDay;
	next365days.setDate(lastDay.getUTCDate() - 364);
	lastDay = next365days;
	var nextremoveDay = removeDay;
	nextremoveDay.setDate(removeDay.getUTCDate() - 365);
	removeDay = nextremoveDay;
	DateObject365["removeDate"] = common.nextRequiredDate(removeDay);
	DateObject365["lastDate"] = common.nextRequiredDate(lastDay);
	DateObject365["currentDate"] = common.nextRequiredDate(today);
	return DateObject365;

}

exports.DisplayCurrentTime = function () {
	var date = new Date();
	var date = date;
	var year = date.getFullYear();
	var month = (date.getMonth()) + 1;
	month = month < 10 ? "0" + month : month;
	var day = date.getDate();
	day = day < 10 ? "0" + day : day;    
	var hours = date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours();
	var minutes = date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes();
	var seconds = date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds();
	currentTime = year+"-"+month+"-"+day+"T"+hours + ":" + minutes + ":" + seconds;
	return time;
}

exports.refreshFlag;

/**
 * a date object is created of current Time,
 * current time in HH:MM:SS format is made using the date object.
 *
 *
 * @function DisplayCurrentTime()
 * @return {String} time. this is a String, which is time in HH:MM:SS format.
**/
exports.DisplaytimeStamp = function () {
        var date = new Date();
        var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
        time = hours + ":" + minutes + ":" + seconds;
        return time;
}

exports.DisplayCurrentUTCTime = function () {
	var date = new Date();
	var hours = date.getUTCHours() < 10 ? "0" + date.getUTCHours() : date.getUTCHours();
	var minutes = date.getUTCMinutes() < 10 ? "0" + date.getUTCMinutes() : date.getUTCMinutes();
	var seconds = date.getUTCSeconds() < 10 ? "0" + date.getUTCSeconds() : date.getUTCSeconds();
	time = hours + ":" + minutes + ":" + seconds;
	return time;
}