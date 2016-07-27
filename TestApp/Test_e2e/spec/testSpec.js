var data;
data = JSON.parse(localStorage.getItem('response'));
var ajaxres = localStorage.getItem('ajaxreq');
var plotUI = localStorage.getItem('plotinUI');
var postRequestTime = data["postRequestTime"];
var tryingToConnectAt=data["tryingToConnectAt"];
var connectedAt=data["connectedAt"];
var firedAt = data["firedAt"];
var fetchedAt =data["fetchedAt"];
var responseTimeToUI=data["responseTimeToUI"];
describe("TEST CASE FOR TIME TAKEN AT ALL POINTS", function () {
  describe("TIME STAMP AT ALL POINTS (HH:MM:SS FORMAT)", function () {

    it("request from UI to Node.js at ----------- " + ajaxres, function () {

      expect(data).toEqual(jasmine.any(Object));

    });

    it("Node.js got the request from UI at ------ " + postRequestTime, function () {

      expect(data).toEqual(jasmine.any(Object));

    });    
    it("trying to connect to database at --- " + tryingToConnectAt, function () {

      expect(data).toEqual(jasmine.any(Object));

    });
    it("acquired connection from Database at ----- " + connectedAt, function () {

      expect(data).toEqual(jasmine.any(Object));

    });
    it("Node.js fired the query to Database at -- " + firedAt, function () {

      expect(data).toEqual(jasmine.any(Object));

    });
    it("Node.js fetched the data from Database at " + fetchedAt, function () {

      expect(data).toEqual(jasmine.any(Object));

    });
    it("response from Node.js to UI at ---------- " + responseTimeToUI, function () {

      expect(data).toEqual(jasmine.any(Object));

    });  
    it("plotted on UI at ------------------------ " + plotUI, function () {

      expect(data).toEqual(jasmine.any(Object));

    });       
  });

  describe("TIME TAKEN FOR ALL STAGES (MM minutes SS seconds)",function(){
    timeDifference1 = timeFormat(toSeconds(ajaxres,1),toSeconds(postRequestTime,1))
    timeDifference2 = timeFormat(toSeconds(firedAt,1),toSeconds(fetchedAt,1));
    timeDifference3 = timeFormat(toSeconds(tryingToConnectAt,1),toSeconds(connectedAt,1));
    timeDifference4 = timeFormat(toSeconds(ajaxres,1),toSeconds(responseTimeToUI,1));
    beforeEach(function(){
      jasmine.clock().install();
      jasmine.clock().tick(1000);      
    });
    it("TIME TAKEN FROM UI TO Node.js ----------------------------- "+timeDifference1 ,function(){
      expect(data).toEqual(jasmine.any(Object));
    });
    it("TIME TAKEN FROM Node.js TO DATABASE AND BACK TO Node.js --- "+timeDifference2 ,function(){
      expect(data).toEqual(jasmine.any(Object));
    });
    /*it("TIME TAKEN FOR PROCESSING THE DATA in Node.js ------------- "+timeDifference3 ,function(){
      expect(data).toEqual(jasmine.any(Object));
    }); */ 
    it("TIME TAKEN FOR UI request to response --------------------- "+timeDifference4 ,function(){
      expect(data).toEqual(jasmine.any(Object));
    });       

  });



});

