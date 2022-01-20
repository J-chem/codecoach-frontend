import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form/register-form.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatchingPasswordValidator} from "./validator/matching-password.validator";



@NgModule({
  declarations: [
    RegisterFormComponent,
    MatchingPasswordValidator
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ]
})
export class RegisterUserModule { }
