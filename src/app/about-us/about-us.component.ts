import {ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {AbitutientServiceService} from '../abiturient/abitutient-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
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
  facult : Faculties[];

  constructor(private  abitutientServiceService: AbitutientServiceService, private cd: ChangeDetectorRef, private httpClient: HttpClient) { }



  ngOnInit() {


    console.log('AAAAAAAAAAA');
    console.log(this.facult);
    console.log();
    console.log(' aaaaaaaaaaaaaaaaaaaaaaaA ');

    this.httpClient.get<Faculties[]>('http://localhost:8081/allFa').subscribe(
      value => {
        this.facult = value;
        console.log(this.facult);
      });


    // this.httpClient.get<Facul2[]>('http://localhost:8081/allFa').subscribe(
    //   value => {
    //     this.facult = value;
    //     console.log(value);
    //   });
    //
    this.abitutientServiceService.msg.subscribe(message => this.name = message);

    console.log();

    console.log(this.facult);


    setTimeout(()=>{
      console.log("HELLO");
        }, 3000);

  }

  newMsgg() {
    this.abitutientServiceService.changeMsg('ABOUT US WORK');
  }

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Specializations>>;

  /*  @ViewChild('outerSort2', { static: true }) sort2: MatSort;
    @ViewChildren('innerSort2') innerSort2: QueryList<MatSort>;
    @ViewChildren('innerTables2') innerTables2: QueryList<MatTable<Specializations>>;

    @ViewChild('outerSort3', { static: true }) sort3: MatSort;
    @ViewChildren('innerSort3') innerSort3: QueryList<MatSort>;
    @ViewChildren('innerTables3') innerTables3: QueryList<MatTable<Specializations>>;*/

  dataSource: MatTableDataSource<Faculties>;
  usersData: Faculties[] = [];
  // usersData: Facul[] = [];
  columnsToDisplay = ['facultyIdl', 'facultyName'];
  innerDisplayedColumns = ['id', 'specializationCode', 'specializationName', 'requst'];
  expandedElement: Faculties | null;

  toggleRow(element: Faculties) {
    element.specializations && (element.specializations as MatTableDataSource<Specializations>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).sort = this.innerSort.toArray()[index]);

    console.log(element);
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).filter = filterValue.trim().toLowerCase());
  }


  /*  toggleRow2(element2: Faculties) {
      element2.specializations && (element2.specializations as MatTableDataSource<Specializations>).data.length ? (this.expandedElement2 = this.expandedElement2 === element2 ? null : element2) : null;
      this.cd.detectChanges();
      this.innerTables2.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).sort = this.innerSort2.toArray()[index]);
    }

    applyFilter2(filterValue: string) {
      this.innerTables2.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).filter = filterValue.trim().toLowerCase());
    }*/


  /* dataSource2: MatTableDataSource<Faculties>;
   usersData2: Faculties[] = [];
   columnsToDisplay2 = ['facultyIdl', 'facultyName'];
   innerDisplayedColumns2 = ['id', 'specializationCode', 'specializationName'];
   expandedElement2: Faculties | null;
   notShow: boolean;
   condition: boolean;*/


  printt(){
    this.facult.forEach(user => {
      if (user.specializations && Array.isArray(user.specializations) && user.specializations.length) {
        this.usersData = [...this.usersData, {...user, specializations: new MatTableDataSource(user.specializations)}];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort;


  }
/*

  print(element: any) {
    console.log(element);




  }
*/




}



/*
export interface Facul {
  id: string;
  facultyName: string;
  specializations?: specializations[] | MatTableDataSource<specializations>;
}

export interface specializations {
  id: string;
  specializationCode: string;
  specializationName: string;
}

export interface UserDataSource {
  id: string;
  facultyName: string;
  addresses?: MatTableDataSource<specializations>;
}
*/


export interface Facul2 {
  facultyIdl: number;
  facultyName: string;
  specializations?: specialization2[]; /* | MatTableDataSource<specialization2>;*/
}

export interface specialization2 {
  id: number;
  specializationCode: number;
  specializationName: string;
}
/*
export interface UserDataSource {
  id: string;
  facultyName: string;
  addresses?: MatTableDataSource<specialization>;
}*/


// let FACULT = this.facult;

/*
const FACULT: Facul2[] = this.facult;*/
// {
//   facultyIdl: 3,
//   facultyName: "Комп науки",
//   specializations: [
//     {
//       id: 1,
//       specializationCode: 0,
//       specializationName: "string" //,
//       requiredSubjects: [
//         "MATH"
//       ],
//       optionalSubjecst: [
//         "MATH"
//       ]
// }
// ]
// },
// {
//   facultyIdl: 1,
//   facultyName: "ХІМІЯ",
//   specializations: [ ]
// }
// ];



// const USERS = this.facult;
/*= [
 {
   facultyIdl: 3,
   facultyName: "mason@test.com",
   specializations: [
     {
       id: 3,
       specializationCode: 78542,
       specializationName: "Kansas"
     },
     {
       id: 2,
       specializationCode: 78554,
       specializationName: "Texas"
     }
   ]
 }
];
*/
