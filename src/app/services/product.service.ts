import { HttpClient } from '@angular/common/http';
import { Injectable, ɵɵstylePropInterpolate1 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product, Stat } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  
  postApi: string;
  getAllApi: string;
  getStatsApi: string;


  product$ = new BehaviorSubject<Product[]>([]);
  page$ = new BehaviorSubject<number>(0);
  stat$ = new BehaviorSubject<Boolean>(false);
 


  constructor(private http:HttpClient ) { 
    this.postApi = "http://localhost:8282/products";
    this.getAllApi = "http://localhost:8282/products";
    this.getStatsApi = "http://localhost:8282/products";
    }

  public postProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(this.postApi, product);
  }

  getAllProducts(page : number, size: number): Observable<Product[]>{
    return this.http.get<Product[]>
    (this.getAllApi + '?page='+ page + '&size=' + size);
  }
  getProductStats():Observable<Stat[]>{
    return this.http.get<Stat[]>(this.getStatsApi);
  }

  public sortPrice(product: Product[], flag:number): Product[] {
    if(flag == 1)
     product = product.sort((p1, p2) => p1.price - p2.price);
    else
     product= product.sort((p1, p2) => p2.price - p2.price);
     return product;
 }
}
