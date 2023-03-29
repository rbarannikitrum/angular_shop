import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannersComponent } from './components/banners/banners.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CitiesComponent } from './components/cities/cities.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { PromocodesComponent } from './components/promocodes/promocodes.component';
import { ProtocolsComponent } from './components/protocols/protocols.component';
import { SeminarsComponent } from './components/seminars/seminars.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    CitiesComponent,
    BrandsComponent,
    ProtocolsComponent,
    OrdersComponent,
    BannersComponent,
    SeminarsComponent,
    PromocodesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
