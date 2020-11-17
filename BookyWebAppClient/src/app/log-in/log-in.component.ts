import { UserService } from './../services/User/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from '../classes/Profile/Users';

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

  // user = new Users(3, "0348348");

  constructor(private userService: UserService,
    private router: Router){}

  ngOnInit() {

    if(this.readLocalStorageValue() != null){
      this.loggedIn= true;
      this.router.navigate(['/profile']);
    }else{
      this.loggedIn = false;
      
    }

  }

  OnSubmit(email,password){
    this.token = btoa(email+':'+password);
    this.userService.login(email, password)
    .subscribe(
      (res: any) => {
        console.log(this.token);
        this.user = <Users>res;
      localStorage.setItem('userToken', this.token);
      localStorage.setItem('userId', this.user.id.toString());
      
      this.router.navigate(['/booky/profile']);
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
