import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.startsWith('http')) {
      return value;
    }
    return `http://${value}`;
  }

}
