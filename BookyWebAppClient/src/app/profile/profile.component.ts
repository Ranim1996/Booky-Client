import { Country } from './../classes/Profile/Country';
import { Language } from './../classes/Profile/Language';
import { ProfileService } from './../services/Profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../classes/Profile/Users';
import { UserType } from '../classes/Profile/UserType';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //fields
  loggedInUser: number = 1;
  users: Users[];

  arabic = new Language ("AR", "Arabic");
  syria = new Country ("SY", "Syria");
  user = new Users(1, "Ranim", "Alayoubi", "06/06/1996" , UserType.Admin, "ranim@gmail.com",
  "password199","0684567447", this.syria, this.arabic);


  //constracture
  constructor(private profileService: ProfileService,
              private route: ActivatedRoute) { }


  //methods
  ngOnInit(): void {
    // this.profileService.getUser().subscribe((data)=>{
    //   console.log(data);
    //  this.users = <User[]>data;
    // });

    // this.id = +this.route.snapshot.paramMap.get('id');
    // this.profileService.getUserById('id')
    // .subscribe((data)=>{
    //   console.log(data);
    // this.user = <Users>data;
    // });

    this.profileService.getUserById(this.loggedInUser).subscribe((data)=>{
     this.users = <Users[]>data;
     console.log(this.users);
    });

  }


}
