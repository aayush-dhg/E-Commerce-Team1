import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerCart } from '../models/customerCart.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerCartService {

  getCartApi: string;
  createCartApi: string;
  deleteProductApi: string;

  constructor(private http: HttpClient) {
    this.getCartApi = environment.serverUrl+'/customer/cart/1';
    this.createCartApi = environment.serverUrl+'/customer/cart/1';
    this.deleteProductApi = environment.serverUrl+'/customer/cart/delete/1/'
  }

  createCart(): Observable<any>{
    return this.http.get<any>(this.createCartApi);
  }

  getCart(): Observable<CustomerCart> {
    return this.http.get<CustomerCart>(this.getCartApi);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.put<any>(this.deleteProductApi + id,'');
  }
}
