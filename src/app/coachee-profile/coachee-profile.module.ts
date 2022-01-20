import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { ApplyBecomeACoachComponent } from './apply-become-a-coach/apply-become-a-coach.component';
import {RouterModule} from "@angular/router";
import {CoacheeProfileRoutingModule} from "./coachee-profile-routing.module";

@NgModule({
  declarations: [
    ProfileMenuComponent,
    ApplyBecomeACoachComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoacheeProfileRoutingModule
  ]
})
export class CoacheeProfileModule { }
