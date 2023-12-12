import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { AppRoutingModule } from '../../app-routing.module';
import { Ambiente1Component } from './ambiente1.component';



@NgModule({
  declarations: [
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Ambiente1Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    Menu1Component,
    Menu2Component,
    Menu3Component,
    Ambiente1Component
  ]
})
export class Ambiente1Module { }
