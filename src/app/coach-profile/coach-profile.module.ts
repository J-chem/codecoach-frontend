import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoachProfileComponent } from './my-coach-profile/my-coach-profile.component';
import {ProfileModule} from "../profile/profile.module";



@NgModule({
  declarations: [
    MyCoachProfileComponent
  ],
    imports: [
        CommonModule
    ]
})
export class CoachProfileModule { }
