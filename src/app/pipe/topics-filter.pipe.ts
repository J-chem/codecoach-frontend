import {Input, Pipe, PipeTransform} from '@angular/core';
import {User} from "../model/user";

@Pipe({
  name: 'topicsFilter'
})
export class TopicsFilterPipe implements PipeTransform {

  @Input() test!: string;

  transform(values: any[], filter: string[]): any[] {
    if (filter === undefined) {
      return values;
    }
    return values.filter(value => filter.forEach(topic => topic.toLowerCase().startsWith(value.toLowerCase())));
  }

}
