import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersComponent } from './banners/banners.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { CitiesComponent } from './cities/cities.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { PromocodesComponent } from './promocodes/promocodes.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import { SeminarsComponent } from './seminars/seminars.component';
import { UsersComponent } from './users/users.component';

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
