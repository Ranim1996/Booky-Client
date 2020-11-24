import { Users } from 'src/app/classes/Profile/Users';
import { Country } from './../classes/Profile/Country';
import { Language } from './../classes/Profile/Language';
import { ProfileService } from './../services/Profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserType } from '../classes/Profile/UserType';
import { MatDialog } from '@angular/material/dialog';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
      });
  }


}
