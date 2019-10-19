import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  signup() {
    console.log('submit');
  }
}
