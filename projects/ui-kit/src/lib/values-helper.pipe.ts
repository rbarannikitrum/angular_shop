import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valuesHelper'
})
export class ValuesHelperPipe implements PipeTransform {
  transform(item: any, findString: string): any {
    const findArray = findString.split('.');
    findArray.forEach((el: string) => (item = item[el]));
    return item;
  }
}
