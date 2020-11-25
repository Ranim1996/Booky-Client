import { Users } from 'src/app/classes/Profile/Users';
import { UpdatePostComponent } from './../update-post/update-post.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Book } from '../classes/Book';
import { DeletePostComponent } from '../delete-post/delete-post.component';
import { PostBookService } from '../services/Post/post-book.service';
import { Like } from '../classes/Like';
import { ProfileService } from '../services/Profile/profile.service';
import { UserType } from '../classes/Profile/UserType';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    //fields
    books: Book[];
    logId: string; 
    user: Users;
    like: Like;
    currentUser: Users;
    admin: UserType = UserType.Admin;
    reader: UserType = UserType.Reader;
    
    //constracture
    constructor(private postService: PostBookService,
      private route: ActivatedRoute,
      public dialog: MatDialog,
      private profileService: ProfileService) { }

  ngOnInit(): void {

    this.logId = localStorage.getItem('userId');

    this.postService.getPosts().subscribe((data)=>{
        console.log(data);
       this.books = <Book[]>data;
      });

    console.log("id in home: " + this.logId);
  
    this.profileService.getUserById(this.logId).subscribe((data)=>{
      console.log(data);
      this.currentUser = <Users>data;
      console.log("Home: " + this.currentUser.id + this.currentUser.usertype);
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

  //open dialog to update
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

  AddToMyList(id){
    console.log("book id: " + id + "user id: " + this.logId);

    let like = {
      bookId: id,
      userId: this.logId
    }

    this.postService.addLike(like);
    console.log("Like Is Added" + like);
      
  }


}
