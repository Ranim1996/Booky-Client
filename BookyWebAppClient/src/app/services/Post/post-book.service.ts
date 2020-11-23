import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostBookService {

  constructor(private httpClient: HttpClient) {  this.LocalStorageValue(); }

  LocalStorageValue() {
    if(localStorage.getItem("userToken") != null){
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization',  'Basic ' + localStorage.getItem("userToken"));
    };
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public getPosts(){
    return this.httpClient.get('http://localhost:9090/booky/books/', this.httpOptions);
   }
 
  public createPost(data){
    return this.httpClient.post('http://localhost:9090/booky/books/', data, this.httpOptions).toPromise().then(data => {
      console.log(data);
    });
     
   }

  public deletePost(bookId){
    return this.httpClient.delete('http://localhost:9090/booky/books/' + bookId, this.httpOptions);
  }

  public getBookById(id){ 
    return this.httpClient.get("http://localhost:9090/booky/books/" + id, this.httpOptions);
  }

  public updatePost(id, book) {
    const url = 'http://localhost:9090/booky/books/' + id;
    return this.httpClient.put(url, book, this.httpOptions);
  }

  
}
