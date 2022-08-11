import { Component, OnInit } from '@angular/core';
import { CustomerCart } from 'src/app/models/customerCart.model';
import { Product } from 'src/app/models/product.model';
import { CustomerCartService } from 'src/app/services/customer-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  customerCart: CustomerCart;
  products: Product[];

  constructor(private customerCartService: CustomerCartService) { }

  ngOnInit(): void {
    this.customerCartService.getCart().subscribe({
      next: (data) => {
        this.customerCart = data;
        this.products = this.customerCart.products;
      },
      error: (e) => {console.log("could not get customerCart :(")}
    });
  }

}
