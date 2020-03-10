import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutsToHours'
})
export class MinutsToHoursPipe implements PipeTransform {

  transform(value: number): string {
    if (value > 0 && value / 60 < 1) {
      return `${value}min`;
    } else {
      return `${Math.floor(value / 60)}h ${value % 60}min`;
    }
  }

}
