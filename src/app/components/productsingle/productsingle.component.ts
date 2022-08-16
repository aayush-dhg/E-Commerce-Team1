import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { Subscription } from 'rxjs';
import { Product, SingleProduct } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {

  product : Product[];
  singleProduct: SingleProduct[];
  page: number;
  size: number;
  id: number;


  subscriptions: Subscription[];
  
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    
  }

}
