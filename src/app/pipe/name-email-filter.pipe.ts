import {Pipe, PipeTransform} from '@angular/core';
import {User} from "../model/user";

@Pipe({
  name: 'nameEmailFilter'
})
export class NameEmailFilterPipe implements PipeTransform {

  transform(coaches: User[], nameEmails: string): User[] {
    console.log(nameEmails);
    if (nameEmails === undefined || nameEmails.length < 3) {
      return coaches;
    }

    let result: User[] = [];

    if (nameEmails.length >= 3) {
      result = coaches.filter(coach => coach.firstName.toLowerCase().startsWith(nameEmails.toLowerCase()) ||
        coach.lastName.toLowerCase().startsWith(nameEmails.toLowerCase()) ||
        coach.email.toLowerCase().startsWith(nameEmails.toLowerCase()));
    }

    return result;
  }

}
