 describe("TEST FUNCTIONS WITH TESTCASE-TYPE: MATCH EXPECTED INPUT AND OUTPUT ", function () {

 
 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(300);
            
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});
 
	describe("TEST FUNCTION: contains ", function () {
		it("  REMARKS:array contains the value or not (return true false)", function () {

				
		
			expect(tempArry.contains(67)).toEqual(true);

			expect(tempArry.contains(7)).toEqual(false);
		});
	});

	
	describe("TEST FUNCTION: unique ", function () {
		it("  REMARKS:find all the unique values from array", function () {

				
		
			expect(tempArry.unique()).toEqual(tempArry_uniq);

		});
	});
	
	

	describe("TEST FUNCTION:clone() ", function () {
		var clonedJson;
		beforeEach(function () {
			clonedJson = clone(inputResponseJsonSample);
		});
		it(" REMARKS:value cloned properly", function () {

			expect(clonedJson).toEqual(inputResponseJsonSample);

		});

		it("  REMARKS:cloned with out any reference", function () {

			clonedJson[0].hosts = "140";

			expect(clonedJson).not.toEqual(inputResponseJsonSample);

		});
	});

	
	describe("TEST FUNCTION: addUniqValuesToDropDown ", function () {
		it("  REMARKS:find all the unique values for project,dut and result and pass to respective function ", function () {

		    addUniqValuesToDropDown(tempData);	

			expect(uniqProjectArry).toEqual(temData_uniqProject.sort());
			expect(uniqDutArry).toEqual(temData_uniqDut.sort());
			expect(uniqResultArray).toEqual(tempData_uniqResult);

		});
	});
	
	describe("TEST FUNCTION: startFilterProcess() ", function () {
		it("  REMARKS:starts the filter process  ", function () {

			
			

			var consoleSpy = spyOn(console, "log");

		
		     startFilterProcess();

		     expect(consoleSpy).toHaveBeenCalledWith("lastupdatedSizeCheck function is called");

		});
	});
	
	describe("TEST FUNCTION: lastupdatedSizeCheck() ", function () {
		it("  REMARKS:check the size of the data and starts the filter process ", function () {
			var consoleSpy = spyOn(console, "log");
			
			lastUsedSize=50;
			intrecordsNumber=100;
			startFilterProcess();
			if (lastUsedSize == intrecordsNumber) {
				if (lastUsedSize != 20)
					expect(consoleSpy).toHaveBeenCalledWith("lastUsedSize is 50");
					
				else {
			
					expect(consoleSpy).toHaveBeenCalledWith("lastUsedSize is 20");
					
				}

			} else {
				
				expect(consoleSpy).toHaveBeenCalledWith("checkSize function called");
				
			}
			
			

		});
	});
	
	describe("TEST FUNCTION: checkSize() ", function () {
		it("REMARKS: fetch the the data for the required size ", function () {
			var consoleSpy = spyOn(console, "log");
			
			lastUsedSize=50;
			intrecordsNumber=100;
			globalMainData = tempData;
			startFilterProcess();
			if (lastUsedSize > 50 || recordsNumber == "ALL") {
					expect(consoleSpy).toHaveBeenCalledWith("ajaxCall called");
						
						
				} else if (intrecordsNumber == 50) {
					
					expect(globalMainData).toEqual(tempData);
					
				} else {
					
					expect(dummy20entriesData).toEqual(tempData.slice(0, 20));
					
				}
			
			

		});
	});
	
	describe("TEST FUNCTION: processDatefilter(),getFilterData() ", function () {
		it("REMARKS: filter the values based on date range ", function () {
			//var consoleSpy = spyOn(console, "log");
			$('#reservation').val('30/05/2016 - 29/06/2016');
			
			processDatefilter(tempData1);
		
			expect(dateFilteredData.length).toEqual(0);
		});
	});
	describe("TEST FUNCTION: Dut() ", function () {
		it("REMARKS: filter the values based on dut values ", function () {
			var consoleSpy1 = spyOn(console, "log");
			selectedDutText=["bh336"];
			DutLength=1;
			Dut(tempData1);
		
		    expect(consoleSpy1).toHaveBeenCalledWith(8);
			
		});
	});
     
	describe("TEST FUNCTION: processProjectFilter() ", function () {
		it("REMARKS: filter the values based on project values ", function () {
			var consoleSpy1 = spyOn(console, "log");
			selectedProjectText=["id.boise-th"];
			ProjectLength=1;
			processProjectFilter(tempData1);
		    expect(consoleSpy1).toHaveBeenCalledWith(1);
			
		});
	});
	
	describe("TEST FUNCTION: getFilterData() ", function () {
		it("REMARKS: filter the date values within date range ", function () {
			var consoleSpy1 = spyOn(console, "log");
			selectedProjectText=["id.boise-th"];
			ProjectLength=1;
			processProjectFilter(tempData1);
		    expect(consoleSpy1).toHaveBeenCalledWith(1);
			
		});
	});

 describe("TEST FUNCTION: regexFun0(), checkBrackets() ", function () {
                        it("REMARKS: Check for correct parenthesis expression in string ", function () {
                           
                                    var FirstCheck=regexFun0("(il*,cd*)");
                            expect(FirstCheck).toEqual(true);
                                    
                                    var secondCheck=regexFun0("il*,cd*)");
                            expect(secondCheck).toEqual(false);
                                    
                        });
            });
            
            describe("TEST FUNCTION: regexFun1() ", function () {
                        it("REMARKS: Check for valid DropDown selection ", function () {
                           
                                    var FirstCheck=regexFun1("bh209","Dut");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun1("bh*","Dut");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
     
     describe("TEST FUNCTION: regexFun2() ", function () {
                        it("REMARKS: Check for semicolon after parenthesis ", function () {
                           
                                    var FirstCheck=regexFun2("(bh*),(tg*)");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun2("(bh*);(tg*)");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });

describe("TEST FUNCTION: regexFun3() ", function () {
                        it("REMARKS: Check for right parenthesis before semicolon ", function () {
                           
                                    var FirstCheck=regexFun3("(;");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun3("(abc);");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
	




	
     describe("TEST FUNCTION: regexFun5() ", function () {
                        it("REMARKS: Check for no comma after the semicolon ", function () {
                           
                                    var FirstCheck=regexFun5("(bh*);,");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun5("(bh*);");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
     

     describe("TEST FUNCTION: regexFun6() ", function () {
                        it("REMARKS: Check for right parenthesis before the semicolon ", function () {
                           
                                    var FirstCheck=regexFun6("(bh*;)");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun6("(bh*);");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
     
     describe("TEST FUNCTION: regexFun7() ", function () {
                        it("REMARKS: Check for no comma before the semicolon ", function () {
                           
                                    var FirstCheck=regexFun7("(bh*),;");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun7("(bh*),(ti*);");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
     
     describe("TEST FUNCTION: regexFun8() ", function () {
                        it("REMARKS: Check for nothing entered between the parenthesis ", function () {
                           
                                    var FirstCheck=regexFun8("();");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun8("(bh*);");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
     
     describe("TEST FUNCTION: regexFun9() ", function () {
                        it("REMARKS: Check for right parenthesis before comma ", function () {
                           
                                    var FirstCheck=regexFun9("(,(bh*)");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun9("(tg*),(bh*);");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
     
     describe("TEST FUNCTION: regexFun10() ", function () {
                        it("REMARKS: Check for comma between parenthesis groups ", function () {
                           
                                    var FirstCheck=regexFun10(")(.");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun10("(tg*),(bh*);");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
     
     describe("TEST FUNCTION: regexFun11() ", function () {
                        it("REMARKS: Check for comma after right parenthesis ", function () {
                           
                                    var FirstCheck=regexFun11("(tg*,)(bh*)");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun11("(tg*),(bh*);");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
     
     describe("TEST FUNCTION: regexFun12() ", function () {
                        it("REMARKS: Check for valid DropDown selection ", function () {
                           
                                    var FirstCheck=regexFun12("bh*","Dut");
                            expect(FirstCheck).toEqual(true);
                                    
                                    var secondCheck=regexFun12("1256","Dut");
                            expect(secondCheck).toEqual(false);
                                    
                        });
            });
     
     describe("TEST FUNCTION: regexFun13() ", function () {
                        it("REMARKS: Check for duplicate values ", function () {
                           
                                    var FirstCheck=regexFun13("(bh*),(bh*)");
                            expect(FirstCheck).toEqual(false);
                                    
                                    var secondCheck=regexFun13("(tg*),(bh*);");
                            expect(secondCheck).toEqual(true);
                                    
                        });
            });
	
	
	
	describe("TEST FUNCTION: filterFunction() ", function () {
		it("REMARKS: Start the dut filtration ", function () {
		    var consoleSpy1 = spyOn(console, "log");
			filterFunction(["bh*,in*"],arrayTobeUsedForFilter);
			
			
			 afterFilterDutArray = afterFilterDutArray.sort(function(a, b){
 var dateA = new Date(a.testTime), dateB = new Date(b.testTime)
    return dateA-dateB;
});
			expect(consoleSpy1).toHaveBeenCalledWith('bh321');
			
			
			
		});
	});
	
	describe("TEST FUNCTION: filterProjects() ", function () {
		it("REMARKS: Start the project filtration for the selected dropdown ", function () {
		    var consoleSpy1 = spyOn(console, "log");
			filterProjects(["ga*"],arrayTobeUsedForFilter);
			
			
			 
			expect(consoleSpy1).toHaveBeenCalledWith('ga.peachtree');
			
			
			
		});
	});
	
	
	
	
	
	

}); 

 describe("TEST FUNCTIONS WITH TESTCASE-TYPE: DOM ELEMENTS PRESENCE", function () {
	describe("TESTING DROPDOWNS ", function () {

		beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(100);
            drawBars(tempData);
		});

		afterEach(function () {
			jasmine.clock().uninstall();

		});

		it(" REMARKS: firstdropdown is present in DOM", function () {
            var drop1;
			setTimeout(function () {

				drop1 = d3.selectAll('.form-group#drop1')

			}, 500)

			jasmine.clock().tick(1000);
			expect(drop1).toBeInDOM();
            expect(drop1[0]).not.toEqual([null]);
		});
		it(" REMARKS: seconddropdown is present in DOM", function () {
            var drop2;
			setTimeout(function () {

				drop2 = d3.selectAll('.form-group#drop2')

			}, 500)

			jasmine.clock().tick(1000);
			expect(drop2).toBeInDOM();
            expect(drop2[0]).not.toEqual([null]);
		});  
        
		it(" REMARKS: filter WHEN is present in DOM", function () {
            var filterWHEN;
			setTimeout(function () {

				filterWHEN = d3.selectAll('.form-group#dateForm')

			}, 500)

			jasmine.clock().tick(1000);
			expect(filterWHEN).toBeInDOM();
            expect(filterWHEN[0]).not.toEqual([null]);
		});   

		it(" REMARKS: filter WHERE is present in DOM", function () {
            var filterWHERE;
			setTimeout(function () {

				filterWHERE = d3.selectAll('.form-group#dutForm')

			}, 500)

			jasmine.clock().tick(1000);
			expect(filterWHERE).toBeInDOM();
            expect(filterWHERE[0]).not.toEqual([null]);
		});      
        
		it(" REMARKS: filter PROJECT is present in DOM", function () {
            var filterPROJECT;
			setTimeout(function () {

				filterPROJECT = d3.selectAll('.form-group#projectForm')

			}, 500)

			jasmine.clock().tick(1000);
			expect(filterPROJECT).toBeInDOM();
            expect(filterPROJECT[0]).not.toEqual([null]);
		});       
        
		it(" REMARKS: filter RESULTTHRESHOLD is present in DOM", function () {
            var filterRESULTTHRESHOLD;
			setTimeout(function () {

				filterRESULTTHRESHOLD = d3.selectAll('.form-group#resultDrop')

			}, 500)

			jasmine.clock().tick(1000);
			expect(filterRESULTTHRESHOLD).toBeInDOM();
            expect(filterRESULTTHRESHOLD[0]).not.toEqual([null]);
		});         
        
		it(" REMARKS: filter SIZE is present in DOM", function () {
            var filterSIZE;
			setTimeout(function () {

				filterSIZE = d3.selectAll('.form-group#sizeForm')

			}, 500)

			jasmine.clock().tick(1000);
			expect(filterSIZE).toBeInDOM();
            expect(filterSIZE[0]).not.toEqual([null]);
		});          
        
    
        
		       
        
        
		it(" REMARKS: y-axis present in DOM", function () {

                
			var YAxis;

			setTimeout(function () {

				YAxis = d3.select('.y.axis');

			}, 500)

			jasmine.clock().tick(1000);
			expect(YAxis).toBeInDOM();
            expect(YAxis[0]).not.toEqual([null]);

		});   
		it(" REMARKS: x-axis present in DOM", function () {

                
			var YAxis;

			setTimeout(function () {

				YAxis = d3.select('.x.axis');

			}, 500)

			jasmine.clock().tick(1000);
			expect(YAxis).toBeInDOM();
            expect(YAxis[0]).not.toEqual([null]);

		});  
		it(" REMARKS: bars present in DOM", function () {

                
			var YAxis;

			setTimeout(function () {

				bars = d3.selectAll('.chartGroup');
                
			}, 500)

			jasmine.clock().tick(1000);
			expect(bars).toBeInDOM();
            expect(bars[0]).not.toEqual([null]);

		});         
        

	});

});


describe("TEST CASES FOR charts.js",function(){



	describe("TESTING values in filters ", function () {

		beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(100);
			//uniqProjectArry=temData_uniqProject;
            //drawBars(tempData);
		});

		afterEach(function () {
			jasmine.clock().uninstall();

		});
        
		it(" REMARKS: addUniqProjectToDropDown() function", function () {

			
			setTimeout(function () {

				
				addUniqProjectToDropDown(temData_uniqProject);
                
			}, 1000)

			jasmine.clock().tick(2500);
			
			 //expect($('#ui-id-2').find(".ui-menu-item-wrapper:first-child").html()).toEqual('2016.aclleak.0');
            //expect($('#ui-id-2').find('.ui-menu-item-wrapper').html()).toEqual('id.boise-th');
            expect($("#ui-id-2")).toBeInDOM();

		});  
        
		it(" REMARKS: addUniqDutToDropDown() function", function () {


			setTimeout(function () {

				addUniqDutToDropDown(temData_uniqDut);
                
			}, 500)

			jasmine.clock().tick(1000);
            //expect($('#dutDrop option:first-child').val()).toEqual('bh321');
            expect($("#ui-id-1")).toBeInDOM();

		}); 
        
		it(" REMARKS: addUniqProjectToDropDown() function", function () {


			setTimeout(function () {

				addResultValuesToDropDown(tempData_uniqResult);
                
			}, 500)

			jasmine.clock().tick(1000);
            expect($('#resultDrop option:first-child').val()).toEqual('> (Mean + σ)');
            //expect($("#projectDrop").html()).toBeInDOM();

		});   
        
        //getData
		it(" REMARKS: getData() function", function () {
			var html = '';
			$.each(dataTofirstDropDown, function (i, d) {
				html += '<option>' + d + '</option>';
			});
			$('#drop1 select').html(html);            
            var result;
            var consoleSpy = spyOn(console, "log");
			setTimeout(function () {
                getData("false",false);
			}, 500)
			jasmine.clock().tick(1000);
            expect(consoleSpy).toHaveBeenCalledWith("ajaxcall with dropdown1 value");
            expect(consoleSpy).toHaveBeenCalledWith("ajaxCall with data as first input value");

		});         
        
        
        
        //nextRequiredDate
		it(" REMARKS: nextRequiredDate() function", function () {

            var result;
			setTimeout(function () {

				result = nextRequiredDate(testinputDate);
                
			}, 500)

			jasmine.clock().tick(600);
            expect(result).toEqual(testexpectedDate);
            //expect($("#projectDrop").html()).toBeInDOM();

		});          
        

    });

});





describe("TEST CASES FOR FRONT-END AJAX REQUEST VALIDATION", function ()
	{
	beforeEach(function () {
		jasmine.Ajax.install();
	});
	afterEach(function () {
		jasmine.Ajax.uninstall();
	});

	it("Requested to correct Url", function () {

		var consoleSpy = spyOn(console, "log");

		ajaxCall();
		expect(jasmine.Ajax.requests.mostRecent().url).toEqual('/');

	});
});

describe(" TESTCASES FOR EXCEPTION HANDLING AND CONSOLE LOGS", function ()
	{
	beforeEach(function () {
		jasmine.Ajax.install();
	});
	afterEach(function () {
		jasmine.Ajax.uninstall();
	});
	it("Ajax error response exception handled and consoled correctly", function () {

		var consoleSpy = spyOn(console, "log");

		jasmine.Ajax.stubRequest('/').andReturn({
			"status" : 404,
			"responseText" : "error"

		})

		ajaxCall();

		expect(consoleSpy).toHaveBeenCalledWith('error');

	});
});

describe("test cases for makeGraphtable.js",function(){
		beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(100);
		});

		afterEach(function () {
			jasmine.clock().uninstall();

		});
        it("createDatesArray()",function(){
            var consoleSpy;
            consoleSpy = spyOn(console, "log");
            createDatesArray(tempData1);
        expect(consoleSpy).toHaveBeenCalledWith(outputDates);
        })
 
        it("createNullElementsArray()",function(){
            var consoleSpy;
            consoleSpy = spyOn(console, "log");
            createNullElementsArray(outputDates,tempData1);
        expect(consoleSpy).toHaveBeenCalledWith(nullDates);
        })

        it("dataForAllDates()",function(){
            var consoleSpy;
            consoleSpy = spyOn(console, "log");
            dataForAllDates(nullDates,tempData1);
			
            jasmine.clock().tick(250);
            expect(consoleSpy).toHaveBeenCalledWith(ex[0]);
        })
 
        it("filltable()",function(){
            filltable(tempData1);
            jasmine.clock().tick(200);
            tableSize = d3.selectAll("#example1 tr ").size();
            expect(tableSize).toEqual(51);
        })

        it("placeArrays()",function(){
            var consoleSpy = spyOn(console, "log");
            $("#table").html("");
            placeArrays([],tempData1);
            expect(consoleSpy).toHaveBeenCalledWith("to createDatesArray() function");
            jasmine.clock().tick(200);
            tableSize = d3.selectAll("#example1 tr ").size();
            expect(tableSize).toEqual(51);
        })
    
})


describe("TEST FUNCTIONS:dutDropdown.js ", function () {

 
	describe("TEST FUNCTION: DutTypeofValue ", function () {
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(300);
            
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});


		it("  REMARKS: returns an array of objects", function () {

				
		
			expect(DutTypeofValue("bh326")).toEqual(expectedDutArray1);
			expect(DutTypeofValue("tg*")).toEqual(expectedDutArray2);
		});
	});


	describe("TEST FUNCTION: DutcheckWithPreviousValue ", function () {
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(300);
			var selectValue = "in320";
			var selectedItem="<div class='selected_item'><span class='close'>x</span><span class='item'>"+selectValue.trim()+"</span></div>";
				$("#dutFormdiv").find(".selected_element").append(selectedItem);
				$("#inputDut").html("");			
            
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS: returns a boolean value", function () {
			expect(DutcheckWithPreviousValue("in320")).toEqual(false);
			expect(DutcheckWithPreviousValue("bh*")).toEqual(true);


		});
	});

	describe("TEST FUNCTION: removeFromOutElement ", function () {
		var consoleSpy;
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(1000);
			consoleSpy = spyOn(console, "log");

		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS:spy console", function () {


			tempavailableDutTags=['bh321','bh322','yo620','bh323'];
            removeFromOutElement("bh321");			
            jasmine.clock().tick(1300);

			expect(consoleSpy).toHaveBeenCalledWith("in Dutautocomplete function");

		});
	});

describe("TEST FUNCTION: DutaddItem ", function () {
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(300);
			var selectValue1 = "bh326";
			var selectValue2 = "bh325";
			DutaddItem(selectValue1);
			DutaddItem(selectValue2);
            
		});
		afterEach(function () {
			jasmine.clock().uninstall();

		});
		it("  REMARKS: Dut successfully added", function () {
			var addedDutsArray = [];
			$("#dutFormdiv .item").each(function(d,i){
    		var value = $(this).html();
    		addedDutsArray.push(value);
			});
			expect(addedDutsArray).toEqual(expectedAddedDutsArray);
		});
	});

describe("TEST FUNCTION: triggerCloseOnDut ", function () {
		var consoleSpy;
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(1000);
			consoleSpy = spyOn(console, "log");
			tempavailableDutTags = ["tg321"];
			triggerCloseOnDut(expectedAddedDutsArray);
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS: called Dutautocomplete function successfully", function () {			
            jasmine.clock().tick(1300);

			expect(consoleSpy).toHaveBeenCalledWith("in Dutautocomplete function");

		});
	});

describe("TEST FUNCTION: DutvalidationFuntion ", function () {
		var consoleSpy;
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(1000);
			consoleSpy = spyOn(console, "log");
			uniqueSlicedDutValues = ["in","tg"];
			DutvalidationFuntion("tg*");
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS: called DutaddItem function successfully", function () {			
            jasmine.clock().tick(1300);
            expect(consoleSpy).toHaveBeenCalledWith("in DutaddItem function");

		});
	});



describe("TEST FUNCTION: Dutautocomplete ", function () {
		var consoleSpy;
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(1000);
			consoleSpy = spyOn(console, "log");
			$( "#dutFormdiv" ).autocomplete({
			source: expectedAddedDutsArray,
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
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS: checking autocomplete jquery ui", function () {		
			Dutautocomplete(expectedAddedDutsArray);
            jasmine.clock().tick(1300);

			expect(consoleSpy).toHaveBeenCalledWith("in Dutautocomplete function");

		});
	});


});


describe("TEST FUNCTIONS:projectDropdown.js ", function () {

 
	describe("TEST FUNCTION: PorjecttypeofValue ", function () {
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(300);
            
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});


		it("  REMARKS: returns an array of objects", function () {

				
		
			expect(PorjecttypeofValue("eos-trunk")).toEqual(expectedProjectArray1);
			expect(PorjecttypeofValue("il*")).toEqual(expectedProjectArray2);
		});
	});


	describe("TEST FUNCTION: ProjectcheckWithPreviousValue ", function () {
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(300);
			var selectValue = "il.elgin-th-plus";
			var selectedItem="<div class='selected_item'><span class='close'>x</span><span class='item'>"+selectValue.trim()+"</span></div>";
				$("#projectFormdiv").find(".selected_element").append(selectedItem);
				$("#inputProject").html("");			
            
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS: returns a boolean value", function () {
			expect(ProjectcheckWithPreviousValue("il.elgin-th-plus")).toEqual(false);
			expect(ProjectcheckWithPreviousValue("id*")).toEqual(true);


		});
	});

	describe("TEST FUNCTION: removeFromProjectElement ", function () {
		var consoleSpy;
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(1000);
			consoleSpy = spyOn(console, "log");

		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS:spy console", function () {


			tempavailableProjectTags=['bh321','bh322','yo620','bh323'];
            removeFromProjectElement("bh321");			
            jasmine.clock().tick(1300);

			expect(consoleSpy).toHaveBeenCalledWith("in Projectautocomplete function");

		});
	});

describe("TEST FUNCTION: ProjectaddItem ", function () {
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(300);
			var selectValue1 = "il.elgin-th-plus";
			var selectValue2 = "id.burley-th";
			ProjectaddItem(selectValue1);
			ProjectaddItem(selectValue2);
            
		});
		afterEach(function () {
			jasmine.clock().uninstall();

		});
		it("  REMARKS: Project successfully added", function () {
			var addedProjectsArray = [];
			$("#projectFormdiv .item").each(function(d,i){
    		var value = $(this).html();
    		addedProjectsArray.push(value);
			});
			expect(addedProjectsArray).toEqual(expectedAddedProjectsArray);
		});
	});

describe("TEST FUNCTION: triggerCloseOnProject ", function () {
		var consoleSpy;
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(1000);
			consoleSpy = spyOn(console, "log");
			tempavailableDutTags = ["tg321"];
			triggerCloseOnProject(expectedAddedProjectsArray);
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS: called Projectautocomplete function successfully", function () {			
            jasmine.clock().tick(1300);

			expect(consoleSpy).toHaveBeenCalledWith("in Projectautocomplete function");

		});
	});

describe("TEST FUNCTION: ProjectvalidationFuntion ", function () {
		var consoleSpy;
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(1000);
			consoleSpy = spyOn(console, "log");
			uniqueSlicedProjectValues = ["il.elgin-th-plus","id.burley-th"];
			ProjectvalidationFuntion("il*");
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS: called ProjectaddItem function successfully", function () {			
            jasmine.clock().tick(1300);
            expect(consoleSpy).toHaveBeenCalledWith("in ProjectaddItem function");

		});
	});



describe("TEST FUNCTION: Projectautocomplete ", function () {
		var consoleSpy;
	 beforeEach(function () {
			jasmine.getFixtures().fixturesPath = 'template';
			fixtureUrl = "index_template.html";
			jasmine.getFixtures().load(fixtureUrl);
			jasmine.clock().install();
			jasmine.clock().tick(1000);
			consoleSpy = spyOn(console, "log");
			$( "#dutFormdiv" ).autocomplete({
			source: expectedAddedDutsArray,
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
		});
		
		afterEach(function () {
			jasmine.clock().uninstall();

		});

		
		it("  REMARKS: checking autocomplete jquery ui", function () {		
			Projectautocomplete(expectedAddedDutsArray);
            jasmine.clock().tick(1300);

			expect(consoleSpy).toHaveBeenCalledWith("in Projectautocomplete function");

		});
	});


});



