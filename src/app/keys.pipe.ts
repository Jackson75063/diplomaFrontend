/*
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys', pure: false  })
export class KeyValuePipe implements PipeTransform {
  transform(input: any): any {
    const keys = [];
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
        keys.push({ key, value: input[key]});
      }
    }
    return keys;
  }
}
*/
