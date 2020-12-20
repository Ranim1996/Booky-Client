import { UserService } from './../services/User/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../classes/Profile/Users';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm: FormGroup;

  token:string;
  loggedIn:boolean; 
  isLoginError : boolean = false; 
  user: Users;

  constructor(private userService: UserService,
    private router: Router){}

  ngOnInit() {

    if(this.readLocalStorageValue() != null){
      this.loggedIn= true;
      this.router.navigate(['booky/profile']);
    }else{
      this.loggedIn = false;
    } 

  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  OnSubmit(email,password){

    this.userService.login(email, password)
    .subscribe(
      (res: any) => {
        console.log(res);
        // this.user = <Users>res;
        // console.log(this.user);
        // console.log(this.user.id);
        // localStorage.setItem('userId', this.user.id.toString());
        // localStorage.setItem('userType', this.user.usertype.toString());
        localStorage.setItem('userToken', res);
        location.reload();
        this.router.navigate(['booky/profile']);
      },
      
      (error: Response) => {
        if(error.status === 404){
          console.log("not found");
          this.isLoginError = true;
        }
      }
    );
  }

  readLocalStorageValue() {
    return localStorage.getItem('userToken');
  }


}
