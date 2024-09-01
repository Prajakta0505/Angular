import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  // transform(value: number, num:number): unknown {
  //   return value + num;

  transform(value: number,...args: number[]): unknown {
    const [a]=args;
    return value*a;

    // return value + a + b;
    //  return Math.pow(value,a)
    //  return value+10;
    // return value * value;
  }
}