import { Component, OnInit } from '@angular/core';
import { d3 } from 'd3/index.js';

@Component({
  selector: 'app-network-diagram',
  templateUrl: './network-diagram.component.html',
  styleUrls: ['./network-diagram.component.css']
})
export class NetworkDiagramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var height = 600;
    var width  = 900;
    var svg = d3.select(".net-diag")
                .attr("height", height)
                .attr("width", width);
  }
}
