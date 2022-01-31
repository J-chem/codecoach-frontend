import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {Observable} from "rxjs";
import {KeycloakService} from "../../service/keycloak.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  loggedInUser$!: Observable<string | null>;

  user?: User;

  something?: any;

  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;
    setTimeout(() => this.keycloakService.sendSignal(), 1);
    // console.log(this.loggedInUser$);
    this.loggedInUser$.subscribe(result => this.something = result)
    console.log(this.something);
    // this.loggedInUser$.subscribe(loggedInUser => {
    //   if (loggedInUser){
    //     this.userService.getUserById().subscribe(user => this.user = user)
    //   }
    // });
  }

  logout() {
    this.keycloakService.logout();
    console.log('logged out');
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
