import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {MatchingPasswordValidator} from "../validator/matching-password.validator";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, AfterViewInit {

  constructor(private materializeService: MaterializeService, private formBuilder: FormBuilder) { }
// , private validator: MatchingPasswordValidator

  registerUserForm = this.formBuilder.group({
    first_name: ['', [Validators.required, Validators.minLength(3)]],
    last_name: ['', [Validators.required, Validators.minLength(3)]],
    team: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],

      // email: ['', [Validators.required, Validators.pattern("^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$")]],
    password: ['', [ Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\\]).{8,32}$")]],
    repeat_password: ['', [Validators.required]]
  //  , this.validator.validate
  }
  )

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
