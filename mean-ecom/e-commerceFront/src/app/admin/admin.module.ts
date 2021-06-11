import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products/products.component';
import { ProductsAdeditComponent } from './products/products-adedit/products-adedit.component';
import { BannersComponent } from './banners/banners/banners.component';
import { BannersAdeditComponent } from './banners/banners-adedit/banners-adedit.component';
import { AdminsComponent } from './admins/admins/admins.component';
import { AdminAdeditComponent } from './admins/admin-adedit/admin-adedit.component';
import { UsersComponent } from './users/users/users.component';
import { UserAdeditComponent } from './users/user-adedit/user-adedit.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsAdeditComponent,
    BannersComponent,
    BannersAdeditComponent,
    AdminsComponent,
    AdminAdeditComponent,
    UsersComponent,
    UserAdeditComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
