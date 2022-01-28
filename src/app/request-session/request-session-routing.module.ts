import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RequestSessionFormComponent} from "./request-session-form/request-session-form.component";

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestSessionRoutingModule { }
