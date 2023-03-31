/* eslint-disable @angular-eslint/component-selector */
import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from 'src/app/dto/product.dto';
import { ServerResponse } from 'src/app/dto/server-response';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, DoCheck {
  constructor(private productsService: ProductsService) {}

  public products: Array<Product>;

  public pageNumber = 1;

  public itemsOnPageNumber = 10;

  public maxPage = 1000;

  public mainCheckboxState = false;

  public selectedProducts: Array<Product>;

  public idList: Array<string> = [];

  public isDeleteOpened = false;

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
}
