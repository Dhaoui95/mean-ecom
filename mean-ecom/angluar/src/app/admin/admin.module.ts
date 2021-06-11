import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductsComponent } from './products/products/products.component';
import { ProductAdeditComponent } from './products/product-adedit/product-adedit.component';
import { BannersComponent } from './banners/banners/banners.component';
import { BannerAdeditComponent } from './banners/banner-adedit/banner-adedit.component';
import { AdminsComponent } from './admins/admins/admins.component';
import { AdminAdeditComponent } from './admins/admin-adedit/admin-adedit.component';
import { UsersComponent } from './users/users/users.component';
import { UserAdeditComponent } from './users/user-adedit/user-adedit.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { TopLeftComponent } from './top-left/top-left.component';
import { DialogConfirmComponent } from '../share/dialog-confirm/dialog-confirm.component';
import { MaterialModule } from '../share/material-module';
import { CategoriesComponent } from './categories/categories/categories.component';
import { CategoryAdeditComponent } from './categories/category-adedit/category-adedit.component';
import { UploadsComponent } from './uploads/uploads.component';



@NgModule({
  declarations: [
    
    ProductsComponent,
    ProductAdeditComponent,
    BannersComponent,
    BannerAdeditComponent,
    AdminsComponent,
    AdminAdeditComponent,
    UsersComponent,
    UserAdeditComponent,
    DashboardComponent,
    PagenotfoundComponent,
    LoginComponent,
    TopLeftComponent,
    CategoriesComponent,
    CategoryAdeditComponent,
    UploadsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    
    
  ]
})
export class AdminModule { }
