/* eslint-disable @angular-eslint/component-selector */
import { Component, DoCheck, ElementRef, HostListener, OnInit } from '@angular/core';
import { ActiveItem } from 'src/app/dto/active-item.dto';
import { Product } from 'src/app/dto/product.dto';
import { ServerResponse } from 'src/app/dto/server-response';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, DoCheck {
  constructor(private productsService: ProductsService, private elRef: ElementRef) {}

  public products: Array<Product>;

  public pageNumber = 1;

  public itemsOnPageNumber = 10;

  public maxPage = 1000;

  public mainCheckboxState = false;

  public selectedProducts: Array<Product>;

  public idList: Array<string> = [];

  public isDeleteOpened = false;

  public isModalOpened = false;

  public activeItem: ActiveItem;

  private activeIndex = -1;

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent): void {
    const isClickedInside = this.elRef.nativeElement.contains(event.target);
    if (!isClickedInside) {
      this.closeModal();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscKeydown(event: KeyboardEvent) {
    this.closeModal();
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res: ServerResponse) => {
      this.products = res.data;
      console.log(res);
      this.maxPage = Math.round(this.products.length / this.itemsOnPageNumber);
    });
  }

  ngDoCheck() {
    if (this.products.length)
      this.maxPage = Math.round(this.products.length / this.itemsOnPageNumber);
  }

  public incrementPage() {
    this.pageNumber < this.maxPage && this.pageNumber++;
  }

  public decrementPage() {
    this.pageNumber > 1 && this.pageNumber--;
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
    event.stopPropagation();
    this.isDeleteOpened = true;
    const currentItem = this.idList.findIndex((item) => item === id);
    console.log(currentItem);

    if (currentItem !== -1 && !event.target.checked) {
      this.idList.splice(currentItem, 1);
      console.log(this.idList);
      return;
    }

    this.idList.push(id);
    console.log(this.idList);
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
      this.products[this.activeIndex].brand.name = event.company;
      this.products[this.activeIndex].name = event.item;
      this.products[this.activeIndex].volume = event.volume;
      this.products[this.activeIndex].price = event.price;
    } else
      this.products.push({
        brand: { name: event.company },
        name: event.item,
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
