/**
 * Contains all the files for client side scripting.
 *
 * @module client
 */
 /**
 * All the Functions related to Filteration fo Data and Ajax calls goes here
 *
 * @class component.js
 * @constructor
 */
var lastUsedSize = 50;
var DutLength
var ProjectLength
var recordsNumber
var intrecordsNumber
var benchmarkID
var selectedProjectText = [];
var selectedDutText = [];
var dateFilteredData;
var uniqProjectArry;
var uniqDutArry;
var refreshClick = false;
var uniqResultArray;
var colorObj = {};
var colorArray = [];
var color= function(i){
return colorArray[i];
};

$(function () {

	var globalMainData;

	Array.prototype.contains = function (v) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] === v)
				return true;
		}
		return false;
	};

	Array.prototype.unique = function () {
		var arr = [];
		for (var i = 0; i < this.length; i++) {
			if (!arr.contains(this[i])) {
				arr.push(this[i]);
			}
		}
		return arr;
	}

	
	$(".select2").select2();



	generateColorArry(5000);

	
	$('#reservation').daterangepicker();
	
	$('#reservationtime').daterangepicker({
		timePicker : true,
		timePickerIncrement : 30,
		format : 'MM/DD/YYYY h:mm A'
	});

	Drop1value = $("#Drop1Value").text();
	ajaxCall("firstDropDownValue", "");

	$('.slider').slider();

	$("#range_1").ionRangeSlider({
		min : 0,
		max : 5000,
		from : 1000,
		to : 4000,
		type : 'double',
		step : 1,
		prefix : "",
		prettify : false,
		hasGrid : true
	});

});

$("#filterGo").on("click", function () {

	$("#mask").show();
	startFilterProcess();

})

/**
 * Ajax call with request type "post" is made and based on the response,
 * different functions are called
 * @function ajaxCall()
 *
 * @param  {String}  : input1
 * @param  {String} : input2
 * @return {} null
 **/


function ajaxCall(input1, input2) {
	input1 = encodeURIComponent(input1);
	input2 = encodeURIComponent(input2);
    console.log("in the ajax call");
	$("#mask").show();
	$.post("/", {
		Fetch : input1,
		Value : input2
	}, function (data) {
        
        if (data["benchmarks"]!=undefined) {
       
            
            var localData = data['benchmarks'];
			refreshClick = false;

			var html = '';

			$.each(localData, function (i, d) {
				html += '<option>' + d.firstDropDownValue + '</option>';
			});

			$('#drop1 select').html(html);

			setTimeout(function () {
				$("#mask").hide();

			}, 100);

		} else if ((Object.keys(data[0]))[0] == "benchmark") {

			BenchmarkData = clone(data);
			if (input1 == "moreData") {
				
				globalMainData = clone(data);
                
				addUniqValuesToDropDown(clone(data),"moreData")

				processDatefilter(clone(data));
			} else {

				addUniqValuesToDropDown(clone(data),"lessData");
			}

		} else if ((Object.keys(data[0]))[0] == "description") {

			var checkint = (data[0].description).indexOf(" GMT");
			if (checkint == -1) {
				$('#desc').html(data[0].description);
				$('#lastTime').html(data[1].description);
			} else {
				$('#desc').html(data[1].description);
				$('#lastTime').html(data[0].description);
			}

		} else {
			refreshClick = false;
			$('#select2-resultDropSelect-container').html("");
			$("#select2-selectDrop2-container").html("");
            
            
            var myNode = document.getElementById("#select2-selectDrop2-results");
            
            if(myNode){
            
                  while (myNode.hasChildNodes()) {
                    myNode.removeChild(myNode.lastChild);
            }
            }
			$('#resultDropSelect').html("");
            
			if (data[0].DropDownFlag == "false") {
				document.getElementById("selectDrop2").disabled = true;

				$("#drop2 .select2-container--default .select2-selection--single").css("border", "1px solid #d2d6de");

				getData("false", true);
			} else {
				document.getElementById("selectDrop2").disabled = false;

				$(".dis").attr("disabled", true);

				$("#drop2 .select2-container--default .select2-selection--single").css("border", "1px solid red")

			}
			var html = '';

			$.each(data, function (i, d) {
				html += '<option>' + d.id + '</option>';
			});

			$('#drop2 select').html(html);

			setTimeout(function () {
				$("#mask").hide();
			}, 100);

			
		}

	})
	.fail(function (e) {
		console.log(e.responseText);
        
        alert("connection error !!!! please reload the page.");
        
        $("#mask").hide();
	});
	setTimeout(function () {

		$(".select2-container").on("click", function () {

			$(".select2-results").find(".select2-results__option").attr("aria-selected", false);

		})

	}, 300);

}

/**
 * In this Function, Unique values of different filters are prepared and added to the respective drop downs
 * @function addUniqValuesToDropDown()
 *
 * @param  {Array}  : data
 * @param  {String} : dataRange
 * @return {} null
 **/

