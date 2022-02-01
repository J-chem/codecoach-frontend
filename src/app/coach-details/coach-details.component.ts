import {Component, Input, OnInit} from '@angular/core';
import {User} from "../model/user";

@Component({
  selector: 'app-coach-details',
  templateUrl: './coach-details.component.html',
  styleUrls: ['./coach-details.component.css']
})
export class CoachDetailsComponent implements OnInit {

  @Input() receivingCoach$!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
