import { Component, OnInit } from '@angular/core';
import {AbitutientServiceService} from "../_services/abit-service/abitutient-service.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Abit} from "../model/Abit";
import 'jquery';
import {MatDrawer} from "@angular/material/sidenav";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private result: Abit;
  private isFilled: boolean;
  public activeToggle: boolean = false;
  bntStyle: string;
  visibleclass: string;
  isDone = 'current';
  subjWasFilled = 'current';

  counter = 0;
  private drw: MatDrawer;

  private allDisabled = false;
  private counterSybjs = 0;


  constructor(private abitutientServiceService: AbitutientServiceService, private httpClient: HttpClient) { }

  ngOnInit() {

    this.bntStyle = 'test2';

    let item = window.localStorage.getItem("auth-user");
    let parse = JSON.parse(item);

    let id = parse.id;

    this.counterSybjs = parse.subjS

    this.httpClient.get<Abit>('http://localhost:8081/getById/' + parse.id, httpOptions).subscribe(
      value => {
        this.result = value;
        if(value.subjs.length > 0){
          this.isFilled = true;
          this.counterSybjs = value.requestCounter;
        }
      })
    this.abitutientServiceService.isDone.subscribe(
      res=>{
        if(res === true) {
          this.isFilled = true;
          this.activeToggle = true;
          this.change(this.drw);
          this.abitutientServiceService.isDone.next(false);
        }
      }
    );

    this.abitutientServiceService.isAllSubjectFilled.subscribe(
      res=>{
        if(res === true) {
          this.activeToggle = true;
          this.change(this.drw);
          this.abitutientServiceService.isAllSubjectFilled.next(false);
        }
      }
    );

  }

  click(){
    console.log(this.result.subjs);
  }


  test(drawer: any){
    console.log('ASPDOASD');
    console.log(drawer);
  }

// це кроки
  change(drawer: MatDrawer) {
    this.drw = drawer;
    // this.counter++;



    // let swither = true;

    // if(swither){
    //   this.bntStyle = 'test2';
    //   this.changed(swither);
    // } else {
    //   // this.bntStyle = 'test2-changed';
    //   this.bntStyle = 'click2';
    //   this.visibleclass = 'visClass';
    //   this.changed(swither);
    // }

     drawer.toggle();


    if(this.isFilled ) {
      this.isDone = "is-done";
    }


    if(this.isFilled &&  this.counterSybjs == 0){
      this.subjWasFilled = "is-done";
    }

  }



  changed(element:boolean){
    return !element;
  }

}
