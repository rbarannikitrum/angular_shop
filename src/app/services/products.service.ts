import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerResponse } from '../dto/server-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3001';

  public getProducts() {
    return this.http.get<ServerResponse>(this.baseUrl + '/products');
  }
}
