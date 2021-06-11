import { Component, OnInit, Pipe } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import axios from 'axios';
import { IProduct } from 'src/app/models/IProducts';
import { DataService } from 'src/app/share/data.service';
import { ProductService } from 'src/app/share/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  imgPath: string = environment.image_path;
  cart:any;
  searchTerm: string;
  Today=new Date();
  pPriceSale:number;
  pPrice:number;
  pName: string;
  products:IProduct[];
  constructor(private dataService:DataService,private productService:ProductService,private router:Router) { }

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
      const response=await this.productService.getAll();
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
