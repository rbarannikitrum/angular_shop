import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TablesheetComponent } from './tablesheet/tablesheet.component';
import { UiKitComponent } from './ui-kit.component';
import { StopPropagationDirective } from './stop-propagation.directive';
import { ValuesHelperPipe } from './values-helper.pipe';

@NgModule({
  declarations: [UiKitComponent, NavbarComponent, ModalComponent, TablesheetComponent, StopPropagationDirective, ValuesHelperPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [UiKitComponent, NavbarComponent, ModalComponent, TablesheetComponent]
})
export class UiKitModule {}
