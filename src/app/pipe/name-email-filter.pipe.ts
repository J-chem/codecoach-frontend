import {Pipe, PipeTransform} from '@angular/core';
import {User} from "../model/user";

@Pipe({
  name: 'nameEmailFilter'
})
export class NameEmailFilterPipe implements PipeTransform {

  transform(coaches: User[], nameEmails: string): User[] {
    console.log(nameEmails);
    if (nameEmails === undefined) {
      return coaches;
    }
    return coaches.filter(coach => coach.firstName.toLowerCase().startsWith(nameEmails.toLowerCase()) ||
      coach.lastName.toLowerCase().startsWith(nameEmails.toLowerCase()) ||
      coach.email.toLowerCase().startsWith(nameEmails.toLowerCase()));
  }

}
