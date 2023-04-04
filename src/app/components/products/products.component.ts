/* eslint-disable @angular-eslint/component-selector */
import { Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { ActiveItem } from 'src/app/dto/active-item.dto';
import { Product } from 'src/app/dto/product.dto';
import { ServerResponse } from 'src/app/dto/server-response';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
  constructor(private productsService: ProductsService, private elRef: ElementRef) {}

  public products: Array<Product>;

  public maxPage = 1000;

  public mainCheckboxState = false;

  public idList: Array<string> = [];

  public isDeleteOpened = false;

  public isModalOpened = false;

  public activeItem: ActiveItem;

  public settingsForm: FormGroup = new FormGroup({
    itemsPerPage: new FormControl(10),
    currentPage: new FormControl(1)
  });

  private activeIndex = -1;

  private destroy$ = new Subject();

  @HostListener('document:keydown.escape', ['$event'])
  onEscKeydown() {
    this.closeModal();
  }

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: ServerResponse) => {
        this.products = res.data;
        this.maxPage = Math.ceil(
          this.products.length / this.settingsForm.get('itemsPerPage')?.value
        );
      });
    this.settingsForm
      .get('itemsPerPage')
      ?.valueChanges.pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.maxPage = Math.ceil(
          this.products.length / this.settingsForm.get('itemsPerPage')?.value
        );
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public incrementPage() {
    let currentPage = this.settingsForm.get('currentPage')?.value;
    this.settingsForm.get('currentPage')?.value < this.maxPage &&
      this.settingsForm.controls['currentPage'].setValue(currentPage++);
  }

  public decrementPage() {
    let currentPage = this.settingsForm.get('currentPage')?.value;
    this.settingsForm.get('currentPage')?.value > 1 &&
      this.settingsForm.controls['currentPage'].setValue(currentPage--);
  }

  public changeMainCheckbox(event: any) {
    this.mainCheckboxState = !this.mainCheckboxState;
    if (!event.target.checked) {
      this.idList = [];
      return;
    }
    this.isDeleteOpened = true;
    this.products.map((el) => this.idList.push(el.id));
  }

  public setRemoving(id: string, event: any) {
    this.isDeleteOpened = true;
    const currentItem = this.idList.findIndex((item) => item === id);
    if (currentItem !== -1 && !event.target.checked) {
      this.idList.splice(currentItem, 1);
      console.log(this.idList);
      return;
    }
    this.idList.push(id);
  }

  public deleteItems() {
    this.products = this.products.filter((el) => !this.idList.includes(el.id));
    this.idList = [];
  }

  public setModal(
    brandName: string,
    itemName: string,
    volume: string,
    price: number,
    index: number
  ) {
    this.activeItem = {
      brandName: brandName,
      itemName: itemName,
      volume: volume,
      price: price
    };
    this.activeIndex = index;
    this.isModalOpened = true;
  }

  public closeModal() {
    this.isModalOpened = false;
  }

  public recieveData(event: any) {
    if (this.activeIndex !== -1) {
      this.products[this.activeIndex].brand.name = event.brandName;
      this.products[this.activeIndex].name = event.itemName;
      this.products[this.activeIndex].volume = event.volume;
      this.products[this.activeIndex].price = event.price;
    } else
      this.products.push({
        brand: { name: event.brandName },
        name: event.itemName,
        volume: event.volume,
        price: event.price,
        id: `${Math.random() * 1000000}`
      });
    this.closeModal();
  }

  public removeItem() {
    this.products = this.products.filter((el, i) => i !== this.activeIndex);
    this.closeModal();
  }

  public addItem() {
    this.isModalOpened = true;
  }
}
