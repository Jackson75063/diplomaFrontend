import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Abit} from '../model/Abit';
import {log} from 'util';
import {AbitutientServiceService} from './abitutient-service.service';


@Component({
  selector: 'app-abiturient',
  templateUrl: './abiturient.component.html',
  styleUrls: ['./abiturient.component.css']
})
export class AbiturientComponent implements OnInit {

  constructor(private httpClient: HttpClient, private abitutientServiceService: AbitutientServiceService) { }

  message: string;

  reqq = new Abit();

  result: Abit[];

  fac: Abit;

  ngOnInit() {
    this.abitutientServiceService.msg.subscribe(message => this.message = message);


    this.httpClient.get<Abit[]>('http://localhost:8081/allAb').subscribe(

      res => {
        this.result = res;
      });
    console.log(this.result);

  }

  clickc() {
    this.result.forEach(value => {
      log(value);
    });

  }

  addAbit() {

    /*

        this.httpClient.post('http://localhost:8081/addAbit', this.reqq)
          .subscribe((success) => {
              alert('success');
            },
            (error) => alert('error'));
    */

    // this.httpClient.post('http://localhost:8081/addAbit', a).map((res: Response) => res.json()).subscribe(


    this.ngOnInit();

    const message = this.reqq.username;
    console.log(message);
    console.log(this.reqq);

  }

  ID(id: number) {
    console.log(id);

  }


  delById(id: number) {

    this.ngOnInit();
    this.httpClient.delete('http://localhost:8081/del/' + id).subscribe(res => {
      console.log(res);
    });

    this.ngOnInit();

  }

  newMsgg() {
    this.abitutientServiceService.changeMsg('CHANGED');
  }

  printFac() {


    this.result.forEach(value =>  this.fac = value);
    // this.fac = callbackfn();

    console.log(this.fac);
    this.fac.faculties.forEach(value => console.log(value));
  }

}
