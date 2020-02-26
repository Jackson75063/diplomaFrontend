
import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Abit} from '../model/Abit';
import {log} from 'util';
import {Faculties} from '../model/Faculties';
import set = Reflect.set;


@Component({
  selector: 'app-abiturient',
  templateUrl: './abiturient.component.html',
  styleUrls: ['./abiturient.component.css']
})
export class AbiturientComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  reqq = new Abit();

  result: Abit[];
  rea: any;


  ngOnInit() {
    this.httpClient.get<Abit[]>('http://localhost:8081/allAb').subscribe(

      res => {
        this.result = res;
      });
    console.log(this.result);

  }

  clickc() {

    this.result.forEach(value => log(value));

  }

  addAbit() {
    /* const a: Abit = {
          name:  'Andriy',
          idAbitCode:  100,
          faculties: [],
          avgDiplomaMark:  5.6,
          surname:  'Semenyuk',
          requestCounter:  5,
          znoSubjectList: { MATH:  10 }
        };*/

    // console.log(a);

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

  ID(number: number) {
    console.log(number);

  }


  delById(id: number) {

    this.ngOnInit();
    this.httpClient.delete('http://localhost:8081/del/' + id).subscribe(res => {
      console.log(res);
    });
    // @ts-ignore
    this.ngOnInit();

  }

  checkPasswordEmpty() {

  }

  onSubmit() {

  }
}
