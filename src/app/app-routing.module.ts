import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersComponent } from './components/banners/banners.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CitiesComponent } from './components/cities/cities.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { PromocodesComponent } from './components/promocodes/promocodes.component';
import { ProtocolsComponent } from './components/protocols/protocols.component';
import { SeminarsComponent } from './components/seminars/seminars.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'clients',
    component: UsersComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
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
