import {CoachInfoTopic} from "./coach-info-topic";


export interface CoachOverview {
  "id": string,
  "firstName": string,
  "lastName": string,
  "email": string,
  "topics": CoachInfoTopic[]
}
