/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() companyName: string;
  @Input() itemName: string;
  @Input() value: string;
  @Input() price: number;
}
