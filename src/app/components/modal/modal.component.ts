/* eslint-disable @angular-eslint/component-selector */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActiveItem } from 'src/app/dto/active-item.dto';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() activeItem: ActiveItem;

  @Output() closeModalWindow = new EventEmitter<void>();

  @Output() saveNewData = new EventEmitter<ActiveItem>();

  @Output() deleteItem = new EventEmitter<void>();

  public infoForm: FormGroup;

  ngOnInit() {
    this.infoForm = new FormGroup({
      company: new FormControl(this.activeItem?.brandName || ''),
      item: new FormControl(this.activeItem?.itemName || ''),
      volume: new FormControl(this.activeItem?.volume || ''),
      price: new FormControl(this.activeItem?.price || '', Validators.pattern('^[0-9]*$'))
    });
  }

  closeModal(): void {
    if (this.activeItem) this.deleteItem.emit();
    else this.closeModalWindow.emit();
  }

  public getNewData() {
    const newData = {
      brandName: this.infoForm.controls['company'].value,
      itemName: this.infoForm.controls['item'].value,
      volume: this.infoForm.controls['volume'].value,
      price: this.infoForm.controls['price'].value
    };
    this.saveNewData.emit(newData);
  }
}
