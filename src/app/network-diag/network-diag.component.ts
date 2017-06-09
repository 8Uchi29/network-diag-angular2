import { Component, OnInit } from '@angular/core';
import * as d3 from "d3";

@Component({
  selector: 'app-network-diag',
  templateUrl: './network-diag.component.html',
  styleUrls: ['./network-diag.component.css']
})
export class NetworkDiagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public render() {
    var width = 960
    var height = 500

    var svg = d3.select("#network-diag-map")
                .attr("width", width)
                .attr("height", height);

    var force = d3.layout.force()
                  .gravity(.05)
  }

}
