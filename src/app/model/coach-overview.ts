import {TopicWithExpertise} from "./topic-with-expertise";


export interface CoachOverview {
  "id": string,
  "firstName": string,
  "lastName": string,
  "email": string,
  "topics": TopicWithExpertise[]
}
