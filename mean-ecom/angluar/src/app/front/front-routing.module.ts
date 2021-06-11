import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardUserGuard } from '../guard-user.guard';
import { AuthGuard } from '../share/guard.guard';
import { CartComponent } from './body/cart/cart.component';
import { CheckoutComponent } from './body/checkout/checkout.component';
import { ContactusComponent } from './body/contactus/contactus.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { MyaccountComponent } from './body/myaccount/myaccount.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { ProductsComponent } from './body/products/products.component';
import { WishlistComponent } from './body/wishlist/wishlist.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';

const routes: Routes = [
 // {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'product-detail/:slug',component:ProductDetailComponent},
  {path:'checkout',component:CheckoutComponent,canActivate:[GuardUserGuard]},
  {path:'my-account',component:MyaccountComponent},
  {path:'cart',component:CartComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'login',component:LoginComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'chatInbox',component:ChatInboxComponent },
  {path:'**',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[GuardUserGuard]
})
export class FrontRoutingModule { }
