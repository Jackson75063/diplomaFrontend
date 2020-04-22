import {Specializations} from 'src/app/model/Specializations';
import {MatTableDataSource} from '@angular/material';

export interface Faculties {
      facultyIdl: number;
      facultyName: string;
      specializations?: Specializations[] | MatTableDataSource<Specializations>;
}
