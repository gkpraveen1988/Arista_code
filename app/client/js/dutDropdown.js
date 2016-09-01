var tempavailableDutTags;
var availableDutTags = [];
	
	$("#inputDut").keypress(function (e) {
	
        if (e.keyCode == 13) {
            $("#inputDut").find("br").remove();
			var avilableValues=[];
            inputVal=$("#inputDut").html();
			
			availableDutTags.forEach(function(d,i){
					avilableValues.push(d.toLowerCase());
			});
			var selectValue=(inputVal.trim()).toLowerCase();
         
			
			if(avilableValues.indexOf(selectValue)!=-1){
			
				if(DutcheckWithPreviousValue(selectValue))
                {
                DutaddItem(inputVal);
                removeFromOutElement(inputVal);
                }
				
				
			}else{
			
				DutvalidationFuntion(selectValue);
                
                filter();
			}
            
        }
    });
	
	function DutvalidationFuntion(selectValue){
        
         
        var result = validateDutGroupString(selectValue,"Dut");
        if(result){
                if(DutcheckWithPreviousValue(selectValue)){
		        DutaddItem(selectValue);}
        } else{
            setTimeout(function(){
                $("#inputDut").find("br").remove();
            },100);
       
        }
	}
	
function DutcheckWithPreviousValue(input){
    
    var previous = [];
    var removeElementsArray = [];
    var exceptionResult = true;
    var errorFlag = false;
    var dutSelectionerror="Errors:- ";
$("#dutFormdiv .item").each(function(d,i){
    var value = $(this).html();
    previous.push(value);
});
previous.map(function(thisData,i){
	
	var modifiedthisData = DutTypeofValue(thisData);
	var modifiedInput = DutTypeofValue(input);
	modifiedthisData.map(function(tdata,i){
		modifiedInput.map(function(idata,i){
			if(tdata["val"]==idata["val"] && tdata["numbered"]=="true" && idata["numbered"]=="true"){
                if(tdata["actual"]==idata["actual"]){
                    dutSelectionerror +="* duplicate entry for "+tdata["actual"]+" \n";
                    errorFlag = true;
                    exceptionResult = false;
                }else{
                removeElementsArray.push(idata["actual"]);}
			}else if(tdata["val"]==idata["val"] && tdata["numbered"]=="false" && idata["numbered"]=="false"){
                dutSelectionerror +="* duplicate entry for "+tdata["val"]+" \n";
                errorFlag = true;
                exceptionResult = false;
			}else if(tdata["val"]==idata["val"] && tdata["numbered"]=="true"){
                dutSelectionerror +="* duplicate entry for "+idata["val"]+" \n";
                errorFlag = true;
                removeElementsArray.push(tdata["actual"]);
                exceptionResult = true;
			}else if(tdata["val"]==idata["val"] && idata["numbered"]=="true"){
                dutSelectionerror +="* duplicate entry for "+idata["val"]+" \n";
                errorFlag = true;
                exceptionResult = false;
			}
		})
	})
});
    if(removeElementsArray.length!=0){
    triggerCloseOnDut(removeElementsArray);
    $("#inputDut").find("br").remove();
    }
    if(errorFlag){
    alert(dutSelectionerror);}
    
    return exceptionResult;
    
    
}


function DutTypeofValue(inData){
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


$("#dutFormdiv .item").each(function(d,i){
    var value = $(this).html();
    if(value == e){
			$(this).parent().remove();
        if(tempavailableDutTags.indexOf(value)==-1){
				tempavailableDutTags.push(value);
			}
			
    }
});
});

Dutautocomplete(tempavailableDutTags);
}
    
    
	
	function DutaddItem(selectValue){
        
        
		var selectedItem="<div class='selected_item'><span class='close'>x</span><span class='item'>"+selectValue.trim()+"</span></div>";
				$("#dutFormdiv").find(".selected_element").append(selectedItem);
				$("#inputDut").html("");
				setTimeout(function(){
					$("#inputDut").find("br").remove();
                    
                    
                  		
		$("#dutFormdiv .close").on("click",function(event){
			var parent= $(this).parent();
			var item=$(parent).find(".item").html();
			$(this).parent().remove();
                
            filter();
            
            $("#mask").show();
            
			if(tempavailableDutTags.indexOf(item)==-1){
				tempavailableDutTags.push(item);
			}
			Dutautocomplete(tempavailableDutTags);
            
            
             $("#mask").hide();
            
           
			
            event.stopImmediatePropagation();
			
		
	})
               
                    
				},100)
		
	
	}

	function removeFromOutElement(inputVal){
		var avilableValues=[];
		tempavailableDutTags.forEach(function(d,i){
					avilableValues.push(d.toLowerCase());
		});
		var selectVal= inputVal.toLowerCase();
        avilableValues.sort();
		var index=avilableValues.indexOf(selectVal);
        tempavailableDutTags.sort();
		tempavailableDutTags.splice(index,1);
		Dutautocomplete(tempavailableDutTags);
	}

	
	function Dutautocomplete(arr){
	
		arr.sort();
		
		$( "#inputDut" ).autocomplete({
			source: arr,
			 minLength: 0,
            scroll: true
        }).focus(function(event) {
            $(this).autocomplete("search", "");
             event.stopImmediatePropagation();
        })
         .click(function(event) {
            $(this).autocomplete("search", "");
             event.stopImmediatePropagation();
            
        });
        
        
        
        
        
	}
	
	
  