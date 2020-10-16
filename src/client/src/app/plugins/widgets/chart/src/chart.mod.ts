import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
// import { ChartModule } from 'primeng/chart';
import {ButtonModule} from 'primeng/button';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EdCommonModule,
    EdUilibModule,
    ButtonModule
    
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartWidgetModule { }
