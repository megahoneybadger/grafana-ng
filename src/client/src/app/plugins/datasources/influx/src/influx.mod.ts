import { NgModule } from '@angular/core';
import { InfluxSettingsEditorComponent } from './settings/settings';


import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfluxMetricsBuilder } from './metrics/builder';
import { InfluxMetricsDesignerComponent } from './metrics/designer/designer';
import { QueryEditorComponent } from './metrics/designer/query/query';
import { MeasurementEditorComponent } from './metrics/designer/query/measurement/measurement';



@NgModule({
  declarations: [
    InfluxSettingsEditorComponent,
    InfluxMetricsBuilder,

    InfluxMetricsDesignerComponent,
    QueryEditorComponent,
    MeasurementEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EdCommonModule,
    EdUilibModule
  ],
  exports: [
    InfluxSettingsEditorComponent,
    InfluxMetricsBuilder,
    InfluxMetricsDesignerComponent
  ]
})
export class InfluxModule { }
