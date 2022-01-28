import {CoachInfo} from "./coach-info";

export interface User{
  'id': string,
  'firstName': string,
  'lastName': string,
  'email': string,
  'password': string,
  'team': string,
  'isCoach': boolean,
  'coachInfo': CoachInfo
}
