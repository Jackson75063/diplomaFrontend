import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'renamer'
})
export class RenamerPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if(value === 'nameF') return "Назва факультету"
    if(value === 'specializationCode') return "Код спеціальності"
    if(value === 'specializationName') return "Назва спеціальності"
    if(value === 'nameF') return "Назва факультету"
    if(value === 'nameF') return "Назва факультету"
    if(value === 'nameF') return "Назва факультету"
    return value;
  }

}
