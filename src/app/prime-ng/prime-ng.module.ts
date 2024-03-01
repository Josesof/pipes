import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import {MenuModule} from 'primeng/menu';
import {PanelModule} from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';



@NgModule({  
  exports: [
    MenuModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNGModule { }
