/**
 * Contains all the files for client side scripting.
 *
 * @module client
 */
 /**
 * All the Functions related to plotting graphs and table goes here
 *
 * @class makeGrahandTable.js
 * @constructor
 */

var global_data;

/**
 * In this Function, the data is created as rows,filled into the table/(navigation pane).
 * @function getData()
 *
 * @param  {String}  : inputFlag
 * @param  {String}  : boolan
 * @return {} null
 **/


function filltable(tdata) {

		var html = '';

		$.each(tdata, function (i, d) {
			html += '<tr><td>' + d.testTime + '</td>' + '<td>' + d.dut + '</td>' + '<td>' + d.project + '</td>' + '<td>' + d.result + '</td>' + '</tr>';
		});

		var table = '<table id="example1" class="table table-bordered table-striped"><thead><tr><th>When</th><th>Where</th><th>Project</th><th>Result</th></tr></thead><tbody id="tableTbody">' + html + '</tbody></table>';

		$("#table").html(table);


}

/**
 * In this Function,
 * @function getData()
 *
 * @param  {String}  : inputFlag
 * @param  {String}  : boolan
 * @return {} null
 **/


function placeArrays(valuesArray, dataArray) {
	global_data = clone(dataArray);

	if (dataArray.length != 0) {
        console.log("to createDatesArray() function");
		createDatesArray(clone(dataArray));
	} else {
		drawBars(dataArray);
	}

	$("#table").html("");
	filltable(clone(dataArray));
	$("#example1").DataTable({

		"order" : [[0, "asc"]],
		"paging" : false
	});

	setTimeout(function () {

		$("#mask").hide();

	}, 100);

}
$("#refresh").on("click", function () {

	getData(DropDownFlag, false);

	$("#filterGo").trigger("click");

});
var Grouptip;
var tip;   var temColorObj={};

/**
 * This is the main function where graphs are plotted inside svg.
 * @function getData()
 *
 * @param  {String}  : inputFlag
 * @param  {String}  : boolan
 * @return {} null
 **/


function drawBars(data) {

	d3.selectAll(".chartGroup").remove();
	if (d3.select("svg")) {

		d3.select("svg").remove();
	}

	if (tip != undefined) {
		tip.hide();

	}
	if (Grouptip != undefined) {
		Grouptip.hide();

	}

	var graphContainerWidth = $("#graph").width();
	var graphContainerHeight = $("#graph").height();

	console.log(uniqProjectArry);
	//var uniqDutArry;

	var margin = {
		top : 10,
		right : 30,
		bottom : 30,
		left : 50
	},
	width = graphContainerWidth - margin.left - margin.right - 30,
	height = graphContainerHeight - margin.top - margin.bottom - 80,
	offset = 10;


	//colorObj = {};
    
    
   // if((Object.keys(colorObj)).length==0);
    
  

	radioValu = $("input[name='colorChk']:checked").val();

	if (radioValu == "project") {

		uniqProjectArry.forEach(function (d, i) {
            
            if(!colorObj[d]){
             
            colorObj[d] =color(i);
            }
			

		})

	} else {
            var opt = $("#optDrop").val();
    if(opt == "Group"){ 
        
        //DutGroupArrayForColor
        
       temColorObj={};
        
        DutGroupArrayForColor.forEach(function(d,i){
            
            var colorIndex= (DutGroupArrayForColor.length)+i;
            temColorObj["col"+i]= color(colorIndex);
            
                    var groupText="";
                    d.forEach(function(o,j){
                        temColorObj[o]=color(colorIndex);
                        groupText=groupText+o+" ";
                    })
               temColorObj["groupText"+i] =groupText;    
                    
        });
        
        uniqDutArry.forEach(function (d, i) {
            
       
            
            var dutStart=(d.replace(/[^a-z.]/g, "")).trim();
            
            
            if(temColorObj[dutStart]){
            
                 colorObj[d]=temColorObj[dutStart];
            }else{
            
             colorObj[d]= color(i);
            
            }
            
           
            
           

		})
        
   
    }else{
      uniqDutArry.forEach(function (d, i) {
            
            
             if(!colorObj[d]){
                colorObj[d] = color(i);
            
            }
            
           

		})
    }
        
		

	}

	var resultArry = [];
	data.forEach(function (d, i) {

		var testTimeGr = (d.testTime).slice(0, 10);
		d["group"] = testTimeGr;
		d["name"] = d.testTime;
		d["number"] = d.result;
		resultArry.push(d.result);

		return d;

	});

	var chartData = clone(data);

	var x = d3.scale.ordinal()
		.domain(chartData.map(function (d) {
				return d.name;
			}))
		.rangeBands([0, width]);

	function make_y_axis() {
		return d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(5)
	}

	tip = d3.tip()
		.attr('class', 'd3-tip')
		.offset([-10, 0])
		.html(function (d) {

			return "<strong>WHEN : <span style='color:red'>" + d.testTime + "</span></strong></br><strong>WHERE : <span style='color:red'>" + d.dut + "</span></strong></br><strong>PROJECT : <span style='color:red'>" + d.project + "</span></strong></br><strong>RESULT :<span style='color:red'>" + d.result + "</span></strong> ";
		})

		Grouptip = d3.tip()
		.attr('class', 'd3-tip')
		.offset([-10, 0])
		.html(function (d) {

			return "<strong>DATE : <span style='color:red'>" + d.group + "</span></strong>";
		})

		var chartGroups = [];
	chartData.forEach(function (d, i, array) {
		if (i === 0)
			d.first = true;
		else if (d.group !== array[i - 1].group)
			d.first = true;
		if (i === array.length - 1)
			d.last = true;
		else if (d.group !== array[i + 1].group)
			d.last = true;
		if (d.first)
			chartGroups.push({
				group : d.group,
				start : i === 0 ? x(d.name) : ((x(d.name) + x(array[i - 1].name)) / 2)
			});
		if (d.last)
			chartGroups[chartGroups.length - 1].end =
				i === array.length - 1 ? x(d.name) : ((x(d.name) + x(array[i + 1].name)) / 2);
	});

	var maxAxisValue = Math.max.apply(null, resultArry)
    var minAxisValue = Math.min.apply(null, resultArry);
    
    
    if(minAxisValue>0){
        minAxisValue=0;
    
    }else{
    
        minAxisValue=minAxisValue;
    
    }
  

		var y = d3.scale.linear()
		.domain([minAxisValue, maxAxisValue])
		.range([height, 0]);
	xAxis = d3.svg.axis()
		.scale(x)
		.tickValues([])
		//.outerTickSize(offset)
		.orient("bottom");
	yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.tickFormat(d3.format("s"));

	var svg = d3.select("#graph")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom + 130)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + (margin.top + 50) + ")");

	svg.call(tip);
	svg.call(Grouptip);
	svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);

	svg.append("g")
	.attr("class", "y axis")
	.call(yAxis);

	
	svg.append("text")
	.attr("transform", "rotate(-90)")
	.attr("y", function () {
		return (-40);
	})
	.attr("x", 0 - (height / 4) + 30)
	.attr("dy", "1em")
	.style("text-anchor", "middle")
	.style("color", "rgb(124, 181, 236)")
	.style("font-weight", "bold")
	.text("Result");

	svg.append("text")
	.attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
	.attr("transform", "translate(" + (width / 2) + "," + (height + 40) + ")")
	.style("font-size", "14px")
	.style("font-weight", "bold")
	.style("fill", "blue") // centre below axis
	.text(function () {

		var text = "Total no. of Benchmark = " + global_data.length + ",Total no. of Days = " + chartGroups.length;

		return text;

	});
	var groups = svg.selectAll("g.chartGroup")
		.data(chartGroups)
		.enter().append("g")
		.attr("class", "chartGroup")
		.attr("transform", "translate(" + 0 + "," + (height + offset) + ")");

	groups.append("rect")
	.attr("height", height)
	.attr("width", function (d, i) {

		var groupValues = chartData.filter(function (o, j) {

				return d.group == o.group;
			})

			if (i == 0) {

				grouplength = (x.rangeBand()) * groupValues.length;
			} else {
				grouplength = d.end - d.start;

			}

			return grouplength;
	})
	.attr("x", function (d, i) {
		if (i == 0) {
			return d.start;

		} else {

			return d.start + x.rangeBand() / 2;
		}

	})
	.attr("y", function (d, i) {
		return -height - 10;
	})
	.style("fill", "rgb(124, 181, 236)")
	.style("opacity", 0)
	.style("cursor", "pointer")
	.on("mouseover", function (d) {

		d3.select(this).style("opacity", 0.6);
		Grouptip.show(d);
		tip.hide()
	})
	.on("mouseout", function (d) {

		d3.select(this).style("opacity", 0);
		Grouptip.hide(d);
	})

	groups.append("text")
	.attr({
		x : function (d) {
			return ((d.start + d.end + x.rangeBand() / 2) / 2) + 20;
		},
		dy : "1em",
		"text-anchor" : "middle"
	})
	.style("display", function (d, i) {

		if (i != 0 && i != chartGroups.length - 1) {

			return "none";
		} else {

			return "block";
		}
	})
	.text(function (d) {
		return d.group;
	});

	groups.append("path")
	.attr("d", function (d, i) {
		var t = d3.select(this.parentNode).select("text").node().getBBox(),
		ttop = [t.x + t.width / 2, t.y];
		// console.log(d, t, ttop);
		if (i == 0) {
			return "M0" + ",0" + "V" + -offset;
		} else {
			return "M" + (d.start + x.rangeBand() / 2) + ",0" + "V" + -offset;
		}

	})
	.style("stroke", "blue")
	.style("stroke-width", 3);

	svg.selectAll("bar.each")
	.data(chartData)
	.enter().append("rect")
	.attr({
		"class" : "each",
		x : function (d) {
			return x(d.name);
		},
		y : function (d) {
			return y(d.number);
		},
		width : function (d) {
            
            var width=  x.rangeBand() - x.rangeBand() / 10;
            
            if(width>70){
            
                width = 25;
            }
			return width;
		},
		height : function (d) {
			return height - y(d.number);
		}
	})
    
	.style("fill", function (d, i) {



		var radioValu = $("input[name='colorChk']:checked").val();

		return colorObj[d[radioValu]];

	


	})
    .style("fill-opacity",0.6)

	.on('mouseover', function (d, i) {

		//d3.select(this).style("fill", "orange");
        d3.select(this).style("stroke-width", 2)
        .style("stroke", "black");
		tip.show(d);
	})
	.on('mouseout', function (d, i) {

		var radioValu = $("input[name='colorChk']:checked").val();

		//d3.select(this).style("fill", colorObj[d[radioValu]]);
        d3.select(this).style("fill", colorObj[d[radioValu]])
        .style("stroke","none");     
		tip.hide(d)

	});
    
    drawLines(svg,x,y,width,minAxisValue);
    
	var groups = svg.selectAll("g.chartGroup")
		.data(chartGroups)
		.enter().append("g")
		.attr("class", "chartGroup")
		.attr("transform", "translate(" + 0 + "," + (height + offset) + ")");
	groups.append("text")
	.attr({
		x : function (d) {
			return ((d.start + d.end + x.rangeBand() / 2) / 2) + 20;
		},
		dy : "1em",
		"text-anchor" : "middle"
	})
	.style("display", function (d, i) {

		if (i != 0 && i != chartGroups.length - 1) {

			console.log(i);

			return "none";
		} else {

			return "block";
		}
	})
	.text(function (d) {
		return d.group;
	});

	groups.append("path")
	.attr("d", function (d, i) {
		var t = d3.select(this.parentNode).select("text").node().getBBox(),
		ttop = [t.x + t.width / 2, t.y];
		// console.log(d, t, ttop);
		if (i == 0) {
			return "M0" + ",0" + "V" + -offset;
		} else {
			return "M" + (d.start + x.rangeBand() / 2) + ",0" + "V" + -offset;
		}

	})
	.style("stroke", "blue")
	.style("stroke-width", 3);
    drawLegends();
  
    
    
    var dutValue=$("#textbox").val();
    
    if(dutValue.trim()==""){
    
        d3.selectAll(".dutlegend").remove();
    }else{
    
          radioValu = $("input[name='colorChk']:checked").val();

	if (radioValu == "dut") {
    
     var opt = $("#optDrop").val();
    if(opt == "Group"){
        
        
        setTimeout(function(){ drawDutGroupLegend();},200)
        
    } 
    }
    
    }
    
  
   
    
    
}



function drawDutGroupLegend(){

    
    
   
     var dutGroupLegend = svg.selectAll(".dutlegend")
                    .data(DutGroupArrayForColor)
                    .enter().append("g")
                    .attr("class", "dutlegend");
 
     
 var legendTextWidth1=0; 
    
var legendTextWidth2=0;
    
var previousValueLength1=0;  
var previousValueLength2=0;    
    
 dutGroupLegend.append("rect")
                             .attr("x", function(d,i){
                                            if(i==0){
                                                legendTextWidth1=50 ;
                                                
                                                previousValueLength1=d.length;
                                            }else{
                                                
                                              
                                                
                                                legendTextWidth1=legendTextWidth1+((previousValueLength1)*25);
                                                
                                                previousValueLength1=d.length;
                                            }
                                            
                                            return legendTextWidth1 ;                                               
 })
                             .attr("y", 25)
                            .attr("width", 10)
                            .attr("height", 10)
                             .style("fill",function(d,i){return temColorObj["col"+i] });
    
    
      dutGroupLegend.append("text")
       .attr("x", function(d,i){
                                            if(i==0){
                                               
                                                legendTextWidth2=50; 
                                                 previousValueLength2=d.length;
                                            }else{
                                                
                                                legendTextWidth2=(legendTextWidth2)+(previousValueLength2)*25;
                                                 previousValueLength2=d.length;
                                            }
                                            
                                            return legendTextWidth2+13 ;                                               
 })
      .attr("y", 33)
     // .attr("dy", ".35em")
     // .style("text-anchor", "end")
      .style("font-weight","bold")
      .text(function(d,i){return temColorObj["groupText"+i] })
    

}



