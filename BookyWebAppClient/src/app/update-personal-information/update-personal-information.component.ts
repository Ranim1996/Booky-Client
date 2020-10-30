import { Users } from 'src/app/classes/Profile/Users';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileService } from '../services/Profile/profile.service';

@Component({
  selector: 'app-update-personal-information',
  templateUrl: './update-personal-information.component.html',
  styleUrls: ['./update-personal-information.component.css']
})
export class UpdatePersonalInformationComponent implements OnInit {

  loggedInUser: number = 1;


  constructor(
    private profileService: ProfileService,
    public dialogRef: MatDialogRef<UpdatePersonalInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  ngOnInit(): void {
  }

  //close dialog 
  noClick(): void {
    this.dialogRef.close();
  }

  //update personal data
  // updateData() {
  //   this.profileService.updateUserInformation(this.data.user.id, this.data.user).subscribe(
  //     data => {
  //       console.log(this.data.user);
  //     }
  //   );

  //   // Close dialog
  //   this.dialogRef.close();
  // }

}
