import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class TradingService {

  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient, private token: TokenService) { }

  addTrading(data) {
    const requstOption = this.token.getRequestHeader()
    return this.http.post(`${this.baseUrl}/trading`, data, requstOption);
  }

  getTradingByDate(date) {
    const requstOption = this.token.getRequestHeader()
    return <any>this.http.get(`${this.baseUrl}/trading/${date}`, requstOption);
  }

  getTradingData() {
    const requstOption = this.token.getRequestHeader()
    return <any>this.http.get(`${this.baseUrl}/trading`, requstOption);
  }
}
