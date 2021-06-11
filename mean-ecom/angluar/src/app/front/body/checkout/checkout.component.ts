import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/checkout.service';
import { environment } from 'src/environments/environment';
import {DataService} from '../../../share/data.service';

declare var $;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  products;
  imgPath: string = environment.image_path;
  cart;
  cartItem=[];
  userData;
  constructor(private dataService:DataService,
    private checkoutService:CheckoutService) { }

  ngOnInit(): void {
    this.dataService.currentCart.subscribe(editCart => (this.cart= editCart)); //<= Always get current value!
    console.log('ngOnInit-this.cart--', this.cart);
  if(this.cart){
    this.cartList(this.cart);
    this.cart.subTotal=0
    this.cart.products.forEach(element => {
      let _price = element.pPriceSale ? element.pPriceSale : element.pPrice; //check if have pricesale
      this.cart.subTotal = this.cart.subTotal + _price;
      
    });
    
    this.cart.grandTotal = this.cart.subTotal + this.cart.shippingCost;
  }
  
  }
  get user(){
    
    if(sessionStorage.getItem("user-data")){
      //console.log(this.userData)
      this.userData = JSON.parse(sessionStorage.getItem("user-data"));
    }
    return this.userData? this.userData: false;
    
  }
  cartList(items){
    //--reset evrytime call
    this.cartItem = [];

    console.log('items--', items.products);

    items.products.forEach( (item, index) => {
      if(index<=0){
        //--first loop
        //--add new
        //--set data object
        let tmpData = {
          pId : item.id,
          qty: 1,
          price: item.pPriceSale ? item.pPriceSale: item.pPrice,
          data: item
          };
        this.cartItem.push(tmpData);
      }else{
        //---------------
        // after first loop check same pId and add qty
        if(this.cartItem[this.cartItem.findIndex(obj => obj.pId === item.id)]){
          console.log("first")
          //-- if have
          //-- get data old one
          let currentData = this.cartItem[this.cartItem.findIndex(obj => obj.pId === item.id)];
          //--update qty
          currentData.qty = currentData.qty+1;
        }else{
          console.log("second")
          //-- if not have yet
          //--add new same the first loop
          let tmpData = {
            pId: item.id,
            qty: 1,
            price: item.pPriceSale ? item.pPriceSale: item.pPrice,
            data: item
          }
          this.cartItem.push(tmpData);
        }
        //---------------
      }
    });
    //-- let see value
    console.log('cartItem--', this.cartItem);
  }
  onSubmit(){
    const fd=new FormData();
    fd.append('lastname',$("#lastname").val());
    fd.append('firtsname',$("#firtsname").val());
    fd.append('email',$("#email").val());
    fd.append('phone',$("#phone").val());
    fd.append('addresse',$("#addresse").val());
    fd.append('country',$("#country").val());
    fd.append('city',$("#city").val());
    fd.append('state',$("#state").val());
    fd.append('zip',$("#zip").val());
    fd.append('subTotal',$("#subTotal").val());
    fd.append('shippingCost',$("#shippingCost").val());
    fd.append('grandTotal',$("#grandTotal").val());
    this.checkoutService.create(fd);

  }

  

}
