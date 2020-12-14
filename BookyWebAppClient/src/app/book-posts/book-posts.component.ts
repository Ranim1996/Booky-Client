import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PostBookService } from '../services/Post/post-book.service';
import { Like } from '../classes/Book/Like';
import { Book } from '../classes/Book/Book';


@Component({
  selector: 'app-book-posts',
  templateUrl: './book-posts.component.html',
  styleUrls: ['./book-posts.component.css']
})
export class BookPostsComponent implements OnInit {

  bookTypes = [
    {name: "Romantic"},
    {name: "DetectiveandMystery"},
    {name: "Horror"},
    {name: "Classics"},
    {name: "ActionandAdventure"},
    {name: "Fantasy"},
    {name: "LitraryFiction"}
  ]

  languages = [
    {value:"AR", viewValue: "Arabic"},
    {value:"EN", viewValue: "English"},
    {value:"FR", viewValue: "French"}
  ]

  bookToAdd = {};
  userLikeOnPost : Like;

  constructor(private postService: PostBookService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) 
    { }

  ngOnInit(): void {
  }

  book: Book;

  onSubmitBook(book){

    console.log("hi");

    this.bookToAdd = { 
        "authorName": book.authorName,
        "bookName": book.bookName,
        "bookType": book.bookType,
        "describtion": book.desc,
        "language_code": {
            "code":  book.language,
            "name": book.language
        },
        
    }

      this.postService.createPost(<JSON>this.bookToAdd);
      console.log(this.bookToAdd);
      this.router.navigate(['booky/homePage']);

  }

  public inputValidator(event: any) {
    const pattern = /^[a-zA-Z]*$/;   
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z]/g, "");
    }
  }


}
