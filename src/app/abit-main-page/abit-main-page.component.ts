import {Component, OnInit} from '@angular/core';
import {Abit} from '../model/Abit';
import {HttpClient} from '@angular/common/http';
import {TestMapOnePredmet} from '../model/testMapOnePredmet';
import {stringify} from 'querystring';
import {MapTest} from '../model/mapTest';
import {AbitutientServiceService} from '../abiturient/abitutient-service.service';

@Component({
  selector: 'app-abit-main-page',
  templateUrl: './abit-main-page.component.html',
  styleUrls: ['./abit-main-page.component.css']
})
export class AbitMainPageComponent implements OnInit {


  reqq = new Abit();

  private subject1Subkect: number;
  private subject1: string;

  private subject2Subkect: number;
  private subject2: string;

  private subject3Subkect: number;
  private subject3: string;

  private subject4Subkect: number;
  private subject4: string;



  mapTest = new MapTest();

// can be replaced  instead list if will be long loading 'list' values
  map = new Map([
      ['Україська мова'  , 'UKR_MOVA'],
      ['Математика'      , 'MATH'],
      ['Фізика'          , 'PHISIC'],
      ['Хімія'           , 'CHEMESTRY'],
      ['Англійська мова' , 'ENGLISH'],
      ['Історія'         , 'HISTORY'],
      ['Біологія'        , 'BOILOGY'],
      ['Географія'       , 'GEOGRAPHY']

    ]
  );

  list = {
    'Україська мова'  : 'UKR_MOVA',
    'Математика'      : 'MATH',
    'Фізика'          : 'PHISIC',
    'Хімія'           : 'CHEMESTRY',
    'Англійська мова' : 'ENGLISH',
    'Історія'         : 'HISTORY',
    'Іспанська мова'  : 'SPANISHE',
    'Німецька мова'   : 'GERMANY',
    'Французька мова' : 'FRANCE',
    'Біологія'        : 'BOILOGY',
    'Географія'       : 'GEOGRAPHY'
  };


  mapSendSubject = new Map([
    [this.subject1,this.subject1Subkect],
    [this.subject2,this.subject2Subkect],
    [this.subject3,this.subject3Subkect],
    [this.subject4,this.subject4Subkect],
  ]);


  private message: string;
  private result: Abit[];


  constructor(private httpClient: HttpClient, private abitutientServiceService: AbitutientServiceService) { }

  ngOnInit() {
    this.abitutientServiceService.msg.subscribe(message => this.message = message);


    this.httpClient.get<Abit[]>('http://localhost:8081/allAb').subscribe(
      res => {
        this.result = res;
      });
  }



  print(option: string, mark1: number) {
    if (option === undefined) {
      console.log('wrong');
    }
    // alert('AAAAAA')
    setTimeout(() => {
      console.log('Hello from timeout!')
    }, 1000);

    console.log(option + ':' + mark1);
  }

  bind1(option: string) {

    setTimeout(() => {
      console.log('bind1')
    }, 1000);

    this.subject1 = option;
  }

  bind2(option: string) {


    setTimeout(() => {
      console.log('bind2')
    }, 1000);

    this.subject2 = option;
  }

  bind3(option: string) {


    setTimeout(() => {
      console.log('bind3')
    }, 1000);

    this.subject3 = option;
  }

  bind4(option: string) {


    setTimeout(() => {
      console.log('bind4')
    }, 1000);

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


    this.mapSendSubject = new Map([
      [this.subject1,this.subject1Subkect],
      [this.subject2,this.subject2Subkect],
      [this.subject3,this.subject3Subkect],
      [this.subject4,this.subject4Subkect],
    ]);


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



        this.httpClient.post('http://localhost:8081/addAbit', this.reqq)
          .subscribe((success) => {
              alert('success');
            },
            (error) => alert('error'));


    // this.httpClient.post('http://localhost:8081/addAbit', a).map((res: Response) => res.json()).subscribe(
    this.ngOnInit();
    const message = this.reqq.name;
    console.log(message);
    console.log(this.reqq);

  }


}
