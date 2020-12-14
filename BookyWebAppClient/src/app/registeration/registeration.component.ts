import { Users } from './../classes/Profile/Users';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../services/User/user.service';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  userToAdd:{};
  user: Users;

  constructor(private _snackBar: MatSnackBar,
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService) { }


  ngOnInit(): void {
  }

  public inputValidator(event: any) {
    const pattern = /^[a-zA-Z]*$/;   
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
    }
  }

  onSubmitRegistration(user){

    console.log("On register button");

    this.userToAdd = {
      "dateOfBirth": user.dateOfBirth,
      "email": user.email,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "password": user.password, 
  } 

      this.userService.addNewUser(<JSON>this.userToAdd);
      console.log("Added" + this.userToAdd);
      this.router.navigate(['booky/logIn']);

  }

}
