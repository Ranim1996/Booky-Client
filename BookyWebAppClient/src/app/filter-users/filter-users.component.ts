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

  types: Object[] = [
    {value: 'Classics', viewValue: 'Classics'},
    {value: 'ActionandAdventure', viewValue: 'ActionandAdventure'},
    {value: 'Romantic', viewValue: 'Romantic'},
    {value: 'Fantasy', viewValue: 'Fantasy'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'DetectiveandMystery', viewValue: 'DetectiveandMystery'},
    {value: 'LitraryFiction', viewValue: 'LitraryFiction'}
  ]; 

  constructor(private filterService: FilterService,
              private route: ActivatedRoute
              ) { }

  ngOnInit(): void {
  }

  selectionLanguage: String;
  SelectionType: String;


  books: Book[]; 
  book: Book;


  filterbooksByLanguage(){
    console.log(this.selectionLanguage);
    this.filterService.filterBooksByLanguage(this.selectionLanguage).subscribe((data)=>
    {
      this.books = <Book[]>data;
      console.log("filter by language:" + this.books);
    });
  }

  getBooksByBookType(){
    this.filterService.filterBooksByBookType(this.SelectionType).subscribe((data)=>
    {
      this.books=<Book[]>data;
      console.log(this.books);      
    });
  }

  getBooksByTypeAndLanguage(){
    console.log("hi");
    this.filterService.filterBooksByTypeAndLanguage(this.SelectionType, this.selectionLanguage).subscribe((data)=>
    {
      this.books = <Book[]>data;
      console.log(this.books);
    });

  }

  foundDataByLanguage(){
    return this.selectionLanguage;
  }

  foundDataByType(){
    return this.SelectionType;
  }


}
