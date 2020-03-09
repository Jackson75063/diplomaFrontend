import { Component, OnInit } from '@angular/core';
import {Bla, predmet} from './bla';
import {HttpClient} from '@angular/common/http';
import {concatAll} from 'rxjs/operators';

// @ts-ignore
@Component({
  selector: 'app-finish-map',
  templateUrl: './finish-map.component.html',
  styleUrls: ['./finish-map.component.css']
})
export class FinishMapComponent implements OnInit {



  map = new Map<string, number>();


  bla = new Bla();

  subject: IterableIterator<[string, number]>;

  test = [];



  constructor(private httpClient: HttpClient) {
  }



  ngOnInit() {

    let predmet1 = new predmet("MATH",200);
    this.bla.subj.push(predmet1);
    this.test.push(predmet1);

    this.bla.id = 13;

    console.log('testaaaaaaaaaaaaa' + this.test.toString());
    this.bla.subj = this.test;
    // this.map.set("MATH", 200);
    // this.map.set("UKR_MOVA", 200);

    // let numbers = this.map.values();
    // let keys = this.map.keys();


    // this.bla.subj = this.test;

    // console.log(this.map);
    // console.log(this.bla);
    //
    // this.subject = this.map.entries();
    //
    // this.bla.subj = this.subject;

    console.log('test' + this.bla);

  }


  send() {

    console.log('subj   '+this.subject);



    this.httpClient.post('http://localhost:8081/addTest', this.bla).subscribe(value => {
      console.log(value);
    });

    let result = Object.keys(dataKey => {
      // here, dataKey will be -> "Mission 1", then "Mission 2" etc...
      // the value you return here will be used to form the elements of your array
      // so do whatever transformation you want to do here
      return this.map[dataKey];
    });

    console.log(result);

    let array = [];
    let i = 0;
    for (let mission in this.map) {
      array[i] = array.concat(array[mission]);
      i++;
    }
    console.log(array);

    /*
        var anArray = [];

        anArray.push(this.map);
        var data1 = anArray.map(function (item) {
          var items = [];
          Object.keys(item).forEach(function (key, index) {
            item[key].forEach(function (inneritem, index) {
              items.push(inneritem);
            });
            console.log(items);
          });
        }
      }
    */


  }
}
