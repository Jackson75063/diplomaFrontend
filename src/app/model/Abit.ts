
import { Faculties } from './Faculties';
import {OneSubject} from './OneSubject';
import {Specializations} from "./Specializations";
import {SpecializationsDTO} from "./SpecializationsDTO";

export class Abit {
  idAbitCode: number;
  username: string;
  surname: string;
  avgDiplomaMark: number;
  faculties: Faculties[];
  subjs : OneSubject[] = [];
  requestCounter: number;
  specializations : SpecializationsDTO[] = [];
}


