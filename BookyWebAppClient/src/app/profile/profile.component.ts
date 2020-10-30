import { Users } from 'src/app/classes/Profile/Users';
import { UpdatePersonalInformationComponent } from './../update-personal-information/update-personal-information.component';
import { Country } from './../classes/Profile/Country';
import { Language } from './../classes/Profile/Language';
import { ProfileService } from './../services/Profile/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserType } from '../classes/Profile/UserType';
import { MatDialog } from '@angular/material/dialog';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //fields
  loggedInUser: number = 1;
  notification= null;
  users: Users[] = [];

  user: Users;
  updated;

 


  //constracture
  constructor(private profileService: ProfileService,
              private route: ActivatedRoute,
              public dialog: MatDialog) 
              {
                  
              }


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
      this.user = <Users>data;
      console.log(this.user);
     });
    

  }

  //get user's information
  getUserInformation() {
    this.profileService.getUser()
    .subscribe(
      data => {
        this.users = <Users[]>data;
      }
    )
  }

  //open dialog for updating data
  // openDialog(user: Users): void {
  //   console.log(user);
  //   const dialogRef = this.dialog.open(UpdatePersonalInformationComponent, {
  //     maxWidth: '50%',
  //     data: {user: user}
  //   }); 
  //   dialogRef.afterClosed()
  //     .subscribe(res => {
  //       this.getUserInformation();  
  //   });

  // }

  update(){
   this.profileService.updateUserInformation(1, this.user).subscribe(
      (res: Users) => {
        this.updated = res;
        console.log("updated");
      });
  }


}
