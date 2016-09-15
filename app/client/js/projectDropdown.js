var tempavailableProjectTags;
var availableProjectTags = [];
	
	$("#inputProject").keypress(function (e) {
	
        if (e.keyCode == 13) {
            $("#inputProject").find("br").remove();
			var avilableValues=[];
            inputVal=$("#inputProject").html();
			
			availableProjectTags.forEach(function(d,i){
                    avilableValues.push(d);
			});
         var selectValue=(inputVal.trim());
			
			if(avilableValues.indexOf(selectValue)!=-1){
				if(ProjectcheckWithPreviousValue(selectValue))
                {
                ProjectaddItem(inputVal);
                removeFromProjectElement(inputVal);
                }
				
				
			}else{
			
				ProjectvalidationFuntion(selectValue);
                filter();
			}
            
        }
    });
	
	function ProjectvalidationFuntion(selectValue){
        var result = validateDutGroupString(selectValue,"Project");
        if(result){
                if(ProjectcheckWithPreviousValue(selectValue)){
		        ProjectaddItem(selectValue);}
        } else{
            setTimeout(function(){
                $("#inputProject").find("br").remove();
            },100);
       
        }
	}
	
function ProjectcheckWithPreviousValue(input){
    var previous = [];
    var removeElementsArray = [];
    var exceptionResult = true;
    var errorFlag = false;
    var dutSelectionerror="Errors:- ";
    
$("#projectFormdiv .item").each(function(d,i){
    var value = $(this).html();
    previous.push(value);
});
    var starred = input.match(/[*]/g);
   var localBoolResult=[];
    previous.map(function(thisData,i){
	
	var modifiedthisData = PorjecttypeofValue(thisData); 
	var modifiedInput = PorjecttypeofValue(input);
      
	modifiedthisData.map(function(tdata,i){
		modifiedInput.map(function(idata,i){
			if(tdata["val"]==idata["val"] && tdata["starred"]=="true" && idata["starred"]=="true"){
                    dutSelectionerror +="* duplicate entry for "+tdata["val"]+" \n";
                    errorFlag = true;
                localBoolResult.push("false");
			}else if(tdata["val"]==idata["val"] && tdata["starred"]=="false" && idata["starred"]=="false"){
                dutSelectionerror +="* duplicate entry for "+tdata["val"]+" \n";
                errorFlag = true;
                localBoolResult.push("false");
			}else if(((idata["actual"].search(tdata["val"]))!=-1) && tdata["starred"]=="true"){
                if(checkThoroughly(tdata["actual"],idata["actual"])){
                dutSelectionerror +="* duplicate entry for "+tdata["val"]+" \n";
                errorFlag = true;
                localBoolResult.push("false");}else{
                localBoolResult.push("true");
                }
			}else if(((tdata["actual"].search(idata["val"]))!=-1) && idata["starred"]=="true"){
                if(checkThoroughly(idata["actual"],tdata["actual"])){
                    dutSelectionerror +="* duplicate entry for "+idata["val"]+" \n";
                    errorFlag = true;
                    removeElementsArray.push(tdata["actual"]);
                    localBoolResult.push("true"); }else{                
                    localBoolResult.push("true");}
			}else if(((idata["val"].search(tdata["val"]))==-1) && tdata["starred"]=="true" && idata["starred"]=="true"){
               var tdataArray = availableProjectTags.filter(function(tag,i){
                    return ((tag.toLowerCase()).search(tdata["val"])!=-1) 
                    
                })
                
                var idataArray = availableProjectTags.filter(function(d,i){
                
                    return ((d.toLowerCase()).search(idata["val"])!=-1)
                })
                
                  var diffArray = availableProjectTags.filter(function(tag,i){
                   
                    return ((tag.search(tdata["val"])!=-1) && (tag.search(idata["val"])==-1))
                    
                })
                  var diffArray2 = availableProjectTags.filter(function(tag,i){
                   
                    return ((tag.search(tdata["val"])==-1) && (tag.search(idata["val"])!=-1))
                    
                })       
                
                
                if(diffArray.length==0 && diffArray2.length==0){
                dutSelectionerror +="* values having "+idata["val"]+" are already selected \n";
                errorFlag = true;
                localBoolResult.push("false");
                }else{
                    localBoolResult.push("true");
                }
            
            }
		})
	})
});
    

    if(removeElementsArray.length!=0){
    triggerCloseOnProject(removeElementsArray);
    $("#inputProject").find("br").remove();
    }
    if(errorFlag){
    alert(dutSelectionerror);}
    
    
        if(localBoolResult.indexOf("false")==-1){
            exceptionResult =true;
        }else{
            exceptionResult = false;
        }
    
    
    
    return exceptionResult;
    
    
}

