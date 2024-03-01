import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'antiGravedad'
})
export class AntiGravedadPipe implements PipeTransform {

  transform(value: boolean): string {
    if(value){
      return 'Vuela'
    }
    return 'No puede Volar';
  }

}
