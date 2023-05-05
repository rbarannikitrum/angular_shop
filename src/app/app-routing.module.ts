import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BannersComponent } from './components/banners/banners.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CitiesComponent } from './components/cities/cities.component';
import { OrdersComponent } from './components/orders/orders.component';
import { PromocodesComponent } from './components/promocodes/promocodes.component';
import { ProtocolsComponent } from './components/protocols/protocols.component';
import { SeminarsComponent } from './components/seminars/seminars.component';

const routes: Routes = [
  {
    path: 'products',
    component: AppComponent
  },
  {
    path: 'clients',
    component: AppComponent
  },
  {
    path: 'categories',
    component: AppComponent
  },
  {
    path: 'cities',
    component: CitiesComponent
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'protocols',
    component: ProtocolsComponent
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'banners',
    component: BannersComponent
  },
  { path: 'seminars', component: SeminarsComponent },
  {
    path: 'promocode',
    component: PromocodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
