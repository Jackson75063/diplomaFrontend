
import { Faculties } from './Faculties';
import {OneSubject} from './OneSubject';

export class Abit {
  idAbitCode: number;
  username: string;
  surname: string;
  avgDiplomaMark: number;
  faculties: Faculties[];
  subjs : OneSubject[] = [];


}


