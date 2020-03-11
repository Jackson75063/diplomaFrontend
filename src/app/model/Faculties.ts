import {Specializations} from 'src/app/model/Specializations';
import {MatTableDataSource} from '@angular/material';

export class Faculties {
      facultyIdl: number;
      facultyName: string;
      specializations?: Specializations[] | MatTableDataSource<Specializations>;
}
