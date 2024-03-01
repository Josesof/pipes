import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { last } from 'rxjs';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public menuItems: MenuItem[] = []; 
  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Text and Date',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'Not Commons',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },
        ]
      },
      {
        label: 'Pipes Pernonalizates',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Other element',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          }
        ]
      }
    ]
  }

}
