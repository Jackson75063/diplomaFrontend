import {ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {AbitutientServiceService} from '../_services/abit-service/abitutient-service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Faculties} from '../model/Faculties';
import {Specializations} from '../model/Specializations';
import {Abit} from '../model/Abit';
import {SpecializationsDTO} from "../model/SpecializationsDTO";
import {FacultiesDTO} from "../model/FacultiesDTO";
import {log} from "util";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
  facult : FacultiesDTO[];
  abit = new Abit();

  constructor(private  abitutientServiceService: AbitutientServiceService, private cd: ChangeDetectorRef, private httpClient: HttpClient) { }


  ngOnInit() {

    let item = window.localStorage.getItem("auth-user");
    let parse = JSON.parse(item);

    let id = parse.id;
    this.httpClient.get<FacultiesDTO[]>('http://localhost:8081/allFa/'+ id, httpOptions).subscribe(
      value => {
        value.forEach(value1 =>  value1.specializations.forEach(value2 =>{ value2
          for(let i = 0; i < this.abit.specializations.length; i++) {
            if (this.abit.specializations[i].id == value2.id) {
              value2.isChoosen = true;
              break;
            }
          }
        }))


        this.facult = value;

        // TODO write filter if abit contain spec
      })



    // this.facult.forEach(value => value.specializations.forEach(value1 => value1.isChoosen  = true))


    // this.facult.forEach((value) => {
    //   value.specializations.forEach(value1 => {
    //
    //     this.abit.specializations.forEach(specs => {
    //       if (specs.id === value1.id) {
    //         value1.isChoosen = true;
    //       }
    //       value1.isChoosen = false;
    //     })
    //   });
    // })


    console.log(this.facult);





    this.httpClient.get<Abit>('http://localhost:8081/getById/' + id, httpOptions).subscribe(
      res => {
        console.log(res);
        this.abit = res;
        console.log(res.specializations);
        // console.log(res.subjs.length + " " + this.reqq2.subjs.length);
      });




// this.httpClient.get<Facul2[]>('http://localhost:8081/allFa').subscribe(
//   value => {
//     this.facult = value;
//     console.log(value);
//   });
//

    console.log();

    console.log(this.facult);


    setTimeout(()=>{
      console.log("HELLO");
      this.printt();


      this.facult.forEach((value) =>  value.specializations.forEach(value1 => {
        console.log(value1);
      }))

    }, 1000);
  }

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Specializations>>;

  dataSource: MatTableDataSource<Faculties>;
  usersData: Faculties[] = [];
  columnsToDisplay = ['facultyIdl', 'facultyName'  ]  ;
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

  constainElem(element: SpecializationsDTO) {

    this.abit.specializations.forEach(value => {
      if (element === value){
        value.isChoosen = true;
      }
      value.isChoosen = false;
    })
  }


  printAll(element: any) {

    element.isChoosen = true;

    let specializations = this.abit.specializations;
    specializations.forEach(value => {
      console.log(element === value);
    })

    console.log(element)
    console.log(element.isChoosen);
    console.log(element.isChoosen);
  }

  ifChoosen(element: SpecializationsDTO) {
    return element.isChoosen;
  }
}







