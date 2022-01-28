import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {MainModule} from "./main/main.module";
import { CoacheeProfileModule } from './coachee-profile/coachee-profile.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthenticationInterceptor} from "./interceptor/authentication.interceptor";
import {RegisterUserModule} from "./register-user/register-user.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoachProfileModule} from "./coach-profile/coach-profile.module";
import {ProfileMenuComponent} from "./profile/profile-menu/profile-menu.component";
import {ProfileModule} from "./profile/profile.module";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MainModule,
    HttpClientModule,
    RegisterUserModule,
    FormsModule,
    ReactiveFormsModule,
    CoacheeProfileModule,
    CoachProfileModule,
    ProfileModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule{}
