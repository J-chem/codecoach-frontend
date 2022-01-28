import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {Observable} from "rxjs";
import {User} from "../../model/User";
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

  constructor(private materializeService: MaterializeService, private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    console.log("hello1");
    this.loggedInUser$ = this.keycloakService.loggedInUser$;
    console.log('hello2');
    console.log(this.loggedInUser$);
    setTimeout(() => this.keycloakService.sendSignal(), 1);
    console.log(("hello3"));
    // this.loggedInUser$.subscribe( result =>{
    //   this.something = result;
    //   console.log(result);
    //   if (result){
    //     this.userService.getUserById().subscribe(user => this.user = user)
    //   }
    // });
    // this.loggedInUser$.subscribe(loggedInUser => {
    //   if (loggedInUser){
    //     this.userService.getUserById().subscribe(user => this.user = user)
    //   }
    // });
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
