import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/share/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products;
  cart;
  cartItem=[];
 
  



  constructor(private dataService:DataService,
    private router:Router,
    private actRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.currentCart.subscribe(editCart=>(this.cart=editCart));
    console.log('this cart ---',this.cart)
    if (this.cart) {
      this.cartList(this.cart);
      
    }
  }
  cartList(items){
    this.cartItem=[];
    console.log('items---',items.products);
    items.products.forEach((item,index)=>{
      if (index<=0) {
        let tmpData={
          pId:item.pId,
          qty:1,
          price:item.pPriceSale ? item.pPriceSale:item.pPrice,
          data:item

        };
        this.cartItem.push(tmpData)
        
      }else{
        if (this.cartItem[this.cartItem.findIndex(obj=>obj.pId ===item.pId)]) {
          let currentData=this.cartItem[this.cartItem.findIndex(obj=>obj.pId===item.pId)]
          currentData.qty=currentData.qty+1;
          
        }else{
          let tmpData={
            pId:item.pId,
            qty:1,
            price:item.pPriceSale ? item.pPriceSale:item.pPrice,
            data:item
  
          };
          this.cartItem.push(tmpData);

          }
        }
      
    });
    console.log('cartItem--',this.cartItem);

  }
  minus(product){
    this.add2cart('minus',product)
    this.ngOnInit()

  }
plus(product){
  this.add2cart('plus',product)
  this.ngOnInit()

}

add2cart(type,product){
  if (type==='plus') {
    this.cart.products.push(product);
    this.cart.cart=this.cart.cart +1


    let _price=product.pPriceSale ? product.pPriceSale : product.pPrice;
    this.cart.subTotal=this.cart.subTotal+ _price;
    this.cart.grandTotal=this.cart.subTotal+this.cart.shippingCost
    
  }else{
    if (this.cart.products.findIndex(obj =>obj.pId ===product.pId)>=0) {
      let tmpIndex=this.cart.products.findIndex(obj=>obj.pId===product.pId)

      this.cart.products.splice(tmpIndex,1);
      this.cart.cart=this.cart.cart -1

      
    let _price=product.pPriceSale ? product.pPriceSale : product.pPrice;
    this.cart.subTotal=this.cart.subTotal - _price;
    this.cart.grandTotal=this.cart.subTotal+this.cart.shippingCost; 
    }
  }
  this.dataService.updateCart(this.cart);
  console.log('this cart --',this.cart)
  
}

removeCart(pId)
{
  this.cartItem.forEach((item,index)=>{
    if (item.pId===pId) 
    {
      let n=0;
      for (let n = 0; n< item.qty; n++) {
      this.add2cart('minus',item.data)
       
      }
      this.cartItem.splice(index,1)
      
    }
  });


}

}
