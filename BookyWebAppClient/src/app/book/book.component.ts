import { BookService } from './../service/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private BookService: BookService) { }

  ngOnInit(): void {
  }

  onDelete(id: number){
    if(confirm('Do you want to delete?')){
      this.BookService.deleteBook(id).subscribe((data) => {
        console.log(data);
        //this.books = <Book []>data;
      });
    }
  }

}
