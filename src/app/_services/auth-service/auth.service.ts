import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const AUTH_API = 'http://localhost:8081/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email:    credentials.email,
      password: credentials.password
    }, httpOptions);


    console.log(credentials.email);
    console.log(credentials.password);

  }

  register(user): Observable<any> {

    this.http.post("http://localhost:8081/send",{
      "to":user.email,
      "subject":"Вступ",
      "text":" Доброго дня " + user.username + "  ласкаво просимо до нашого університету."
    },httpOptions).subscribe(value => {
      console.log(value);
    })

    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email:    user.email,
      password: user.password
    }, httpOptions);
  }
}
