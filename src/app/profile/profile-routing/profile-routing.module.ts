import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from "@angular/router";
import {MyCoachProfileComponent} from "../../coach-profile/my-coach-profile/my-coach-profile.component";

const routes: Routes = [
  { path: 'profile/coach', component: MyCoachProfileComponent},
  { path: 'profile', component: MyCoachProfileComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProfileRoutingModule { }
