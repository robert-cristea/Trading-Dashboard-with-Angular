import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexResponsive
} from "ng-apexcharts";

export type BarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  annotations: any; //ApexAnnotations;
  grid: ApexGrid;
  yaxis: any; // ApexYAxis;
};

@Component({
  selector: 'chart-list',
  templateUrl: './chart-list.component.html',
})
export class ChartListComponent {

  
  // @ViewChild("chart") chart: ChartComponent;
  // public bar_chartOptions: Partial<BarChartOptions>;

  constructor() { 
    // this.bar_chartOptions = {
    //   series: [
    //     {
    //       name: "reversed",
    //       data: [400, 430, 448, 470, 540, 580, 690]
    //     }
    //   ],
    //   chart: {
    //     type: "bar",
    //     height: 350
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: true
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   xaxis: {
    //     categories: [
    //       "June",
    //       "July",
    //       "August",
    //       "September",
    //       "October",
    //       "November",
    //       "December"
    //     ]
    //   },
    //   grid: {
    //     xaxis: {
    //       lines: {
    //         show: true
    //       }
    //     }
    //   },
    //   yaxis: {
    //     reversed: true,
    //     axisTicks: {
    //       show: true
    //     }
    //   }
    // };

  }

  ngOnInit(): void {
  }

}
