import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RouterModule} from "@angular/router";
import {CoachProfileModule} from "../coach-profile/coach-profile.module";
import {CoacheeProfileModule} from "../coachee-profile/coachee-profile.module";
import {ProfileMenuComponent} from "./profile-menu/profile-menu.component";


@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileMenuComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    CoachProfileModule,
    CoacheeProfileModule
  ]
})
export class ProfileModule { }
