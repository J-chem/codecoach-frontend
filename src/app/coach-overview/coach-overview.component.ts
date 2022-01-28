import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Coach} from "../model/coach";
import {CoachOverviewService} from "../service/coach-overview.service";
import {Level} from "../model/level";
import {TopicWithId} from "../model/topic-with-id";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {MaterializeService} from "../service/materialize.service";

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
  coaches$!: Coach[];

  topics$!: Observable<TopicWithId[]>;
  levels$!: Observable<Level[]>;


  constructor(
    private coachOverviewService: CoachOverviewService,
    private formBuilder: FormBuilder,
    private materializeService: MaterializeService
  ) {
  }

  ngOnInit(): void {
    this.getAllCoaches();
    this.getAllTopics();
    this.getAllLevels();

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

  getAllCoaches(): void {
    this.coachOverviewService.getAllCoaches().subscribe(coaches => this.coaches$ = coaches);
  }

  onSubmit() {
    alert(JSON.stringify(this.topicForm.value))
    alert(JSON.stringify(this.levelForm.value))
  }
}
