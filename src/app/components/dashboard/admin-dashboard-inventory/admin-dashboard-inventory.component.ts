import { Component, Injectable, OnInit } from '@angular/core';
import { ɵ$localize } from '@angular/localize';
import { ThemePalette } from '@angular/material/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subject, Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { Product } from 'src/app/models/product.model';
import { CustomerService } from 'src/app/services/customer.service';
import { ProductService } from 'src/app/services/product.service';
import { VendorService } from 'src/app/services/vendor.service';


@Component({
  selector: 'app-admin-dashboard-inventory',
  templateUrl: './admin-dashboard-inventory.component.html',
  styleUrls: ['./admin-dashboard-inventory.component.css']
})
export class AdminDashboardInventoryComponent implements OnInit {
  name: string;
  customer: Customer;
  product: Product[];
  page: number;
  size: number;
  subscriptions: Subscription[];
  ProductData: Product[];


  alertMessage: string;

  constructor(private customerService: CustomerService,
    private productService: ProductService,
    private vendorService: VendorService) { }

  ngOnInit(): void {
    this.subscriptions = [];
    this.size = 5;
    this.subscriptions.push(
      this.productService.page$.subscribe(value => {
        this.page = value;
        this.productService.getAllProducts(this.page, this.size)
          .subscribe({
            next: (data) => {
              this.product = data;
              this.productService.product$.next(this.product);
              // check if the products is being called or not
              //console.log(data);
            },
            error: (e) => {
              //redirect to error page
            }
          });
      })
    );
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
