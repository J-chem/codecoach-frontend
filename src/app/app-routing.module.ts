import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainEnComponent} from "./main/main-en/main-en.component";
import {SigninComponent} from "./main/signin/signin.component";
import {RegisterFormComponent} from "./register-user/register-form/register-form.component";
import {UserProfileComponent} from "./profile/user-profile/user-profile.component";


const routes: Routes = [
  { path: '', component: MainEnComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
