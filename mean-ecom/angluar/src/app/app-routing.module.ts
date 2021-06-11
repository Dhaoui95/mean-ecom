import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './front/body/pagenotfound/pagenotfound.component';
//import { AdminModule } from './admin/admin.module';
/*import { CartComponent } from './front/body/cart/cart.component';
import { CheckoutComponent } from './front/body/checkout/checkout.component';
import { ContactusComponent } from './front/body/contactus/contactus.component';


import { HomeComponent } from './front/body/home/home.component';
import { LoginComponent } from './front/body/login/login.component';
import { MyaccountComponent } from './front/body/myaccount/myaccount.component';
import { ProductDetailComponent } from './front/body/product-detail/product-detail.component';
import { ProductsComponent } from './front/body/products/products.component';
import { WishlistComponent } from './front/body/wishlist/wishlist.component';*/

const routes: Routes = [
  /*{path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'product-detail/:slug',component:ProductDetailComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'my-account',component:MyaccountComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},*/

  {path:'admin',
  loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
   {path:'',
   loadChildren:()=>import('./front/front.module').then(m=>m.FrontModule)},
  //{path:'admin',component:AdminModule}
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
