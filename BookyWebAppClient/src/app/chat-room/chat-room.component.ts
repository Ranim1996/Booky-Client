import { ChatService } from './../services/ChatRoom/chat.service';
import { Chat } from './../classes/ChatRoom/Chat';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  sentMessage;
  receivedMessages: Array<Chat> = []; 

  constructor(private chatService: ChatService) {
    this.chatService.connect();

    chatService.getState().subscribe((msg) => {
      this.receivedMessages.unshift({ message: msg });
    });
  }

  sendMessage(): void {
    this.chatService.sendMessage(this.sentMessage);
  }

  ngOnInit(): void {

    this.chatService.getMessages().subscribe(
      data => {
        this.receivedMessages = <Chat[]>data;
      }
    )
  }


}
