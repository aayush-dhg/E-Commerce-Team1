import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';
import { FormGroup } from '@angular/forms';

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

  getInventory(vendorId:number): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/vendor/${vendorId}/inventory`);
  }

  addProduct(form:FormGroup): Observable<Product>{
    const product:Product = {
      productName: form.value.productName,
      price: form.value.price,
      quantity: form.value.quantity,
      vendorId: 3
    }
    return this.http.post<Product>(`${this.apiUrl}/products`, product, httpOptions);
  }

  editProduct(product:Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/products/${product.id}`, product, httpOptions);
  }

  deleteProduct(productId:String): Observable<Product>{
    return this.http.delete<Product>(`${this.apiUrl}/products/${productId}`);
  }
}
