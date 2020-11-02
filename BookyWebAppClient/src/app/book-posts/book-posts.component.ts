import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PostBookService } from '../services/Post/post-book.service';
import { Book } from '../classes/Book';

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

  constructor(private postService: PostBookService,
    private route: ActivatedRoute,
    public dialog: MatDialog) 
    { }

  ngOnInit(): void {
  }

  book: Book;

  // addBook(){

  //   console.log("hi");
  //   this.bookToAdd = {
  //     "bookName": this.book.bookName,
  //     "authorName": this.book.authorName,
  //     "bookType": this.book.bookType,
  //     "describtion": this.book.describtion,
  //     "language": this.book.language.name
  //     }

  //     this.postService.createPost(<JSON>this.bookToAdd);
  //     console.log(this.bookToAdd);
 
  // }

  onSubmitBook(book){

    console.log("hi");

    this.bookToAdd = {
        "authorName": book.author,
        "bookName": book.name,
        "describtion": book.desc,
        "language": {
            "code":  book.language,
            "name": book.language
        },
        "time": "2020-11-01",
        "type": book.bookType
    }

      this.postService.createPost(<JSON>this.bookToAdd);
      console.log(this.bookToAdd);

  }

  // test(){
  //   console.log("hi");
  // }

}
