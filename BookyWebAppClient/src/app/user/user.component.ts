import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';

export interface User{
  id: number;
  firstName: String;
  lastName: String;
  email: String;
  password: String;
  phoneNumber: String;
  language: Language;
  country: Country;
  dateOfBirth: String;
}

export interface Country{
  code: String;
  name: String;
}

export interface Language{
  code: String;
  name: String;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User [];

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.getUsers().subscribe((data)=>{
      console.log(data);
     this.users = <User[]>data;
    //  this.users = data['users'];
    });
  }

}
