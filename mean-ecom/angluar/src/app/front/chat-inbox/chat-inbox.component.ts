import { Component, OnInit } from '@angular/core';
import {io} from 'socket.io-client';
import { IUser } from 'src/app/models/IUser';
import { ChatServiceService } from 'src/app/share/chat-service.service';

const SOCKET_ENDPOINT='localhost:8080';

@Component({
  selector: 'app-chat-inbox',
  templateUrl: './chat-inbox.component.html',
  styleUrls: ['./chat-inbox.component.scss'],

})
export class ChatInboxComponent  {
  title = 'Websocket Angular client ';
  user:IUser[]=[];
    room:String;
    messageText:String;
    messageArray:Array<{user:String,message:String}> = [];

  constructor(private chatService: ChatServiceService) {
    this.chatService.newUserJoined()
    .subscribe(data=> this.messageArray.push(data));


    this.chatService.userLeftRoom()
    .subscribe(data=>this.messageArray.push(data));

    this.chatService.newMessageReceived()
    .subscribe(data=>this.messageArray.push(data));
   }
   join(){
    this.chatService.joinRoom({user:this.user, room:this.room});
}

leave(){
    this.chatService.leaveRoom({user:this.user, room:this.room});
}

sendMessage()
{
    this.chatService.sendMessage({user:this.user, room:this.room, message:this.messageText});
}

}
