import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
  standalone: true
})
export class ShortenPipe implements PipeTransform {
  
  transform(text: any, length: number = 0, suffix: string = '', wordBreak: boolean = true): string {
    if (text.length > length) {
      if (wordBreak) {
        return text.slice(0, length) + suffix;
      }

      // tslint:disable-next-line:no-bitwise
      if (!!~text.indexOf(' ', length)) {
        return text.slice(0, text.indexOf(' ', length)) + suffix;
      }
    }

    return text;
  }
}
