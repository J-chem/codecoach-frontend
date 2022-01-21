import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SignInService} from "../../service/sign-in.service";
import {Subscribable, Subscription} from "rxjs";
import {KeycloakTokenResponse} from "../../keycloak/keycloak-token-response";
import {KeycloakService} from "../../service/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  jwtToken!: any;

  signInForm: FormGroup = this.formBuilder.group({
    email:'najima@dwaynians.com',
    password: 'password'
  });

  constructor(private formBuilder: FormBuilder, private keycloakService: KeycloakService, private route: Router) { }

  ngOnInit(): void {
  }

  onSubmit(signInData: any): void{
    this.keycloakService.logIn(signInData).subscribe();
    this.route.navigate(['profile']).then();
  }

}
