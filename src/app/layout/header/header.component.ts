import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {Observable} from "rxjs";
import {KeycloakService} from "../../service/keycloak.service";
import {User} from "../../model/User";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  loggedInUser$!: Observable<string | null>;

  user?: User;

  mySubscription: any;

  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;
    setTimeout(() => this.keycloakService.sendSignal(), 1);
    this.loggedInUser$.subscribe(_ => this.userService.getUserById().subscribe(user => this.user = user));
  }

  logout() {
    this.keycloakService.logout();
    console.log('logged out');
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
