import {Component, OnInit} from '@angular/core';
import {Specializations} from '../model/Specializations';
import {ZNO_SUBJECTS} from '../model/ZNO_SUBJECTS';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AbitutientServiceService} from '../_services/abit-service/abitutient-service.service';
import {Abit} from '../model/Abit';


@Component({
  selector: 'app-add-spec',
  templateUrl: './add-spec.component.html',
  styleUrls: ['./add-spec.component.css'],
})
export class AddSpecComponent implements OnInit {
  mapKeys: IterableIterator<string>;
  mapValues: IterableIterator<number>;
  private allSpec: Specializations[];

  private reqq2:Abit;

  constructor(private httpClient: HttpClient, private abitutientServiceService:AbitutientServiceService) {
     this.reqq2 = this.abitutientServiceService.reqq2;
  }


  requiredSubject = new Set<string>();

  znoSubjects: string[] = Object.values(ZNO_SUBJECTS);

  message: string [] = [];

  sendSpecialis = new Specializations();

  spec = new Specializations();

  pushSubjectListValue: string;


  ngOnInit() {
    this.getAllSpec();
  }

  addToMap() {
    this.requiredSubject.add(this.pushSubjectListValue);
    console.log(this.requiredSubject);
  }


  print(val: string) {
    this.pushSubjectListValue = val;
    console.log('val ' + val);
    console.log('pushSubjListValue' + this.pushSubjectListValue);
  }

  createSpec() {
    const sendSpecialis1 = this.sendSpecialis;
    sendSpecialis1.id =  this.spec.id;
    sendSpecialis1.specializationName =  this.spec.specializationName;

    this.message.push( ZNO_SUBJECTS.Математика);

    // sendSpecialis1.requiredSubjects = this.message;
    // sendSpecialis1.optionalSubjecst = this.message;
    sendSpecialis1.specializationCode = this.spec.specializationCode;
    console.log(sendSpecialis1);
  }

  approveSubmit() {


    // this.httpClient.post('http://localhost:8081/addSpec', (this.sendSpecialis)).subscribe(

    // this.httpClient.post<string>('http://localhost:8081/addSpec', this.sendSpecialis,
    //   {headers: this.header , responseType: 'json'})
    //   .pipe (catchError(this.handleError('postPurchaseOrderCustom', 'I am an error')));

    const headers1 = new Headers({'Content-Type': 'application/json'});

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // this.httpClient.post('http://localhost:8081/addSpec', JSON.stringify(this.sendSpecialis), { headers}).subscribe();

    // this.ngOnInit();

  }




  getAllSpec() {
    this.httpClient.get<Specializations[]>('http://localhost:8081/allSpec/'+this.reqq2.idAbitCode.toString()).subscribe(value => {
      JSON.stringify(value);
      this.allSpec = value;
      console.log(value);
      console.log("AHUET");
      // this.reqq2.subjs.values();
    });
  }


}
