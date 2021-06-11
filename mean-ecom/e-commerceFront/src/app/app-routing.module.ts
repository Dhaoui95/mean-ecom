import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AdminModule } from './admin/admin.module';
/*import { CartComponent } from './front/body/cart/cart.component';
import { CheckoutComponent } from './front/body/checkout/checkout.component';
import { ContactusComponent } from './front/contactus/contactus.component';
import { HomeComponent } from './front/home/home.component';
import { LoginComponent } from './front/login/login.component';
import { MyaccountComponent } from './front/myaccount/myaccount.component';
import { ProductDetailComponent } from './front/product-detail/product-detail.component';
import { ProductsComponent } from './front/products/products.component';
import { WishListComponent } from './front/body/wish-list/wish-list.component';*/

const routes: Routes = [
 {
   path:'',loadChildren:()=>import('./front/front.module').then(m=>m.FrontModule)
 },
  {path:'admin',
  loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  //{path:'**',component:HomeComponent}
 // {path:'**',component:HomeComponent} //meyalka chy yarjaa home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
