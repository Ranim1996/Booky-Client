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

  userId: number = this.userService.getUserIdOfLoggedIn();


  ngOnInit(): void {
    console.log("Header: " + this.userId);
    this.profileService.getUserById(this.userId).subscribe((data)=>{
      console.log(data);
      this.currentUser = <Users>data;
      console.log("Header: " + this.currentUser.id + this.currentUser.usertype.toString());
     });
  }
  
  isAdmin(): String {
    if(this.currentUser.usertype.toString() == "Admin"){
        return "Admin";
    }
    if(this.currentUser.usertype.toString() == "Reader"){
        return "Reader";
    }
  }

  logout(){
    localStorage.clear();
    this.userService.logout();
  }

}
