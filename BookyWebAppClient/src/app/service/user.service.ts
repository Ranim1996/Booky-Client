import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) { }
  
  public getUsers(){
    return this.httpClient.get(`http://localhost:9090/booky/users/`);
  }

}
