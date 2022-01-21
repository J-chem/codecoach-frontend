import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {Observable} from "rxjs";
import {KeycloakService} from "../../service/keycloak.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  loggedInUser$!: Observable<string | null>;

  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;
    setTimeout(() => this.keycloakService.sendSignal(), 1);
  }

  logout() {
    this.keycloakService.logout();
    console.log('logged out');
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
