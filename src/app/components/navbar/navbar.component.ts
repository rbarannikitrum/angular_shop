/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnDestroy } from '@angular/core';
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
  @Input() buttonsArray: Array<NavButton>;

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