// import {ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
// import {animate, state, style, transition, trigger} from '@angular/animations';
// import {MatSort, MatTable, MatTableDataSource} from '@angular/material';
// import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {Faculties} from '../model/Faculties';
// import {Specializations} from '../model/Specializations';
// import {FacultiesDTO} from "../model/FacultiesDTO";
// import {AbitutientServiceService} from "../_services/abit-service/abitutient-service.service";
// import {JwtResponse} from "../model/jwtResponse";
// import {TokenStorageService} from "../_services/token-storage-service/token-storage.service";
// import {UpdateFacultyRequest} from "../model/UpdateFacultyRequest";
// import {Observable} from "rxjs";
// import {SpecializationsDTO} from "../model/SpecializationsDTO";
// import {Abit} from "../model/Abit";
//
//
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };
//
// @Component({
//   selector: 'app-about-us',
//   templateUrl: './about-us.component.html',
//   styleUrls: ['./about-us.component.css'],
//   animations: [
//     trigger('detailExpand', [
//       state('collapsed', style({ height: '0px', minHeight: '0' })),
//       state('expanded', style({ height: '*' })),
//       transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
//     ]),
//   ],
// })
// export class AboutUsComponent implements OnInit {
//
//   name: string;
//   // facult : Faculties[];
//   facult : Faculties[];
//
//   private FacultyPassElement = new FacultiesDTO();
//   private currentUser: JwtResponse;
//
//   private updateFacultyRequest : UpdateFacultyRequest;
//   private res: Observable<Faculties[]>;
//   private wasChoosenList: any[];
//
//   private listSpec : SpecializationsDTO[];
//   private abit: Abit;
//
//
//
//   constructor(private token: TokenStorageService, private abitutientServiceService: AbitutientServiceService, private cd: ChangeDetectorRef, private httpClient: HttpClient) {
//     console.log()
//     console.log("constr WAS CALLED")
//     console.log()
//   }
//
//   ngOnInit() {
//     this.currentUser = this.token.getUser();
//
//     console.log(this.token.getUser().id);
//
//
//     let item = window.localStorage.getItem("auth-user");
//     let parse = JSON.parse(item);
//
//     this.httpClient.get<Faculties[]>('http://localhost:8081/allFa/'+parse.id, httpOptions).subscribe(
//       value => {
//         this.facult = value;
//         console.log(this.facult);
//       });
//
//     this.httpClient.get<Abit>('http://localhost:8081/getById/' + parse.id, httpOptions).subscribe(
//       value => {
//         this.abit = value;
//       })
//
//
//
//     setTimeout(()=>{
//       console.log("HELLO");
//       // this.retrieveData2()
//       // this.retrieveData()
//       this.printt();
//       // this.run();
//     }, 1);
//
//
//     console.log(this.facult);
//
//   }
//
//   /*
//     retrieveData2() {
//       let data11 = localStorage.getItem('specs');
//       if (data11 === null || data11.length){
//         let data2 = this.facultyService.getData(this.currentUser.id);
//         localStorage.setItem('specs',  JSON.stringify(data2));
//
//         let item = localStorage.getItem('specs');
//
//         this.facult = JSON.parse(item);
//
//       } else {
//         console.log("WRONG")
//       }
//     }*/
//
//
//   @ViewChild('outerSort', { static: true }) sort: MatSort;
//   @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
//   @ViewChildren('innerTables') innerTables: QueryList<MatTable<Specializations>>;
//
//
//
//   dataSource: MatTableDataSource<Faculties>;
//   usersData: Faculties[] = [];
//   columnsToDisplay = ['facultyIdl', 'facultyName'  ]  ;
//   innerDisplayedColumns = ['id', 'specializationCode', 'specializationName', 'requst'];
//   expandedElement: Faculties | null;
//   private a: FacultiesDTO;
//
//   toggleRow(element: Faculties) {
//
//
//     element.specializations && (element.specializations as MatTableDataSource<Specializations>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
//     this.cd.detectChanges();
//     this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).sort = this.innerSort.toArray()[index]);
//
//     let facultyIdl = element.facultyIdl;
//     let facultyName = element.facultyName;
//     let specializations = element.specializations;
//     this.FacultyPassElement.facultyIdl = facultyIdl;
//     this.FacultyPassElement.facultyName = facultyName;
//   }
//
//   applyFilter(filterValue: string) {
//     this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).filter = filterValue.trim().toLowerCase());
//   }
//
//
//
//   printt(){
//     this.facult.forEach(user => {
//       if (user.specializations && Array.isArray(user.specializations) && user.specializations.length) {
//         this.usersData = [...this.usersData, {...user, specializations: new MatTableDataSource(user.specializations)}];
//       } else {
//         this.usersData = [...this.usersData, user];
//       }
//     });
//     this.dataSource = new MatTableDataSource(this.usersData);
//     this.dataSource.sort = this.sort;
//
//   }
//
//   printAll(element: SpecializationsDTO) {
//
//     this.dataSource = new MatTableDataSource(this.usersData);
//     this.dataSource.sort = this.sort;
//
//     let element1 = element;
//
//     let specc  : SpecializationsDTO[] = [];
//     specc.push(element1);
//     this.FacultyPassElement.specializations = specc;
//
//     this.a = this.FacultyPassElement;
//
//
//     this.httpClient.put("http://localhost:8081/setFaculty/"+this.currentUser.id,
//       this.FacultyPassElement, httpOptions);
//     // console.log(this.facult.forEach( value => value.specializations.forEach(value1 => value1.id  == element1.id))) ;
//
//     console.log("DOWN HERE")
//     console.log(element)
//
//     this.httpClient.put("http://localhost:8081/setFaculty/"+this.currentUser.id, this.a ,httpOptions).subscribe(
//       value => {
//         console.log(value);
//       });
//
//   }
//
//
//
//
//
//   constainElem(element: SpecializationsDTO) {
//
//     // console.log(this.facult.forEach(value => value.specializations.forEach(value1 => element === value1)));
//     let wasClicked: boolean;
//   }
//
//
//
//   wasChoosen(element:SpecializationsDTO){
//
//     // this.facult.forEach((value) => value.specializations.forEach(value1 => {
//     //
//     //     console.log(value1 === element)
//     //     if(value1 === element){
//     //       return true
//     //       console.log("TRUE")
//     //     }
//     //   }
//     //
//     // ));
//     console.log("TRUE")
//     return false
//     //
//     // this.facult.forEach((value) => value.specializations.forEach(value1 => {
//     //
//     //   console.log(value1 === element)
//     //   if(value1 === element){
//     //     return true
//     //
//     //   }
//     // }
//     //
//     // ));
//     // return false
//     //
//
//   }
//
//
// }
//
//
