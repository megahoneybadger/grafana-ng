import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { ChartModule } from 'primeng';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import { AxesEditorComponent } from './edit/axes/axes';
import { ChartEditorComponent } from './edit/editor';
import { GeneralEditorComponent } from './edit/general/general';
import { LegendEditorComponent } from './edit/legend/legend';
import { MetricsEditorComponent } from './edit/metrics/metrics';

@NgModule({
  declarations: [
    ChartComponent,
    ChartEditorComponent,

    GeneralEditorComponent,
    MetricsEditorComponent,
    AxesEditorComponent,
    LegendEditorComponent,

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
