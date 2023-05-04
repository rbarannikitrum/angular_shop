import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsInfoService {
  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:3002';

  public getBaseInfo(route: string) {
    return this.http.get<any>(this.baseUrl + route);
  }
}
