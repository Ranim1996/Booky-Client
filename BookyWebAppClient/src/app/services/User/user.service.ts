import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {  
    this.LocalStorageValue(); 
  }

  LocalStorageValue() {
    if(localStorage.getItem("userToken") != null){
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization',  localStorage.getItem("userToken"));
    };
  }
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  token: string;

  login(email, password){

    const body = email+":"+password;
 
    return this.httpClient.post('http://localhost:19090/booky/users/login', body, {responseType: 'text'});
  }
 
  logout(){
     this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
  }

  public addNewUser(data){
    return this.httpClient.post('http://localhost:19090/booky/users/', data).toPromise().then(data => {
      console.log("Service:" + data);
    }); 
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }

  getUserIdOfLoggedIn(){
    var decoded = this.getDecodedAccessToken(localStorage.getItem("userToken"))
    var userId = decoded['jti'];
    return userId;
  }
  
}
