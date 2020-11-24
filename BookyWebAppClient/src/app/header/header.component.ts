import { Users } from './../classes/Profile/Users';
import { UserService } from './../services/User/user.service';
import { Component, OnInit } from '@angular/core';
import { UserType } from '../classes/Profile/UserType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  currentUser: Users;

  admin : boolean = false;
  // reader: boolean = false;

  // isAdmin(): void {
  //   if(this.currentUser.userType === UserType.Admin){
  //       this.admin = true; 
  //   }
  // }

  // isReader(): void {
  //   if(this.currentUser.userType === UserType.Reader){
  //       this.reader = true; 
  //   }
  // }

  isAdmin(): void{
    if(this.currentUser.userType === UserType.Admin){
      this.admin = true;
    } 
  }


  logout(){
    localStorage.clear();
    this.userService.logout();
  }

}
