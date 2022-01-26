import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestSessionRoutingModule } from './request-session-routing.module';
import { RequestSessionFormComponent } from './request-session-form/request-session-form.component';


@NgModule({
  declarations: [
    RequestSessionFormComponent
  ],
  imports: [
    CommonModule,
    RequestSessionRoutingModule
  ]
})
export class RequestSessionModule { }
