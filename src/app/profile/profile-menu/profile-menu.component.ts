import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {Observable, Subscription} from "rxjs";
import {User} from "../../model/user";
import {KeycloakService} from "../../service/keycloak.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit, AfterViewInit, OnDestroy {

  loggedInUser$!: Observable<string | null>;
  loggedInSubscription?: Subscription;

  user?: User;

  something?: any;

  location?: string;

  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService, private userService: UserService) { }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;

    setTimeout(() => this.keycloakService.sendSignal(), 1);
    this.location = window.location.pathname;
    console.log('Profile menu init');
    this.loggedInSubscription = this.loggedInUser$.subscribe(loggedInUser => {
      if (loggedInUser){
        this.userService.getLoggedInUser().subscribe(user => {
          console.log(user);
          this.user = user;
        });
      }
    });
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

  ngOnDestroy(): void {
    console.log('Profile menu is destroyed');
    this.loggedInSubscription?.unsubscribe();
  }

}
