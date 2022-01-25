import { Component, OnInit } from '@angular/core';
import {Coach} from "../model/coach";
import {CoachOverviewService} from "../service/coach-overview.service";

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {
   _coaches$!: Coach[];

  constructor(private coachOverviewService: CoachOverviewService) { }


  // get coaches$(): Coach[] {
  //   return this._coaches$;
  // }

  ngOnInit(): void {
    this.getAllCoaches();
  }

  getAllCoaches(): void {
    this.coachOverviewService.getAllCoaches().subscribe(coaches => this._coaches$ = coaches);
  }

}
