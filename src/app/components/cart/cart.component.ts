import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
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
  customer: Customer;
  products: Product[];
  price: number;
  message: string;
  role: string;
  totalPrice: number;

  constructor(private customerCartService: CustomerCartService) { }

  ngOnInit(): void {
    this.message = '';
    this.totalPrice = 0;
    this.role = localStorage.getItem("role");

    this.customerCartService.getCart().subscribe({
      next: (data) => {
        for (var value of data){
          if (value.customer.id == +localStorage.getItem("id")){
            this.customerCart.push(value);
            this.totalPrice += value.totalPrice;
          }
        }       
      },
      error: (e) => { console.log('couldnt load cart') }
    });
  }

  onDeleteProduct(pid: number) {
    this.customerCartService.deleteProduct(pid).subscribe({
      next: (data) => {
        this.message = 'Product deleted.';
      },
      error: (e) => {console.log("could not delete product")}
    });
  }

  onCheckout(){
    
  }

}
