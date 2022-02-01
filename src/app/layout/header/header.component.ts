import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {mergeMap, Observable, of} from "rxjs";
import {KeycloakService} from "../../service/keycloak.service";
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  loggedInUser$!: Observable<string | null>;

  user$?: Observable<User | null>;

  loggedUser?: User | null;

  location?: string | null;


  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService, private userService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;

    this.router.events.subscribe(result => {
      if(result instanceof NavigationEnd){
        this.location = window.location.pathname;
      }
    })

    this.user$ = this.loggedInUser$.pipe(mergeMap((loggedInUser) => {
      if (loggedInUser){
        return this.userService.getLoggedInUser()
      }
      return of(null);
    }));

    this.user$.subscribe(user => this.loggedUser = user);

  }

  logout() {
    this.keycloakService.logout();
    console.log('logged out');
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
