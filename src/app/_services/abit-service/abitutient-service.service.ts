import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Abit} from '../../model/Abit';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AbitutientServiceService {


  isFiiled : boolean = false;

  reqq2 = new Abit() ;
  // reqq2: Abit;



  public isDone: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isAllSubjectFilled: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public updateSpec  = new  BehaviorSubject<boolean>(false);
  public updateTable  = new  BehaviorSubject<boolean>(false);


  private abit: Abit;
  abitId: number;
getLoggedUser(){

    let item = window.localStorage.getItem("auth-user");
    let parse = JSON.parse(item);

    this.abitId = parse.id;

    return this.httpClient.get<Abit>('http://localhost:8081/getById/' + parse.id, httpOptions)
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

  isFilledFinnaly(id: number){
    this.httpClient.get<Abit>('http://localhost:8081/getById/' + id, httpOptions)
  }


  constructor(private httpClient:HttpClient) {


  }

}
