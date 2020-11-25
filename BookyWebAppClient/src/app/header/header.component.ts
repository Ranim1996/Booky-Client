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
  admin: UserType = UserType.Admin;
  reader: UserType = UserType.Reader;

  ngOnInit(): void {

    this.id = localStorage.getItem('userId'); 

    console.log("id in Header: " + this.id);
    
    this.profileService.getUserById(this.id).subscribe((data)=>{
      console.log(data);
      this.currentUser = <Users>data;
      console.log("Header: " + this.currentUser.id + this.currentUser.usertype);
     });
  }
  
  // isAdmin() {
  //   if(this.currentUser.usertype == UserType.Admin){
  //       return true;
  //   }
  // }

  // isReader() {
  //   if(this.currentUser.usertype == UserType.Reader){
  //       return true;
  //   }
  // }

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
