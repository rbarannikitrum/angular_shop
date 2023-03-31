import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'https://1edb18d7-a3e5-4b2f-8b15-97ad3e779cf8.mock.pstmn.io/';

  public getProducts() {
    return this.http.get(this.baseUrl + 'products');
  }
}
