import { NgModule } from '@angular/core';
import { InfluxSettingsEditorComponent } from './settings/settings';
import { InfluxQueryCompiler } from './query/compiler';

import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InfluxSettingsEditorComponent,
    InfluxQueryCompiler
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
    InfluxQueryCompiler,
  ]
})
export class InfluxModule { }
