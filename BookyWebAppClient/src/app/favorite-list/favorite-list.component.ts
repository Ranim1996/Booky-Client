import { UserService } from '../services/User/user.service';
import { RemoveFromMyListComponent } from './remove-from-my-list/remove-from-my-list.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Users } from '../classes/Profile/Users';
import { PostBookService } from '../services/Post/post-book.service';
import { Book } from '../classes/Book/Book';
import { Like } from '../classes/Book/Like';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

   //fields
   books: Book[];
   user: Users;
   like: Like;
   
   //constracture
   constructor(private postService: PostBookService,
     private route: ActivatedRoute,
     private userService: UserService,
     public dialog: MatDialog) { }

  loggedInUser: number = this.userService.getUserIdOfLoggedIn();


 ngOnInit(): void {
  console.log("id in My list: " + this.loggedInUser);
  
  this.postService.getLikedBooks(this.loggedInUser).subscribe((data)=>{
    console.log(data);
    this.books = <Book[]>data;
    console.log("MyList: " + this.loggedInUser + this.books.toString());
   }); 
 }

 getMyList(){
  this.postService.getLikedBooks(this.loggedInUser).subscribe((data)=>{
    console.log(data);
    this.books = <Book[]>data;
    console.log("MyList: " + this.loggedInUser + this.books.toString());
   }); 
 }

 openDialogRemobeFromList(book: Book): void {
    console.log(book);
    console.log("code: " + this.loggedInUser);

    const dialogRef = this.dialog.open(RemoveFromMyListComponent, {
      maxWidth: '50%',
      data: {book: book}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {
        this.getMyList();
      // window.location.reload();
    });
 }

}
