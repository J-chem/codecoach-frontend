import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-apply-become-a-coach',
  templateUrl: './apply-become-a-coach.component.html',
  styleUrls: ['./apply-become-a-coach.component.css']
})
export class ApplyBecomeACoachComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  apply(): void {
    let hasApplied = confirm("Do you really want to become a coach?");

    if(hasApplied){
      //todo: create new coach & redirect to profile

    }
  }

}
