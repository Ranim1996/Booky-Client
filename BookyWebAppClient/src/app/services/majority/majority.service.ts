import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MajorityService {
  
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


  public statisticsPerType(){
    return this.httpClient.get('http://localhost:19090/booky/books/Majority/Type/', this.httpOptions);
  }

  public statisticsPerLanguage(){
    return this.httpClient.get('http://localhost:19090/booky/books/Majority/Language/', this.httpOptions);
  }

}
