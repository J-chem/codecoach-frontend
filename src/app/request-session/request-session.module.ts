import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestSessionRoutingModule } from './request-session-routing.module';
import { RequestSessionFormComponent } from './request-session-form/request-session-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RequestSessionFormComponent
  ],
  imports: [
    CommonModule,
    RequestSessionRoutingModule,
    ReactiveFormsModule
  ]
})
export class RequestSessionModule { }