/**
 * An array which contains all the unique dates,in YYYY-MM-DD format is created out of the input data.
 * @function getData()
 *
 * @param  {Array}  : inputData
 * @return {} null
 **/



function createDatesArray(inputData) {
	data = clone(inputData);

	var rawdatesArray = [];
	var datesArray = [];
	rawdatesArray.push((data[0].testTime).slice(0, 10));
	rawdatesArray.push((data[data.length - 1].testTime).slice(0, 10));
	rawdatesArray.sort();
	if (rawdatesArray[0] == rawdatesArray[1]) {
		oneDay = (rawdatesArray[0]).split("-");
		oneDay = new Date(parseInt(oneDay[0]), parseInt(oneDay[1] - 1), parseInt(oneDay[2]));
		datesArray.push(nextRequiredDate(oneDay));
		createNullElementsArray(datesArray, inputData);
	} else {
		var startDay = rawdatesArray[1];
		startDay = startDay.split("-");
		startDay = new Date(parseInt(startDay[0]), parseInt(startDay[1] - 1), parseInt(startDay[2]));
		var endDay = rawdatesArray[0];
		endDay = endDay.split("-");
		endDay = new Date(parseInt(endDay[0]), parseInt(endDay[1] - 1), parseInt(endDay[2]));
		datesArray.push(nextRequiredDate(endDay));
		do {
			nextday = endDay;
			nextday.setDate(endDay.getDate() + 1);
			day = nextday;
			day = nextRequiredDate(day);
			datesArray.push(day);
			endDay = nextday;

		} while (day != rawdatesArray[1])

		//dataForAllDates (datesArray,inputData);
            console.log(datesArray);
        
		createNullElementsArray(datesArray, inputData);

	}
}

