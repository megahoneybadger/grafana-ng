import { NgModule } from '@angular/core';
import { InfluxSettingsEditorComponent } from './settings/settings';


import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfluxMetricsBuilder } from './query/builder';

@NgModule({
  declarations: [
    InfluxSettingsEditorComponent,
    InfluxMetricsBuilder,
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
  ]
})
export class InfluxModule { }
