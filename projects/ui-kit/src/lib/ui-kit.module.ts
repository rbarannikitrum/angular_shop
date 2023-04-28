import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { UiKitComponent } from './ui-kit.component';

@NgModule({
  declarations: [UiKitComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [UiKitComponent, NavbarComponent]
})
export class UiKitModule {}
