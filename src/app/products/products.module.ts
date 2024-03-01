import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { TooglecasePipe } from './pipes/tooglecase.pipe';
import { AntiGravedadPipe } from './pipes/anti-gravedad.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    TooglecasePipe,
    AntiGravedadPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNGModule
  ]
})
export class ProductsModule { }