/**
 * this Function creates an array which contains those Dates when,
 * benchmark has no records on that particular date
 * @function createNullElementsArray()
 *
 * @param  {Array}  : fullDatesArray
 * @param  {Array}  : inputData
 * @return {} null
 **/


function createNullElementsArray(fullDatesArray, inputData) {
    
	var inData = clone(inputData);
	var dArr = [];
	inData.map(function (d, i) {
		var date = (d.testTime).slice(0, 10);
		if (dArr.indexOf(date) < 0)
			dArr.push(date);
	});
	NullElementsArray = fullDatesArray.filter(function (el) {
			return dArr.indexOf(el) < 0;
		});
	console.log(NullElementsArray);
	dataForAllDates(NullElementsArray, inputData);
}

/**
 * In this Function, an array of data/records for all the dates in the range with null data
 * on particular date,benchmark has no records is also included.
 * @function dataForAllDates()
 *
 * @param  {Array}  : NullElementsArray
 * @param  {Array}  : inData
 * @return {} null
 **/

function dataForAllDates(NullElementsArray, inData) {
	var resultArry = [];
	inData.forEach(function (d, i) {

		resultArry.push(d.result);

	});
	var minAxisValue = Math.min.apply(null, resultArry);
	if (minAxisValue > 0) {
		minAxisValue = 0;
	} else {
		minAxisValue = minAxisValue - 5;
	}
	console.log("data" + minAxisValue);
	requiredData = clone(inData[0]);
	var FINALARRAY = [];
	NullElementsArray.map(function (d, i) {
		var objectNULL = {};
		objectNULL["benchmark"] = requiredData.benchmark;
		objectNULL["changeNum"] = null;
		objectNULL["client"] = null;
		objectNULL["dut"] = null;
		objectNULL["project"] = null;
		objectNULL["release"] = null;
		objectNULL["result"] = minAxisValue;
		objectNULL["testTime"] = d + "T00:00:00";
		FINALARRAY.push(objectNULL);
		if (i == (NullElementsArray.length - 1)) {
			inData = FINALARRAY.concat(inData);
			inData.sort(function (a, b) {
				if (a.testTime > b.testTime) {
					return 1;
				}
				if (a.testTime < b.testTime) {
					return -1;
				}
				return 0;
			});

		}
	});
	setTimeout(function () {
		console.log(inData);
		drawBars(inData);
	}, 100);

}


/**
 * plots the Legends near to the axis mentioning the RESULT THRESHOLD values.
 *
 *
 * @function drawLegends()
 * @param  {} null
 **/

function drawLegends() {
    svg = d3.select("svg");
    width = $("#graph").width();  
    
   
    
  Name = "a";
  var legend1 = svg.selectAll(".legend")
                    .data([{"text":"Mean+σ","color":"green"},{"text":"Mean","color":"blue"},{"text":"Mean-σ","color":"red"}])
                    .enter().append("g")
                    .attr("class", "legend")
                    .attr("transform", function(d, i) { return "translate(" +(( i *(-100))-width/1.4 )+ ",0)"; });
                    //.attr("transform","translate(-950,0)");
  legend1.append("line")
      .attr("x1", width - 28)
      .attr("x2", width)
      .attr("y1", 10)
      .attr("y2", 10)
      .style("stroke-dasharray",function(d,i){
                                    if(d.text!="Mean"){
                                            return "5,5"
                                    }else{
                                    
                                        return "0,0"
                                    }
        })
      //.style("stroke","5,5")
      .style("stroke", function(d,i){return d.color;});
  legend1.append("text")
      .attr("x", width - 44)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d,i){return d.text});

  Name = "b";
  var legend2 = svg.selectAll(".legend")
                    .data(Name.slice())
                    .enter().append("g")
                    .attr("class", "legend")
                    //.attr("transform", function(d, i) { return "translate(" + i * 5 + ",0)"; });
                    .attr("transform","translate(-750,0)");
  legend2.append("line")
      .attr("x1", width - 28)
      .attr("x2", width)
      .attr("y1", 10)
      .attr("y2", 10)
      //.style("stroke-dasharray","5,5")
      .style("stroke","5,5")
      .style("stroke", "blue");
  legend2.append("text")
      .attr("x", width - 44)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text("Mean");
    
    
  Name = "c";
  var legend3 = svg.selectAll(".legend")
                    .data(Name.slice())
                    .enter().append("g")
                    .attr("class", "legend")
                    //.attr("transform", function(d, i) { return "translate(" + i * 5 + ",0)"; });
                    .attr("transform","translate(-550,0)");
  legend3.append("line")
      .attr("x1", width - 28)
      .attr("x2", width)
      .attr("y1", 10)
      .attr("y2", 10)
      .style("stroke-dasharray","5,5")
      //.style("stroke","5,5")
      .style("stroke", "red");
  legend3.append("text")
      .attr("x", width - 44)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text("Mean-σ");    
    
    
} 


