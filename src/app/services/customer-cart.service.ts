import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerCart } from '../models/customerCart.model';
import { Product } from '../models/product.model';

const httpOptions = {
  headers: 
    new HttpHeaders({
      'Content-Type': 'application/json',
    }),
};

@Injectable({
  providedIn: 'root'
})
export class CustomerCartService {

  products$ = new BehaviorSubject<Product[]>([]);
  totalPrice$ = new BehaviorSubject<number>(0);
  getCartApi: string;
  createCartApi: string;
  deleteProductApi: string;
  addToCartApi: string;

  constructor(private http: HttpClient) {
    this.getCartApi = environment.serverUrl+'/customer/cart/1';
    this.createCartApi = environment.serverUrl+'/customer/cart/2';
    this.deleteProductApi = environment.serverUrl+'/customer/cart/delete/1/'
    this.addToCartApi = environment.serverUrl+'/customer/cart/2/5'
  }

  createCart(): Observable<any>{
    let customerCart ={}
    return this.http.post<any>(this.createCartApi, customerCart, httpOptions);
  }

  getCart(): Observable<CustomerCart> {
    return this.http.get<CustomerCart>(this.getCartApi);
  }

  deleteProduct(id: number): Observable<any>{
    return this.http.put<any>(this.deleteProductApi + id,'');
  }

  addToCart():Observable<Product>{
    return this.http.put<Product>(this.addToCartApi, "");
  }
}
