import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontRoutingModule } from './front-routing.module';
import { AppComponent } from '../app.component';
import { BannerComponent } from './body/banner/banner.component';
import { BestSellingComponent } from './body/best-selling/best-selling.component';
import { BodyComponent } from './body/body.component';
import { BrandComponent } from './body/brand/brand.component';
import { BreadcrumbComponent } from './body/breadcrumb/breadcrumb.component';
import { CallToActionComponent } from './body/call-to-action/call-to-action.component';
import { CartComponent } from './body/cart/cart.component';
import { CategoryComponent } from './body/category/category.component';
import { CheckoutComponent } from './body/checkout/checkout.component';
import { ContactusComponent } from './body/contactus/contactus.component';
import { FeatureComponent } from './body/feature/feature.component';
import { FeaturedProductComponent } from './body/featured-product/featured-product.component';
import { HomeComponent } from './body/home/home.component';
import { LoginComponent } from './body/login/login.component';
import { MainBannerComponent } from './body/main-banner/main-banner.component';
import { MainBodyComponent } from './body/main-body/main-body.component';
import { MyaccountComponent } from './body/myaccount/myaccount.component';
import { NewArrivalsComponent } from './body/new-arrivals/new-arrivals.component';
import { NewsletterComponent } from './body/newsletter/newsletter.component';
import { ProductDetailComponent } from './body/product-detail/product-detail.component';
import { ProductsComponent } from './body/products/products.component';
import { RecentProductComponent } from './body/recent-product/recent-product.component';
import { RegisterComponent } from './body/register/register.component';
import { ReviewComponent } from './body/review/review.component';
import { SearchComponent } from './body/search/search.component';
import { SidebarBrandsComponent } from './body/sidebar-brands/sidebar-brands.component';
import { SidebarCatComponent } from './body/sidebar-cat/sidebar-cat.component';
import { SidebarSliderComponent } from './body/sidebar-slider/sidebar-slider.component';
import { SidebarTagComponent } from './body/sidebar-tag/sidebar-tag.component';
import { SidebarComponent } from './body/sidebar/sidebar.component';
import { WishlistComponent } from './body/wishlist/wishlist.component';
import { BottomComponent } from './bottom/bottom.component';
import { FooterBottomComponent } from './bottom/footer-bottom/footer-bottom.component';
import { FooterComponent } from './bottom/footer/footer.component';
import { MainFooterComponent } from './bottom/main-footer/main-footer.component';
import { BottomBarComponent } from './top/bottom-bar/bottom-bar.component';
import { MainTopComponent } from './top/main-top/main-top.component';
import { NavComponent } from './top/nav/nav.component';
import { NavbarComponent } from './top/navbar/navbar.component';
import { TopBarComponent } from './top/top-bar/top-bar.component';
import { TopComponent } from './top/top.component';
import { PagenotfoundComponent } from './body/pagenotfound/pagenotfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AvatarModule } from 'ngx-avatar';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';





@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavComponent,
    BottomBarComponent,
    MainBannerComponent,
    NavbarComponent,
    BannerComponent,
    BrandComponent,
    FeatureComponent,
    CategoryComponent,
    CallToActionComponent,
    FeaturedProductComponent,
    NewsletterComponent,
    RecentProductComponent,
    ReviewComponent,
    FooterComponent,
    FooterBottomComponent,
    BestSellingComponent,
    NewArrivalsComponent,
    ProductsComponent,
    ProductDetailComponent,
    CartComponent,
    WishlistComponent,
    MyaccountComponent,
    LoginComponent,
    RegisterComponent,
    BreadcrumbComponent,
    CheckoutComponent,
    ContactusComponent,
    SearchComponent,
    MainTopComponent,
    MainBodyComponent,
    MainFooterComponent,
    HomeComponent,
    SidebarComponent,
    SidebarCatComponent,
    SidebarSliderComponent,
    SidebarBrandsComponent,
    SidebarTagComponent,
    TopComponent,
    BodyComponent,
    BottomComponent,
    PagenotfoundComponent,
    ChatInboxComponent,
    
    
    

  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    AvatarModule,
    Ng2SearchPipeModule,
    RxReactiveFormsModule,
    
    
  ]
})
export class FrontModule { }
