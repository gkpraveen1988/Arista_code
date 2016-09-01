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
var GlobalradioValue="project";
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
     $(".select2-selection__rendered").find( ".select2-search__field" ).change(function( event ) {
            var a=$(this).val();
           
             console.log(a);
     }); 
    
    
        
         $("#sizeDrop").change(function(){
          
             setTimeout(function(){
                 
                 filter();
                 
             },100)
              
       })
         
         
        $("#reservation").change(function(){
            
          
             setTimeout(function(){
                 
                 filter();
                 
             },100)
              
       })
        
        
        
        $("input[name='colorChk']").on("click", function () {

	
        filter();

      })
        
        
    
    
    
     $("#dutFormdiv").on("click",function(){
  
        $("#inputDut").focus();
    });
    
     $("#projectFormdiv").on("click",function(){
  
        $("#inputProject").focus();
    });
    
    
    

  
});



   $("#textdiv").focusin(function(){
       document.getElementById('toolTipDiv').className='activeToolTip';
        $("#toolTipDiv").css("display", "block");
    });
    $("#textdiv").focusout(function(){
        document.getElementById('toolTipDiv').className='idleToolTip';
        $("#toolTipDiv").css("display", "none");
    });




function filter(){

        
    GlobalradioValue = $("input[name='colorChk']:checked").val();
    
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
    
    
	$("#mask").show();
    startFilterProcess();


}


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
            $("#textbox").val("");
            $(".selected_element").html("");
            $(".dis").css("background-color","#CCC");
            $(".dis").css("opacity",0.5);
            $(".dis").css("pointer-events","none");            
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
            console.log(uniqDutArry+"here is the dut array");
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


function validateFilter(){
        var stringValue = ($('#input').val()).toLowerCase();
        validateDutGroupString(stringValue);
        startFilterProcess();
}


function checkBrackets(str){
    var depth = 0;
    for(var i in str){   
        if(str[i] == '('){
            depth ++;
        } else if(str[i] == ')') {
            depth --;
        }  
        if (depth < 0) return false;
    }
    if(depth > 0) return false;
    return true;
}


/**
 * The Filter Process is initiated in this function based on the selection done by user.
 * @function startFilterProcess()
 *
 * @return {} null
 **/
 var DutGroupArrayForColor = [];  
function startFilterProcess() {
    selectedProjectText = [];
	selectedDutText = [];
    selectedDutGroupText = [];

    
    $("#dutFormdiv .item").each(function(d,i){
    var value = $(this).html();
        if(value != ""){
            selectedDutText.push(value);
        }
});
    DutLength = selectedDutText.length;
        $("#projectFormdiv .item").each(function(d,i){
    var value = $(this).html();
        if(value != ""){
            selectedProjectText.push(value);
        }
});
    
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
            filterFunction(selectedDutText,inputDateFilterdData,"no");
       }else {
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
        filterProjects(selectedProjectText,inputData,"no")
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


/**
 * This function is used for applying unique colors for duts/projects inside the select element.
 * @function changeColor()
 * 
 * @return {}  null
 **/

function changeColor() {
    
    
    radioValu = $("input[name='colorChk']:checked").val();
    
    
    $(".selected_item").css("background-color", 'rgb(31, 119, 180)')

	if (radioValu == "project") {
        
      
         $("#projectFormdiv").find(".item").each(function(index){
            
             
               
             
            var tempArr=[];
            
            var value= $(this).html();
            
           
            if(!starRegex(value)){
                  
                   
                
                    colorObj[value]= color(index*10);
                
                    $(this).parent().css("background-color",color(index*10));
                
                
                
            }else{
                 var splitVal=((value.replace(/[^a-z,]/g, "")).trim()).split(",");
                
                colorObj[splitVal]=color(index*10);
                
                splitVal.forEach(function(d,i){
                        
                
                        colorObj[d]=color(index*10);
                
                });
                
                 $(this).parent().css("background-color",color(index*10));
                 $(this).parent().css("opacity", 0.6);
            
                
            }
            
           
        });
        
        
   
    }else{
        
        
        
         $("#dutFormdiv").find(".item").each(function(index){
             
             
             
    
            
            var tempArr=[];
            
            var value= $(this).html();
            
           
            if(NumberRegex(value)){
                  
                   
                
                    colorObj[value]= color(index*10);
                
                    $(this).parent().css("background-color",color(index*10));
                
                
                
            }else{
                 var splitVal=((value.replace(/[^a-z,]/g, "")).trim()).split(",");
                
                colorObj[splitVal]=color(index*10);
                
                splitVal.forEach(function(d,i){
                        
                
                        colorObj[d]=color(index*10);
                
                });
                
                 $(this).parent().css("background-color",color(index*10));
                 $(this).parent().css("opacity", 0.6);
            
                
            }
            
           
        });
        
       
        
        
        
        
        
    
    }
    
    
	

}


/**
 * This function will return a random color code/string  when executed.
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


function filterFunction(filterDutText,inputDateFilterdData,Flag){
var filterDutData = [];
filterDutText.forEach(function (d, i) {
    var temFilterDutData = inputDateFilterdData.filter(function (o, j) {
  
        if(NumberRegex(d)){
        return o.dut == d;    
        }else{
            
             var string1 = (clone((o.dut)).replace(/[^a-z.]/g, "")).trim();
             var splitArray = (((d).replace(/[^a-z,]/g, "")).trim()).split(",");
            
           if(splitArray.indexOf(string1)!=-1){
           
                return true;
           }

        }
        });
    temFilterDutData.forEach(function (o, j) {
        filterDutData.push(o);

    })

    if (i == DutLength - 1) {
        console.log(filterDutData.length);
    
        sortedfilterDutData = filterDutData.sort(function(a, b){
 var dateA = new Date(a.testTime), dateB = new Date(b.testTime)
    return dateA-dateB;
});
        processProjectFilter(clone(sortedfilterDutData));
        

    }

});
}


function filterProjects(filterprojectText,inputDutFilterdData,Flag){
var filterProjectData = [];
filterprojectText.forEach(function (d, i) {
    
    var temFilterProjectData = inputDutFilterdData.filter(function (o, j) {
        
        if(!starRegex(d)){
        return o.project == d;    
        }else{
            
            var localValue='';
             var string1 = (clone(o.project)).trim();
             var splitArray = (((d).replace(/[^a-z,*]/g, "")).trim()).split(",");
                
            splitArray.map(function(d,i){
                switch(ProjectRegex(d)){
                    case "startsWith":
                        if(string1.startsWith((d.replace(/[*]/g,"")).trim()))
                            localValue = string1;
                        break;
                    case "endsWith":
                        if(string1.endsWith((d.replace(/[*]/g,"")).trim()))
                            localValue = string1;
                        break;
                    case "substring":
                        if(string1.search((d.replace(/[*]/g,"")).trim())!=-1)                        
                            localValue = string1;
                        break;
                }
            })                
            return localValue;
        }
        });
        temFilterProjectData.forEach(function (o, j) {
        filterProjectData.push(o);

    })

    if (i == ProjectLength - 1) {
        console.log(filterProjectData.length);
    
        sortedfilterProjectData = filterProjectData.sort(function(a, b){
 var dateA = new Date(a.testTime), dateB = new Date(b.testTime)
    return dateA-dateB;
});
        processResultFilter(clone(sortedfilterProjectData));
        

    }
})

}
  

