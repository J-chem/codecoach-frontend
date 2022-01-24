import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {KeycloakService} from "../../service/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errorMessage: string = "Password and username are required";
  isError: boolean = false;

  signInForm: FormGroup = this.formBuilder.group({
    email: ['najima@dwaynians.com', [Validators.required]],
    password: ['password', [Validators.required]]
  });

  get controls(): any {
    return this.signInForm.controls;
  }

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
          this.isError = true;
          this.errorMessage = 'The username and password doesn\'t match';
        }
      })
    );
    // this.route.navigate(['profile']).then();
  }

}
