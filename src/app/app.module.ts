import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiKitModule } from 'ui-kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannersComponent } from './components/banners/banners.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CitiesComponent } from './components/cities/cities.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PromocodesComponent } from './components/promocodes/promocodes.component';
import { ProtocolsComponent } from './components/protocols/protocols.component';
import { SeminarsComponent } from './components/seminars/seminars.component';
import { UsersComponent } from './components/users/users.component';
import { StopPropagationDirective } from './directives/stop-propagation.directive';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CategoriesComponent,
    CitiesComponent,
    BrandsComponent,
    ProtocolsComponent,
    OrdersComponent,
    BannersComponent,
    SeminarsComponent,
    PromocodesComponent,
    StopPropagationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    UiKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
