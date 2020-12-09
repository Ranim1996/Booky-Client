import { UserService } from './../services/User/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

    //Object Fields that will be used in this project + specify their validation.
  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required), 
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
  });

    onSubmit(user){

      console.log("On register button");

      this.userToAdd = {
        "dateOfBirth": user.dateOfBirth,
        "email": user.email,
        "firstName": user.firstName,
        "lastName": user.lastName,
        "password": user.password, 
    } 

        this.usersService.addNewUser(<JSON>this.userToAdd);
        console.log("Added" + this.userToAdd);
        this.router.navigate(['booky/logIn']);

    }

}
