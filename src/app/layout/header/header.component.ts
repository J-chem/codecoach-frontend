import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {Observable} from "rxjs";
import {KeycloakService} from "../../service/keycloak.service";
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  loggedInUser$!: Observable<string | null>;

  user?: User;

  location?: string;


  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;
    setTimeout(() => this.keycloakService.sendSignal(), 1);
    this.location = window.location.pathname;

    console.log(this.loggedInUser$);
    this.loggedInUser$.subscribe(loggedInUser => {
      if (loggedInUser){
        this.userService.getLoggedInUser().subscribe(user => this.user = user)
      }
    });
  }

  logout() {
    this.keycloakService.logout();
    console.log('logged out');
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
