import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { CitiesComponent } from './cities/cities.component';
import { BrandsComponent } from './brands/brands.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { OrdersComponent } from './orders/orders.component';
import { BannersComponent } from './banners/banners.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { PromocodesComponent } from './promocodes/promocodes.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ProductsComponent, UsersComponent, CategoriesComponent, CitiesComponent, BrandsComponent, ProtocolsComponent, OrdersComponent, BannersComponent, SeminarsComponent, PromocodesComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
