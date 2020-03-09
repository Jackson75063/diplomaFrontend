import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Faculties} from '../model/Faculties';

@Component({
  selector: 'app-add-facult',
  templateUrl: './add-facult.component.html',
  styleUrls: ['./add-facult.component.css']
})
export class AddFacultComponent implements OnInit {
  private faultiesList: Faculties[];
  private bucket: any;
  private faultiesList2: Faculties[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    Object.entries(this.faultiesList).map( res => {
      this.bucket.push(res[1])
    });

  }

  treeData: Faculties[];


  toggleChild(node) {
    node.showChildren = !node.showChildren;
  }


  printFacult() {
    this.httpClient.get<Faculties[]>('http://localhost:8081/allFa').subscribe(
      value => {
        this.faultiesList2 = value;
        console.log(this.faultiesList);
      });
  }


//
// {
//   "abiturients": [
//     {
//       "avgDiplomaMark": 0,
//       "faculties": [
//         null
//       ],
//       "idAbitCode": 0,
//       "name": "string",
//       "requestCounter": 0,
//       "surname": "string",
//       "znoSubjectList": {
//         "additionalProp1": 0
//       }
//     }
//   ],
//   "facultyIdl": 0,
//   "facultyName": "string",
//   "specializations": [
//     {
//       "id": 0,
//       "optionalSubjecst": [
//         "MATH"
//       ],
//       "requiredSubjects": [
//         "MATH"
//       ],
//       "specializationCode": 0,
//       "specializationName": "string"
//     }
//   ]
// }

}
