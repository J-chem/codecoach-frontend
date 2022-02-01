import {Component, OnInit} from '@angular/core';
import {SessionService} from "../../service/session.service";
import {Session} from "../../model/session";

@Component({
  selector: 'app-coach-session-overview',
  templateUrl: './coach-session-overview.component.html',
  styleUrls: ['./coach-session-overview.component.css']
})
export class CoachSessionOverviewComponent implements OnInit {

  sessions?: Session[];

  constructor(private sessionService : SessionService){ }

  ngOnInit(): void {
    this.getCoachSessions();
  }

  private getCoachSessions(): void {
    this.sessionService.getCoachSessions().subscribe(sessions => {
      console.log(sessions)
      this.sessions = sessions
    });

  }

}
