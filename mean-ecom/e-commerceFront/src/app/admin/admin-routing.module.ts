import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminAdeditComponent } from './admins/admin-adedit/admin-adedit.component';

import { AdminsComponent } from './admins/admins/admins.component';
import { BannersAdeditComponent } from './banners/banners-adedit/banners-adedit.component';
import { BannersComponent } from './banners/banners/banners.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProductsAdeditComponent } from './products/products-adedit/products-adedit.component';
import { ProductsComponent } from './products/products/products.component';
import { UserAdeditComponent } from './users/user-adedit/user-adedit.component';
import { UsersComponent } from './users/users/users.component';


const routes: Routes = [
  {path:'admin/**',component:DashboardComponent},
  {path:'admin/admins',component:AdminsComponent},
  {path:'admin/admins-adedit',component:AdminAdeditComponent},
  {path:'admin/products',component:ProductsComponent},
  {path:'admin/products-adedit',component:ProductsAdeditComponent},
  {path:'admin/banners',component:BannersComponent},
  {path:'admin/banner-adedit',component:BannersAdeditComponent},
  {path:'admin/users',component:UsersComponent},
  {path:'admin/user-adedit',component:UserAdeditComponent},
  {path:'admin/products-adedit',component:ProductsAdeditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
