import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'datePipe'})
export class ReverseStr implements PipeTransform {
  transform(value: string): string {
    return value.substring(0, 10);
  }
}