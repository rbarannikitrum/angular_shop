import { Component, HostListener, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lib-tablesheet',
  templateUrl: './tablesheet.component.html',
  styleUrls: ['./tablesheet.component.scss']
})
export class TablesheetComponent implements OnInit, OnChanges, OnDestroy {
  @Input() buttonText = '';

  @Input() data: Array<any>;

  @Input() headers: Array<string>;

  @Input() showingValues: Array<string>;

  public maxPage = 1000;

  public mainCheckboxState = false;

  public idList: Array<string> = [];

  public isDeleteOpened = false;

  public isModalOpened = false;

  public activeItem: Array<string | number>;

  public settingsForm: FormGroup = new FormGroup({
    itemsPerPage: new FormControl(10),
    currentPage: new FormControl(1)
  });

  private activeIndex = -1;

  private destroy$ = new Subject();

  @HostListener('document:keydown.escape')
  onEscKeydown() {
    this.closeModal();
  }

  ngOnInit(): void {
    console.log(this.data, this.showingValues);
    this.settingsForm
      .get('itemsPerPage')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getMaxPage();
      });
  }

  ngOnChanges(): void {
    this.getMaxPage();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public showingValuesHelper(item: any, findString: string) {
    const findArray = findString.split(', ');
    findArray.forEach((el: string) => (item = item[el]));
    return item;
  }

  private getMaxPage() {
    this.maxPage = Math.ceil(this.data.length / this.settingsForm.get('itemsPerPage')?.value);
  }

  public incrementPage() {
    const currentPage = this.settingsForm.get('currentPage')?.value;
    this.settingsForm.get('currentPage')?.value < this.maxPage &&
      this.settingsForm.controls['currentPage'].setValue(currentPage + 1);
  }

  public decrementPage() {
    const currentPage = this.settingsForm.get('currentPage')?.value;
    this.settingsForm.get('currentPage')?.value > 1 &&
      this.settingsForm.controls['currentPage'].setValue(currentPage - 1);
  }

  public changeMainCheckbox(event: any) {
    this.mainCheckboxState = !this.mainCheckboxState;
    if (!event.target.checked) {
      this.idList = [];
      return;
    }
    this.isDeleteOpened = true;
    this.data.map((el) => this.idList.push(el.id));
  }

  public setRemoving(id: string, event: any) {
    this.isDeleteOpened = true;
    const currentItem = this.idList.findIndex((item) => item === id);
    if (currentItem !== -1 && !event.target.checked) {
      this.idList.splice(currentItem, 1);
      return;
    }
    this.idList.push(id);
  }

  public deleteItems() {
    this.data = this.data.filter((el) => !this.idList.includes(el.id));
    this.idList = [];
    this.getMaxPage();
  }

  public setModal(item: Array<string | number>, index: number) {
    this.activeItem = Object.assign(item);
    this.activeIndex = index;
    this.isModalOpened = true;
  }

  public closeModal() {
    this.isModalOpened = false;
  }

  public recieveData(event: any) {
    console.log(event);
    if (this.activeIndex !== -1) {
      this.data[this.activeIndex] = { ...this.data[this.activeIndex], ...event };
    } else
      this.data.push({
        brand: { name: event.brandName },
        name: event.itemName,
        volume: event.volume,
        price: event.price,
        id: `${Math.random() * 1000000}`
      });
    console.log(this.data);
    this.closeModal();
  }

  public removeItem() {
    this.data = this.data.filter((el, i) => i !== this.activeIndex);
    this.closeModal();
  }

  public addItem() {
    this.isModalOpened = true;
  }
}