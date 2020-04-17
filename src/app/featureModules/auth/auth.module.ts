import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from 'src/app/signup/signup.component';
import { LoginComponent } from 'src/app/login/login.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SignupComponent,
     LoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "signup", component: SignupComponent },
      { path: "login", component: LoginComponent },
    ]),
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
