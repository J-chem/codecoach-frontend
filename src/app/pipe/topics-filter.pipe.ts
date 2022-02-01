import {Input, Pipe, PipeTransform} from '@angular/core';
import {User} from "../model/user";

@Pipe({
  name: 'topicsFilter'
})
export class TopicsFilterPipe implements PipeTransform {

  transform(coaches: User[], topicFilter: string): User[] {
    if (topicFilter === undefined || topicFilter === "") {
      return coaches;
    }
    let coachArray: User[] = [];
    if (topicFilter !== "") {
      for (let coach of coaches) {
        for (let coachInfoTopic of coach.coachInfo.coachInfoTopicList) {
          if (coachInfoTopic.topic.topicName.toLowerCase().startsWith(topicFilter.toLowerCase())) {
            coachArray.push(coach);
          }
        }
      }
    }
    return coachArray;
  }

}
