import { UpdatePostComponent } from './../update-post/update-post.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Book } from '../classes/Book';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { PostBookService } from '../services/Post/post-book.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    //fields
    books: Book[];
    
    //constracture
    constructor(private postService: PostBookService,
      private route: ActivatedRoute,
      public dialog: MatDialog) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data)=>{
        console.log(data);
       this.books = <Book[]>data;
      });
  }

  // get all posts so far 
  getAllPosts() {
    this.postService.getPosts()
    .subscribe(
      data => {
        this.books = <Book[]>data;
      }
    )
  }

  //open dialog to delete
  openDialogDelete(book: Book): void {
    console.log(book);
    const dialogRef = this.dialog.open(DeletePostComponent, {
      maxWidth: '50%',
      data: {book: book}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {
        this.getAllPosts();  
    });

  }

  //open dialog to delete
  openDialogUpdate(book: Book): void {
    console.log(book);
    const dialogRef = this.dialog.open(UpdatePostComponent, {
      maxWidth: '50%',
      data: {book: book}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {
        this.getAllPosts();  
    });

  }


}
