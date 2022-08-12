import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { FormGroup } from '@angular/forms';
import { Orders } from '../models/orders.model';
import { Vendor } from '../models/vendor.model';

const httpOptions = {
  headers: 
    new HttpHeaders({
      'Content-Type': 'application/json',
    }),
};

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private apiUrl = 'http://localhost:8282';

  constructor(private http: HttpClient) { }

  updateVendor(vendor:Vendor):Observable<void>{
    return this.http.put<void>(`${this.apiUrl}/vendor/${vendor.id}`, vendor, httpOptions);
  }

  getVendorById(vendorId:number):Observable<Vendor>{
    return this.http.get<Vendor>(`${this.apiUrl}/vendor/${vendorId}`);
  }

  getInventory(vendorId:number, filterBy?:string, queryParam?:string): Observable<Product[]>{
    let url:string = (filterBy == undefined && queryParam == undefined) ? `${this.apiUrl}/vendor/${vendorId}/inventory`
      : `${this.apiUrl}/vendor/${vendorId}/inventory?filterBy=${filterBy}&queryParam=${queryParam}`;
    return this.http.get<Product[]>(url);
  }

  getOrderHistory(vendorId:number): Observable<Orders[]>{
    return this.http.get<Orders[]>(`${this.apiUrl}/orders/vendor/${vendorId}`);
  }

  addProduct(product:Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/products`, product, httpOptions);
  }

  editProduct(product:Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/products/${product.id}`, product, httpOptions);
  }

  deleteProduct(productId:number): Observable<Product>{
    return this.http.delete<Product>(`${this.apiUrl}/products/${productId}`);
  }
}
