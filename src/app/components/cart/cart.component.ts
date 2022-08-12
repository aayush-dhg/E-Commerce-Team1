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

  customerCart: CustomerCart;
  products: Product[];
  message: string;

  constructor(private customerCartService: CustomerCartService,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.customerCartService.getCart().subscribe({
      next: (data) => {
        this.customerCart = data;
        this.products = this.customerCart.products;
      },
      error: (e) => { console.log("could not get customerCart :(") }
    });
  }

  onDeleteProduct(id: number) {
    this.customerCartService.deleteProduct(id).subscribe({
      next: (data) => {
        //this.router.navigateByUrl('/cart');
        this.message = 'Product deleted. Please refresh page';
      },
      error: (e) => {console.log("could not delete product :(")}
    });
  }

}
