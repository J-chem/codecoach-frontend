import {Topic} from "./topic";


export interface CoachOverview {
  "firstName": string,
  "lastName": string,
  "email": string,
  "topics": Topic[]
}
