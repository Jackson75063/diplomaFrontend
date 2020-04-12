import {ApplicationRef, Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AbitutientServiceService} from '../_services/abitutient-service.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {TokenStorageService} from '../_services/token-storage.service';
import {JwtResponse} from '../model/jwtResponse';
import {Abit} from '../model/Abit';
import {TestMapOnePredmet} from '../model/testMapOnePredmet';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-abit-main-page',
  templateUrl: './abit-main-page.component.html',
  styleUrls: ['./abit-main-page.component.css']
})
export class AbitMainPageComponent implements OnInit {

  currentUser: JwtResponse;
  isFilled: boolean = false;

  reqq2 = new Abit();

  private message: string;


  reqq = new Abit();
  private subject1Subkect: number;
  private subject1: string;

  private subject2Subkect: number;
  private subject2: string;

  private subject3Subkect: number;
  private subject3: string;

  private subject4Subkect: number;
  private subject4: string;

  list = ['UKR_MOVA', 'MATH', 'PHISIC', 'CHEMESTRY', 'ENGLISH', 'HISTORY', 'BOILOGY', 'GEOGRAPHY'];


  constructor(private httpClient: HttpClient, private abitutientServiceService: AbitutientServiceService, private spinner: NgxSpinnerService, private token: TokenStorageService, private appRef: ApplicationRef) {

    console.log("subjs.length " +this.reqq.subjs.length);

  }

  ngOnInit() {


    if (!this.isFilled) {

      this.currentUser = this.token.getUser();


      console.log(" Before " + this.isFilled);
      this.isFilled = this.abitutientServiceService.isFilledMeth();

      console.log(" after " + this.isFilled);

      this.httpClient.get<Abit>('http://localhost:8081/getById/' + this.currentUser.id, httpOptions).subscribe(
        res => {
          console.log(res);
          this.reqq2 = res;

          if (res.subjs.length > 0) {
            this.isFilled = true;
          }
        });

      console.log(this.appRef.isStable + "  ");

    }

    console.log("subjs.length " +this.reqq.subjs.length);


  }


  print(option: string, mark1: number) {
    if (option === undefined) {
      console.log('wrong');
    }

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    console.log(this.list);

    const index : number = this.list.indexOf(option);
     if(index !==-1) {
       this.list.splice(index,1);
     }
  }

  bind1(option: string) {
    this.subject1 = option;
    console.log(option + " " + this.subject1);

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

  addAbit() {

    console.log(this.currentUser.id);

    let testOne = new TestMapOnePredmet(this.subject1, this.subject1Subkect);
    let testOne2 = new TestMapOnePredmet(this.subject2, this.subject2Subkect);
    let testOne3 = new TestMapOnePredmet(this.subject3, this.subject3Subkect);
    let testOne4 = new TestMapOnePredmet(this.subject4, this.subject4Subkect);

    this.reqq.subjs = [ testOne, testOne2, testOne3, testOne4 ];

    this.reqq.idAbitCode = this.currentUser.id;
    this.reqq.username = this.currentUser.username;
    this.reqq.surname = this.currentUser.surname;

    this.abitutientServiceService.ifSubjFilled(this.currentUser.id);

    this.httpClient.post('http://localhost:8081/addAbit', this.reqq)
      .subscribe((success) => {
          // alert('success');
        },
        (error) => alert('error'));

    // this.ngOnInit();
    // const message = this.reqq.username;
    // console.log(message);
    // console.log(this.reqq);
    this.ngOnInit();
    this.ngOnInit()
  }





}
