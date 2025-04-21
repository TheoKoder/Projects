import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-data-display-d3',
  standalone:true,
  templateUrl: './data-display-d3.component.html',
  styleUrls: ['./data-display-d3.component.scss']
})
export class DataDisplayD3Component implements AfterViewInit {


  @ViewChild('svgContainer') svgContainer!: ElementRef;

  data = [
    { id: 1, name: 'Object 1', value: 50, color: 'red' },
    { id: 2, name: 'Object 2', value: 100, color: 'blue' },
    { id: 3, name: 'Object 3', value: 75, color: 'green' }
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const width = 400;
    const height = 300;

    // Create SVG element
    const svg = d3
      .select(this.svgContainer.nativeElement)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Append groups for each data item
    const groups = svg
      .selectAll('g')
      .data(this.data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(0, ${i * 50})`);

    // Add rectangles for each data item
    groups
      .append('rect')
      .attr('x', 10)
      .attr('y', 10)
      .attr('width', d => d.value)
      .attr('height', 30)
      .attr('fill', d => d.color);

    // Add labels for each data item
    groups
      .append('text')
      .attr('x', 15)
      .attr('y', 30)
      .attr('font-size', '12px')
      .attr('fill', 'black')
      .text(d => d.name);
  }
}
