import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterimages'
})
export class FilterimagesPipe implements PipeTransform {

  transform(items: any[], persona: string): any {
    if (persona === 'all') {
      return items;
    } else {
      return items.filter( item => {
        return item.brand == persona;
      });
    }
  }

}
