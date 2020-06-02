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
import {FormBuilder, FormGroup} from "@angular/forms";
import {NotificationService} from "../_services/notification/notification.service";


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

  private FacultyPassElement = new FacultiesDTO();
  private counter: number;

  options: FormGroup;
  private reqq2: Abit;

  constructor(fb: FormBuilder,private  abitutientServiceService: AbitutientServiceService, private cd: ChangeDetectorRef, private httpClient: HttpClient, private notificationService:NotificationService) {

    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0
    });
  }


  @ViewChild('outerSort', { static: true }) sort: MatSort;

  public initTable1 = false;

  ngOnInit() {



    let item = window.localStorage.getItem("auth-user");
    let parse = JSON.parse(item);

    let id = parse.id;
    this.initTable();

    this.abitutientServiceService.updateSpec.subscribe(
      res=>{
        if(res===true && this.facult != null){
          console.log("DWA");
          this.abit.specializations.forEach(value => {

            this.changeChooseStatus(value, this.facult);
            this.abitutientServiceService.updateSpec.next(false);

          })
          if(!this.initTable1) {
            setTimeout(()=>{
              this.printt();
            },30)
            this.initTable1 = true;
          }
        }
      }
    );


    console.log(this.facult);


    this.httpClient.get<Abit>('http://localhost:8081/getById/' + id, httpOptions).subscribe(
      res => {
        console.log(res);
        this.abit = res;
        this.counter = res.requestCounter;
      });

    console.log(this.facult);
    console.log("HELLO");



  }

  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Specializations>>;

  dataSource: MatTableDataSource<Faculties>;
  usersData: Faculties[] = [];
  columnsToDisplay = ['facultyIdl', 'facultyName'  ]  ;
  innerDisplayedColumns = ['id', 'specializationCode', 'specializationName', 'requst'];
  expandedElement: Faculties | null;

  private isOpen: boolean = false;

  toggleRow(element: Faculties) {
    element.specializations && (element.specializations as MatTableDataSource<Specializations>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).sort = this.innerSort.toArray()[index]);
    console.log(element);
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach((table) => (table.dataSource as MatTableDataSource<Specializations>).filter = filterValue.trim().toLowerCase());
  }



  printt(){
    this.facult.forEach(user => {
      if (user.specializations && Array.isArray(user.specializations) && user.specializations.length) {
        this.usersData = [...this.usersData, {
          ...user,
          specializations: new MatTableDataSource(user.specializations)
        }];
      } else {
        this.usersData = [...this.usersData, user];
      }
    });
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort;
    this.initTable1 = false;
  }


  decreaseCounter(){
    this.counter--;
  }


  printAll(element: any) {
    element.isChoosen = true;




    let item = window.localStorage.getItem("auth-user");
    let parse = JSON.parse(item);

    let id = parse.id;


    let element1 = element;

    let specc  : SpecializationsDTO[] = [];
    specc.push(element1);
    this.FacultyPassElement.specializations = specc;

    this.httpClient.put("http://localhost:8081/setFaculty/"+id,
      this.FacultyPassElement, httpOptions).subscribe(
      value => {
        console.log(value);
      });
    this.decreaseCounter();

    // this
    this.notificationService.success("Запит відправлено")

  }


  isChoosen(element: SpecializationsDTO) {
    return element.isChoosen;
  }


  initTable(){
    let item = window.localStorage.getItem("auth-user");
    let parse = JSON.parse(item);

    let id = parse.id;

    this.httpClient.get<FacultiesDTO[]>('http://localhost:8081/allFa/'+ id, httpOptions).subscribe(
      value => {
        if(value != null) {
          this.facult = value;
          console.log(value);
          setTimeout(()=>{
            this.abitutientServiceService.updateSpec.next(true);
          }, 100);
        }
      })
  }


  changeChooseStatus(value2: SpecializationsDTO, value: any){
    value.forEach(value1 =>  value1.specializations.forEach(
      value2 =>{
        console.log(this.facult);
        for(let i = 0; i < this.abit.specializations.length; i++) {
          if (this.abit.specializations[i].id == value2.id) {
            value2.isChoosen = true;
            break;
          }
        }

      }))

  }

  test() {

    // console.log(document.getElementsByName('mat-table'));
    console.log(document.getElementsByName('mat-table'));

    let elementById = document.getElementById('q1');

    let elementsByTagName = elementById.getElementsByTagName('div');
    console.log(elementsByTagName);
    console.log(elementById);


    console.log(elementById.getAttributeNames());



    console.log(elementsByTagName.namedItem('h3'));

    console.log(elementById.getAttribute("ngcontent-syt-c6"));


    console.log(elementById.getElementsByTagName('<mat-row>'));
    let elementsByTagName1 = elementById.getElementsByTagName("td");
    console.log(elementsByTagName1);


    // ТУТ РЕЛОАД БУДЕ

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
