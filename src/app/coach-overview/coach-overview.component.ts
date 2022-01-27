import { Component, OnInit } from '@angular/core';
import {CoachOverview} from "../model/coach-overview";
import {CoachOverviewService} from "../service/coach-overview.service";

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {
   _coaches$!: CoachOverview[];

  constructor(private coachOverviewService: CoachOverviewService) { }


  // get coaches$(): CoachOverview[] {
  //   return this._coaches$;
  // }

  ngOnInit(): void {
    this.getAllCoaches();
  }

  getAllCoaches(): void {
    this.coachOverviewService.getAllCoaches().subscribe(coaches => this._coaches$ = coaches);
  }

}
