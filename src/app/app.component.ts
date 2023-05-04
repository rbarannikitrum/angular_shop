import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavButton } from './dto/nav-button.dto';
import { ServerResponse } from './dto/server-response';
import { BaseInfoService } from './services/base-info.service';
import { SettingsInfoService } from './services/settings-info.service';

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

  constructor(
    private baseInfoService: BaseInfoService,
    private settingsInfoService: SettingsInfoService,
    private router: Router
  ) {}

  public data: any = [];

  public headers: Array<string> = [];

  public buttonText = '';

  public showingValues: Array<string> = [];

  public getBaseData(type: string) {
    return this.baseInfoService.getBaseInfo(type).subscribe((res: ServerResponse) => {
      this.data = res.data;
    });
  }

  public getSettings(type: string) {
    return this.settingsInfoService.getBaseInfo(type).subscribe((res: any) => {
      this.headers = res.headers;
      this.buttonText = res.buttonText;
      this.showingValues = res.showingValues;
    });
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getBaseData(event.url);
        this.getSettings(event.url);
      }
    });
  }
}
