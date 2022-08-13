import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  postApi: string;
  getAllCustomersApi: string;
  getOneCustomerApi: string;

  constructor(private http: HttpClient) {
    this.postApi = environment.serverUrl + '/customer';
    this.getAllCustomersApi = environment.serverUrl + '/customers';
    this.getOneCustomerApi = environment.serverUrl + '/customer/';
  }

  postCustomer(c: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.postApi, c);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.getAllCustomersApi);
  }

  getOneCustomer(cid: number): Observable<Customer> {
    return this.http.get<Customer>(this.getOneCustomerApi + cid);
  }
}
