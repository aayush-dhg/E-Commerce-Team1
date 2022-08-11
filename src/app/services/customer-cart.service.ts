import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerCart } from '../models/customerCart.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerCartService {

  getCartApi: string;
  createCartApi: string;

  constructor(private http: HttpClient) {
    this.getCartApi = 'http://localhost:8283/customer/1/cart';
    this.createCartApi = 'http://localhost:8283/customer/1/cart';
  }

  getCart(): Observable<CustomerCart> {
    return this.http.get<CustomerCart>(this.getCartApi);
  }

  createCart(): Observable<any>{
    return this.http.get<any>(this.createCartApi);
  }
}
