import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { ChartModule } from 'primeng';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import { ChartEditorComponent } from './edit/editor';

@NgModule({
  declarations: [
    ChartComponent,
    ChartEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,

    EdCommonModule,
    EdUilibModule,
  ],
  exports: [
    ChartComponent,
    ChartEditorComponent
  ]
})
export class ChartWidgetModule { }
