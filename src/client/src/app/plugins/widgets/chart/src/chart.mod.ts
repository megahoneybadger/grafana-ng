import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ChartModule } from 'primeng';
import { EdUilibModule } from 'uilib';
import { ChartComponent } from './chart.c';
import { AxesEditorComponent } from './edit/axes/axes';
import { AxisXEditorComponent } from './edit/axes/x-axis/x-axis';
import { AxisYEditorComponent } from './edit/axes/y-axis/y-axis';
import { ChartEditorComponent } from './edit/editor';
import { GeneralEditorComponent } from './edit/general/general';
import { LegendEditorComponent } from './edit/legend/legend';
import { MetricsEditorComponent } from './edit/metrics/metrics';
import { ChartLegendComponent } from './view/legend/legend';

@NgModule({
  declarations: [
    ChartComponent,
    ChartEditorComponent,

    ChartLegendComponent,

    AxesEditorComponent,
    AxisXEditorComponent,
    AxisYEditorComponent,

    GeneralEditorComponent,
    MetricsEditorComponent,
    
    LegendEditorComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,

    EdCommonModule,
    EdUilibModule,
    PerfectScrollbarModule
  ],
  exports: [
    ChartComponent,
    ChartEditorComponent
  ],
 
})
export class ChartWidgetModule { }
