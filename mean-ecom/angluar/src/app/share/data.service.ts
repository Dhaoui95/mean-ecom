import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public editCart: any={cart:0 ,products:[],subTotal:0,shippingCost:1,grandTotal:0}
  public subject =new Subject<any>();

  private cartSource=new BehaviorSubject(this.editCart);
  currentCart=this.cartSource.asObservable();
  updateCart(item){
    this.cartSource.next(item);
  }
}
