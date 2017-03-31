import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkCalorie'
})
export class CheckCaloriePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
