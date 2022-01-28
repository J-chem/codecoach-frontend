import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {KeycloakService} from "../../service/keycloak.service";
import {Router} from "@angular/router";
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage: string = "Password and username are required";
  isError: boolean = false;

  signInForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  get controls(): any {
    return this.signInForm.controls;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private formBuilder: FormBuilder,
    private keycloakService: KeycloakService,
    private route: Router) {
  }

  ngOnInit(): void {
  }

  onSubmit(signInData: any): void {
    this.keycloakService.logIn(signInData).subscribe((_ => {
        this.route.navigateByUrl('/profile').then();
      }),
      (fault => {
        if (fault.status === 401) {
          this.isError = true;
          this.errorMessage = 'The username and password doesn\'t match';
        }
      })
    );
  }

  redirect(): void {
    window.open("https://keycloak.switchfully.com/auth/realms/java-oct-2021/protocol/openid-connect/auth?client_id=account-console&redirect_uri=https%3A%2F%2Fkeycloak.switchfully.com%2Fauth%2Frealms%2Fjava-oct-2021%2Faccount%2F%23%2Fsecurity%2Fsigningin&state=07694915-1e09-430c-b000-993084d08ecf&response_mode=fragment&response_type=code&scope=openid&nonce=20c0bec7-c4b1-4b44-9de6-b5914422be53&code_challenge=Y5R5dxAq6x3vvfLd6_8Jveka5gCr2MrwNhFs8A4ssKw&code_challenge_method=S256", "_blank")
  }

}
