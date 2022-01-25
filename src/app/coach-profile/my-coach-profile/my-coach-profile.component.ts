import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";

@Component({
  selector: 'app-my-coach-profile',
  templateUrl: './my-coach-profile.component.html',
  styleUrls: ['./my-coach-profile.component.css']
})
export class MyCoachProfileComponent implements OnInit, AfterViewInit {

  constructor(private materializeService: MaterializeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.materializeService.autoInit();
  }

}
