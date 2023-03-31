/* eslint-disable @angular-eslint/component-selector */
import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { NavButton } from '../../dto/nav-button.dto';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
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

  private destroy$ = new Subject();

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.pipe(takeUntil(this.destroy$)).subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.changeButton();
      }
    });
  }

  private changeButton() {
    this.buttonsArray.forEach((el: NavButton) => {
      if (this.router.url.includes(el.route)) {
        el.isActive = true;
      } else {
        el.isActive = false;
      }
    });
  }

  public navigateAndChange(active: string) {
    this.router.navigate([active], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
