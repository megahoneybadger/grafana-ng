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
import { FieldFunctionEditorComponent } from './metrics/designer/query/fields/func/editor/func-editor';
import { FieldFunctionPickerComponent } from './metrics/designer/query/fields/func/picker/func-picker';
import { GroupByEditorComponent } from './metrics/designer/query/group-by/group-by';
import { GroupByTagLabelComponent } from './metrics/designer/query/group-by/tag-label.c';
import { InfluxRequestHandler } from './metrics/request-handler';

@NgModule({
  declarations: [
    InfluxSettingsEditorComponent,
    InfluxMetricsBuilder,
    InfluxRequestHandler,

    InfluxMetricsDesignerComponent,
    QueryEditorComponent,
    MeasurementEditorComponent,
    FieldsEditorComponent,
    FieldEditorComponent,
    FieldFunctionEditorComponent,
    FieldFunctionPickerComponent,

    GroupByEditorComponent,
    GroupByTagLabelComponent
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
    InfluxRequestHandler,
    InfluxMetricsDesignerComponent
  ]
})
export class InfluxModule { }
