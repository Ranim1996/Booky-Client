import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import {BehaviorSubject, EMPTY, Observable, Subject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const WS_ENDPOINT = 'ws://localhost:9988/ws/project';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private httpClient: HttpClient) {this.LocalStorageValue();}
  private socket$: WebSocketSubject<any>;
  private state$ = new BehaviorSubject<any>('');

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
  
  private static getNewWebSocket(): WebSocketSubject<any> {
    return webSocket(WS_ENDPOINT);
  }

  public connect(): void {
    if (!this.socket$ || this.socket$.closed) {
      this.socket$ = ChatService.getNewWebSocket() as WebSocketSubject<any>;
      this.socket$.subscribe(
        msg => this.populateMessage(msg),
        // Called whenever there is a message from the server
        err => {
          console.log('getting error');
          console.log(err);
        },
        // Called if WebSocket API signals some kind of error
        () => {
          console.log('complete');
          this.socket$ = null;
        }
        // Called when connection is closed (for whatever reason)
      );
    }
  }

  private populateMessage(message: any): void{
    if (!this.socket$){
      return;
    }
    console.log('message received: ' + message);
    this.state$.next(message);
  }

  public getState(): Observable<string>{
    return this.state$.asObservable();
  }

  public sendMessage(msg: any): void {
    if (!this.socket$){
      return;
    }
    console.log('message: ' + msg);
    this.socket$.next(msg);
  }

  public close(): void {
    this.socket$.complete();
  }

  public getMessages(){
    return this.httpClient.get('http://localhost:9090/booky/chat/', this.httpOptions);
  }
}

