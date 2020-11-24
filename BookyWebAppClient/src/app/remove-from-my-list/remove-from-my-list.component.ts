import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PostBookService } from '../services/Post/post-book.service';

@Component({
  selector: 'app-remove-from-my-list',
  templateUrl: './remove-from-my-list.component.html',
  styleUrls: ['./remove-from-my-list.component.css']
})
export class RemoveFromMyListComponent implements OnInit {

  constructor(
    private postService: PostBookService,
    public dialogRef: MatDialogRef<RemoveFromMyListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data);
    }

  logId: string;

  ngOnInit(): void {
    this.logId = localStorage.getItem('userId'); 

  console.log("id in My remove from list: " + this.logId);
  }

  removeBook(){

    this.postService.removeBook(this.data.book.id, this.logId).subscribe();
    console.log(this.data.book.id);

    // Close dialog
    this.dialogRef.close();

  }

  // Close dialog
  noClick(){
    this.dialogRef.close();
  }

}
