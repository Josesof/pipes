import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tooglecase'
})
export class TooglecasePipe implements PipeTransform {

  transform(value: string, toUper: boolean = false): string {
    return (toUper) 
       ? value.toUpperCase()
       : value.toLowerCase();
  }

}
