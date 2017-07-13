import { Injectable, Pipe } from '@angular/core';
import * as moment from 'moment';
moment.locale('pt-br');

// Pipe que utiliza a função format() do momentjs para timestamps.
@Pipe({
  name: 'formatDate'
})
@Injectable()
export class FormatDatePipe {
  transform(value: Date|moment.Moment, ...args: any[]): any {
      let [format] = args;
      return moment(`${value['year']}-${value['month']}-${value['day']}`).format(format);
  }
}

