import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: string, ...args: unknown[]): unknown {
    const newTime = time.split(':')
    return newTime[0] == '00' ? `${newTime[1]}m` : `${newTime[0]}h ${newTime[1]}m`;
  }

}
