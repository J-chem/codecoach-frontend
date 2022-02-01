import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../model/user";

@Pipe({
  name: 'expertisesFilter'
})
export class ExpertisesFilterPipe implements PipeTransform {

  transform(coaches: User[], expertiseFilter: string[]): User[] {
    if (expertiseFilter === undefined || expertiseFilter.length === 0){
      return coaches;
    }
    let coachArray: User[] = []
      for (let expertise of expertiseFilter) {
        for (let coach of coaches) {
          for (let coachInfoTopic of coach.coachInfo.coachInfoTopicList) {
            if (coachInfoTopic.expertise.startsWith(expertise)) {
              if (!coachArray.includes(coach)){
                coachArray.push(coach);
              }
            }
          }
        }
      }
    return coachArray;
  }

}
