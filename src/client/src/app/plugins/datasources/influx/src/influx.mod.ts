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
import { FieldsEditorComponent } from './metrics/designer/query/fields/fields';
import { FieldEditorComponent } from './metrics/designer/query/fields/field';
import { FieldFunctionEditorComponent } from './metrics/designer/query/fields/func-editor/func-editor';
import { FieldFunctionPickerComponent } from './metrics/designer/query/fields/func-editor/func-picker';

@NgModule({
  declarations: [
    InfluxSettingsEditorComponent,
    InfluxMetricsBuilder,

    InfluxMetricsDesignerComponent,
    QueryEditorComponent,
    MeasurementEditorComponent,
    FieldsEditorComponent,
    FieldEditorComponent,
    FieldFunctionEditorComponent,
    FieldFunctionPickerComponent,
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
