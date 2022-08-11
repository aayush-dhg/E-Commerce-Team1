import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  userDto: UserDto;
    
  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      username: new FormControl(''),
      password: new FormControl(''),
      balance: new FormControl('', [Validators.pattern(/^[0-9 ]+$/)]),
      securityQuestion: new FormControl(''),
      securityAnswer: new FormControl('')
    });
  }

  onFormSubmit(){
    this.userDto={
      name: this.signUpForm.value.name,
      role: this.signUpForm.value.role,
      securityAnswer: this.signUpForm.value.securityAnswer,
      securityQuestion: this.signUpForm.value.securityQuestion,
      encodedCredentials: btoa(this.signUpForm.value.username
        + '@%' + this.signUpForm.value.password)
    }
    //aGFycnkrPStwb3R0ZXI=
    console.log(this.userDto);

}

}
