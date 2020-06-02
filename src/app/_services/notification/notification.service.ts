import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar:MatSnackBar) { }

  // openSnackBar(message: string, styleName:string){
  //   let config = new MatSnackBarConfig();
  //   config.verticalPosition = "top";
  //   config.horizontalPosition = "end";
  //   config.panelClass = ["success"];
  //   config.duration = 5000;
  //   config.politeness = "polite"
  //   config.horizontalPosition = "left"
  //   this.snackBar.open(message,"OK",config);
  // }
  //
  // success(message: string){
  //   this.openSnackBar(message, 'successMsg')
  // }

  openSnackBar(message: string, className: string){
    let config = new MatSnackBarConfig();
    config.verticalPosition = "bottom";
    config.horizontalPosition = "right";
    config.duration = 5000;
    config.panelClass = [className];
    this.snackBar.open(message, "Ok", config);
  }

  success(message: string){
    this.openSnackBar(message, 'successMessage');
  }
  error(message: string){
    this.openSnackBar(message, 'errorMessage');
  }



}
