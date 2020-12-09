import { UserType } from 'src/app/classes/Profile/UserType';
import { ProfileService } from './../services/Profile/profile.service';
import { Users } from './../classes/Profile/Users';
import { UserService } from './../services/User/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService,
              private profileService: ProfileService) { }

  id: string;
  currentUser: Users;
  typeOfUser;

  ngOnInit(): void {

    this.id = localStorage.getItem('userId'); 

    this.typeOfUser = localStorage.getItem('userType');

    this.profileService.getUserById(this.id).subscribe((data)=>{
      console.log(data);
      this.currentUser = <Users>data;
      console.log("Header: " + this.currentUser.id + this.currentUser.usertype.toString());
     });
  }
  
  isAdmin(): String {
    if(this.typeOfUser == "Admin"){
      // console.log("Admin is logged in");
        return "Admin";
    }
    if(this.typeOfUser == "Reader"){
      // console.log("Reader is logged in");
        return "Reader";
    }
  }

  // admin : boolean = false;
  // reader: boolean = false;

  // isAdmin(): void {
  //   if(this.currentUser.usertype === UserType.Admin){
  //       this.admin = true; 
  //   }
  // }

  // isReader(): void {
  //   if(this.currentUser.usertype === UserType.Reader){
  //       this.reader = true; 
  //   }
  // }


  logout(){
    localStorage.clear();
    this.userService.logout();
  }

}
