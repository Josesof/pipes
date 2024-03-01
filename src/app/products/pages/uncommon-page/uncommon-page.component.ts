import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18 Select
  public name: string = 'Jose Johuar';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  


  changeClient():void {
   this.name = 'Alejandra';
   this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Jose','Pedro','Luisa','Aleja','Maximiliano','Alan','Deicy'];
  public clientsMap = {
    '=0': 'no tenems ningun cliente esperado. ',
    '=1': 'tenemos un cliente esperado. ',
    '=2': 'tenemos 2 personas esperado. ',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  //json

  public person : any = {
    name: 'Anastacio nieves',
    edad: 45,
    direccion: 'Medellin - Colombia'

  }

  // Async Pipe
  public myObservebleTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value)),
  )

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa ');
      console.log('Tenemos data en la promesa');
    }, 3500
    )
  }) 


}


