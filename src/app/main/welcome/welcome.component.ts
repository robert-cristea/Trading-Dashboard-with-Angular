import { Component, OnInit, ViewChild } from '@angular/core';
import * as Rellax from 'rellax';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexGrid,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexYAxis,
  ApexFill,
  ApexMarkers,
  ApexStroke
} from "ng-apexcharts";
import { TradingService } from 'app/services/trading.service';
import { Ticker } from 'app/models/ticker';

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

export type LineChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  markers: ApexMarkers;
  colors: string[];
};

export type TickerItemList = {
  date: string;
  ticker_data: any;
  id: number;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  data : Date = new Date();
  focus;
  focus1;
  public optionList = [];
  public tickerList: Array<TickerItemList> = new Array();
  public chartOptions1: Partial<LineChartOptions>;
  public chartOptions2: Partial<LineChartOptions>;

  @ViewChild("chart") chart: ChartComponent;


  constructor(private tradingService: TradingService) { 
    this.chartOptions1 = {
      series: [
        {
          name: "series1",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            185,
            {
              min: 30,
              max: 90
            }
          )
        }
      ],
      chart: {
        id: "chart2",
        type: "line",
        height: 400,
        toolbar: {
          autoSelected: "pan",
          show: false
        }
      },
      colors: ["#268039"],
      stroke: {
        width: 3
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: "datetime"
      }
    };

    this.chartOptions2 = {
      series: [
        {
          name: "series1",
          data: this.generateDayWiseTimeSeries(
            new Date("11 Feb 2017").getTime(),
            185,
            {
              min: 30,
              max: 90
            }
          )
        }
      ],
      chart: {
        id: "chart1",
        height: 130,
        type: "area",
        brush: {
          target: "chart2",
          enabled: true
        },
        selection: {
          enabled: true,
          xaxis: {
            min: new Date("19 Jun 2017").getTime(),
            max: new Date("14 Aug 2017").getTime()
          }
        }
      },
      colors: ["#008FFB"],
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.91,
          opacityTo: 0.1
        }
      },
      xaxis: {
        type: "datetime",
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        tickAmount: 2
      }
    };
  }

  public generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([x, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  getChartSeries(tickerListJson) {
    let tickerItems = JSON.parse(tickerListJson);
    let series = [];
    tickerItems.map(item => {
      series.push(item.profit);
    })
    let tmpRes = [];
    tmpRes.push({name: "Ticker", data: series});
    return tmpRes;
  }

  getChartCategories(tickerListJson) {
    let tickerItems = JSON.parse(tickerListJson);
    let categories = [];
    tickerItems.map(item => {
      categories.push(item.tickerName);
    })
    return {categories: categories};
  }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    this.getTradingData();
  }

  getTradingData() {

    let optionListItems = [];

    this.tradingService.getTradingData().subscribe(
      data => {
        for(let i = 0; i < data.length; i++) {
          let options = {
            series: null,
            xaxis: null,
            chart: {
              type: "bar",
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            dataLabels: {
              enabled: false
            },
            grid: {
              xaxis: {
                lines: {
                  show: true
                }
              }
            },
            yaxis: {
              reversed: true,
              axisTicks: {
                show: true
              }
            }
          };
          let series = this.getChartSeries(data[i].ticker_data);
          options.series = series;
          let xaxis = this.getChartCategories(data[i].ticker_data)
          options.xaxis = xaxis;
          optionListItems.push({date: data[i].date, option: options});
        }
        this.optionList = optionListItems;
      }
    )
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
}
