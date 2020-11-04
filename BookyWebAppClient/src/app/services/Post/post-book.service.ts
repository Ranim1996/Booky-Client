import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostBookService {

  constructor(private httpClient: HttpClient) { }

  public getPosts(){
    return this.httpClient.get('http://localhost:9090/booky/books/');
   }

  public createPost(data){
    return this.httpClient.post('http://localhost:9090/booky/books/', data).toPromise().then(data => {
      console.log(data);
    });
     
   }

  public deletePost(bookId){
    return this.httpClient.delete('http://localhost:9090/booky/books/' + bookId);
  }

  public getBookById(id){ 
    return this.httpClient.get("http://localhost:9090/booky/books/" + id);
  }

  public updatePost(id, book) {
    const url = 'http://localhost:9090/booky/books/' + id;
    return this.httpClient.put(url, book);
  }

  
}
