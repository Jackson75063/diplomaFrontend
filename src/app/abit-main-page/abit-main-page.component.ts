import {Component, OnInit} from '@angular/core';
import {Abit} from '../model/Abit';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TestMapOnePredmet} from '../model/testMapOnePredmet';
import {stringify} from 'querystring';
import {MapTest} from '../model/mapTest';
import {AbitutientServiceService} from '../abiturient/abitutient-service.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {TokenStorageService} from '../_services/token-storage.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-abit-main-page',
  templateUrl: './abit-main-page.component.html',
  styleUrls: ['./abit-main-page.component.css']
})
export class AbitMainPageComponent implements OnInit {


  reqq = new Abit();

  reqq2 = new Abit();

  currentUser: any;

  isFilled : boolean;

  private subject1Subkect: number;
  private subject1: string;

  private subject2Subkect: number;
  private subject2: string;

  private subject3Subkect: number;
  private subject3: string;

  private subject4Subkect: number;
  private subject4: string;

  mapTest = new MapTest();

  list = ['UKR_MOVA', 'MATH', 'PHISIC', 'CHEMESTRY', 'ENGLISH', 'HISTORY','BOILOGY', 'GEOGRAPHY'];


  private message: string;
  private result: Abit[];

  constructor(private httpClient: HttpClient, private abitutientServiceService: AbitutientServiceService,   private spinner: NgxSpinnerService, private token: TokenStorageService) {}



  ngOnInit() {

    this.currentUser = this.token.getUser();

    console.log( 'usernameid: ' +this.currentUser.id);

    this.currentUser = this.token.getUser();


    this.abitutientServiceService.msg.subscribe(message => this.message = message);


   /* this.httpClient.get<Abit[]>('http://localhost:8081/allAb').subscribe(
      res => {
        this.result = res;
      });*/

    this.httpClient.get<Abit>('http://localhost:8081/getById/' +this.currentUser.id, httpOptions).subscribe(
      res => {
        stringify(res);
        console.log("res "+res.idAbitCode);
        this.reqq2 = res;
      });

    console.log(this.reqq2);
  }



  print(option: string, mark1: number) {
    if (option === undefined) {
      console.log('wrong');
    }

    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);


    console.log(option + ':' + mark1);
  }

  bind1(option: string) {

    this.subject1 = option;

    console.log(option + " " +this.subject1);

  }

  bind2(option: string) {

    this.subject2 = option;
  }

  bind3(option: string) {

    this.subject3 = option;
  }

  bind4(option: string) {

    this.subject4 = option;
  }


  subjj: {} = {};
  sendSubkectsToServer(){

    let testOne  = new TestMapOnePredmet(this.subject1, this.subject1Subkect);
    let testOne2 = new TestMapOnePredmet(this.subject2, this.subject2Subkect);
    let testOne3 = new TestMapOnePredmet(this.subject3, this.subject3Subkect);
    let testOne4 = new TestMapOnePredmet(this.subject4, this.subject4Subkect);


    let subjs = [
      testOne, testOne2, testOne3, testOne4
    ];


    this.mapTest.id = 11;
    this.reqq.subjs = subjs;

    // this.mapTest.subjs = subjs;

    console.log('mapTest' + stringify(this.mapTest));
    console.log('mapTest' + this.mapTest);





    // this.httpClient.post('http://localhost:8081/addTest', this.mapTest).subscribe(value => {
    //   console.log('inside subscriber');
    //   console.log(value);
    //   console.log('mapTest' + this.mapTest);
    // });

  }


  addAbit() {

    console.log(this.currentUser.id);

    this.reqq.idAbitCode = this.currentUser.id;
    this.reqq.username = this.currentUser.username;
    this.reqq.surname = this.currentUser.surname;


 /*   this.httpClient.post('http://localhost:8081/addAbit', this.reqq)
      .subscribe((success) => {
          alert('success');
        },
        (error) => alert('error'));*/


    // this.httpClient.post('http://localhost:8081/addAbit', a).map((res: Response) => res.json()).subscribe(
    this.ngOnInit();
    const message = this.reqq.username;
    console.log(message);
    console.log(this.reqq);

  }

}
