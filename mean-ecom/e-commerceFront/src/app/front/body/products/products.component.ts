import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router'
import axios from 'axios';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/share/data.service';

@Component({
  selector: 'app-products',
  templateUrl:'./products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  cart:any;
  products;
  constructor(private dataService:DataService,private router:Router,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  
this.dataService.currentCart.subscribe(editCart =>
   (this.cart= editCart));      //<= Always get current value!
   this.getProducts();

   /*axios.get('assets/data/products.json')
   .then(function(response){
     this.products=response.data;
     console.log('response.data-',response.data);
     console.log('response.status-',response.status);
     console.log('response.statusText-',response.statusText);
     console.log('response.headers-',response.headers);
     console.log('response.config-',response.config);
   })*/

  }

  async getProducts(){
    try {
      const response=await axios.get('assets/data/products.json');
      console.log('response.data-',response.data);
      console.log('response.status-',response.status);
      this.products=response.data;
      
    } catch (error) {
      console.error(error)
      
    }
  }



  add2cart(qty,product){
   // console.log(item);
    //this.cart++;
    this.cart.products.push(product);
    this.cart.cart=this.cart.cart + qty
   // let tmpCart = {cart: this.cart.cart +item,products: []};
         
this.dataService.updateCart(this.cart);
console.log('this.cart--',this.cart)
  }
  buyNow(){
    
    this.router.navigate(["cart"]);
  }

}
