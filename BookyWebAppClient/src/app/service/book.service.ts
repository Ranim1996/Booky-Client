import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  public deleteBook(id: number){
    return this.httpClient.delete(`http://localhost:9090/booky/books/` + id);
  }
}
