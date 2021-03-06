import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {KeycloakService} from "../../service/keycloak.service";

@Component({
  selector: 'app-apply-become-a-coach',
  templateUrl: './apply-become-a-coach.component.html',
  styleUrls: ['./apply-become-a-coach.component.css']
})
export class ApplyBecomeACoachComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
  }

  apply(): void {
    let hasApplied = confirm("Do you really want to become a coach?");
    if(hasApplied){
      this.userService.updateUserToCoach().pipe(
        catchError(error => {
          console.log(error);
          alert('Something went wrong, please try again later.');
          return throwError(error);
        })
      ).subscribe(_ => {
        this.keycloakService.sendSignal();
        this.router.navigate(['profile']).then();
      });
    }
  }

}
