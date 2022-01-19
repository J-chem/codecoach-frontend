import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainEnComponent} from "./main/main-en/main-en.component";

const routes: Routes = [
  { path: "", component: MainEnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
