var tempavailableProjectTags;
var availableProjectTags = [];
	
	$("#inputProject").keypress(function (e) {
	
        if (e.keyCode == 13) {
            $("#inputProject").find("br").remove();
			var avilableValues=[];
            inputVal=$("#inputProject").html();
			
			availableProjectTags.forEach(function(d,i){
					avilableValues.push(d.toLowerCase());
			});
			var selectValue=(inputVal.trim()).toLowerCase();
         
			
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
                dutSelectionerror +="* duplicate entry for "+tdata["val"]+" \n";
                errorFlag = true;
                localBoolResult.push("false");
			}else if(((tdata["actual"].search(idata["val"]))!=-1) && idata["starred"]=="true"){
                dutSelectionerror +="* duplicate entry for "+idata["val"]+" \n";
                errorFlag = true;
                removeElementsArray.push(tdata["actual"]);
                localBoolResult.push("true");
			}else if(((idata["val"].search(tdata["val"]))==-1) && tdata["starred"]=="true" && idata["starred"]=="true"){
                
                 
                var diffArray = availableProjectTags.filter(function(tag,i){
                   
                    return ((tag.search(tdata["val"])!=-1) && (tag.search(idata["val"])==-1))
                    
                })
                if(diffArray.length!=0){
                localBoolResult.push("true");
                }else{
                dutSelectionerror +="* values having "+idata["val"]+" are already selected \n";
                errorFlag = true;
                localBoolResult.push("false");
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
				tempObj["val"] = inData;
				tempObj["starred"]= "false";
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
				tempObj["starred"] = "true";
                tempObj["actual"] = inData;
				finalArray.push(tempObj);
				});
				return finalArray;
	}
}

function triggerCloseOnProject(toBeRemoved){
toBeRemoved.map(function(e,j){


$("#projectFormdiv .item").each(function(d,i){
    var value = $(this).html();
    if(value == e){
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
					avilableValues.push(d.toLowerCase());
		});
		var selectVal= inputVal.toLowerCase();
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
	
	
  