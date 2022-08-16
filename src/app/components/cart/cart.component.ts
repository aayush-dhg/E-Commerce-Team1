import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerCart } from 'src/app/models/customerCart.model';
import { Product } from 'src/app/models/product.model';
import { CustomerCartService } from 'src/app/services/customer-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  customerCart: CustomerCart[] = [];
  products: Product[];
  price: number;
  message: string;

  constructor(private customerCartService: CustomerCartService) { }

  ngOnInit(): void {
    this.message = '';
    this.customerCartService.getCart(13).subscribe({
      next: (data) => {
        this.customerCart = data;
        
        //this.customerCartService.products$.next(this.customerCart.products);
        this.customerCartService.products$.subscribe({
          next: (data) => {
            this.products = data;
          }
        })

       // this.customerCartService.totalPrice$.next(this.customerCart.totalPrice);
        this.customerCartService.totalPrice$.subscribe({
          next: (data) => {
            //this.customerCart.totalPrice = data;
          }
        })
        
      },
      error: (e) => { console.log("could not get customerCart :(") }
    });
  }

  onDeleteProduct(pid: number) {
    this.customerCartService.deleteProduct(13, pid).subscribe({
      next: (data) => {
        for(var value of this.products){
          if (value.id == pid){
            this.price = value.price;
            let index = this.products.indexOf(value);
            this.products.splice(index, 1);
          }
        }
        //this.customerCartService.totalPrice$.next(this.customerCart.totalPrice - this.price);
        this.customerCartService.products$.next(this.products);
        this.message = 'Product deleted.';
      },
      error: (e) => {console.log("could not delete product :(")}
    });
  }

}
