import {Topic} from "./topic";


export interface CoachOverview {
  "id": string,
  "firstName": string,
  "lastName": string,
  "email": string,
  "topics": Topic[]
}
