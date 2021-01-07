import { UserService } from '../../services/User/user.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostBookService } from '../../services/Post/post-book.service';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent implements OnInit {


  constructor(
    private postService: PostBookService,
    private userService: UserService,
    public dialogRef: MatDialogRef<DeletePostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

    loggedInUser: number = this.userService.getUserIdOfLoggedIn();


  ngOnInit(): void {
  }

  //delete post
  deletePost(){
    this.postService.deletePost(this.data.book.id).subscribe();
    console.log(this.data.book.id);

    // Close dialog
    this.dialogRef.close();

  }

  //close dialog 
  noClick(): void {
    this.dialogRef.close();
  }



}
