import {ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {AbitutientServiceService} from '../_services/abitutient-service.service';
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

    this.abitutientServiceService.msg.subscribe(message => this.name = message);


    this.httpClient.get<Faculties[]>('http://localhost:8081/allFa').subscribe(
      value => {
        this.facult = value;
        console.log(this.facult);
      });

    console.log('AAAAAAAAAAA');
    console.log(this.facult);
    console.log();
    console.log(' aaaaaaaaaaaaaaaaaaaaaaaA ');


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

        }, 1000);


  }

  newMsgg() {
    this.abitutientServiceService.changeMsg('ABOUT US WORK');
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

}

