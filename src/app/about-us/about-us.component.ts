import {ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {AbitutientServiceService} from '../abiturient/abitutient-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {Faculties} from '../model/Faculties';
import {Specializations} from '../model/Specializations';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AboutUsComponent implements OnInit {

  name: string;

  constructor(private  abitutientServiceService: AbitutientServiceService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.abitutientServiceService.msg.subscribe(message => this.name = message);

    USERS.forEach(user => {
      if (user.speec && Array.isArray(user.speec) && user.speec.length) {
        this.usersData = [...this.usersData, {...user, speec: new MatTableDataSource(user.speec)}];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort;


    FACULT.forEach(user => {
      if (user.specializations && Array.isArray(user.specializations) && user.specializations.length) {
        this.usersData2 = [...this.usersData2, {...user, specializations: new MatTableDataSource(user.specializations)}];
      } else {
        this.usersData2 = [...this.usersData2, user];
      }
    });
    this.dataSource2 = new MatTableDataSource(this.usersData2);
    this.dataSource2.sort = this.sort2;

  }

  newMsgg() {
    this.abitutientServiceService.changeMsg('ABOUT US WORK');
  }

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Speec>>;

  @ViewChild('outerSort2', { static: true }) sort2: MatSort;
  @ViewChildren('innerSort2') innerSort2: QueryList<MatSort>;
  @ViewChildren('innerTables2') innerTables2: QueryList<MatTable<Specializations>>;

  @ViewChild('outerSort3', { static: true }) sort3: MatSort;
  @ViewChildren('innerSort3') innerSort3: QueryList<MatSort>;
  @ViewChildren('innerTables3') innerTables3: QueryList<MatTable<Specializations>>;

  dataSource: MatTableDataSource<Facul>;
  usersData: Facul[] = [];
  columnsToDisplay = ['id', 'nameF'];
  innerDisplayedColumns = ['id', 'specializationCode', 'specializationName', 'requst'];
  expandedElement: Facul | null;

  toggleRow(element: Facul) {
    element.speec && (element.speec as MatTableDataSource<Speec>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Speec>).sort = this.innerSort.toArray()[index]);

    console.log(element);
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Speec>).filter = filterValue.trim().toLowerCase());
  }


  toggleRow2(element2: Faculties) {
    element2.specializations && (element2.specializations as MatTableDataSource<Specializations>).data.length ? (this.expandedElement2 = this.expandedElement2 === element2 ? null : element2) : null;
    this.cd.detectChanges();
    this.innerTables2.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).sort = this.innerSort2.toArray()[index]);
  }

  applyFilter2(filterValue: string) {
    this.innerTables2.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).filter = filterValue.trim().toLowerCase());
  }


  dataSource2: MatTableDataSource<Faculties>;
  usersData2: Faculties[] = [];
  columnsToDisplay2 = ['facultyIdl', 'facultyName'];
  innerDisplayedColumns2 = ['id', 'specializationCode', 'specializationName'];
  expandedElement2: Faculties | null;
  notShow: boolean;
  condition: boolean;

  print(element: any) {
    console.log(element);
  }
}



export interface Facul {
  id: string;
  nameF: string;
  speec?: Speec[] | MatTableDataSource<Speec>;
}

export interface Speec {
  id: string;
  specializationCode: string;
  specializationName: string;
}

export interface UserDataSource {
  id: string;
  nameF: string;
  addresses?: MatTableDataSource<Speec>;
}


const FACULT: Faculties[] = [
    {
      facultyIdl: 3,
      facultyName: "Комп науки",
      specializations: [
        {
          id: 1,
          specializationCode: 0,
          specializationName: "string" //,
          // requiredSubjects: [
          //   "MATH"
          // ],
          // optionalSubjecst: [
          //   "MATH"
          // ]
        }
      ]
    },
  {
    facultyIdl: 1,
    facultyName: "ХІМІЯ",
    specializations: [ ]
  }
];

const USERS: Facul[] = [
  {
    id: "Mason",
    nameF: "mason@test.com",
    speec: [
      {
        id: "Street 1",
        specializationCode: "78542",
        specializationName: "Kansas"
      },
      {
        id: "Street 2",
        specializationCode: "78554",
        specializationName: "Texas"
      }
    ]
  },
  {
    id: "Eugene",
    nameF: "eugene@test.com",
  },
  {
    id: "Jason",
    nameF: "jason@test.com",
    speec: [
      {
        id: "Street 5",
        specializationCode: "23547",
        specializationName: "Utah"
      },
      {
        id: "Street 5",
        specializationCode: "23547",
        specializationName: "Ohio"
      }
    ]
  }
];

