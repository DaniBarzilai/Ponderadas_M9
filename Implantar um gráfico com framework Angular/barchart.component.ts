import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDetails } from '../DTOs/chart.details';
@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css',
})
export class BarchartComponent implements OnInit {
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  chart: ChartDetails = {
    title: 'Comparação de notas entre STIBA e GPTW ao longo dos anos',
    categories: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    series: [
      {
        name: 'Stiba',
        data: [48, 51, 36, 43, 34, 41],
      },
      {
        name: 'GPTW',
        data: [21, 26, 31, 25, 26, 33],
      },
    ],
  };
  charts: any = {
    type:'bar',
  };
  xaxis: any = {
    categories: this.chart.categories,
  };
}
