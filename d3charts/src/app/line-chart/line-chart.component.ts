import { Component,AfterViewInit, ElementRef,ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements AfterViewInit{

  @ViewChild('chartSvg') chartSvg!: ElementRef;
  
  data = [ 
     { date: new Date('2022-01-01'), value: 30 },
     { date: new Date('2022-01-02'), value: 80 }, 
     { date: new Date('2022-01-03'), value: 45 },
     { date: new Date('2022-01-04'), value: 60 },
     { date: new Date('2022-01-05'), value: 20 },
     { date: new Date('2022-01-06'), value: 90 },
     { date: new Date('2022-01-07'), value: 55 }, 
    ];

  constructor(){  }

ngAfterViewInit():void{
//Log for debugging
 console.log(this.chartSvg);

// Make sure chartSvg is available after view initialization
  if (this.chartSvg) {
  this.createChart();
} else {
  console.error('chartSvg is not available');
} 
}

private createChart(): void {
  
//Declare Chart dimensions and margins
    const width= 398;
    const height = 418;
    const marginTop= 0;
    const marginBottom= 30;
    const marginRight=25;
    const marginLeft= 40;

//Declare the Horizonal (X position) scale.
    const x=d3.scaleUtc()
    .domain(d3.extent(this.data, d => d.date) as [Date, Date])
    .range([marginLeft,width-marginRight]);
    

//Declare the Vertical Scale (Y position)
    const y= d3.scaleLinear()
    .domain([0, d3.max(this.data, d => d.value) as Number])// Input range
    .range([height,marginBottom- marginTop])              //Output range

//Declare the line generator.
    const line =d3.line<{ date: Date; value: Number}>()
    .x(d => x(d.date)) 
    .y(d => y(d.value));

//Add the SVG to the chart Container
    const svg = d3.select(this.chartSvg.nativeElement)
    .attr('width', width)
    .attr('height',height)
    .attr('viewBox',`0 0 ${width} ${height}`)
    .style('max-width', '100%')
    .style('height','auto');

//Add the X-axis
    svg.append('g')
    .attr('transform', `translate(0,${height-marginBottom})`)
    .call(d3.axisBottom(x)
    .ticks(width / 80)
    .tickSizeOuter(0));

//Add the y-axis, remove the domain line, add grid lines and a label
    svg.append('g')
    .attr('transform', `translate(${marginLeft},0)`)
    .call(d3.axisLeft(y).ticks(height / 40))
    .call( g=> g.select('.domain').remove())
    .call( g=> g.selectAll('.tick line')
    .clone()
              .attr('x2',width-marginLeft-marginRight)
              .attr('stroke-opacity', 0.1))
    .call(g => g.append('text')
    .attr('x',-marginLeft)
    .attr('y',10)
    .attr('fill','green')
    .attr('text-anchor','start')
    .text('Dates of weather change (℃)'));

//Append a path for the line
    svg.append('path')
    .datum(this.data)
    .attr('fill','none')
    .attr('stroke','steelblue')
    .attr('stroke-width',3)
    .attr('d',line)
  }

}
