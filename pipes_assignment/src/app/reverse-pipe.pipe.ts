import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
