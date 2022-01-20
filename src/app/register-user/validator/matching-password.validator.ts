import {Attribute, Directive} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Directive({
  selector: '[customValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: MatchingPasswordValidator, multi: true}]
})
export class MatchingPasswordValidator implements Validator {
  // validate(control: AbstractControl): ValidationErrors|null {
  //   return {'custom': true};
  // }

  constructor(@Attribute('validateEqual') public validateEqual: string) {
  }

  validate(control: AbstractControl):  { [key: string]: any}{
    let repeat_password = control.value;

    let password = control.root.get(this.validateEqual);

    if (password && repeat_password !== password.value) return{
      validateEqual: false
    }

    return {
      validateEqual: true
    };
  }


}
