import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export const matchingPasswordDirective: ValidatorFn = (
  control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const repeatPassword = control.get('repeat_password');

  return password && repeatPassword && password.value !== repeatPassword.value ? {
    notMatchingPassword: true} : null;
  };

