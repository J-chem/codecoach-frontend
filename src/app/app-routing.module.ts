import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainEnComponent} from "./main/main-en/main-en.component";
import {SigninComponent} from "./main/signin/signin.component";

const routes: Routes = [
  { path: "", component: MainEnComponent},
  {path: "signin", component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
