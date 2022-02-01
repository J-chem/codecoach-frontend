import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {mergeMap, Observable, of, Subscription} from "rxjs";
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

  user$?: Observable<User | null> ;

  something?: any;

  location?: string;

  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService, private userService: UserService) { }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;

     this.keycloakService.sendSignal()

    this.location = window.location.pathname;
    this.user$ = this.loggedInUser$.pipe(mergeMap((loggedInUser) => {
      if (loggedInUser){
        return this.userService.getLoggedInUser()
      }
      return of(null);
    }));
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

  ngOnDestroy(): void {
    this.loggedInSubscription?.unsubscribe();
  }

}
