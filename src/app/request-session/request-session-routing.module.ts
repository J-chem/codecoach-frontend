import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RequestSessionFormComponent} from "./request-session-form/request-session-form.component";

const routes: Routes = [
  {path: 'request-a-session/:id', component: RequestSessionFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestSessionRoutingModule { }
