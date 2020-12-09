import { Users } from 'src/app/classes/Profile/Users';
import { ProfileService } from './../services/Profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  types = [
    {name: "Admin"},
    {name: "Reader"}
  ]

  languages = [
    {value:"AR", viewValue: "Arabic"},
    {value:"EN", viewValue: "English"},
    {value:"FR", viewValue: "French"}
  ]

  countries = [
    {value:"SY", viewValue: "Syria"},
    {value:"FR", viewValue: "France"},
    {value:"USA", viewValue: "America"}
  ]

  //fields
  notification= null;
  users: Users[] = [];

  user: Users;
  userId:number;
  id: string;
  type: string;

  updated;

  //constracture
  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              public dialog: MatDialog) 
              {}

  //methods
  ngOnInit(): void {

    this.id = localStorage.getItem('userId'); 

    console.log("id in profile: " + this.id);
    
    this.profileService.getUserById(this.id).subscribe((data)=>{
      console.log(data);
      this.user = <Users>data;
      console.log("profile: " + this.user);
     }); 
     

  }

  //get user's information
  getUserInformation() {
    this.profileService.getUser()
    .subscribe(
      data => {
        this.users = <Users[]>data;
      }
    )
  }

  update(){
   this.profileService.updateUserInformation(this.user.id, this.user).subscribe(
      (res: Users) => {
        this.updated = res;
        console.log("updated");
        window.location.reload();

      });
  }


}
