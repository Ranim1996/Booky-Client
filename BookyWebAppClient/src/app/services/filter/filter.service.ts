import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpClient: HttpClient) { }

  public filterBooksByFantasyType(bookType){
    return this.httpClient.get('http://localhost:9090/booky/books?type=' + bookType);
  }

  public filterBooksByLanguage(language){
    return this.httpClient.get('http://localhost:9090/booky/books?language=' + language);
  }

}
