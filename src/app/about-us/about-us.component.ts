import { Component, OnInit } from '@angular/core';
import {AbitutientServiceService} from '../abiturient/abitutient-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  name: string;

  constructor(private  abitutientServiceService: AbitutientServiceService) { }

  ngOnInit() {
    this.abitutientServiceService.msg.subscribe(message => this.name = message);
  }

  newMsgg() {
    this.abitutientServiceService.changeMsg('ABOUT US WORK');
  }

}
