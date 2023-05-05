import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lib-tablesheet',
  templateUrl: './tablesheet.component.html',
  styleUrls: ['./tablesheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

  public activeItem: Array<string | number> | undefined;

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
    console.log(this.activeItem);
    this.settingsForm
      .get('itemsPerPage')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getMaxPage();
      });
  }

  ngOnChanges(): void {
    this.idList = [];
    this.getMaxPage();
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
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
    } else if (event) {
      let temp = { ...this.data[0] };
      for (const key in temp) {
        if (Object.prototype.hasOwnProperty.call(temp, key)) {
          temp[key] = null;
        }
      }
      temp = { ...temp, ...event };
      this.data.push(temp);
      console.log(this.data);
    }
    this.closeModal();
    this.getMaxPage();
  }

  public removeItem() {
    this.data = this.data.filter((el, i) => i !== this.activeIndex);
    this.closeModal();
  }

  public addItem() {
    this.activeItem = undefined;
    this.isModalOpened = true;
  }
}
