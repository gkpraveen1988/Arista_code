/**
 * Contains all the files for client side scripting.
 *
 * @module client
 */
 /**
 * This JavaScript file contains functions that adds values to the DropDowns/filters
 *
 * @class charts.js
 * @constructor
 */

var dataMean,Mean_plus_SD,Mean_minus_SD,minValue,maxValue;

/**
  * This Function takes in an Object and make a copy of that Object,
 * without any reference and returns the Object.
 * @function clone()
 *
 *
 * @param  {Object} obj.
 * @return {Object} copy.
 **/

function clone(obj) {
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
			copy[i] = clone(obj[i]);
		}
		return copy;
	}

	if (obj instanceof Object) {
		copy = {};
		for (var attr in obj) {
			if (obj.hasOwnProperty(attr))
				copy[attr] = clone(obj[attr]);
		}
		return copy;
	}

	throw new Error("Unable to copy obj! Its type isn't supported.");
}

var noofdatapass = 0;


/**
 * In this Function, unique projects of the selected benchmark are added to PROJECT drop down
 * @function addUniqProjectToDropDown()
 *
 * @param  {Array}  : dropData
 * @return {} null
 **/

var uniqueSlicedProjectValues;
function addUniqProjectToDropDown(dropData) {

        var groupArray = [];
	dropData.forEach(function (d, i) {
        var slicedValue = (clone(d)).trim();
        groupArray.push(slicedValue);
	})
    uniqueSlicedProjectValues = groupArray.unique();
    availableProjectTags = dropData;
    tempavailableProjectTags= availableProjectTags.slice();
	Projectautocomplete(availableProjectTags);
    
    
    setTimeout(function(){
         $("#ui-id-2").on("click",function(){
          
		inputVal=$("#inputProject").html();
             	if(ProjectcheckWithPreviousValue(inputVal))
                {
                ProjectaddItem(inputVal);
                removeFromProjectElement(inputVal);
                }else{
                 $("#inputProject").html("");
                }
             
             
             filter();
             
             
             
	   });
    },300)

}

/**
 * In this Function, unique duts of the selected benchmark are added to WHERE drop down
 * @function addUniqDutToDropDown()
 *
 * @param  {Array}  : dropData
 * @param  {String} : dataRange 
 * @return {} null
 **/
var uniqueSlicedDutValues;
function addUniqDutToDropDown(dropData,dataRange) {
    var groupArray = [];
	dropData.forEach(function (d, i) {
        var slicedValue = (clone(d)).replace(/[^a-z.]/g, "").trim();
        groupArray.push(slicedValue);
	})
    uniqueSlicedDutValues = groupArray.unique();
    
    availableDutTags = dropData;
    tempavailableDutTags= availableDutTags.slice();
	Dutautocomplete(availableDutTags);
    
    
    setTimeout(function(){
    
         $("#ui-id-1").on("click",function(){
           
       
		inputVal=$("#inputDut").html();
             
             	if(DutcheckWithPreviousValue(inputVal))
                {
                    
                DutaddItem(inputVal);
                removeFromOutElement(inputVal);
                    
                   
                    
                }else{
                 $("#inputDut").html("");
                }
             
             
             filter();
		
	   });
    
    
    },300)
        

}

var resultDropDownArray = [];

/**
 * In this Function, Reslut Ranges calculated based on Mean and Standard Deviation,
 * are added to RESULT THRESHOLD drop down
 * @function addResultValuesToDropDown()
 *
 * @param  {Array}  : inputResultDropData
 * @return {} null
 **/

function addResultValuesToDropDown(inputResultDropData) {

    $("#select2-resultDropSelect-container").html("ALL");


	var resultDropData = [];
	inputResultDropData.map(function (d, i) {
		
		resultDropData.push(parseFloat(d));
	})
	
	resultDropDownArray = [];
	resultDropData.sort(function(a,b) { return a - b;});
    minValue = d3.min(clone(resultDropData));
    maxValue = d3.max(clone(resultDropData));
    dataMean = d3.mean(resultDropData, function(d) { return d; });
    var dataSD = d3.deviation(resultDropData, function(d) { return d; });
    if(dataSD==undefined){
    Mean_plus_SD = dataMean;
    Mean_minus_SD = dataMean; 
    }
    else{
    Mean_plus_SD = dataMean + dataSD;
    Mean_minus_SD = dataMean - dataSD;
    }
    resultDropDownArray.push("> (Mean + σ)");
    resultDropDownArray.push("Mean to (Mean + σ)");
    resultDropDownArray.push("Mean to (Mean - σ)");
    resultDropDownArray.push("< (Mean - σ)");
    resultDropDownArray.push("ALL");
    
    var html = '';

		$.each(resultDropDownArray, function (i, d) {
			if (d == "ALL") {

				html += '<option selected="selected">' + d + '</option>';
			} else {

				html += '<option>' + d + '</option>';
			}

		});
    
        $('#resultDrop select').html(html);
    
    
    
         setTimeout(function(){
        
         $("#resultDropSelect").change(function(){
          
            filter();
       })
        
    },100)


}

var DropDownFlag;

/**
 * In this Function, depending upon the size, Ajax calls are made to get more data of that particular benchmark
 * @function getData()
 *
 * @param  {String}  : inputFlag
 * @param  {String}  : boolan
 * @return {} null
 **/

function getData(inputFlag, boolan) {
    
    

    
    lastUsedSize = 50;
	if (boolan == true) {
		refreshClick = false;
	} else {
		refreshClick = true;
	}
	$("#mask").show();
$('#reservation').val("");
$('#textbox').val("");
    if(refreshClick==false){
            $("#select2-sizeDrop-container").html(50);
            $("#select2-sizeDrop-container").attr("title",50);
            var projectSelected=0;
            var dutSelected=0;
            
            $(".selected_element").html("");
        
            $(".dis").css("background-color","white");
             $(".dis").css("opacity",1);
            $(".dis").css("pointer-events","auto");
        
    }
    
	if (inputFlag == "false") {
		DropDownFlag = "false";
		var selectBox = document.getElementById("drop1Select");
		var selectedValue = selectBox.options[selectBox.selectedIndex].value;
        console.log("ajaxcall with dropdown1 value");
		ajaxCall('description', selectedValue);
	} else {
		DropDownFlag = "true";
		$("#drop2 .select2-container--default .select2-selection--single").css("border", "1px solid #d2d6de")
		var selectBox = document.getElementById("selectDrop2");
		var selectedValue = selectBox.options[selectBox.selectedIndex].value;
		ajaxCall('description', selectedValue);

	}
	recordsNumber = parseInt($("#select2-sizeDrop-container").attr("title"));
    setTimeout(function(){
        if (recordsNumber > 50) {
		var value = recordsNumber + "-" + selectedValue;
		ajaxCall("moreData", value)
	} else {
        console.log("ajaxCall with data as first input value");
		ajaxCall('data', selectedValue);

	}   
        $("#mask").hide();
   
    },300)	
}


/**
 * This Function takes Date Object as an input and returns a String of YYYY:MM:DD format
 * @function nextRequiredDate()
 *
 * @param  {Object}  : date
 * @return {String}  : finalDate
 **/


function nextRequiredDate(date) {
	var date = date;
	var year = date.getFullYear();
	var month = (date.getMonth()) + 1;
	month = month < 10 ? "0" + month : month;
	var day = date.getDate();
	day = day < 10 ? "0" + day : day;
	var finalDate = year + "-" + month + "-" + day;
	return finalDate;
}