import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories:Category[] = [];
  role: string;

  constructor() { }

  ngOnInit(): void {
    this.role = localStorage.getItem("role");
  }

}
