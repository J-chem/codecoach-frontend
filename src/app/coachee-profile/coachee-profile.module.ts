import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyBecomeACoachComponent } from './apply-become-a-coach/apply-become-a-coach.component';
import {RouterModule} from "@angular/router";
import {CoacheeProfileRoutingModule} from "./coachee-profile-routing.module";

@NgModule({
  declarations: [
    ApplyBecomeACoachComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoacheeProfileRoutingModule
  ]
})
export class CoacheeProfileModule { }
