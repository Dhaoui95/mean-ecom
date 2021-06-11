import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ICheckout} from './models/ICheckouts'
import { UserService } from './share/user.service';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  AllCheckouts=new BehaviorSubject<ICheckout[]>(null)
  apiURL:string=environment.api_url;


  constructor(private httpClient:HttpClient,
    private userService:UserService) { }

  async create(payload){
    try {
      const res=await axios({
        method:"post",
        url:`http://localhost:8080/api/checkout/create`,
        data:payload,
        headers:{
          "Content-Type": "multipart/form-data",
          "x-access-token": this.userService.getUser()
        }
      });
      return res;
    } catch (error) {
      console.log(error)
      
    }
  }
}
