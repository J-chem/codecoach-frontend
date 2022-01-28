import {CoachInfoTopic} from "./coach-info-topic";

export interface CoachInfo {
  'id': string,
  'introduction': string,
  'availability': string,
  'coachInfoTopicList': [CoachInfoTopic]
}
