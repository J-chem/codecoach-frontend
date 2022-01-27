import {Topic} from "./topic";


export interface Coach{
  "firstName": string,
  "lastName": string,
  "email": string,
  "topics": Topic[]
}
