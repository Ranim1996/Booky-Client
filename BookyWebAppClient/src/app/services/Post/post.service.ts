import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  public getPosts(){
    return this.httpClient.get('http://localhost:9090/posts/user/');
   }

   public createPost(data){
     return this.httpClient.post('http://localhost:9090/posts', data).toPromise().then(data => {
       console.log(data);
     });
     
   }
   public deletePost(id){
     return this.httpClient.delete('http://localhost:9099/posts/'+ id).toPromise().then(data => {
       console.log(data);
     });
   }
}
