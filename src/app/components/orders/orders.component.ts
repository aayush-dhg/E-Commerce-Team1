import { Component, OnInit } from '@angular/core';
import { Orders } from 'src/app/models/orders.model';
import { VendorService } from 'src/app/services/vendor.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Orders[] = [];
  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    //get inventory
    sessionStorage.setItem("vendorId", "3");  //TODO assign vendorId dynamically on login
    this.vendorService.getOrderHistory(parseInt(sessionStorage.getItem("vendorId")!)).subscribe((orders) => {
      this.orders = orders;
    });
  }

}
