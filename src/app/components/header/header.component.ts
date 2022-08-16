import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CustomerCart } from 'src/app/models/customerCart.model';
import { CustomerCartService } from 'src/app/services/customer-cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  role: string;
  categories:Category[] = [];
  cart:CustomerCart[] = [];
  constructor(
    private cartService:CustomerCartService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.username$.subscribe(data=>{
      this.username = data;
      console.log(this.username);
    })
    this.role = localStorage.getItem("role");
    this.cartService.getCart(13).subscribe({
      next: (data)=>{
        this.cartService.customerCart$.next(data);
        this.cart = this.cartService.customerCart$.getValue();
      },
      error: (data)=>{
        console.log(data);
      }
    })
    this.cart = this.cartService.customerCart$.getValue();
  }

  removeItem(pid:number):void{
    this.cartService.deleteProduct(13, pid).subscribe({
      next: (data)=>{
        this.cart = this.cart.filter(c => c != data);
        this.cartService.customerCart$.next(this.cart);
      },
      error: (data)=>{
        console.log(data);
      }
    });
  }

  getCartTotal():void{}

}
