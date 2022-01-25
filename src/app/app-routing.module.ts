import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainEnComponent} from "./main/main-en/main-en.component";
import {SigninComponent} from "./main/signin/signin.component";
import {RegisterFormComponent} from "./register-user/register-form/register-form.component";
import {MyCoachProfileComponent} from "./coach-profile/my-coach-profile/my-coach-profile.component";

const routes: Routes = [
  { path: '', component: MainEnComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'coach-profile', component: MyCoachProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
