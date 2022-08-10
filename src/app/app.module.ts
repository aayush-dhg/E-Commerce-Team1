import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { ProductsingleComponent } from './components/productsingle/productsingle.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: "", component: AppComponent },
  { path: "home", component: AppComponent },
  { path: "shop", component: ShopComponent },
  //{ path: "aboutus", component:  },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "cart", component: CartComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "orders", component: OrdersComponent },
  { path: "inventory", component: InventoryComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProductsingleComponent,
    LoginComponent,
    ForgotPasswordComponent,
    SignupComponent,

    OrdersComponent,
    DashboardComponent,
    InventoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
