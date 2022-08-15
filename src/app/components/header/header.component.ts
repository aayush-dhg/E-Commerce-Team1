import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories:Category[] = [];
  username: string;
  role: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.username$.subscribe(data=>{
      this.username = data;
     console.log(this.username);
   })
    this.role = localStorage.getItem("role");
  }

}
