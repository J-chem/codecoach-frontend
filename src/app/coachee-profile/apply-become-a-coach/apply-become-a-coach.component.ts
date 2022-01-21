import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apply-become-a-coach',
  templateUrl: './apply-become-a-coach.component.html',
  styleUrls: ['./apply-become-a-coach.component.css']
})
export class ApplyBecomeACoachComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  apply(): void {
    let hasApplied = confirm("Do you really want to become a coach?");
    if(hasApplied){
      this.userService.updateUserToCoach();
      this.router.navigate(['profile']).then();
    }
  }

}
