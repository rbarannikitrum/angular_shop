/* eslint-disable no-prototype-builtins */
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('expandedModal', [
      transition(':enter', [
        style({ 'margin-left': '-700px' }),
        animate('0.5s ease-out', style({ 'margin-left': '0' }))
      ])
    ])
  ]
})
export class ModalComponent implements OnInit {
  @Input() activeItem: any = {};

  @Input() headers: Array<string> = [];

  @Input() showingValues: Array<string> = [];

  @Output() closeModalWindow = new EventEmitter<void>();

  @Output() saveNewData = new EventEmitter<any>();

  @Output() deleteItem = new EventEmitter<void>();

  public infoForm: FormGroup = new FormGroup({});

  public activeItemData: any;

  public formArray: any;

  public closeModal(): void {
    if (this.activeItem) this.deleteItem.emit();
    else this.closeModalWindow.emit();
  }

  ngOnInit(): void {
    if (this.activeItem) {
      this.formArray = this.getObjectEntries(this.activeItem);
    } else this.formArray = this.headers.map((el) => [el, '']);
    this.infoForm = this.createFormGroup(this.formArray);
  }

  public getNewData() {
    const newData = this.infoForm.getRawValue();
    this.saveNewData.emit(newData);
  }

  private getObjectEntries(obj: any) {
    let entries: any = [];

    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        entries = entries.concat(
          this.getObjectEntries(value).map(([subKey, subValue]: [any, any]) => [
            `${key}.${subKey}`,
            subValue
          ])
        );
      } else {
        entries.push([key, value]);
      }
    });

    return entries;
  }

  private createFormGroup(arr: any): FormGroup {
    arr.forEach(([key, value]: [any, any]) => {
      const control = new FormControl(value);
      this.infoForm.addControl(key, control);
    });
    return this.infoForm;
  }
}
