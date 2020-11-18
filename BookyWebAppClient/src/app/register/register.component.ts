import { UserService } from './../services/User/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../classes/Profile/Users';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

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

  user: Users;
  userToAdd = {};

    constructor(private usersService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog){ }

    ngOnInit() {

    }

    onSubmit(user){

      console.log("hi");

      this.userToAdd = {
        "country_code": {
            "code": user.country,
            "name": user.country
        },
        "dateOfBirth": user.dateOfBirth,
        "email": user.email,
        "firstName": user.firstName,
        "id": 2,
        "language_code": {
          "code":  user.language,
          "name": user.language
        },
        "lastName": user.lastName,
        "password": user.password,
        "phoneNumber": user.phoneNumber,
        "usertype": "Reader"
    }

        this.usersService.registerUser(<JSON>this.userToAdd);
        console.log(this.userToAdd);
        this.router.navigate(['booky/logIn']);

    }

}
