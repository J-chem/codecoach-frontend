import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {KeycloakService} from "../../service/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage!: string;

  signInForm: FormGroup = this.formBuilder.group({
    email: ['najima@dwaynians.com', [Validators.required]],
    password: ['password', [Validators.required]]
  });

  constructor(
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
          this.errorMessage = 'The username and password doesn\'t match';
        }
      })
    );
    // this.route.navigate(['profile']).then();
  }

}
