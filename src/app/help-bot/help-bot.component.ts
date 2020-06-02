import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-help-bot',
  templateUrl: './help-bot.component.html',
  styleUrls: ['./help-bot.component.css']
})
export class HelpBotComponent implements OnInit {
  MSG: string = 'empty';
  question: string;

  // @Output() modelMsg: EventEmitter<string> = new EventEmitter<string>() ;
  // @Output() modelMsg : string;

  click() {
    this.MSG  = this.MSG + ' hello';
  }

  constructor() {
  }

  ngOnInit() {

  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";

  }


  // openDialog() {
  //
  //   const dialogConfig = new MatDialogConfig();
  //
  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;
  //
  //   this.dialog.open(CourseDialogComponent, dialogConfig);
  // }


  lol(question:string) {

    let s = question.trim();

    switch (s) {

      case 'Час подачі заявок': {
        this.MSG = "30 липня 2020"
        break;
      }

      case 'Найпопулярніший факультет': {
        this.MSG = "Комп'ютерні науки"
        break;
      }
      case 'Найпопулярніша спеціальність': {
        this.MSG = "Комп'ютерна інженерія"
        break;
      }
      case 'Потрібний гуртожиток': {


        // this.MSG = ` Клікніть <a href='#'>сюди</a> для перегляду детальної інформація`


        this.MSG = ` Клікніть <a href='#'>сюди</a> для перегляду детальної інформація`






        // this.MSG = "Клікніть <a href='google.com'>сюди</a>"
        break;
      }
      case 'Оплата за навчання': {
        this.MSG = "ККК"
        break;
      }



    }

  }


  answer(question: string) {
    console.log(question);
  }

  outputTest() {
    // console.log(this.modelMsg);
    // this.modelMsg = "aa";
    // this.modelMsg.("string test")
  }
}
