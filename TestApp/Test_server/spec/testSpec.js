/*
30 test cases

*/

//TestDataBase

var testurl = require("../Testjs/Test_serverUrl.js");
var url = require("../../../app/server/js/url.js");
var data = require(testurl.dataJS);
var dbConfig = require(testurl.dbConfigJS);
var server = require(testurl.serverJS);
var request = require("../lib/node_modules/request");
var common = require(testurl.commonJs);
var GlobalConnection;


 var pool  = dbConfig.dbPool();
        	pool.getConnection(function (err, cursor) {
                console.log("connecting to db");
		if (err) {
			console.log(err);
			return;
		} else {
            GlobalConnection = cursor;
            console.log("connected");
		}
	});


 
 describe("SERVER REQUEST AND RESPONSE TEST CASES", function () {

    var request = require(testurl.request);
    var clientUrl = "http://localhost:7777/";
    describe("checking Whether server is started", function () {
        it("server started", function (done) {
            var consoleSpy = spyOn(console, "log");
            request.post(clientUrl, function (error, response, body) {
                expect(consoleSpy).toHaveBeenCalledWith("server started");
                done();
            });
        });
    });

    describe("checking the method of request", function () {
        it("request method is POST", function (done) {
            var consoleSpy = spyOn(console, "log");
            request.post(clientUrl, function (error, response, body) {
                expect(consoleSpy).toHaveBeenCalledWith("request type is POST");
                done();
            });
        });
    });

    describe("response status from server", function () {
        it("returns status code 404", function (done) {
            request.post(clientUrl, function (error, response, body) {
                expect(response.statusCode).toBe(404);
                done();
            });
        });
    });
    
    describe("Negative response status from server", function () {
        it("returns status code 404", function (done) {
            clientUrl = "http://localhost:7777/"
                request.post(clientUrl, function (error, response, body) {
                    expect(response.statusCode).toBe(404);
                    done();
                });
        });
    });
})


    describe ("functions of common.js",function(){
///////////////////////////////////////////////////////////////////////////////////////////    
    
        describe("FUNCTION: createDateObject()", function () {
        it("TEST: PASSED REMARKS:  ", function () {
        var result = common.createDateObject();
        var actual = Object.keys(result).sort();
        var expected = ['removeDate','lastDate','currentDate'].sort();            
            expect(result).toEqual(jasmine.any(Object));
            expect(actual).toEqual(expected);
        });
    });
    
///////////////////////////////////////////////////////////////////////////////////////////  
    describe("FUNCTION: nextRequiredDate()", function () {
        it("TEST: PASSED REMARKS:  ", function () {
        var result = common.nextRequiredDate(data.inputDate);
            expect(result).toEqual(jasmine.any(String));
            expect(result).toEqual(data.expectedDate);
        });
    });

         describe("FUNCTION: clone() ", function () {
        var clonedJson;
        beforeEach(function () {
            cloneFuncInput  = data.SampleforClone;
            cloneFuncOutput = data.SampleforClone;
            clonedJson = common.clone(cloneFuncInput);
        });
        it(" REMARKS:value cloned properly", function () {

            expect(clonedJson).toEqual(cloneFuncOutput);

        });

        it("  REMARKS:cloned with out any reference", function () {

            clonedJson[0].dut = "null";

            expect(clonedJson).not.toEqual(cloneFuncOutput);

        });
    });

         
    describe("FUNCTION: DisplaytimeStamp()", function(){
        var result;
        beforeEach(function(){

           result =  common.DisplaytimeStamp();
        })
        it("returning the object",function(){
            expect(result).toEqual(jasmine.any(String));
        })
    })

    })

    describe ("functions of dbConfig.js",function(){
///////////////////////////////////////////////////////////////////////////////////////////    
    describe("FUNCTION: dbPool()", function () {
        it("TEST: PASSED REMARKS:  ", function () {
        var resultPool = dbConfig.dbPool();
            expect(resultPool).toEqual(jasmine.any(Object));
        });
    });    
    });



