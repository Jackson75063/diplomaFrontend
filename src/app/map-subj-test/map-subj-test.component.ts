import {Component, OnInit} from '@angular/core';
import {Subject} from '../model/Subject';
import {HttpClient} from '@angular/common/http';
import {ZnoTest} from '../model/znoTest';
import {MapTest} from '../model/mapTest';
import {OneSubject} from '../model/OneSubject';
import {stringify} from 'querystring';
import {TestMapOnePredmet} from '../model/testMapOnePredmet';


@Component({
  selector: 'app-map-subj-test',
  templateUrl: './map-subj-test.component.html',
  styleUrls: ['./map-subj-test.component.css']
})
export class MapSubjTestComponent implements OnInit {

  sublect = new Subject();
  subjMark: number;
  znoSubjects2: ZnoTest;

  mapTest = new MapTest();


// can be replaced  instead list if will be long loading 'list' values
  map = new Map([
      ['Україська мова' , '222UKR_MOVA'],
      ['Математика' , 'MATH'],
      ['Фізика' , 'PHISIC'],
      ['Хімія' , 'CHEMESTRY'],
      ['Англійська мова' , 'ENGLISH'],
      ['Історія' , 'HISTORY'],
      ['Біологія' , 'BOILOGY'],
      ['Географія' , 'GEOGRAPHY']

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




  subj = new OneSubject()[4];

  private subject1Subkect: number;
  private subject1: string;

  private subject2Subkect: number;
  private subject2: string;

  private subject3Subkect: number;
  private subject3: string;

  private subject4Subkect: number;
  private subject4: string;

  mapSendSubject = new Map([
    [this.subject1,this.subject1Subkect],
    [this.subject2,this.subject2Subkect],
    [this.subject3,this.subject3Subkect],
    [this.subject4,this.subject4Subkect],
  ]);
  private newArr: { this: undefined };

  constructor(private httpClient: HttpClient) { }


  ngOnInit() {
  }

  addSubj() {
    console.log(this.sublect);
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
  private subject: string;
  sendSubkectsToServer(){

 let testOne = new TestMapOnePredmet('MATH',200);
 let testOne2 = new TestMapOnePredmet('UKR_MOVA',120);
 let testOne3 = new TestMapOnePredmet(null, null);

 testOne.subjectMark = 123;

    let subjs = [
        testOne, testOne2, testOne3
    ];


    this.mapSendSubject = new Map([
      [this.subject1,this.subject1Subkect],
      [this.subject2,this.subject2Subkect],
      [this.subject3,this.subject3Subkect],
      [this.subject4,this.subject4Subkect],
    ]);
    console.log(this.mapSendSubject);


    this.mapTest.id = 11;
    this.mapTest.subjs = subjs;


    console.log('mapTest' + stringify(this.mapTest));
    console.log('mapTest' + this.mapTest);


    this.httpClient.post('http://localhost:8081/addTest', this.mapTest).subscribe(value => {
      console.log('inside subscriber');
      console.log(value);
      console.log('mapTest' + this.mapTest);
    });

  }
}
