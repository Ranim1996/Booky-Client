import { PostBookService } from '../../services/Post/post-book.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../../classes/Book/Book';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

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

  book: Book;

  id: number;

  constructor(private postService: PostBookService,  
    public dialogRef: MatDialogRef<UpdatePostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    { }

  ngOnInit(): void {

    console.log(this.data.book.id);
    this.id = this.data.book.id;
    this.postService.getBookById(this.id)
    .subscribe((data)=>{
      this.book = <Book>this.data;
      console.log(this.data);
    });

  }

  updateBook(){

    this.postService.updatePost(this.data.book.id, this.data.book).subscribe(
      (res: any) => {
        console.log(this.data.book.id + "updated");
      });
      this.dialogRef.close();
    }

}