function addUniqValuesToDropDown(data,dataRange) {

	var mainArray = [];
	data.map(function (d, i) {

		mainArray.push(i + 1);
		d["y"] = parseFloat(d.result);
		if (i + 1 == data.length) {

			resultArray = [];
			dutArry = [];
			projectArry = [];
			data.forEach(function (d, i) {
				projectArry.push(d.project);
				dutArry.push(d.dut);
				resultArray.push(parseFloat(d.result));
			});

			globalMainData = clone(data);

			uniqProjectArry = projectArry.unique();

			uniqDutArry = dutArry.unique();

			uniqResultArray = resultArray.unique();
			
			console.log("uniqProjectArry"+JSON.stringify(uniqProjectArry));
			
		    console.log("uniqDutArry"+JSON.stringify(uniqDutArry));
			
			console.log("uniqResultArray"+JSON.stringify(uniqResultArray));
            
            
		

			if (refreshClick == false) {
				addUniqDutToDropDown(uniqDutArry,dataRange);
				addUniqProjectToDropDown(uniqProjectArry);
				addResultValuesToDropDown(uniqResultArray);
				placeArrays(mainArray, data);
			}
		}
	});
	$(".dis").attr("disabled", false);
}

/**
 * The Filter Process is initiated in this function based on the selection done by user.
 * @function startFilterProcess()
 *
 * @return {} null
 **/

function startFilterProcess() {
	selectedProjectText = [];
	selectedDutText = [];

	$("#projectForm .select2-selection__choice").each(function () {
		var title = $(this).attr("title");
		if (title != "") {
			selectedProjectText.push(title);
		}

	});
	$("#dutForm .select2-selection__choice").each(function () {
		var title = $(this).attr("title");
		if (title != "") {
			selectedDutText.push(title);
		}

	});
	DutLength = selectedDutText.length;
	ProjectLength = selectedProjectText.length;
	
	recordsNumber = $("#select2-sizeDrop-container").attr("title");

	intrecordsNumber = parseInt(recordsNumber);

	benchmarkID = $('#selectDrop2 :selected').text();

	lastupdatedSizeCheck();
	
	console.log("lastupdatedSizeCheck function is called");

}

/**
 * The Function checks the previous  value of the size filter.
 * @function lastupdatedSizeCheck()
 *
 * @return {} null
 **/

function lastupdatedSizeCheck() {

	if (lastUsedSize == intrecordsNumber) {
		if (lastUsedSize != 20){
			processDatefilter(clone(globalMainData));
		    console.log("lastUsedSize is 50");
		}else {
			var dummy20entriesData = clone(globalMainData);
			dummy20entriesData = dummy20entriesData.slice(0, 20);
			processDatefilter(dummy20entriesData);
			console.log("lastUsedSize is 20");
		}

	} else {
		lastUsedSize = intrecordsNumber;
		checkSize();
		console.log("checkSize function called")
	}
}
var dummy20entriesData;

/**
 * The Function checks the value of the size filter,
 * based on the value ajaxCall is made with this value as one of the parameter.
 * @function checkSize()
 *
 * @return {} null
 **/

function checkSize() {
    if (lastUsedSize > 50) {
        debugger;
		var value = recordsNumber + "-" + benchmarkID
			ajaxCall("moreData", value);
			console.log("ajaxCall called");
			
	} else if (intrecordsNumber == 50) {
		
		globalMainData = globalMainData.slice(0, 50);
		processDatefilter(clone(globalMainData));
		
	} else {
		dummy20entriesData = clone(globalMainData);
		dummy20entriesData = dummy20entriesData.slice(0, 20);
		processDatefilter(dummy20entriesData);
	}
}

/**
 * Based on user selection of WHEN filter, different functions are called by reference
 * @function processDatefilter()
 * 
 * @param  {Array} : LocalData
 * @return {} null
 **/

function processDatefilter(LocalData) {

	var dates = $('#reservation').val();
	if (dates == "") {
		Dut(LocalData);
	} else {
		dateFilteredData = getFilterData(clone(LocalData), dates);
		Dut(dateFilteredData);
	}

}

/**
 * The input data is filtered based upon the Duts which are selected in the WHERE filter
 * @function Dut()
 * 
 * @param  {Array} : inputDateFilterdData
 * @return {} null
 **/

function Dut(inputDateFilterdData) {
	if (DutLength != 0) {

		var filterDutData = [];
		selectedDutText.forEach(function (d, i) {
			var temFilterDutData = inputDateFilterdData.filter(function (o, j) {
					return o.dut == d;
				});
			temFilterDutData.forEach(function (o, j) {
				filterDutData.push(o);

			})

			if (i == DutLength - 1) {
				console.log(filterDutData.length);
				
				processProjectFilter(clone(filterDutData));

			}

		});

	} else {
		processProjectFilter(clone(inputDateFilterdData));

	}
}

