import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-bar-chart2',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart2.component.html',
  styleUrl: './bar-chart2.component.scss'
})
export class BarChart2Component  implements AfterViewInit{

@ViewChild('Bar2Chart') Bar2Chart!: ElementRef;

data =[
  {letter: "A", frequency: 0.02167},
  {letter: "B", frequency: 0.01492},
  {letter: "C", frequency: 0.02782},
  {letter: "D", frequency: 0.03253},
  ];

constructor(){}

ngAfterViewInit(): void {

  console.log(this.Bar2Chart);

  if(this.Bar2Chart){
    
    this.createChart2();
    
  }else{
    console.log('Chart not available')
  }
}

private createChart2(){

//Declare Chart dimensions and margins
  const width= 350;
  const height = 380;
  const marginTop= 0;
  const marginBottom= 20;
  const marginRight= 10;
  const marginLeft= 40;

//Declare X scale (X position)
const x=d3.scaleLinear()
.domain([0, d3.max(this.data, d => d.frequency)!]) //Input range based on frequencies
.range([16, width- marginLeft])                   //Output range

//Declare the vertical (Y position) scale
const y= d3.scaleBand()
.domain(this.data.map( d => d.letter))//Use the letters as Domain
.range([25, height-marginTop])
.padding(0.35)                         // Adjust padding for the bars;


//Select the rectangular SVG using 'select" and Append to the DOM
  const svg =d3.select(this.Bar2Chart.nativeElement)
  .append('svg')
  .attr('width', width)
  .attr('height',height)
  .attr('fill','steelblue')                 //fill-in the rect with color of "SteelBlue" each
  .attr('viewBox',`0 0 ${width} ${height}`)
  .style('max-width', '100%')
  .style('height','auto');

//Add the Y-axis
svg.append('g')
.attr('transform',`translate(${marginLeft-marginRight},1)`)
.call(d3.axisLeft(y));

//Add the X-axis
svg.append('g')
.attr('transform', `translate(14,${marginLeft-marginBottom})`)
.call(d3.axisBottom(x));


//Append bars for the bar chart
svg.selectAll('.bar2')
.data(this.data)
.enter()
.append('rect')
.attr('class','bar2')
.attr('y', d => y(d.letter as string)!)       // Ensure d.letter is a string
.attr('x', marginLeft)                        // Start bars from the left margin
.attr('height', y.bandwidth())                // Set bar height according to y scale
.attr('width', d => x(d.frequency))
.attr('fill','steelblue');

  }



}
