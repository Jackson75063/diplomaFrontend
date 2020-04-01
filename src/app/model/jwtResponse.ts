import {OneSubject} from './OneSubject';


export class JwtResponse {

  token: string;
  type: "Bearer";
  id: number;
  username: string;
  surname: string;
  email: string;
  roles: string[];
  subjs : OneSubject[];
}
