import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  public getUser(){ //get all users
    return this.httpClient.get("http://localhost:9090/booky/users/")
  }

  public getUserById(id){ //get user by id is usefull to git user's profile
    return this.httpClient.get("http://localhost:9090/booky/users/" + id)
  }

}
