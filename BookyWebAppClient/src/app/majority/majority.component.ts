import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-majority',
  templateUrl: './majority.component.html',
  styleUrls: ['./majority.component.css']
})
export class MajorityComponent implements OnInit {

  types: Object[] = [
    {value: 'Classics', viewValue: 'Classics'},
    {value: 'ActionandAdventure', viewValue: 'Action And Adventure'},
    {value: 'Romantic', viewValue: 'Romantic'},
    {value: 'Fantasy', viewValue: 'Fantasy'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'DetectiveandMystery', viewValue: 'Detective And Mystery'},
    {value: 'LitraryFiction', viewValue: 'Litrary Fiction'}
  ]; 

  constructor() { }

  ngOnInit(): void {
  }

}
