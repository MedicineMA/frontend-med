import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decr'
})
export class DecrPipe implements PipeTransform {
  transform(num: number, zoom: number): number {
    if (zoom >= 15 && zoom <= 16) {
      return (num - 0.003 / zoom * 2);
    } else if (zoom >= 17 && zoom < 18) {
      return num - 0.0008 / zoom * 2;
    } else if (zoom >= 18 && zoom < 19) {
      return num - 0.0003 / zoom * 2;
    } else if (zoom >= 19 && zoom <= 21) {
      return num - 0.0002 / zoom * 2;
    } else if (zoom > 21) {
      return num - 0.00003 / zoom * 2;
    }
    return (num - 0.003 / zoom * 2);
  }

}
