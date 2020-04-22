import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FacultiesDTO} from "../../model/FacultiesDTO";
import {log} from "util";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private data: FacultiesDTO[];

  constructor(private  httpClient:HttpClient) { }
  //
  // setData(data:FacultiesDTO[]){
  //   this.data = data;
  // }
  //
  // getData(id:number) {
  //   this.httpClient.get<FacultiesDTO[]>('http://localhost:8081/allFa/' + id, httpOptions).subscribe(
  //     value => {
  //
  //       value.forEach(eachObj => {
  //         eachObj.specializations.forEach(nestedeachObj => {
  //           nestedeachObj.isChoosen = false
  //         });
  //       });
  //       this.data = value;
  //     });
  //   // window.localStorage.setItem("specs", JSON.stringify(value));
  //   // window.localStorage.setItem("specs", JSON.stringify(this.data));
  //
  //   log("getData THISSS")
  //
  //   return this.data || [];
  // }
  //
  // hasData(){
  //   log("getData THISSS")
  //
  //   return this.data && this.data.length;
  // }

}
