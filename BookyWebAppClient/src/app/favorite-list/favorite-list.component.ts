import { RemoveFromMyListComponent } from './../remove-from-my-list/remove-from-my-list.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../classes/Book';
import { Like } from '../classes/Like';
import { Users } from '../classes/Profile/Users';
import { PostBookService } from '../services/Post/post-book.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

   //fields
   books: Book[];
   logId: string; 
   user: Users;
   like: Like;
   
   //constracture
   constructor(private postService: PostBookService,
     private route: ActivatedRoute,
     public dialog: MatDialog) { }

 ngOnInit(): void {

  this.logId = localStorage.getItem('userId'); 

  console.log("id in My list: " + this.logId);
  
  this.postService.getLikedBooks(this.logId).subscribe((data)=>{
    console.log(data);
    this.books = <Book[]>data;
    console.log("MyList: " + this.logId + this.books);
   }); 
 }

 openDialogRemobeFromList(book: Book): void {
    console.log(book);
    console.log("code: " + this.logId);

    const dialogRef = this.dialog.open(RemoveFromMyListComponent, {
      maxWidth: '50%',
      data: {book: book}
    }); 
    dialogRef.afterClosed()
      .subscribe(res => {
      window.location.reload();
    });
 }

}
