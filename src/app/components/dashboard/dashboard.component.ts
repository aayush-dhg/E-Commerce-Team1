import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string;
  customer: Customer;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getOneCustomer(1).subscribe({
      next: (data) => {
        this.customer = data;
        this.name = this.customer.name;
      },
      error: (e) => {console.log("Could not load customer")}
    });
  }

}
