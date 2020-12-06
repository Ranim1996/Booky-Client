import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {  
    this.LocalStorageValue(); 
  }
  
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
  
  token: string;

  login(email, password){

    const body = email+":"+password;

    // this.token = btoa(email+':'+password);
    this.token = btoa(email);

    localStorage.setItem('userToken', this.token);

    let httpOP = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':  'Basic ' + localStorage.getItem("userToken")
      })
    };

    return this.httpClient.post('http://localhost:9090/booky/users/login', body, httpOP);
  }
 
  logout(){
     this.httpOptions.headers = this.httpOptions.headers.delete('Authorization');
  }

  public addNewUser(data){
    return this.httpClient.post('http://localhost:9090/booky/users/', data).toPromise().then(data => {
      console.log("Service:" + data);
    }); 
  }
  
}
