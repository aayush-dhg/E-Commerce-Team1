import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { Vendor } from 'src/app/models/vendor.model';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  vendor:Vendor;
  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {
    sessionStorage.setItem("vendorId", "3");
    this.vendorService.getVendorById(+sessionStorage.getItem("vendorId")!).subscribe((vendor)=>{
      this.vendor = {
        vendorName: vendor.vendorName,
        password: vendor.password,
        balance: vendor.balance
      }
      $('#name').val(vendor.vendorName);
      $('#username').val(vendor.vendorName);
      $('#password').val(vendor.password);
      $('#balance').val(vendor.balance);
    })
  }

  updateAccount():void{
    this.vendor = {
      id: +sessionStorage.getItem("vendorId")!,
      vendorName: <string>$('#name').val(),
      password: <string>$('#password').val(),
      balance: <number>$('#balance').val()
    }
    this.vendorService.updateVendor(this.vendor).subscribe(()=>{})
  }

}
