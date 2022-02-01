import {Component, OnInit} from '@angular/core';
import {CoachOverviewService} from "../service/coach-overview.service";
import {Expertise} from "../model/expertise";
import {FormBuilder} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {Topic} from "../model/topic";
import {User} from "../model/user";
import {TopicsFilterPipe} from "../pipe/topics-filter.pipe";

@Component({
  selector: 'app-coach-overview',
  templateUrl: './coach-overview.component.html',
  styleUrls: ['./coach-overview.component.css']
})

export class CoachOverviewComponent implements OnInit {

  topicForm = this.formBuilder.group({
    topicControl: ''
  });
  levelForm = this.formBuilder.group({
    levelControl: ''
  });
  coaches$!: User[];
  topics$!: Observable<Topic[]>;
  levels$!: Observable<Expertise[]>;
  nameEmail!: string;
  topicChecker!: string;
  expertiseChecker!: string;
  something!: string;


  constructor(
    private coachOverviewService: CoachOverviewService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.getAllCoaches();
    this.getAllTopics();
    this.getAllLevels()
  }

  getAllLevels(): void {
    this.levels$ = this.coachOverviewService.getAllLevels().pipe(tap(() => {
      setTimeout(() => {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
      })}))
  }

  getAllTopics(): void {
    this.topics$ = this.coachOverviewService.getAllTopics().pipe(tap(() => {
      setTimeout(() => {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
      })}))
  }

  topicCheckerFilter(){
    this.topicChecker = "topics";
  }

  getAllCoaches(): void {
    this.coachOverviewService.getAllCoaches().subscribe(coaches => {
      this.coaches$ = coaches
      if (this.topicChecker !== undefined){
        this.coaches$ = coaches
      }
    });
  }

  weregoingtosendthetopic(topic: Topic) {
    this.something = topic.topicName;
    console.log(this.something);
  }
}
