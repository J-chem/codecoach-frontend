import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {NavigationEnd, Router} from "@angular/router";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {KeycloakService} from "../../service/keycloak.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  loggedInUser$!: Observable<string | null>;
  location?: string;

  constructor(
    private materializeService: MaterializeService,
    private router: Router,
    private keycloakService: KeycloakService
  ) { }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;

    this.router.events.subscribe(result => {
      if(result instanceof NavigationEnd){
        this.location = window.location.pathname;
      }
    })
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
