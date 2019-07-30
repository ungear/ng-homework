import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(collection: any[], ...args: any[]): any {
    if(!Array.isArray(collection)) return collection;
    const fieldNameString = args[0];
    const directionMultiplier = !!args[1] ? 1 : -1;

    const fieldnames = fieldNameString.split(".");
    return collection
      .slice()
      .sort((a,b) => {
        let aValue = fieldnames.length === 1
          ? a[fieldnames[0]]
          : a[fieldnames[0]][fieldnames[1]];

        let bValue = fieldnames.length === 1
          ? b[fieldnames[0]]
          : b[fieldnames[0]][fieldnames[1]];


        if(aValue > bValue) return -directionMultiplier;
        if(aValue < bValue) return directionMultiplier;
        return 0;
      })
  }

}
