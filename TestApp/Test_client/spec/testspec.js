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

			expect(uniqProjectArry).toEqual(temData_uniqProject);
			expect(uniqDutArry).toEqual(temData_uniqDut);
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
        
    
        
		it(" REMARKS: GO button  is present in DOM", function () {
            var buttonGO;
			setTimeout(function () {

				buttonGO = d3.select('#filterGo')

			}, 500)

			jasmine.clock().tick(1000);
			expect(buttonGO).toBeInDOM();
            expect(buttonGO[0]).not.toEqual([null]);
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
            drawBars(tempData);
		});

		afterEach(function () {
			jasmine.clock().uninstall();

		});
        
		it(" REMARKS: addUniqProjectToDropDown() function", function () {


			setTimeout(function () {

				addUniqProjectToDropDown(temData_uniqProject);
                
			}, 500)

			jasmine.clock().tick(1000);
            expect($('#projectDrop option:first-child').val()).toEqual('id.boise-th');
            //expect($("#projectDrop").html()).toBeInDOM();

		});  
        
		it(" REMARKS: addUniqDutToDropDown() function", function () {


			setTimeout(function () {

				addUniqDutToDropDown(temData_uniqDut);
                
			}, 500)

			jasmine.clock().tick(1000);
            expect($('#dutDrop option:first-child').val()).toEqual('bh321');
            //expect($("#projectDrop").html()).toBeInDOM();

		}); 
        
		it(" REMARKS: addUniqProjectToDropDown() function", function () {


			setTimeout(function () {

				addResultValuesToDropDown(tempData_uniqResult);
                
			}, 500)

			jasmine.clock().tick(1000);
            expect($('#resultDrop option:first-child').val()).toEqual('303.63 - 421.91');
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
            jasmine.clock().tick(100);
        expect(consoleSpy).toHaveBeenCalledWith(ex);
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


/*
describe("AjaxCall TestCases",function(){

		beforeEach(function () {
			jasmine.clock().install();
			jasmine.clock().tick(100);
		});

		afterEach(function () {
			jasmine.clock().uninstall();
		});    

    it("",function(){
    var xhttp = new XMLHttpRequest();    
    var consoleSpy = spyOn(console, "log");
     //xhttp.send("Fetch=firstDropDownValue&value=");
    ajaxCall("firstDropDownValue", "");
        jasmine.clock().tick(1000);
        expect(consoleSpy).toHaveBeenCalledWith("");
    //xhttp.send("Fetch=firstDropDownValue&value=");
    
    
    })
    

})
*/
