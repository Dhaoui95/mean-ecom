import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { TopBarComponent } from './front/top/top-bar/top-bar.component';
import { NavComponent } from './front/top/nav/nav.component';
import { BottomBarComponent } from './front/top/bottom-bar/bottom-bar.component';
import { MainBannerComponent } from './front/body/main-banner/main-banner.component';
import { NavbarComponent } from './front/top/navbar/navbar.component';
import { BannerComponent } from './front/body/banner/banner.component';
import { BrandComponent } from './front/body/brand/brand.component';
import { FeatureComponent } from './front/body/feature/feature.component';
import { CategoryComponent } from './front/body/category/category.component';
import { CallToActionComponent } from './front/body/call-to-action/call-to-action.component';
import { FeaturedProductComponent } from './front/body/featured-product/featured-product.component';
import { NewsletterComponent } from './front/body/newsletter/newsletter.component';
import { RecentProductComponent } from './front/body/recent-product/recent-product.component';
import { ReviewComponent } from './front/body/review/review.component';
import { FooterComponent } from './front/bottom/footer/footer.component';
import { FooterBottomComponent } from './front/bottom/footer-bottom/footer-bottom.component';
import { BestSellingComponent } from './front/body/best-selling/best-selling.component';
import { NewArrivalsComponent } from './front/body/new-arrivals/new-arrivals.component';
import { ProductsComponent } from './front/body/products/products.component';
import { ProductDetailComponent } from './front/body/product-detail/product-detail.component';
import { CartComponent } from './front/body/cart/cart.component';
import { WishlistComponent } from './front/body/wishlist/wishlist.component';
import { MyaccountComponent } from './front/body/myaccount/myaccount.component';
import { LoginComponent } from './front/body/login/login.component';
import { RegisterComponent } from './front/body/register/register.component';
import { BreadcrumbComponent } from './front/body/breadcrumb/breadcrumb.component';
import { CheckoutComponent } from './front/body/checkout/checkout.component';
import { ContactusComponent } from './front/body/contactus/contactus.component';
import { SearchComponent } from './front/body/search/search.component';
import { MainTopComponent } from './front/top/main-top/main-top.component';
import { MainBodyComponent } from './front/body/main-body/main-body.component';
import { MainFooterComponent } from './front/bottom/main-footer/main-footer.component';
import { HomeComponent } from './front/body/home/home.component';
import { SidebarComponent } from './front/body/sidebar/sidebar.component';
import { SidebarCatComponent } from './front/body/sidebar-cat/sidebar-cat.component';
import { SidebarSliderComponent } from './front/body/sidebar-slider/sidebar-slider.component';
import { SidebarBrandsComponent } from './front/body/sidebar-brands/sidebar-brands.component';
import { SidebarTagComponent } from './front/body/sidebar-tag/sidebar-tag.component';
import { TopComponent } from './front/top/top.component';
import { BodyComponent } from './front/body/body.component';
import { BottomComponent } from './front/bottom/bottom.component';*/
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from './share/dialog-confirm/dialog-confirm.component';
import { MaterialModule } from './share/material-module';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './Pipes/filter.pipe';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { ChatServiceService } from './share/chat-service.service';

//import { IgxAvatarModule } from 'igniteui-angular';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('630972341636696')
  }
]);

export function provideConfig() {
  return config;
}

//I keep the new line
@NgModule({
  declarations: [
    DialogConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    SocialLoginModule,
    
    
   // IgxAvatarModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