/**
 * The input data is filtered based upon the Projects that are selected in the PROJECT filter
 * @function processProjectFilter()
 * 
 * @param  {Array} : inputData
 * @return {} null
 **/

function processProjectFilter(inputData) {
	if (ProjectLength != 0) {

		var filterData = [];
		selectedProjectText.forEach(function (d, i) {
			var temFilterData = inputData.filter(function (o, j) {
					return o.project == d;
				});
			temFilterData.forEach(function (o, j) {
				filterData.push(o);

			})

			if (i == ProjectLength - 1) {
				console.log(filterData.length);
                processResultFilter(filterData);

			}

		});

	} else {
        processResultFilter(clone(inputData));

	}
}

/**
 * The input data is filtered based upon the range that is selected in the RESULT THRESHOLD filter
 * @function processResultFilter()
 * 
 * @param  {Array} : inputData
 * @return {} null
 **/

function processResultFilter(inputData){
    

var threshoslValu = $('#resultDropSelect').val();
    
		if (threshoslValu != undefined && threshoslValu != "ALL") {

          
            switch (threshoslValu) {
            case resultDropDownArray[0]:
                
                var resultFilteredData = inputData.filter(function (d, i) {
                        mainValue = parseFloat(d.result);
                        return (mainValue > Mean_plus_SD);

                    })
                    break;
            case resultDropDownArray[1]:
                
                var resultFilteredData = inputData.filter(function (d, i) {
                        mainValue = parseFloat(d.result);
                        return (mainValue <= Mean_plus_SD && mainValue > dataMean);

                    })
                    break;
            case resultDropDownArray[2]:
                
                var resultFilteredData = inputData.filter(function (d, i) {
                        mainValue = parseFloat(d.result);
                        return (mainValue <= dataMean && mainValue > Mean_minus_SD);

                    })
                    break;
            case resultDropDownArray[3]:
                var resultFilteredData = inputData.filter(function (d, i) {
                        mainValue = parseFloat(d.result);
                        return (mainValue <= Mean_minus_SD);

                    })
                    break;
            }	
            

            
            placeArrays([],resultFilteredData);

			
		} else {
		

			placeArrays([],inputData);

		}




}

/**
 * The input data is filtered based upon the daterange that is selected in the WHEN filter and filterd data is returned
 * @function getFilterData()
 * 
 * @param  {Array}  : inputData
 * @param  {String} : inputDateRange
 * @return {Array}  : result
 **/

function getFilterData(inputData, inputDateRange) {
	
	var dateRange = inputDateRange.split("-");
	startDate = dateRange[0].trim();
	endDate = dateRange[1].trim();
	var startDt = startDate.split("/");
	var endDt = endDate.split("/");
	var toDt = new Date(parseInt(startDt[2]), parseInt(startDt[0]) - 1, parseInt(startDt[1])); //Year, Month, Date
	var fromDt = new Date(parseInt(endDt[2]), parseInt(endDt[0]) - 1, parseInt(endDt[1])); //Year, Month, Date
	result = inputData.filter(function (d, i) {
			var dataDate = ((d.testTime).slice(0, 10)).split("-");
			var objDate = new Date(parseInt(dataDate[0]), parseInt(dataDate[1]) - 1, parseInt(dataDate[2]));
			if (objDate >= toDt && objDate <= fromDt)
				return true;
		})
		return result;
}

$("input[name='colorChk']").on("click", function () {

	radioValu = $("input[name='colorChk']:checked").val();

	colorObj = {};
	if (radioValu == "project") {

		uniqProjectArry.forEach(function (d, i) {
			colorObj[d] = color(i);

		})

	} else {
		uniqDutArry.forEach(function (d, i) {
			colorObj[d] = color(i);

		})

	}

	changeColor();

})

/**
 * 
 * @function changeColor()
 * 
 * @return {}  null
 **/

function changeColor() {
	$(".select2-selection__choice").css("background-color", 'rgb(31, 119, 180)');

	$(".select2-selection__choice").each(function () {

		var tempTitle = $(this).attr("title");
		var color = colorObj[tempTitle];
		$(this).css("background-color", color);
        $(this).css("opacity", 0.6);
	})

}


/**
 * 
 * @function getRandomColor()
 * 
 * @return {} : color1
 **/



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color1 = '#';
    for (var i = 0; i < 6; i++ ) {
        color1 += letters[Math.floor(Math.random() * 16)];
    }
    return color1;
}

/**
 * 
 * @function generateColorArry()
 * 
 * @param  {Integer} : n 
 * @return {}  null
 **/

function generateColorArry(n){
for(i=0;i<n;i++){

               var colorVal=getRandomColor();
  if(colorArray.indexOf(color)==-1){
  
                colorArray.push(colorVal);
  }
  if(i==n-1){
  
   console.log(colorArray);
  }
  
}

}





