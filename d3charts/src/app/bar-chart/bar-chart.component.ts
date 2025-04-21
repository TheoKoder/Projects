import { AfterViewInit, Component,ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements AfterViewInit {
 
  //Dummy data Array
  data =[
  {letter: "A", frequency: 0.08167},
  {letter: "B", frequency: 0.01492},
  {letter: "C", frequency: 0.02782},
  {letter: "D", frequency: 0.04253},
  // {letter: "E", frequency: 0.12702},
  // {letter: "F", frequency: 0.02288},
  // {letter: "G", frequency: 0.02015},
  ];

//Use at ViewChild to find the 
@ViewChild('barChart') barChart!: ElementRef;

  constructor(){}

//Use AfterViewInit not OnInit, due to @ViewChild   
ngAfterViewInit(): void {

    console.log(this.barChart);

    if(this.barChart)
    {
    this.createChart();
    }else{
    console.log('barChart is not available');
  }
}
 
createChart(){

//Declare Chart dimensions and margins
  const width= 350;
  const height = 340;
  const marginTop= 80;
  const marginBottom= 30;
  const marginRight=0;
  const marginLeft= 40;

//Declare the Horizonal (X position) scale.
  const x=d3.scaleBand()
  .domain(this.data.map( d => d.letter))  //Use the letters as Domain
  .range([marginLeft, width-marginRight])
  .padding(0.45)                           //Optional: Adjust padding for the bars;

//Declare the vertical (Y position) scale
  const y= d3.scaleLinear()
        .domain([0, d3.max(this.data, d => d.frequency) as number]) //Input range based on frequencies
        .range([height -marginBottom, marginTop]) //Output range

//Select the rectangular SVG using 'select" and Append to the DOM
    const svg =d3.select(this.barChart.nativeElement)
    .append('svg')
    .attr('width', width)
    .attr('height',height)
    .attr('fill','blue')                     //fill-in the rect with color of "SteelBlue" each
    .attr('viewBox',`0 0 ${width} ${height}`)
    .style('max-width', '100%')
    .style('height','auto');

//Add the x-axis
  svg.append('g')
  .attr('transform',`translate(0, ${height - marginBottom})`)
  .call(d3.axisBottom(x));

//Add the Y-axis
  svg.append('g')
  .attr('transform', `translate(${marginLeft},0)`)
  .call(d3.axisLeft(y));

//Append bars for the bar chart
  svg.selectAll('.rect')
  .data(this.data)
  .enter()
  .append('rect')
  .attr('class','bar')
  .attr('x', d => x(d.letter)!)
  .attr('y', d => y(d.frequency))
  .attr('width', x.bandwidth())
  .attr('height', d => height -marginBottom -y(d.frequency))
  .attr('fill','steelblue');

 }

}
