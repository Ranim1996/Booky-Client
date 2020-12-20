import { UserService } from './../services/User/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostBookService } from '../services/Post/post-book.service';

@Component({
  selector: 'app-remove-from-my-list',
  templateUrl: './remove-from-my-list.component.html',
  styleUrls: ['./remove-from-my-list.component.css']
})
export class RemoveFromMyListComponent implements OnInit {

  constructor(
    private postService: PostBookService,
    private userService: UserService,
    public dialogRef: MatDialogRef<RemoveFromMyListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  // logId: string;

  loggedInUser: number = this.userService.getUserIdOfLoggedIn();


  ngOnInit(): void {
    // this.logId = localStorage.getItem('userId'); 

    console.log("id in My remove from list: " + this.loggedInUser);
  }

  removeBook(){

    this.postService.removeBook(this.data.book.id, this.loggedInUser).subscribe();
    console.log(this.data.book.id);

    // Close dialog
    this.dialogRef.close();

  }

  // Close dialog
  noClick(){
    this.dialogRef.close();
  }

}
