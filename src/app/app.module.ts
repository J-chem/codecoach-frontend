import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {MainModule} from "./main/main.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthenticationInterceptor} from "./interceptor/authentication.interceptor";
import {RegisterUserModule} from "./register-user/register-user.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RequestSessionModule } from './request-session/request-session.module';
import { CoachOverviewComponent } from './coach-overview/coach-overview.component';

import {ProfileModule} from "./profile/profile.module";
import { NameEmailFilterPipe } from './pipe/name-email-filter.pipe';
import { TopicsFilterPipe } from './pipe/topics-filter.pipe';
import { ExpertisesFilterPipe } from './pipe/expertises-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CoachOverviewComponent,
    NameEmailFilterPipe,
    TopicsFilterPipe,
    ExpertisesFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MainModule,
    HttpClientModule,
    RegisterUserModule,
    FormsModule,
    RequestSessionModule,
    ReactiveFormsModule,
    ProfileModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true

  }],
  bootstrap: [AppComponent]
})
export class AppModule{}
