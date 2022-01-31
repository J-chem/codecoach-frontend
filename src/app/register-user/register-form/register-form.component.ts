import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MaterializeService} from "../../service/materialize.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {matchingPasswordDirective} from "../validator/matching-password.directive";
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {UniqueUserEmailValidator} from "../validator/UniqueUserEmailValidator";


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, AfterViewInit {

  constructor(private materializeService: MaterializeService, private userService: UserService, private router: Router,
              private uniqueUserEmailValidator: UniqueUserEmailValidator) {
  }

  registerUserForm = new FormGroup({
    'firstName': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'lastName': new FormControl('', [Validators.required, Validators.minLength(3)]),
    'email': new FormControl('', {validators: [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
      asyncValidators: [this.uniqueUserEmailValidator.validate.bind(this.uniqueUserEmailValidator)], updateOn: 'blur'}),
    'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern("^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$")]),
    'team': new FormControl('', [Validators.minLength(2)]),
    'repeat_password': new FormControl('', [Validators.required])
  }, {validators: matchingPasswordDirective});


  get firstName(): FormControl {
    return this.registerUserForm!.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.registerUserForm!.get('lastName') as FormControl;
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

  onSubmit() {
    this.register();
  }

  register(){
    this.userService.register(this.registerUserForm.value).subscribe(user => {
      if(user) {
        this.router.navigate(['signin']).then();
      }
    });
  }
}
