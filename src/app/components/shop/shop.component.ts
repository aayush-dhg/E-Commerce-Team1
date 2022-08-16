import { Component, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CustomerCartService } from 'src/app/services/customer-cart.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit, OnDestroy {


  product: Product[];
  page: number;
  size: number;
  subscriptions: Subscription[];


  constructor(private productService: ProductService,
    private cartService: CustomerCartService,
  ) {

  }

  ngOnInit(): void {
    this.subscriptions = [];
    this.size = 6;
    this.subscriptions.push(
      this.productService.page$.subscribe(value => {
        this.page = value;
        this.productService.getAllProducts(this.page, this.size)
          .subscribe({
            next: (data) => {
              this.product = data;
              this.productService.product$.next(this.product);
              // check if the products is being called or not
              console.log(data);
            },
            error: (e) => {
              //redirect to error page
            }
          });
      })
    );
  }

  sortPrice(flag: number): void {
    this.productService.sortPrice(this.product, flag);
  }
  sortDefault(flag: number): void {
    this.productService.sortDefault(this.product, flag);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }


  createCart(): void {
    this.cartService.createCart().subscribe(() => { });
  }

  addToCart(): void {
    this.cartService.addToCart().subscribe(() => { });
  }
  prev() {
    //read the value of page from subject

    let page = this.productService.page$.getValue();
    //update the value of page
    if (page > 0) {
      this.page = page - 1;
      //attach the updated value to the subject
      this.productService.page$.next(this.page);
    }
  }

  next() {
    //read the value of page from subject
    let page = this.productService.page$.getValue();
    //update the value of page
    this.page = page + 1;
    //attach the updated value to the subject
    this.productService.page$.next(this.page);
  }
}
