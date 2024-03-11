import { Component, OnInit } from '@angular/core';
import { ChartsComponent } from '../../charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDetails } from '../../../models/chart.details';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [ChartsComponent, NgApexchartsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css',
})
export class ReportsComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  chart: ChartDetails = {
    title: 'Lançamento de carros por ano',
    categories: ['1', '2', '3'],
    series: [
      {
        name: 'Carros por ano',
        data: [20, 30, 40],
      },
    ],
  };
  series = [...this.chart.series];
  charts: any = {
    height: 350,
    type: 'bar',
  };
  title: any = {
    text: this.chart.title,
  };
  xaxis: any = {
    categories: this.chart.categories,
  };
}
