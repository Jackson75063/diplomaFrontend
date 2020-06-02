import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth-service/auth.service';
import {NotificationService} from "../_services/notification/notification.service";
import {stringify} from "querystring";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private notificationService:NotificationService) { }

  ngOnInit() {
  }

  onSubmit() {

    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
    this.notificationService.success("Ви успішно зареєструвались");
    window.location.href = "login"
  }
}
