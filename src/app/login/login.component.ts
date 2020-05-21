import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth-service/auth.service';
import { TokenStorageService } from '../_services/token-storage-service/token-storage.service';
import {FacultyService} from "../_services/faculty/faculty.service";
import {UserService} from "../_services/user-service/user.service";
import {AbitutientServiceService} from "../_services/abit-service/abitutient-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  private returnUrl: any;

  constructor( private router: Router, private route: ActivatedRoute, private authService: AuthService, private tokenStorage: TokenStorageService, private facultyService: FacultyService, private abitutientServiceService:AbitutientServiceService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

        this.reloadPage();
        window.location.href = '/home';

      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

    // let data11 = localStorage.getItem('specs');
    // if (data11 === null || data11.length){
    //   let data2 = this.facultyService.getData(this.abitutientServiceService.currentUser.id);
    //   localStorage.setItem('specs',  JSON.stringify(data2));
    // } else {
    //   console.log("WRONG")
    // }


  }

  reloadPage() {
    window.location.reload();
  }
}
