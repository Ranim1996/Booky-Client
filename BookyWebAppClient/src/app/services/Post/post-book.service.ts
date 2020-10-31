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

  
}
