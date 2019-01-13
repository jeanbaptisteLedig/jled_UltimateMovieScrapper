import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ToArrayPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'toArray',
})
export class ToArrayPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    let res = [], start = args.length > 0 ? args[0] : 0;
    value = parseInt(value) + start;
    for (let i = start; i < value; i++) {
      res.push(i);
    }
    return res;
  }
}
