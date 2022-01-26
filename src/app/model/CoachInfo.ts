import {CoachInfoTopic} from "./CoachInfoTopic";

export interface CoachInfo {
  "introduction": string,
  "availability": string,
  "coachInfoTopicDtoList": CoachInfoTopic[]
}
