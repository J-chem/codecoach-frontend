import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainEnComponent } from './main-en/main-en.component';
import { SigninComponent } from './signin/signin.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MainEnComponent,
    SigninComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class MainModule { }
