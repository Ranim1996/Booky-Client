import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../classes/Book';
import { Language } from '../classes/Profile/Language';
import { FilterService } from '../services/filter/filter.service';

@Component({
  selector: 'app-filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.css']
})
export class FilterUsersComponent implements OnInit {

  constructor(private filterService: FilterService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
  }

  selectionRadio: String;
  selectionDrop: String;

  books: Book[]; 
  book: Book;

  getBooksByEnglishLanguage(){
    this.filterService.filterBooksByLanguage('EN').subscribe((data)=>
    {
      this.books=<Book[]>data;
      console.log(this.books);      
    });
  }

  getBooksByFranceLanguage(){
    this.filterService.filterBooksByLanguage('FR').subscribe((data)=>
    {
      this.books=<Book[]>data;
      console.log(this.books);      
    });
  }

  getBooksByArabicLanguage(){
    this.filterService.filterBooksByLanguage('AR').subscribe((data)=>
    {
      this.books=<Book[]>data;
      console.log(this.books);      
    });
  }

  foundDataRadio(){
    return this.selectionRadio;
  }


}
