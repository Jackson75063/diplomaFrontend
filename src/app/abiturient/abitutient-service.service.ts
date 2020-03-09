import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbitutientServiceService {

  private messageSource = new BehaviorSubject<string>('def value');
  msg = this.messageSource.asObservable();

  changeMsg(message: string) {
    this.messageSource.next(message);
  }

  constructor() {
  }

}
