import {ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSort, MatTable, MatTableDataSource} from '@angular/material';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Faculties} from '../model/Faculties';
import {Specializations} from '../model/Specializations';
import {Abit} from '../model/Abit';
import {FacultiesDTO} from "../model/FacultiesDTO";
import {AbitutientServiceService} from "../_services/abitutient-service.service";
import {JwtResponse} from "../model/jwtResponse";
import {TokenStorageService} from "../_services/token-storage.service";
import {UpdateFacultyRequest} from "../model/UpdateFacultyRequest";


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
  facult : Faculties[];
  // private idAbitCode: Abit;
  private reqq2: Abit;
  private FacultyPassElement = new FacultiesDTO();
  private currentUser: JwtResponse;

  private updateFacultyRequest : UpdateFacultyRequest;

  constructor(private token: TokenStorageService ,private abitutientServiceService: AbitutientServiceService, private cd: ChangeDetectorRef, private httpClient: HttpClient) {

  }



  ngOnInit() {

    this.currentUser = this.token.getUser();

    console.log("ID "+this.currentUser.id);


    // this.currentUser = this.abitutientServiceService.currentUser;

    // this.currentUser

    // this.idAbitCode = this.abitutientServiceService.reqq2;
    // console.log("idAbitCode: " + this.idAbitCode.idAbitCode);

    // this.abitutientServiceService.msg.subscribe(message => this.name = message);


    this.httpClient.get<Faculties[]>('http://localhost:8081/allFa/'+this.currentUser.id, httpOptions).subscribe(
      value => {
        this.facult = value;
        console.log(this.facult);
      });
    setTimeout(()=>{
      console.log("HELLO");
      this.printt();

    }, 1000);


  }

  newMsgg() {
    // this.abitutientServiceService.changeMsg('ABOUT US WORK');
  }

  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Specializations>>;



  dataSource: MatTableDataSource<Faculties>;
  usersData: Faculties[] = [];
  columnsToDisplay = ['facultyIdl', 'facultyName'  ]  ;
  innerDisplayedColumns = ['id', 'specializationCode', 'specializationName', 'requst'];
  expandedElement: Faculties | null;
  private a: FacultiesDTO;

  toggleRow(element: Faculties) {
    element.specializations && (element.specializations as MatTableDataSource<Specializations>).data.length ? (this.expandedElement = this.expandedElement === element ? null : element) : null;
    this.cd.detectChanges();
    this.innerTables.forEach((table, index) => (table.dataSource as MatTableDataSource<Specializations>).sort = this.innerSort.toArray()[index]);

    console.log("DOWN HERE ELEMENT")
    console.log(element);
    let facultyIdl = element.facultyIdl;
    let facultyName = element.facultyName;
    let specializations = element.specializations;
    console.log(facultyIdl + " " + facultyName + " " + specializations)
    this.FacultyPassElement.facultyIdl = facultyIdl;
    this.FacultyPassElement.facultyName = facultyName;
    console.log(this.FacultyPassElement.facultyName);

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

  printAll(element: Specializations) {
    console.log("printAll element " + element.id);
    console.log("printAll element " + element.specializationCode);
    console.log("printAll element " + element.specializationName);

    console.log("this.FacultyPassElement "+this.FacultyPassElement.facultyName);
    console.log("this.FacultyPassElement "+this.FacultyPassElement.facultyIdl);
    console.log("this.FacultyPassElement "+this.FacultyPassElement.specializations);


    let element1 = element;

    console.log("element1 "+element1);

    let specc  : Specializations[] = [];
    specc.push(element1);
    this.FacultyPassElement.specializations = specc;

    console.log(this.FacultyPassElement);
    console.log(this.FacultyPassElement.facultyIdl + "IDDD");
    console.log(this.FacultyPassElement.facultyName);

      this.a = this.FacultyPassElement;

    console.log("AAAA")
    console.log(this.a)


    // this.updateFacultyRequest.facultyIdl = this.FacultyPassElement

        this.httpClient.put("http://localhost:8081/setFaculty/"+this.currentUser.id, this.a ,httpOptions).subscribe(
          value => {
            console.log(value);
          });

//oneSpec
/*
    let elementSend : Specializations;
    elementSend.id = element.id;
    elementSend.specializationName = element.specializationName;
    elementSend.specializationCode = element.specializationCode;


    let specc  : Specializations[] = [];
    specc.push(element1);
    this.facultiesPass.specializations = specc;
*/



  }



}

