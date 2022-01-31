import {Injectable} from "@angular/core";
import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {map, Observable, tap} from "rxjs";
import {UserService} from "../../service/user.service";

@Injectable({ providedIn: 'root' })
export class UniqueUserEmailValidator implements AsyncValidator {
  constructor(private userService: UserService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    console.log(`UniqueUserEmailValidator validate`);
    return this.userService.isUserEmailTaken(control.value).pipe(
      tap(isTaken => console.log(isTaken)),
      map(isTaken => (!isTaken ? { uniqueUserEmail: false } : null))
    );
  }
}
