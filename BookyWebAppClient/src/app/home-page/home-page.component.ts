import { PostService } from './../services/Post/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Book } from '../classes/Book';
import { DeletePostComponent } from '../delete-post/delete-post.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    //fields
    books: Book[];
    
    //constracture
    constructor(private postService: PostService,
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

  //open dialog
  openDialog(book: Book): void {
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


}
