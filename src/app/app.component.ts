import { Component } from '@angular/core';
import { NavButton } from './dto/nav-button.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public buttonsArray: Array<NavButton> = [
    {
      labelText: 'Продукты',
      route: '/products',
      isActive: true,
      iconPath: '../../../assets/navbar/navbar_products.svg'
    },
    {
      labelText: 'Пользователи',
      route: '/clients',
      isActive: false,
      iconPath: '../../../assets/navbar/navbar_users.svg'
    },
    {
      labelText: 'Категории',
      route: '/categories',
      isActive: false,
      iconPath: '../../../assets/navbar/navbar_categories.svg'
    },
    {
      labelText: 'Города',
      route: '/cities',
      isActive: false,
      iconPath: '../../../assets/navbar/navbar_cities.svg'
    },
    {
      labelText: 'Бренды',
      route: '/brands',
      isActive: false,
      iconPath: '../../../assets/navbar/navbar_brands.svg'
    },
    {
      labelText: 'Протоколы',
      route: '/protocols',
      isActive: false,
      iconPath: '../../../assets/navbar/navbar_protocols.svg'
    },
    {
      labelText: 'Заказы',
      route: '/orders',
      isActive: false,
      iconPath: '../../../assets/navbar/navbar_orders.svg'
    },
    {
      labelText: 'Баннеры',
      route: '/banners',
      isActive: false,
      iconPath: '../../../assets/navbar/navbar_banners.svg'
    },
    {
      labelText: 'Семинары',
      route: '/seminars',
      isActive: false,
      iconPath: '../../../assets/navbar/navbar_seminars.svg'
    },
    {
      labelText: 'Промокоды',
      route: '/promocode',
      isActive: false,
      iconPath: '../../../assets/navbar/navbar_promocodes.svg'
    }
  ];
}
