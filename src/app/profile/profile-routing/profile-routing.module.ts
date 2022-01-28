import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from "@angular/router";
import {MyCoachProfileComponent} from "../../coach-profile/my-coach-profile/my-coach-profile.component";
import {ProfileMenuComponent} from "../profile-menu/profile-menu.component";

const routes: Routes = [
  { path: 'profile/coach', component: MyCoachProfileComponent},
  { path: 'profile', component: MyCoachProfileComponent}
];

@NgModule({
  declarations: [ProfileMenuComponent],
  imports: [
    CommonModule
  ]
})
export class ProfileRoutingModule { }
