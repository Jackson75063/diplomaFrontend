import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'renamer'
})
export class RenamerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if(value === 'nameF') return "Назва факультету";
    if(value === 'specializationCode') return 'Код спеціальності';
    if(value ==  'specializationName') return 'Назва спеціальності';
    if(value === 'id') return "ID";
    if(value === 'requst') return "Дії";
    if(value === 'nameF') return "Назва факультету";
    if(value === 'facultyName') return "Факультет";
    if(value === 'facultyIdl') return "ID факультету";
    if(value === 'UKR_MOVA') return "Україська мова";
    if(value === 'MATH') return "Математика";
    if(value === 'ENGLISH') return "Англійська мова";
    if(value === 'PHISIC') return "Фізика";
    if(value === 'CHEMESTRY') return "Хімія";
    if(value === 'HISTORY') return "Історія";
    if(value === 'BOILOGY') return "Біолгія";
    if(value === 'GEOGRAPHY') return "Географія";

    return value;
  }

}
