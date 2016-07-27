var global_data;
function filltable(tdata) {

		var html = '';

		$.each(tdata, function (i, d) {
			html += '<tr><td>' + d.testTime + '</td>' + '<td>' + d.dut + '</td>' + '<td>' + d.project + '</td>' + '<td>' + d.result + '</td>' + '</tr>';
		});

		var table = '<table id="example1" class="table table-bordered table-striped"><thead><tr><th>When</th><th>Where</th><th>Project</th><th>Result</th></tr></thead><tbody id="tableTbody">' + html + '</tbody></table>';

		$("#table").html(table);


}

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
var colorObj = {};
var color;var tip;
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
	height = graphContainerHeight - margin.top - margin.bottom - 50,
	offset = 10;
	color = d3.scale.category20();

	colorObj = {};

	radioValu = $("input[name='colorChk']:checked").val();

	if (radioValu == "project") {

		uniqProjectArry.forEach(function (d, i) {
			colorObj[d] = color(i);

		})

	} else {
		uniqDutArry.forEach(function (d, i) {
			colorObj[d] = color(i);

		})

	}

	var resultArry = [];

	/*--------------------------------------------------------------------------------*/
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

		var y = d3.scale.linear()
		.domain([0, maxAxisValue])
		.range([height, 0]);
	xAxis = d3.svg.axis()
		.scale(x)
		.tickValues([])
		.outerTickSize(offset)
		.orient("bottom");
	yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.tickFormat(d3.format("s"));

	var svg = d3.select("#graph")
		.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom + 80)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + (margin.top + 10) + ")");

	svg.call(tip);
	svg.call(Grouptip);
	svg.append("g")
	.attr("class", "x axis")
	.attr("transform", "translate(0," + height + ")")
	.call(xAxis);

	svg.append("g")
	.attr("class", "y axis")
	.call(yAxis);

	svg.append("g")
	.attr("class", "grid")
	.call(make_y_axis()
		.tickSize(-width, 0, 0)
		.tickFormat(""))

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
	/**-----------------------------new changes---------------------------------------**/
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
	/**-----------------------------new changes---------------------------------------**/

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
			return x.rangeBand() - x.rangeBand() / 10;
		},
		height : function (d) {
			return height - y(d.number);
		}
	})
	.style("fill", function (d, i) {

		//"rgb(124, 181, 236)";

		var radioValu = $("input[name='colorChk']:checked").val();

		return colorObj[d[radioValu]];

		//return color(d[radioValu]);


	})
	////
	.style("stroke-width", function (d, i) {

		var threshoslValu = $('#resultDropSelect').val();

		if (threshoslValu != undefined && threshoslValu != "ALL") {
			splittedValue = threshoslValu.split("-");
			leftValue = (splittedValue[0]).trim();
			rightValue = (splittedValue[1]).trim();
			leftValue = parseFloat(leftValue);
			rightValue = parseFloat(rightValue);
			mainValue = parseFloat(d.result);
			mainValue = Math.abs(mainValue);
			if (mainValue > leftValue && mainValue <= rightValue) {
				return 2;
			} else {
				return 1;
			}
		} else {
			return 1;

		}
	})
	.style("stroke", function (d, i) {

		var threshoslValu = $('#resultDropSelect').val();

		if (threshoslValu != undefined && threshoslValu != "ALL") {
			splittedValue = threshoslValu.split("-");
			leftValue = (splittedValue[0]).trim();
			rightValue = (splittedValue[1]).trim();
			leftValue = parseFloat(leftValue);
			rightValue = parseFloat(rightValue);
			mainValue = parseFloat(d.result);
			mainValue = Math.abs(mainValue);
			if (mainValue > leftValue && mainValue <= rightValue) {
				return "black";
			} else {

				var radioValu = $("input[name='colorChk']:checked").val();

				return colorObj[d[radioValu]]; ;
			}
		} else {
			var radioValu = $("input[name='colorChk']:checked").val();

			return colorObj[d[radioValu]]; ;
			// return "rgb(124, 181, 236)";

		}

	})
	.on('mouseover', function (d, i) {

		d3.select(this).style("fill", "orange");
		tip.show(d);
	})
	.on('mouseout', function (d, i) {

		var radioValu = $("input[name='colorChk']:checked").val();

		d3.select(this).style("fill", colorObj[d[radioValu]]);
		tip.hide(d)

	});

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

}

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

function dataForAllDates(NullElementsArray, inData) {
	requiredData = clone(inData[0]);
	var FINALARRAY = [];
	NullElementsArray.map(function (d, i) {
		var objectNULL = {};
		objectNULL["benchmark"] = requiredData.benchmark;
		objectNULL["changeNum"] = "null";
		objectNULL["client"] = "null";
		objectNULL["dut"] = "null";
		objectNULL["project"] = "null";
		objectNULL["release"] = "null";
		objectNULL["result"] = 0;
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

