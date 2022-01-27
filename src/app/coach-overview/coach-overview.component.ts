import { Component, OnInit } from '@angular/core';
import {Coach} from "../model/coach";
import {CoachOverviewService} from "../service/coach-overview.service";
import {Topic} from "../model/topic";
import {Level} from "../model/level";

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})
export class CoachOverviewComponent implements OnInit {
   coaches$!: Coach[];
   topics$!: Topic[];
   levels$!: Level[];
   i = 0;

  constructor(private coachOverviewService: CoachOverviewService) { }

  ngOnInit(): void {
    this.getAllCoaches();
    this.getAllTopics();
    this.getAllLevels()
  }

  getAllLevels(): void{
    this.coachOverviewService.getAllLevels().subscribe(levels => this.levels$ = levels);
  }

  getAllTopics(): void{
    this.coachOverviewService.getAllTopics().subscribe(topics => this.topics$ = topics);
  }

  getAllCoaches(): void {
    this.coachOverviewService.getAllCoaches().subscribe(coaches => this.coaches$ = coaches);
  }

}
