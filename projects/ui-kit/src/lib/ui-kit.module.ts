import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UiKitComponent } from './ui-kit.component';
import { TablesheetComponent } from './tablesheet/tablesheet.component';

@NgModule({
  declarations: [UiKitComponent, NavbarComponent, ModalComponent, TablesheetComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UiKitComponent, NavbarComponent, ModalComponent]
})
export class UiKitModule {}
