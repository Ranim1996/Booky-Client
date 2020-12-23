import { BookDTO } from './../classes/BookDTO/BookDTO';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MajorityService } from './../services/majority/majority.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import { Statistics } from '../classes/Statistics/Statistics';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private majorityService: MajorityService) { }

  statistics: Statistics[];

  ngOnInit() {

    this.majorityService.statisticsPerType().subscribe((data)=>
      {
        console.log(data);
        this.statistics = <Statistics[]>data;
        this.generateBarChart();
        console.log("book count type: " + this.statistics[0]);
      });

    this.majorityService.statisticsPerLanguage().subscribe((data)=>
    {
      console.log(data);
      this.statistics = <Statistics[]>data;
      this.generatePieChart();
      console.log("book count language: " + this.statistics[1]);
    });

  }

  generateBarChart(){
      let chartType = new CanvasJS.Chart("chartContainerType", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Book's Statistics (Type)"
      },
      data: [{
        type: "column",
        dataPoints: this.statistics,
      }]
    });
    
    chartType.render();
  }

  generatePieChart(){
      let chart = new CanvasJS.Chart("chartContainerLanguage", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Book's Statistics (Language)"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          // toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
          indexLabel: "{name} - {y}",
          dataPoints:this.statistics,
        }]
      });
        
      chart.render();
    }

  }
