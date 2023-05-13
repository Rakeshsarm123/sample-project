import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'afilter'
})
export class AfilterPipe implements PipeTransform {

  transform(names: any, type: string): any {
    if(type=="All")
       return names;

    return names.filter((x:any)=>x.Category == type)
  }

}
