import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {Observable} from "rxjs";
import {User} from "../../model/user";
import {KeycloakService} from "../../service/keycloak.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit, AfterViewInit {

  loggedInUser$!: Observable<string | null>;

  user?: User;

  something?: any;

  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService, private userService: UserService) { }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;

    setTimeout(() => this.keycloakService.sendSignal(), 1);
    console.log(localStorage.getItem('uuid'));

    // this.loggedInUser$.subscribe( result =>{
    //   this.something = result;
    //   console.log(result);
    //   if (result){
    //     this.user = this.userService.getUserById(localStorage.getItem('uuid'));
    //   }
    // });
    // this.loggedInUser$.subscribe(loggedInUser => {
    //   if (loggedInUser){
    //     this.userService.getLoggedInUser().subscribe(user => this.user = user)
    //   }
    // });
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
