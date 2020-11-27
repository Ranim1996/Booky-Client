import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Booky Website Application';

  readLocalStorageValue() {
    return localStorage.getItem('userToken');
  }
  
  userIsLogged(){
    if(localStorage.getItem('userToken') != null && localStorage.getItem('userId') != null ){
      return true;
    }else{
      return false;
    }
  }

}
