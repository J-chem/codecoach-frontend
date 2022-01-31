import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {Observable} from "rxjs";
import {KeycloakService} from "../../service/keycloak.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  loggedInUser$!: Observable<string | null>;

  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;
    setTimeout(() => this.keycloakService.sendSignal(), 1);
    console.log(this.loggedInUser$);
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
