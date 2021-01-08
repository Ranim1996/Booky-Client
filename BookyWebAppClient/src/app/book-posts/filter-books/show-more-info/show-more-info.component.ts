import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/classes/Book/Book';
import { PostBookService } from 'src/app/services/Post/post-book.service';
import { UserService } from 'src/app/services/User/user.service';

@Component({
  selector: 'app-show-more-info',
  templateUrl: './show-more-info.component.html',
  styleUrls: ['./show-more-info.component.css']
})
export class ShowMoreInfoComponent implements OnInit {

  constructor(
    private postService: PostBookService,
    private userService: UserService,
    public dialogRef: MatDialogRef<ShowMoreInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

    loggedInUser: number = this.userService.getUserIdOfLoggedIn();

    book: Book;
    id: number;

  ngOnInit(): void {
    console.log(this.data.book.id);
    this.id = this.data.book.id;
    this.postService.getBookById(this.id)
    .subscribe((data)=>{
      this.book = <Book>this.data;
      console.log(this.data);
    });
  }

  //close dialog 
  noClick(): void {
    this.dialogRef.close();
  }

}
