/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  public products$ = this.productsService.getProducts();

  ngOnInit(): void {
    this.products$.subscribe((res) => console.log(res));
  }
}
