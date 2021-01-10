import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  readLocalStorageValue() {
    if(localStorage.getItem("userToken") != null){
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization',  'Basic ' + localStorage.getItem("userToken"));
    };
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private httpClient: HttpClient) { this.readLocalStorageValue(); }

  public filterBooksByBookType(bookType){
    return this.httpClient.get('http://localhost:19090/booky/books?type=' + bookType, this.httpOptions);
  }

  public filterBooksByLanguage(language){
    return this.httpClient.get('http://localhost:19090/booky/books?language=' + language, this.httpOptions);
  }

  public filterBooksByTypeAndLanguage(type, language){
    return this.httpClient.get('http://localhost:19090/booky/books?type=' +  type + "&language=" + language, this.httpOptions);
  }

  public filterBooksByName(name){
    return this.httpClient.get('http://localhost:19090/booky/books?bookName=' + name, this.httpOptions);
  }


}
