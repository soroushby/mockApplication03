import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb : FormBuilder) { }
  signUpForm:any;
  ngOnInit() {
    this.signUpForm = this.fb.group({
      firstName:['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      birthDate:['',Validators.required],
      checkbox:['',Validators.required],

    })
    console.log(this.signUpForm);
  }

}
