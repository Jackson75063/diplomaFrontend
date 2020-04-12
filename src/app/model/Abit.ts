
import { Faculties } from './Faculties';
import {OneSubject} from './OneSubject';
import {Specializations} from "./Specializations";

export class Abit {
  idAbitCode: number;
  username: string;
  surname: string;
  avgDiplomaMark: number;
  faculties: Faculties[];
  subjs : OneSubject[] = [];
  specializations : Specializations[] = [];
}


