import {TopicWithExpertise} from "./topic-with-expertise";


export interface Coach{
  "firstName": string,
  "lastName": string,
  "email": string,
  "topics": TopicWithExpertise[]
}
