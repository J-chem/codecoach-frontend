import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterFormComponent} from './register-form/register-form.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    RegisterFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class RegisterUserModule {
}
