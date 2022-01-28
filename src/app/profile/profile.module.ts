import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProfileModule { }
