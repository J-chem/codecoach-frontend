import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RequestSessionFormComponent} from './request-session-form/request-session-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RequestSessionFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RequestSessionModule {
}
