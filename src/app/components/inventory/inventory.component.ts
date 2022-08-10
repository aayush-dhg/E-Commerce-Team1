import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

import { VendorService } from '../../services/vendor.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventory:Product[] = [];
  addProductForm: FormGroup;

  constructor(private vendorService: VendorService) { }

  ngOnInit(): void {

    sessionStorage.setItem("vendorId", "3");  //TODO assign vendorId dynamically on login
    this.vendorService.getInventory(parseInt(sessionStorage.getItem("vendorId")!)).subscribe((products) => {
      this.inventory = products;
    });

    this.addProductForm = new FormGroup({
      productName: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(''),
      vendorId: new FormControl(''),
    });
  }

  addProduct(): void{
    this.vendorService.addProduct(this.addProductForm).subscribe(() => {
      this.inventory.push(this.addProductForm.value);
    })
  }

  editProduct(product:Product): void{
    this.vendorService.editProduct(product).subscribe(() => {
    })
  }

  deleteProduct(productId:String): void{
    this.vendorService.deleteProduct(productId).subscribe(() => {
      this.inventory = this.inventory.filter(p => p.id !== productId );
    })
  }

}
