import {CoachInfo} from "./CoachInfo";

export interface User{
  "firstName": string,
  "lastName": string,
  "email": string,
  "password": string,
  "team": string,
  "isCoach": boolean,
  "coachInfoDto": CoachInfo
}
