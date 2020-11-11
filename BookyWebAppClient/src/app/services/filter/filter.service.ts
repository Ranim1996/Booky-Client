import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor(private httpClient: HttpClient) { }

  public filterBooksByBookType(bookType){
    return this.httpClient.get('http://localhost:9090/booky/books?type=' + bookType);
  }

  public filterBooksByLanguage(language){
    return this.httpClient.get('http://localhost:9090/booky/books?language=' + language);
  }

  public filterBooksByTypeAndLanguage(type, language){
    return this.httpClient.get('http://localhost:9090/booky/books?type=' +  type + "&language=" + language);
  }

}
