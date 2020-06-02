import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../_services/token-storage-service/token-storage.service';
import {Abit} from "../model/Abit";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  private reqq2: Abit;
  private isFilled: boolean = false;

  constructor(private token: TokenStorageService, private httpClient:HttpClient) { }

  ngOnInit() {
    this.currentUser = this.token.getUser();

    this.httpClient.get<Abit>('http://localhost:8081/getById/' + this.currentUser.id, httpOptions).subscribe(
      res => {
        console.log(res);
        this.reqq2 = res;

        if (res.subjs.length > 0) {
          this.isFilled = true;
        }
      });

  }
}
