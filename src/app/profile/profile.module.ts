import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {ProfileMenuComponent} from "./profile-menu/profile-menu.component";



@NgModule({
  declarations: [
    UserProfileComponent,
    ProfileMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfileModule { }
