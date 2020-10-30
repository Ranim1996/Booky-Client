import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from 'src/app/classes/Profile/Country';
import { Language } from 'src/app/classes/Profile/Language';
import { Users } from 'src/app/classes/Profile/Users';
import { UserType } from 'src/app/classes/Profile/UserType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // arabic = new Language ("AR", "Arabic");
  // syria = new Country ("SY", "Syria");
  // user = new Users(1, "Ranim", "Alayoubi", "06/06/1996" , UserType.Admin, "ranim@gmail.com",
  // "password199","0684567447", this.syria, this.arabic);

  
  constructor(private httpClient: HttpClient) { }

  public getUser(){ //get all users
    return this.httpClient.get("http://localhost:9090/booky/users/");
  }

  public getUserById(id){ //get user by id is usefull to git user's profile
    return this.httpClient.get("http://localhost:9090/booky/users/" + id);
  }

  public updateUserInformation(id, user) { //update user information by id 
  const url = 'http://localhost:9090/booky/users/' + id;
  return this.httpClient.put(url, user);
  }


}
