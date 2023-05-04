import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseInfoService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3001';

  public getBaseInfo(route: string) {
    return this.http.get<any>(this.baseUrl + route);
  }
}
