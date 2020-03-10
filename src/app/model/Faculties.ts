import {Specializations} from 'src/app/model/Specializations';
import {MatTableDataSource} from '@angular/material';
import {Speec} from '../about-us/about-us.component';

export class Faculties {
      facultyIdl: number;
      facultyName: string;
      specializations?: Specializations[] | MatTableDataSource<Specializations>;
}
