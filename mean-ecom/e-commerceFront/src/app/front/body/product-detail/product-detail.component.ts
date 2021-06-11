import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute} from '@angular/router'
import axios from 'axios';
import { DataService } from 'src/app/share/data.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  [x: string]: any;
  qtyDefault=1;
  cart:any;
  products;
  product;
  slug;
  pImageDefault='category-1.jpg';
  pImages=['category-2.jpg']

  constructor(private dataService:DataService,
    private router:Router,
   private actRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      console.log('this.slug---1',this.slug);
    });
    console.log('this.slug---2',this.slug);


    this.dataService.currentCart.subscribe(editCart =>
      (this.cart= editCart));      //<= Always get current value!
      this.getProductOne( this.slug);
  }
  async getProductOne(slug){
    try {
      const response=await axios.get('assets/data/products.json');
      console.log('response.data-',response.data);
      console.log('response.status-',response.status);
      this.products=response.data;
      //-----
      let chkSlug=this.products[this.products.findIndex(obj=>obj.pSlug === slug)]
      console.log('chkSlug-',chkSlug);
      if (chkSlug) {
        this.product=this.products[this.products.findIndex(obj=>obj.pSlug===slug)]
        console.log(' this.product-', this.product);
      this.pImageDefault=this.product.pImageDefault;
      this.pImages=this.product.pImages
      }else{
        this.router.navigate(["products"])

      } 
      
    } catch (error) {
      console.error(error)
      
    }
  }



  add2cart(qty,product){
    let n =0;
    for(n;n<qty;n++){
      this.cart.products.push(product);
    }
    this.cart.cart=this.cart.cart + qty
   
         
this.dataService.updateCart(this.cart);
console.log('this.cart--',this.cart)
  }
  buyNow(){
    
    this.router.navigate(["cart"]);
  }
  minus(){
    if (this.qtyDefault>1) {
      this.qtyDefault--;
    }

  }
  plus(){
    this.qtyDefault++;

  }

}