describe("server functions",function(){

describe("FUNCTION: getDataFromServer()",function(){

    var finished = false;
    beforeEach(function(){

    server.getDataFromServer({},'50-ArBgpPerfPolicyScaleTest.Ipv4 fib check with 100 routes');  
    spyOn(server, "giveResponse");
    })

    it("control is passed to FUNCTION: giveResponse() successfully",function(){
runs(function() {
                setTimeout(function(){
                
                finished = true;
                },3000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 3000);

                runs(function() {
                expect(server.giveResponse).toHaveBeenCalled();
                }); 



    })



})

            describe("FUNCTION: getDescription()",function(){

    var finished = false;
    beforeEach(function(){
        setTimeout(function(){
            url.rawFile = "../../TestApp/Test_server/DataBase/TestDataBase.db";                        
   server.getDescription({},'execBinTrue');  

    spyOn(server, "giveResponse");
        },100)
    })

    it("control is passed to FUNCTION: giveResponse() successfully",function(){
runs(function() {
                setTimeout(function(){
                
                finished = true;
                },2000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 2000);

                runs(function() {
                expect(server.giveResponse).toHaveBeenCalled();
                }); 



    })



});






describe("FUNCTION: getData()",function(){

    var finished = false;
    beforeEach(function(){
url.rawFile = "../../TestApp/Test_server/DataBase/TestDataBase.db"; 
    server.getData({},'ArBgpPerfPolicyScaleTest.Ipv4 fib check with 100 routes');  
    spyOn(server, "giveResponse");

    })

    it("control is passed to FUNCTION: giveResponse() successfully",function(){
runs(function() {
                setTimeout(function(){
                
                finished = true;
                },2000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 2000);

                runs(function() {
                expect(server.giveResponse).toHaveBeenCalled();
                }); 



    })



});


describe("FUNCTION: getIDs()",function(){

    var finished = false;
    beforeEach(function(){
url.rawFile = "../../TestApp/Test_server/DataBase/TestDataBase.db"; 
    server.getIDs({},'AclTest');  
    spyOn(server, "giveResponse");

    })

    it("control is passed to FUNCTION: giveResponse() successfully",function(){
runs(function() {
                setTimeout(function(){
                
                finished = true;
                },2000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 2000);

                runs(function() {
                expect(server.giveResponse).toHaveBeenCalled();
                }); 



    })



});
 
describe("FUNCTION: getBenchmarks()",function(){

    var finished = false;
    beforeEach(function(){
        url.rawFile = "../../app/server/DataBase/localData.db"; 
        server.getBenchmarks({});  
    spyOn(server, "prepareTimeValues");
    })
    it("control is passed to FUNCTION: prepareTimeValues() successfully",function(){
runs(function() {
                setTimeout(function(){
                
                finished = true;
                },2000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 2000);

                runs(function() {
                expect(server.prepareTimeValues).toHaveBeenCalled();
                }); 
    })
});
    
    
describe("FUNCTION : prepareTimeValues() ",function(){
    var finished =false;
    beforeEach(function(){
    url.rawFile = "../../app/server/DataBase/localData.db"; 
    spyOn(server,"giveResponse");
        server.prepareTimeValues({},{});
    })

it("control is passed to FUNCTION: prepareTimeValues() successfully",function(){
                runs(function() {
                setTimeout(function(){
                
                finished = true;
                },2000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 2000);

                runs(function() {
                expect(server.giveResponse).toHaveBeenCalled();   
                });
    
});
});  

 
})


//describe("functions for GetAllData.js",function(){
        describe("FUNCTION: ConnectToDataBase()",function(){
        var GetAllData = require(testurl.GetAllDataJs);
        var finished = false;
            var consoleSpy;
    beforeEach(function(){ 
        
    GetAllData.ConnectToDataBase(); 
        consoleSpy = spyOn(console, "log");
    //spyOn(GetAllData, "fetchDataFromTable_Run");
    })

    it("",function(){
                            runs(function() {
                setTimeout(function(){            
                finished = true;
                },1500);
                });
                waitsFor(function(){
                return finished;
                }, "should call other function", 1500);
                runs(function() {
                    //var thisFile = require(testurl.GetAllDataJs);
                    //thisFile.usserverconnection = GlobalConnection;
                    expect(consoleSpy).toHaveBeenCalledWith("connected successfully");
                    //expect(GetAllData.fetchDataFromTable_Run).toHaveBeenCalled();
                }); 
    })
})


        describe("FUNCTION: fetchDataFromTable_Run()",function(){
        var GetAllData = require(testurl.GetAllDataJs);
        var finished = false;
        var consoleSpy;
    beforeEach(function(){ 
    GetAllData.fetchDataFromTable_Run(); 
    consoleSpy = spyOn(console, "log");
    })

    it("",function(){
                            runs(function() {
                setTimeout(function(){            
                finished = true;
                },2);
                });
                waitsFor(function(){
                return finished;
                }, "should call other function", 2);
                runs(function() {
                    expect(consoleSpy).toHaveBeenCalledWith("got the benchmarks");
                    //expect(consoleSpy).toHaveBeenCalledWith("in fetchDataFromTable_Run() function");
                }); 
    })
})


        describe("FUNCTION: PushToTable_LocalRun()",function(){
        var GetAllData = require(testurl.GetAllDataJs);
        var finished = false;
        var consoleSpy6;
    beforeEach(function(){ 
    GetAllData.PushToTable_LocalRun(data.sampleData); 
    consoleSpy6 = spyOn(console, "log");
    })

    it("",function(){
                            runs(function() {
                setTimeout(function(){            
                finished = true;
                },200);
                });
                waitsFor(function(){
                return finished;
                }, "should call other function", 200);
                runs(function() {
                    expect(consoleSpy6).toHaveBeenCalledWith("pushed Data to Local_Run Table");
                }); 
    })
})

//})





describe("dbConnect TEST CASES", function () {

    describe("Function: DatabaseFileCheck", function () {
       var finished =false;
       url.rawFile = "../../TestApp/Test_server/DataBase/TestDataBase.db";                        
       var func = require(testurl.functionsFordbConnectJs); 
        beforeEach(function(){
        spyOn(func, "ConnectToDataBase");
            func.DatabaseFileCheck();
        })
            it("control is passed to FUNCTION: ConnectToDataBase() successfully",function(){
                
                runs(function() {
                setTimeout(function(){
                
                finished = true;
                },150);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 150);

                runs(function() {
                expect(func.ConnectToDataBase).toHaveBeenCalled();   
                });
    
});
    });
    

/////////////////////////////////////////////////////////////////////////////////////////// 
    describe("FUNCTION : ConnectToDataBase() ",function(){
        var func = require(testurl.functionsFordbConnectJs);
    var finished =false;
    beforeEach(function(){
        func.ConnectToDataBase();
        spyOn(func, "fetchDataFromTable_Benchmark");
    })

it("control is passed to FUNCTION: fetchDataFromTable_Benchmark() successfully",function(){
                runs(function() {
                setTimeout(function(){
                
                finished = true;
                },2000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 2000);

                runs(function() {
                expect(func.fetchDataFromTable_Benchmark).toHaveBeenCalled();   
                });
    
});
});
   
///////////////////////////////////////////////////////////////////////////////////////////    
    describe("FUNCTION : fetchDataFromTable_Benchmark() ",function(){
        
        var func = require(testurl.functionsFordbConnectJs);
        var finished =false;
        beforeEach(function(){
            setTimeout(function(){
                func.usserverconnection = GlobalConnection;
                func.fetchDataFromTable_Benchmark();
                spyOn(func, "PushToTable_Info");
                },5);
        })
it("control is passed to FUNCTION: PushToTable_Info() successfully",function(){
                
                runs(function() {
                setTimeout(function(){
                finished = true;
                },5000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 5000);

                runs(function() {
            
                expect(func.PushToTable_Info).toHaveBeenCalled();   
                });
    
});
}); 
    
///////////////////////////////////////////////////////////////////////////////////////////    

    describe("FUNCTION : PushToTable_Info() ",function(){
        
        var func = require(testurl.functionsFordbConnectJs);
        var finished =false;
        beforeEach(function(){
            url.rawFile = "../../TestApp/Test_server/DataBase/TestDataBase.db"; 
            setTimeout(function(){
            func.PushToTable_Info(data.DataToInfo);
                spyOn(func, "fetchBenchmarksFromTable_Run");
            },1000);
                
                
        })
it("control is passed to FUNCTION: fetchBenchmarksFromTable_Run() successfully",function(){
                
                runs(function() {
                setTimeout(function(){
                finished = true;
                },2000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 2000);

                runs(function() {
                expect(func.fetchBenchmarksFromTable_Run).toHaveBeenCalled();   
                });
    
});

    
});   
    

      describe("FUNCTION : PushToTable_LocalBenchmark() ",function(){
        var GetAllData = require(testurl.GetAllDataJs);
        var func = require(testurl.functionsFordbConnectJs);
        var finished =false;
        var consoleSpy;
        beforeEach(function(){
            setTimeout(function(){
            url.rawFile = "../../TestApp/Test_server/DataBase/TestDataBase.db"; 
                consoleSpy = spyOn(console, "log");
                func.PushToTable_LocalBenchmark(data.DataToInfo);
                //spyOn(GetAllData, "ConnectToDataBase");
                
                },200);
        })
it("control is passed to FUNCTION: fetchBenchmarksFromTable_Run() successfully",function(){
                
                runs(function() {
                setTimeout(function(){
                finished = true;
                },2000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 2000);

                runs(function() {
                expect(consoleSpy).toHaveBeenCalledWith("pushed Data to Local_Benchmark Table");
                //expect(GetAllData.ConnectToDataBase).toHaveBeenCalled();   
                });
    
});
}); 




    describe("FUNCTION : getAllBenchmarksFrom_LocalBenchmark() ",function(){
    var func = require(testurl.functionsForcronTenMinutesJs);
    var finished =false;
    beforeEach(function(){
        func.getAllBenchmarksFrom_LocalBenchmark();
        spyOn(func, "getLatestTimestamp");
    })

it("control is passed to FUNCTION: getLatestTimestamp() successfully",function(){
                runs(function() {
                setTimeout(function(){
                
                finished = true;
                },1000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 1000);

                runs(function() {
                expect(func.getLatestTimestamp).toHaveBeenCalled();   
                }); 
    
});
});


    describe("FUNCTION : getLatestTimestamp() ",function(){
    var func = require(testurl.functionsForcronTenMinutesJs);
    var finished =false;
    beforeEach(function(){
        func.getLatestTimestamp();
        spyOn(func, "fetchDataFromTable_Run");
    })

it("control is passed to FUNCTION: fetchDataFromTable_Run() successfully",function(){
                runs(function() {
                setTimeout(function(){
                
                finished = true;
                },1000);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 1000);

                runs(function() {
                expect(func.fetchDataFromTable_Run).toHaveBeenCalled();   
                }); 
    
});
});
})



describe("functions For cronTime12",function(){
  ///////to be commented ////////
    describe("FUNCTION: deleteBenchmarks()",function(){
        var time12Func = require(testurl.functionsForcronTime12Js);
        var finished = false;
    beforeEach(function(){
    url.rawFile = "../../TestApp/Test_server/DataBase/TestDataBase.db";
    time12Func.deleteBenchmarks();  
    consoleSpy3 = spyOn(console, "log");    
    })
    it("",function(){
                            runs(function() {
                setTimeout(function(){
            
                finished = true;
                },400);
                });

                waitsFor(function(){
                return finished;
                }, "should call other function", 400);

                runs(function() {
                expect(consoleSpy3).toHaveBeenCalledWith("deleted the records successfully");
                }); 
    })
})
})

describe("functions with high wait time",function(){
    
    describe("FUNCTION:fetchBenchmarksFromTable_Run()",function(){
    
    
    
    
var func = require(testurl.functionsFordbConnectJs);
describe("",function(){
                 var pool  = dbConfig.dbPool();
                    pool.getConnection(function (err, cursor) {
                if (err) {
                    console.log(err);
                    return;
                } else {
                    GlobalConnection = cursor;
                    console.log("got connection for testspec");
                func.usserverconnection = GlobalConnection;
                spyOn(func, "PushToTable_LocalBenchmark");
                func.fetchBenchmarksFromTable_Run();

                    
                }
            });


})
     it("control is passed to FUNCTION: PushToTable_LocalBenchmark() successfully",function(){
            
                    setTimeout(function(){
                    expect(func.PushToTable_LocalBenchmark).toHaveBeenCalled();
                    },500);
        })
     })
    
  
    
    
})


 