/**
 * The lines for Mean, Mean+σ and Mean-σ are plotted,
 * and values are appended as text to the respective lines
 * @function getData()
 *
 * @param  {String}  : inputFlag
 * @param  {String}  : boolan
 * @return {} null
 **/

    
    function drawLines(svg,x,y,width,minAxisValue){
    
     if(global_data.length!=0){ 
    //if(Mean_minus_SD>minAxisValue)
    var deviationlines=svg.append("g")
                            .attr("class","deviationlines")
        
    
    deviationlines.append("line")
    .attr("class","meanLine")
    .style("stroke", "blue")  
    .attr("x1", function(){ 
                  
                    return x(global_data[0].testTime);
    })    
    .attr("y1", function(){
                    return y(dataMean);
    })     
    .attr("x2", function(){
                  
                    return x(global_data[global_data.length-1].testTime)+x.rangeBand();
    })    
    .attr("y2", function(){
                    return y(dataMean);        
    });
         	
         svg.append("text")
		.attr("transform", "translate(" + (width+3) + "," + y(dataMean) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "blue")
		.text(dataMean.toFixed(6));
         
 
    deviationlines.append("line")
    .attr("class","meanPlusStaLine")
    .style("stroke-dasharray", ("3, 3"))
    .style("stroke", "green")  
    .attr("x1", function(){ 
                  
                    return x(global_data[0].testTime);
    })    
    .attr("y1", function(){
                    return y(Mean_plus_SD);
    })     
    .attr("x2", function(){
                  
                    return x(global_data[global_data.length-1].testTime)+x.rangeBand();
    })    
    .attr("y2", function(){
                    return y(Mean_plus_SD);        
    }); 
    
    
         svg.append("text")
		.attr("transform", "translate(" + (width+3) + "," + y(Mean_plus_SD) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "green")
		.text(Mean_plus_SD.toFixed(6));

  
 if(Mean_minus_SD>minAxisValue)
 {
    deviationlines.append("line")
    .attr("class","meanNegStaLine")
    .style("stroke", "red") 
    .style("stroke-dasharray", ("3, 3"))
    .attr("x1", function(){ 
                  
                    return x(global_data[0].testTime);
    })    
    .attr("y1", function(){
                    return y(Mean_minus_SD);
    })     
    .attr("x2", function(){
                  
                    return x(global_data[global_data.length-1].testTime)+x.rangeBand();
    })    
    .attr("y2", function(){
                    return y(Mean_minus_SD);        
    }); 
         
         


         svg.append("text")
		.attr("transform", "translate(" + (width+3) + "," + y(Mean_minus_SD) + ")")
		.attr("dy", ".35em")
		.attr("text-anchor", "start")
		.style("fill", "red")
		.text(Mean_minus_SD.toFixed(6));         

 }
     }
    }






