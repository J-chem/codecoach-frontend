import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {matchingPasswordDirective} from "../validator/matching-password.directive";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, AfterViewInit {

  constructor(private materializeService: MaterializeService) {
  }

  registerUserForm = new FormGroup({
    'first_name': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'last_name': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'team': new FormControl('', [Validators.required, Validators.minLength(2)]),
    'email': new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
    )]),
    'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$")]),
    'repeat_password': new FormControl('', [Validators.required])
  }, {validators: matchingPasswordDirective});


  get first_name(): FormControl {
    return this.registerUserForm!.get('first_name') as FormControl;
  }

  get last_name(): FormControl {
    return this.registerUserForm!.get('last_name') as FormControl;
  }

  get team(): FormControl {
    return this.registerUserForm!.get('team') as FormControl;
  }

  get email(): FormControl {
    return this.registerUserForm!.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerUserForm!.get('password') as FormControl;
  }

  get repeat_password(): FormControl {
    return this.registerUserForm!.get('repeat_password') as FormControl;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.materializeService.autoInit();
  }

}
