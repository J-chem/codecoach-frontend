import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyBecomeACoachComponent } from './apply-become-a-coach/apply-become-a-coach.component';
import {RouterModule} from "@angular/router";
import {CoacheeProfileRoutingModule} from "./coachee-profile-routing.module";
import { MyProfileComponent } from './my-profile/my-profile.component';
import { EditMyProfileComponent } from './edit-my-profile/edit-my-profile.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ApplyBecomeACoachComponent,
    MyProfileComponent,
    EditMyProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoacheeProfileRoutingModule,
    ReactiveFormsModule
  ]
})
export class CoacheeProfileModule { }
