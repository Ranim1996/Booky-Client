import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {  this.readLocalStorageValue(); }

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

  
  login(email, password){
    const body = email+":"+password;
    return this.httpClient.post('http://localhost:9090/booky/users/login', body, this.httpOptions);
  }
 
  logout(){
     this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
  }
 
  public registerUser(data){
    return this.httpClient.post('http://localhost:9090/booky/users/', data, this.httpOptions).toPromise().then(data => {
      console.log(data);
    });
     
  }
  
}
