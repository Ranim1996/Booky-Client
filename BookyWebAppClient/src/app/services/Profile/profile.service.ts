import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  public getUser(){ //get all users
    return this.httpClient.get("http://localhost:9090/booky/users/");
  }

  public getUserById(id){ //get user by id is usefull to git user's profile
    return this.httpClient.get("http://localhost:9090/booky/users/" + id);
  }

  public updateUserInformation(model, id){ //update user information by id 
  const url = 'http://localhost:9090/booky/users/' + id;
  return this.httpClient.put(url, model);
  }


}
