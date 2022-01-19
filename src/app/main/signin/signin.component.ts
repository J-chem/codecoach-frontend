import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {SignInService} from "../../service/sign-in.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup = this.formBuilder.group({
    email: [``,[Validators.required]],
    password: [``,[Validators.required]],

  });

  constructor(private formBuilder: FormBuilder, private signInService: SignInService) { }

  ngOnInit(): void {
  }

  signIn(signInForm: FormGroup): void{
    this.signInService.signIn(signInForm).subscribe();
  }

}
