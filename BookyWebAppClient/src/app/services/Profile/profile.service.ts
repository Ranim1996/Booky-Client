import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  constructor(private httpClient: HttpClient) { this.LocalStorageValue(); } 

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
 
  public getUser(){ //get all users
    return this.httpClient.get("http://localhost:9090/booky/users/", this.httpOptions);
  }

  public getUserById(id){ //get user by id is usefull to git user's profile
    return this.httpClient.get("http://localhost:9090/booky/users/" + id, this.httpOptions);
  }

  public getUserTypeByUserId(id){ //get user type by user id
    return this.httpClient.get("http://localhost:9090/booky/users/type/" + id, this.httpOptions);
  }

  public updateUserInformation(id, user) { //update user information by id 
    const url = 'http://localhost:9090/booky/users/' + id;
    return this.httpClient.put(url, user, this.httpOptions);
  }

}
