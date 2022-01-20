import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SignInService} from "../../service/sign-in.service";
import {Subscribable, Subscription} from "rxjs";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  jwtToken!: Subscription;

  signInForm: FormGroup = this.formBuilder.group({
    email:'najima@dwaynians.com',
    password: 'password'
  });

  constructor(private formBuilder: FormBuilder, private signInService: SignInService) { }

  ngOnInit(): void {
  }

  onSubmit(signInData: any): void{
    this.signInService.signIn(signInData).subscribe()
  }

}
