import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainEnComponent} from "./main/main-en/main-en.component";
import {SigninComponent} from "./main/signin/signin.component";
import {RegisterFormComponent} from "./register-user/register-form/register-form.component";
import {CoachOverviewComponent} from "./coach-overview/coach-overview.component";
import {UserProfileComponent} from "./profile/user-profile/user-profile.component";
import {MyCoachProfileComponent} from "./coach-profile/my-coach-profile/my-coach-profile.component";
import {ApplyBecomeACoachComponent} from "./coachee-profile/apply-become-a-coach/apply-become-a-coach.component";

import {RequestSessionFormComponent} from "./request-session/request-session-form/request-session-form.component";

const routes: Routes = [
  {path: '', component: MainEnComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'find-a-coach', component: CoachOverviewComponent},
  {
    path: 'profile', component: UserProfileComponent, children: [
      {path: 'become-a-coach', component: ApplyBecomeACoachComponent},
      {path: 'coach', component: MyCoachProfileComponent}
    ]
  },
  {path: 'request-a-session/:id', component: RequestSessionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
