import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoachProfileComponent } from './my-coach-profile/my-coach-profile.component';
import { CoachSessionOverviewComponent } from './coach-session-overview/coach-session-overview.component';



@NgModule({
  declarations: [
    MyCoachProfileComponent,
    CoachSessionOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoachProfileModule { }
