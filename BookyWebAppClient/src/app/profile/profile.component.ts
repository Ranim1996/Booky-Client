import { ProfileService } from './../services/Profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/Profile/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //fields
  loggedInUser: number = 1;
  users: User[];

  //constracture
  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) { }


  //methods
  ngOnInit(): void {
    this.profileService.getUser().subscribe((data)=>{
      console.log(data);
     this.users = <User[]>data;
    //  this.users = data['users'];
    });

    // this.profileService.getUserById(this.loggedInUser).subscribe((data)=>{
    //  this.users = <User[]>data;
    //  console.log(this.users);
    // });

  }


}
