import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyBecomeACoachComponent } from './apply-become-a-coach/apply-become-a-coach.component';
import {RouterModule} from "@angular/router";
import {CoacheeProfileRoutingModule} from "./coachee-profile-routing.module";
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    ApplyBecomeACoachComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoacheeProfileRoutingModule
  ]
})
export class CoacheeProfileModule { }
