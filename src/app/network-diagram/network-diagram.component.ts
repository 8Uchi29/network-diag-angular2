import { Component, OnInit } from '@angular/core';
//import * as d3 from 'd3';
import * as raphaelJS from 'raphael/raphael.js';

@Component({
  selector: 'app-network-diagram',
  templateUrl: './network-diagram.component.html',
  styleUrls: ['./network-diagram.component.css']
})
export class NetworkDiagramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var paper = raphaelJS("container", 500, 300);
    var dot = paper.circle(250, 150, 100).attr({
        fill: "#FF0000",
        stroke: "#000099",
        "stroke-width": 3
    });
    //var height = 600;
    //var width  = 900;
    //var svg = d3.select(".net-diag")
    //            .attr("height", height)
    //            .attr("width", width);
    //var force = d3.forceSimulation()
    //              .force("gravity", .05)
    //              .force("distance", 100)
    //              .force("charge", -100)
    //              .size([width, height])
    
    //d3.json("graphFile.json", function(json) {
    //  force.nodes(json.nodes)
    //       .links(json.links)
    //       .start();
    //  var link = svg.selectAll(".link")
    //    .data(json.links)
    //    .enter().append("line")
    //    .attr("class", "link")
    //    .style("stroke-width", function (d) { return Math.sqrt(d.weight); });

    //  var node = svg.selectAll(".node")
    //    .data(json.nodes)
    //    .enter().append("g")
    //    .attr("class", "node")
    //    .call(force.drag);

    //  node.append("circle")
    //    .attr("r", "5");

    //  node.append("text")
    //    .attr("dx", 12)
    //    .attr("dy", ".35em")
    //    .text(function (d) { return d.name });

    //  force.on("tick", function () {
    //    link.attr("x1", function (d) { return d.source.x; })
    //      .attr("y1", function (d) { return d.source.y; })
    //      .attr("x2", function (d) { return d.target.x; })
    //      .attr("y2", function (d) { return d.target.y; });

    //    node.attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
    //  });
    //});
  }
}