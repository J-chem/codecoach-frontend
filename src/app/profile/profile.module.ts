import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserProfileComponent} from './user-profile/user-profile.component';


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
