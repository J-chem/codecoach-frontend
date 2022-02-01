import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {RouterModule} from "@angular/router";
import {CoacheeProfileModule} from "../coachee-profile/coachee-profile.module";
import {ProfileMenuComponent} from "./profile-menu/profile-menu.component";
import {CoachProfileModule} from "../coach-profile/coach-profile.module";


@NgModule({
    declarations: [
        UserProfileComponent,
        ProfileMenuComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        CoacheeProfileModule,
      CoachProfileModule
    ]
})
export class ProfileModule { }