function PorjecttypeofValue(inData){
                            
	var booldata = starRegex(inData);
	if(!booldata){
				var tempObj = {},finalArray = [];
				tempObj["val"] = inData.toLowerCase();
				tempObj["starred"]= "false";
				tempObj["actual"] = inData.toLowerCase();;
				finalArray.push(tempObj);
				return finalArray;
	}else{
			var valueText = (clone(inData));
			valueTextArray = valueText.split(',');
			var finalArray = []
				valueTextArray.map(function(d,i){
					var tempObj = {};
				tempObj["val"] = (d.replace(/[^A-Za-z0-9-,]/g,"").trim()).toLowerCase();
				tempObj["starred"] = "true";
                tempObj["actual"] = d.toLowerCase();
				finalArray.push(tempObj);
				});
				return finalArray;
	}
}

function triggerCloseOnProject(toBeRemoved){
toBeRemoved.map(function(e,j){


$("#projectFormdiv .item").each(function(d,i){
    var value = $(this).html();
    if((clone(value).toLowerCase()) == e){
			$(this).parent().remove();
        if(tempavailableProjectTags.indexOf(value)==-1){
				tempavailableProjectTags.push(value);
			}
			
    }
});
});

Projectautocomplete(tempavailableProjectTags);
}
    
    
	
	function ProjectaddItem(selectValue){
        
		var selectedItem="<div class='selected_item'><span class='close'>x</span><span class='item'>"+selectValue.trim()+"</span></div>";
				$("#projectForm").find(".selected_element").append(selectedItem);
				$("#inputProject").html("");
				setTimeout(function(){
					$("#inputProject").find("br").remove();
				},100)
				
		$("#projectFormdiv .close").on("click",function(event){
			var parent= $(this).parent();
			var item=$(parent).find(".item").html();
			$(this).parent().remove();
			
			if(tempavailableProjectTags.indexOf(item)==-1){
				tempavailableProjectTags.push(item);
			}
			Projectautocomplete(tempavailableProjectTags);
			filter();
            
          event.stopImmediatePropagation();
			
		
	})
	
	}

	function removeFromProjectElement(inputVal){
		var avilableValues=[];
		tempavailableProjectTags.forEach(function(d,i){
                      avilableValues.push(d);
		});
            var selectVal= inputVal;
        avilableValues.sort();
		var index=avilableValues.indexOf(selectVal);
        tempavailableProjectTags.sort();
		tempavailableProjectTags.splice(index,1);
		Projectautocomplete(tempavailableProjectTags);
	}

	
	function Projectautocomplete(arr){
	
		arr.sort();
		
		$( "#inputProject" ).autocomplete({
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
	
	

function checkThoroughly(input1,input2){
    var boolValue = false;
                switch(ProjectRegex(input1)){
                        
                    case "startsWith":
                        if(input2.startsWith((input1.replace(/[*]/g,"")).trim()))
                            boolValue = true;
                        break;
                    case "endsWith":
                        if(input2.endsWith((input1.replace(/[*]/g,"")).trim()))
                            boolValue = true;
                        break;
                    case "substring":                  
                        if (input2.search((input1.replace(/[*]/g,"")).trim())!=-1)  
                            boolValue = true;
                        break;
                }
    
    return boolValue;
}


  