import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] =
   [
    {
    name: 'Superman',
    canFly: true,
    color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
        name: 'Mujer Marabilla',
        canFly: false,
        color: Color.blue
    },
    {
      name: 'Iroman',
      canFly: true,
      color: Color.red
  },
  
]

   toogleUpperCase(): void {
    console.log('Entre')
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero) {
    console.log('entre', value);
    this.orderBy = value;
  }

}
