import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TokenStorageService} from './_services/token-storage-service/token-storage.service';

import { NgxSpinnerService } from "ngx-spinner";
import {FacultyService} from "./_services/faculty/faculty.service";
import {AboutUsComponent} from "./about-us/about-us.component";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  options: FormGroup;
  sidenav: any;

// security panel
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;



  constructor(/*fb: FormBuilder,*/ private tokenStorageService: TokenStorageService, private spinner: NgxSpinnerService, private facultyService:FacultyService) {



    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);


    // this.options = fb.group({
    //   hideRequired: false,
    //   floatLabel: 'auto',
    // });
  }


  ngOnInit(){


    this.isLoggedIn = !!this.tokenStorageService.getToken();






    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;

/*
      let data11 = localStorage.getItem('specs');
      if (data11 === null || data11.length) {
        let data2 = this.facultyService.getData(this.tokenStorageService.getUser().id);
        localStorage.setItem('specs', JSON.stringify(data2));
      }
*/


    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
