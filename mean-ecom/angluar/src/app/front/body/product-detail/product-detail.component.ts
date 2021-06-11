import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../share/data.service'
import axios from 'axios';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ProductService } from 'src/app/share/product.service';

import { IProduct } from 'src/app/models/IProducts';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})

export class ProductDetailComponent implements OnInit {
  createdAt = Date.now();
  [x: string]: any;
  imgPath: string = environment.image_path;

  cart:any; 
   products; 
   product;
   slug;
  qtyDefault=1;
  //paramId :number = 0;
  pImageDefault;

  pImages=[];
  constructor(
    private dataService:DataService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private productService:ProductService
    ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.slug = (params.get('slug'));
      console.log('this.bel--slug', this.slug);
    });

    this.dataService.currentCart.subscribe(editCart => (this.cart= editCart)); //<= Always get current value!

    this.getProductOne(this.slug);
   
  }


  // Want to use async/await? Add the `async` keyword to your outer function/method.
  async getProductOne(slug) {
    try {
      const response = await this.productService.getOne(slug).then(data=>{
        console.log('response.data-', data.data.data);
        //console.log('response.status-', status);
        // console.log('response.statusText-', response.statusText);
        // console.log('response.headers-', response.headers);
        // console.log('response.config-', response.config);
        this.product = {... data.data.data};
        console.log(this.product)
        console.log(data.data.data.pImages.split(','))
        this.pImages=data.data.data.pImages.split(',')
        console.log(this.pImages)
      });
     
  
      // var f;
      //----------
     // const chkSlug = this.products(function(item,index){f=index;return item.id==id });
      // console.log('chkSlug-', chkSlug);
     /* if(this.products[this.products.findIndex(obj => obj.pSlug === slug)]){

        this.product = this.products[this.products.findIndex(obj => obj.pSlug === slug)];
        console.log('this.product-', this.product);
        this.pImageDefault = this.product.pImageDefault;
        this.pImages = this.product.pImages;
      }else{
        this.router.navigate(["products"]);
      }*/
      //----------

    } catch (error) {
      console.error(error);
    }
  }

  add2cart(qty,product){
    let n=0;
    for(n; n<qty; n++){
      this.cart.products.push(product);

      //--part Cart Summary
      //--set in data service
      let _price = product.pPriceSale ? product.pPriceSale : product.pPrice;
      this.cart.subTotal = this.cart.subTotal + _price;
      this.cart.grandTotal = this.cart.subTotal + this.cart.shippingCost;

    }
    this.cart.cart = this.cart.cart + qty;
    this.dataService.updateCart(this.cart);
    console.log('this.cart--', this.cart);
  }
  buynow(){
    this.router.navigate(["cart"]);
  }
  minus(){
    console.log('minus');
    if(this.qtyDefault > 1){
      this.qtyDefault--;
    }
  }
  plus(){
    console.log('plus');
    this.qtyDefault++;
  }
}
