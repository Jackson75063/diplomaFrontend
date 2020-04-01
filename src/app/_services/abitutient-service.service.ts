import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Abit} from '../model/Abit';
import {stringify} from "querystring";
import {JwtResponse} from '../model/jwtResponse';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AbitutientServiceService {

  isFiiled : boolean = false;

  currentUser: JwtResponse;
  reqq2 = new Abit();

  private messageSource = new BehaviorSubject<string>('def value');
  msg = this.messageSource.asObservable();

  changeMsg(message: string) {
    this.messageSource.next(message);
  }


  ifSubjFilled(abitId : number){
    this.httpClient.get<Abit>('http://localhost:8081/getById/' + abitId, httpOptions).subscribe(
      res => {
        console.log(res);
        this.reqq2 = res;
        // console.log(res.subjs.length + " " + this.reqq2.subjs.length);
      });
  }


  isFilledMeth(){

    if (Array.isArray(this.reqq2.subjs) && this.reqq2.subjs.length) {
      console.log("NE POROZHIY");
         this.isFiiled = true;
    }

    // if (Array(this.reqq2.subjs).() > 0) {
    //   console.log("INSIDE LOG SAY ITS NOT 0");
    //   this.isFiiled = true;
    // }
    return this.isFiiled;
  }


  constructor(private httpClient:HttpClient) {

  }

}
