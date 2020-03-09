export class predmet {
name:string;
ocinka: number;


  constructor(name: string, ocinka: number) {
    this.name = name;
    this.ocinka = ocinka;
  }
}

export class Bla {
  id:number;
  subj: predmet[] = [];
}
