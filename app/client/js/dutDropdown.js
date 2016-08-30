var tempavailableTags;
var availableTags = [];
	
	$("#input").keypress(function (e) {
	
        if (e.keyCode == 13) {
            $("#input").find("br").remove();
			var avilableValues=[];
            inputVal=$("#input").html();
			
			availableTags.forEach(function(d,i){
					avilableValues.push(d.toLowerCase());
			});
			var selectValue=(inputVal.trim()).toLowerCase();
         
			
			if(avilableValues.indexOf(selectValue)!=-1){
			
				
                ////////
                /*checkWithPreviousValue(selectValue);
                addItem(inputVal);
				removeFromOutElement(inputVal);*/
				if(checkWithPreviousValue(selectValue))
                {
                addItem(inputVal);
                removeFromOutElement(inputVal);
                }
				
				
			}else{
			
				validationFuntion(selectValue);
			}
            
        }
    });
	
	function validationFuntion(selectValue){
        
         
        var result = validateDutGroupString(selectValue);
        if(result){
                if(checkWithPreviousValue(selectValue)){
		        addItem(selectValue);}
        } else{
            setTimeout(function(){
                $("#input").find("br").remove();
            },100);
       
        }
	}
	
function checkWithPreviousValue(input){
    
    var previous = [];
    var removeElementsArray = [];
    var exceptionResult = true;
    var errorFlag = false;
    var dutSelectionerror="Errors:- ";
$(".item").each(function(d,i){
    var value = $(this).html();
    previous.push(value);
});
previous.map(function(thisData,i){
	
	var modifiedthisData = typeofValue(thisData);
	var modifiedInput = typeofValue(input);
	modifiedthisData.map(function(tdata,i){
		modifiedInput.map(function(idata,i){
			if(tdata["val"]==idata["val"] && tdata["numbered"]=="true" && idata["numbered"]=="true"){
                if(tdata["actual"]==idata["actual"]){
                    //removeElementsArray.push(tdata["actual"]);
                    dutSelectionerror +="* duplicate entry for "+tdata["actual"]+" \n";
                    errorFlag = true;
                    //alert("1duplicate entry for "+tdata["actual"]);
                    exceptionResult = false;
                }else{
                removeElementsArray.push(idata["actual"]);}
			}else if(tdata["val"]==idata["val"] && tdata["numbered"]=="false" && idata["numbered"]=="false"){
                //removeElementsArray.push(tdata["actual"]);
                dutSelectionerror +="* duplicate entry for "+tdata["val"]+" \n";
                errorFlag = true;
                //alert("2duplicate entry for "+tdata["val"]);
                exceptionResult = false;
			}else if(tdata["val"]==idata["val"] && tdata["numbered"]=="true"){
                dutSelectionerror +="* duplicate entry for "+idata["val"]+" \n";
                errorFlag = true;
                //alert("3duplicate entry for "+idata["val"]);
                removeElementsArray.push(tdata["actual"]);
                exceptionResult = true;
			}else if(tdata["val"]==idata["val"] && idata["numbered"]=="true"){
                dutSelectionerror +="* duplicate entry for "+idata["val"]+" \n";
                errorFlag = true;
                //alert("4duplicate entry for "+idata["val"]);
                //removeElementsArray.push(idata["actual"]);
                exceptionResult = false;
			}
		})
	})
});
/*    if(removeElementsArray.length!=0 && removeElementsArray[0] == input){
        triggerCloseOnDut(removeElementsArray);
    return false;
    }else{
        triggerCloseOnDut(removeElementsArray);
        return exceptionResult;
        
    }*/
    if(removeElementsArray.length!=0){
    triggerCloseOnDut(removeElementsArray);
    $("#input").find("br").remove();
    }
    if(errorFlag){
    alert(dutSelectionerror);}
    
    return exceptionResult;
    
    
}
    
/////
function typeofValue(inData){
	var booldata = NumberRegex(inData);
	if(booldata){
				var valueText = (clone(inData)).replace(/[^a-z]/g,"").trim();
				var valueNumber = (clone(inData)).replace(/[^0-9]/g,"").trim();
				var tempObj = {},finalArray = [];
				tempObj["val"] = valueText;
				tempObj["numbered"]= "true";
				tempObj["actual"] = inData;
				finalArray.push(tempObj);
				return finalArray;
	}else{
			var valueText = (clone(inData)).replace(/[^a-z,]/g,"").trim();
			valueTextArray = valueText.split(',');
			var finalArray = []
				valueTextArray.map(function(d,i){
					var tempObj = {};
				tempObj["val"] = d;
				tempObj["numbered"] = "false";
                tempObj["actual"] = inData;
				finalArray.push(tempObj);
				});
				return finalArray;
	}
}

function triggerCloseOnDut(toBeRemoved){
toBeRemoved.map(function(e,j){


$(".item").each(function(d,i){
    var value = $(this).html();
    if(value == e){
            //var parent= $(this).parent();
			//var item=$(parent).find(".close").html();
			$(this).parent().remove();
        if(tempavailableTags.indexOf(value)==-1){
				tempavailableTags.push(value);
			}
			
    }
});
});

autocomplete(tempavailableTags);
}
    
    
	
	function addItem(selectValue){
		var selectedItem="<div class='selected_item'><span class='close'>x</span><span class='item'>"+selectValue.trim()+"</span></div>";
				$(".selected_element").append(selectedItem);
				$("#input").html("");
				setTimeout(function(){
					$("#input").find("br").remove();
				},100)
				
		$(".close").on("click",function(){
			var parent= $(this).parent();
			var item=$(parent).find(".item").html();
			$(this).parent().remove();
			
			if(tempavailableTags.indexOf(item)==-1){
				tempavailableTags.push(item);
			}
			autocomplete(tempavailableTags);
			
			
		
	})
	
	}

	function removeFromOutElement(inputVal){
	
		var avilableValues=[];
		tempavailableTags.forEach(function(d,i){
					avilableValues.push(d.toLowerCase());
		});
		
		var selectVal= inputVal.toLowerCase();
        
        avilableValues.sort();
		
		var index=avilableValues.indexOf(selectVal);
        
        tempavailableTags.sort();
		
		tempavailableTags.splice(index,1);
        
        
       
		
		autocomplete(tempavailableTags);
		
		
		
		
	}
	
	function autocomplete(arr){
	
		arr.sort();
		
		$( "#input" ).autocomplete({
			source: arr,
			 minLength: 0,
            scroll: true
        }).focus(function() {
            $(this).autocomplete("search", "");
        })
         .click(function() {
            $(this).autocomplete("search", "");
            
        });
        
        
        
        
        
	}
	
	
  