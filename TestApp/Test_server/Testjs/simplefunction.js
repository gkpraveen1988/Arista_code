
exports.one = function(){
var thisFile = require('./simplefunction.js')
setTimeout(function (){
thisFile.two();
},2000);
}

exports.two= function(){


console.log("waited for 2 seconds");

}