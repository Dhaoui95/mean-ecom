import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import  {io}  from 'socket.io-client';
import * as SocketIOClient from 'socket.io-client';
import { IUser } from '../models/IUser';
//import {io} from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private socket = io('http://localhost:8081',{ transports: ['websocket', 'polling', 'flashsocket'] });

    constructor() {
      
    }

   
    joinRoom(data)
    {
        this.socket.emit('join',data);
    }

    newUserJoined()
    {
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new user joined', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    leaveRoom(data){
        this.socket.emit('leave',data);
    }

    userLeftRoom(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('left room', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }

    sendMessage(data)
    {
        this.socket.emit('message',data);
    }

    newMessageReceived(){
        let observable = new Observable<{user:String, message:String}>(observer=>{
            this.socket.on('new message', (data)=>{
                observer.next(data);
            });
            return () => {this.socket.disconnect();}
        });

        return observable;
    }
}