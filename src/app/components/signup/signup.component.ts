import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  customerForm: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      username: new FormControl(''),
      password: new FormControl(''),
      balance: new FormControl('', [Validators.pattern(/^[0-9 ]+$/)]),
      securityQuestion: new FormControl(''),
      securityAnswer: new FormControl('')
    });
  }

  onFormSubmit(){

  }

}
