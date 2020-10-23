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

  books: Book[]; 
  book: Book;

  languages: object[] = [
    {value: 'AR', viewValue: 'Arabic'},
    {value: 'EN', viewValue: 'English'},
    {value: 'FR', viewValue: 'French'}
  ];

  getBooksByFantasyType(){
    this.filterService.filterBooksByFantasyType('Fantasy').subscribe((data)=>
    {
      this.books=<Book[]>data;
      console.log(this.books);      
    });
  }


}
