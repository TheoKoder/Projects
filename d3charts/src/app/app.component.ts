import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from "./line-chart/line-chart.component";
import { BarChart2Component } from "./bar-chart2/bar-chart2.component";
import { BarChart3Component } from "./bar-chart3/bar-chart3.component";
import { DataDisplayD3Component } from './data-display-d3/data-display-d3.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DataDisplayD3Component,
    BarChartComponent,
    LineChartComponent,
    BarChart2Component,
    BarChart3Component
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'D3charts';
}
