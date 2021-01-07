import { UserService } from './../services/User/user.service';
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

  //fields
  notification= null;
  users: Users[] = [];

  user: Users;
  userId:number;
  // id: string;
  type: string;

  updated;

  loggedInUser: number = this.userService.getUserIdOfLoggedIn();

  //constracture
  constructor(private profileService: ProfileService,
    private userService: UserService,
              private route: ActivatedRoute,
              public dialog: MatDialog) 
              {}

  //methods
  ngOnInit(): void {

    console.log("id in profile: " + this.loggedInUser);
    
    this.profileService.getUserById(this.loggedInUser).subscribe((data)=>{
      console.log("User: " + data);
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
        // window.location.reload();
        this.ngOnInit();

      });
  }


}
