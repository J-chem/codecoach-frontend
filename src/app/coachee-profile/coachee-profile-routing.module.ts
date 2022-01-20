import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileMenuComponent} from "./profile-menu/profile-menu.component";
import {ApplyBecomeACoachComponent} from "./apply-become-a-coach/apply-become-a-coach.component";

const routes: Routes = [
  {
    path: 'profile', component: ProfileMenuComponent, children: [
      {path: 'become-a-coach', component: ApplyBecomeACoachComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoacheeProfileRoutingModule {
}
