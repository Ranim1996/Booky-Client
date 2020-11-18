import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {   }

  readLocalStorageValue() {
    // if(localStorage.getItem("userToken") != null){
      console.log("Read value function:" + localStorage.getItem("userToken") );
      // this.httpOptions.headers = this.httpOptions.headers.set('Authorization',  'Basic ' + localStorage.getItem("userToken"));
      this.httpOptions.headers.set('Authorization',  'Basic ' + localStorage.getItem("userToken"));

    // }
    // else{

    //   console.log("LOcal storage is nul :(" + localStorage.getItem("userToken"));

    // };
  } 
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  token: string;

  login(email, password){
    const body = email+":"+password;

    this.token = btoa(email+':'+password);
    localStorage.setItem('userToken', this.token);

    // this.readLocalStorageValue();
    // console.log(this.httpOptions);

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
 
  public registerUser(data){
    return this.httpClient.post('http://localhost:9090/booky/users/', data, this.httpOptions).toPromise().then(data => {
      console.log(data);
    });
     
  }
  
}
