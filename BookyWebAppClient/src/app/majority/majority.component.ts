import { BookDTO } from './../classes/BookDTO/BookDTO';
import { MajorityService } from './../services/majority/majority.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/Profile/profile.service';
import { Users } from '../classes/Profile/Users';

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

  SelectionType: String;

  constructor(private majorityService: MajorityService,
    private route: ActivatedRoute,
    private profileService: ProfileService
    ) { }

    logId: string;
    currentUser: Users;
    books: BookDTO[]; 
    book: BookDTO;

    ngOnInit(): void {
    this.logId = localStorage.getItem('userId');

    console.log("id in majority: " + this.logId);

    this.profileService.getUserById(this.logId).subscribe((data)=>{
    console.log(data);
    this.currentUser = <Users>data;
    console.log("MajorityPage: " + this.currentUser.id);
    });
    }

    getMajority(){
      console.log(this.SelectionType);
      this.majorityService.getBooksMajority(this.SelectionType).subscribe((data)=>{
        this.book = <BookDTO>data;
        console.log("get books:" + this.book);
      });
    }

    majorityByType(){
      return this.SelectionType;
    }

}
