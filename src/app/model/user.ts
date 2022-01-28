import {CoachInfo} from "./coach-info";

export interface User{
  'id': string,
  'firstName': string,
  'lastName': string,
  'email': string,
  'team': string,
  'isCoach': boolean,
  'coachInfo': CoachInfo
}
