import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(names: any, type: string): any {
    if(type=="All")
       return names;

    return names.filter((x:any)=>x.Category == type)
  }

}
