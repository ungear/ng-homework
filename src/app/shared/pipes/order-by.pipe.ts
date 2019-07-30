import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(collection: any[], ...args: any[]): any {
    if(!Array.isArray(collection)) return collection;
    const fieldName = args[0];
    const directionMultiplier = !!args[1] ? 1 : -1;
    return collection
      .slice()
      .sort((a,b) => {
        if(a[fieldName] > b[fieldName]) return -directionMultiplier;
        if(a[fieldName] < b[fieldName]) return directionMultiplier;
        return 0;
      })
  }

}
