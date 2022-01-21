import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainEnComponent} from "./main/main-en/main-en.component";
import {RegisterFormComponent} from "./register-user/register-form/register-form.component";

const routes: Routes = [
  { path: '', component: MainEnComponent},
  { path: 'register', component: RegisterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
