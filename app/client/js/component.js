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
        //if ((Object.keys(data["benchmarks"][0]))[0] == "firstDropDownValue") {
		//if ((Object.keys(data[0]))[0] == "firstDropDownValue") {
            
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
				//alert(1);
				globalMainData = clone(data);
				addUniqValuesToDropDown(clone(data))

				processDatefilter(clone(data));
			} else {

				addUniqValuesToDropDown(clone(data));
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
			$('#drop2 select').html("");
			$('#resultDropSelect').html("");

			//$('#resultDropSelect').html("");
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
	});
	setTimeout(function () {

		$(".select2-container").on("click", function () {

			$(".select2-results").find(".select2-results__option").attr("aria-selected", false);

		})

	}, 300);

}

function addUniqValuesToDropDown(data) {
	

	
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

				
				$('#reservation').val("");
				addUniqDutToDropDown(uniqDutArry);
				addUniqProjectToDropDown(uniqProjectArry);
				addResultValuesToDropDown(uniqResultArray);
				placeArrays(mainArray, data);
			}
		}
	});
	$(".dis").attr("disabled", false);
}

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
function checkSize() {
	if (lastUsedSize > 50 || recordsNumber == "ALL") {
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

function processDatefilter(dummyData) {

	var dates = $('#reservation').val();
	if (dates == "") {
		Dut(dummyData);
	} else {
		
	
		
		
		dateFilteredData = getFilterData(clone(dummyData), dates);
	
		
		Dut(dateFilteredData);
	}

}

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
				placeArrays([], filterData);

			}

		});

	} else {
		placeArrays([], clone(inputData));

	}
}

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
function changeColor() {



	$(".select2-selection__choice").css("background-color", 'rgb(31, 119, 180)');

	$(".select2-selection__choice").each(function () {

		var tempTitle = $(this).attr("title");
		var color = colorObj[tempTitle];
		$(this).css("background-color", color);
	})

}