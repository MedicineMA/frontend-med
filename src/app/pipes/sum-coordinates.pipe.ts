import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {

  transform(num: number, zoom: number): number {
    if (zoom >= 15 && zoom <= 16) {
      return num + 0.0008 / zoom * 2;
    } else if (zoom > 16 && zoom < 18) {
      return num + 0.00009 / zoom * 3;
    } else if (zoom > 18) {
      return num - 0.0000001 / zoom * 5;
    }
    return num + 0.0008 / zoom * 2;
  }

}
