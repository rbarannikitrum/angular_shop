/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActiveItem } from 'src/app/dto/active-item.dto';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() activeItem: ActiveItem;

  @Output() closeModalWindow = new EventEmitter<void>();

  closeModal(): void {
    this.closeModalWindow.emit();
  }
}
