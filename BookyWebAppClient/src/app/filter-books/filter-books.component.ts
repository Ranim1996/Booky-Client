import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../classes/Book/Book';
import { Users } from '../classes/Profile/Users';
import { UserType } from '../classes/Profile/UserType';
import { FilterService } from '../services/filter/filter.service';
import { PostBookService } from '../services/Post/post-book.service';
import { ProfileService } from '../services/Profile/profile.service';

@Component({
  selector: 'app-filter-books',
  templateUrl: './filter-books.component.html',
  styleUrls: ['./filter-books.component.css']
})
export class FilterBooksComponent implements OnInit {

  types: Object[] = [
    {value: 'Classics', viewValue: 'Classics'},
    {value: 'ActionandAdventure', viewValue: 'Action and Adventure'},
    {value: 'Romantic', viewValue: 'Romantic'},
    {value: 'Fantasy', viewValue: 'Fantasy'},
    {value: 'Horror', viewValue: 'Horror'},
    {value: 'DetectiveandMystery', viewValue: 'Detective and Mystery'},
    {value: 'LitraryFiction', viewValue: 'Litrary Fiction'}
  ]; 

  constructor(private filterService: FilterService,
    private route: ActivatedRoute,
    private postService: PostBookService,
    private profileService: ProfileService
    ) { }


    logId: string;
    currentUser: Users;
    admin: UserType = UserType.Admin;
    reader: UserType = UserType.Reader;
    searchText = '';

    ngOnInit(): void {
    this.logId = localStorage.getItem('userId');

    console.log("id in filter: " + this.logId);

    this.profileService.getUserById(this.logId).subscribe((data)=>{
    console.log(data);
    this.currentUser = <Users>data;
    console.log("Filter: " + this.currentUser.id + this.currentUser.usertype);
    });
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

    getBooksByChars(){

    if (this.searchText != null){
    this.filterService.filterBooksByName(this.searchText).subscribe((data)=>
    {
    this.books=<Book[]>data;
    console.log(this.book);     
    });
    }

    }


    ClearFilters(){
    window.location.reload();
    }

    foundDataByLanguage(){
    return this.selectionLanguage;
    }

    foundDataByType(){
    return this.SelectionType;
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
