import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
public  nameLowrcase: string = 'jose johuar';
public nameUppercase: string = 'MOSQUERA RAMIREZ';
public fullName: string = `${this.nameLowrcase} ${this.nameUppercase}`;

public customDate: Date = new Date();
}
