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




function addUniqProjectToDropDown(dropData) {



	$("#projectDrop").html("");

	var DropValue = "";

	dropData.forEach(function (d, i) {
		DropValue = DropValue + "<option>" + d + "</option>";
	})

	//DropValue=DropValue+"<option  selected="selected">ALL</option>"

	$("#projectDrop").html(DropValue);

	

}

function addUniqDutToDropDown(dropData,dataRange) {
    
    
     /* $("#dutForm .select2-selection__choice__remove").each(function () {
		      $(this).trigger("click");
	});
	  $("#dutForm .select2-dropdown").trigger('click');*/
    
   
	

	$("#dutDrop").html("");

	var DropValue = "";

	dropData.forEach(function (d, i) {
		DropValue = DropValue + "<option>" + d + "</option>";
	})

	//DropValue=DropValue+"<option  selected="selected">ALL</option>"

	$("#dutDrop").html(DropValue);

}

function addResultValuesToDropDown(inputResultDropData) {

    $("#select2-resultDropSelect-container").html("ALL");

	//$('#resultDropSelect').attr("val", "");
	var resultDropData = [];
	inputResultDropData.map(function (d, i) {
		//    d = Math.abs(d);
		resultDropData.push(parseFloat(d));
	})
	
	var resultDropDownArray = [];
	resultDropData.sort(function(a,b) { return a - b;});
  
    
    
    
	if (resultDropData.length > 1) {
		var minValue = resultDropData[0];
		var maxValue = resultDropData[resultDropData.length - 1];
		var meanResultlength = resultDropData.length;
		var meanResultSum = resultDropData.reduce(function (previousValue, currentValue, currentIndex, array) {
				return previousValue + currentValue;
			});
		meanValue = meanResultSum / meanResultlength;

		var mid = ((maxValue + meanValue) / 2);

		var midmax = ((maxValue + mid) / 2);

		var midavg = ((meanValue + mid) / 2);

		firstValue = (minValue).toFixed(2) + " - " + (meanValue).toFixed(2);
		resultDropDownArray.push(firstValue);
		secondValue = meanValue.toFixed(2) + " - " + midavg.toFixed(2);
		resultDropDownArray.push(secondValue);
		thirdValue = midavg.toFixed(2) + " - " + mid.toFixed(2);
		resultDropDownArray.push(thirdValue);
		fourthValue = mid.toFixed(2) + " - " + midmax.toFixed(2);
		resultDropDownArray.push(fourthValue);
		fifthValue = midmax.toFixed(2) + " - " + maxValue.toFixed(2);
		resultDropDownArray.push(fifthValue);

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
		//$('#resultDropSelect').select2("val", "");
	} else {

		//document.getElementById("resultDropSelect").disabled = true;
		// $("#resultDrop select").prop('disabled', false);
		/*        var html = '';
		html += '<option>' + "No Threshold" + '</option>';
		$('#resultDrop select').html(html);*/

	}

}

var DropDownFlag;

function getData(inputFlag, boolan) {

	if (boolan == true) {

		refreshClick = false;

	} else {

		refreshClick = true;

	}

	$("#mask").show();
    
$('#reservation').val("");
    if(refreshClick==false){
     
           // $("#dutForm .select2-search__field").trigger('click');
         
    
           $("#select2-sizeDrop-container").html(50);
        $("#select2-sizeDrop-container").attr("title",50);
        
        
        
        var projectSelected=0;
        var dutSelected=0;
        
        
        
        
       $("#dutForm .select2-selection__choice").each(function () {
           
             dutSelected++;
            $("#dutForm .select2-selection__choice__remove").trigger("click");
           // $("#dutForm .select2-search__field").trigger('click');
        });   
    
    
        $("#projectForm .select2-selection__choice").each(function () {
            
            projectSelected++;
             $("#projectForm .select2-selection__choice__remove").trigger("click");
            
            
            // $("#projectForm .select2-search__field").trigger('click')
        });
        
        
        
        
        
        if(projectSelected!=0){
        
          $("#projectForm").find(".select2-search__field").trigger('click');
        }
        
        if(dutSelected!=0){
        
           $("#dutForm").find(".select2-search__field").trigger('click');
        }

        
       // $(".main-header").trigger("click");
        
     
    
    }
    
    
    
    
  
   //  $("#dutForm .select2-search__field").trigger('click');
   //  $("#projectForm .select2-search__field").trigger('click')
    
    

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