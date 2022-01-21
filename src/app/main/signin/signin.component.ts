import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {KeycloakService} from "../../service/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup = this.formBuilder.group({
    email: 'najima@dwaynians.com',
    password: 'password'
  });

  constructor(private formBuilder: FormBuilder, private keycloakService: KeycloakService, private route: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(signInData: any): void {
    this.keycloakService.logIn(signInData).subscribe();
    this.route.navigate(['profile']).then();
  }

}
