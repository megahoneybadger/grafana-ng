import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { RedisSettingsEditorComponent } from './settings/settings';
import { RedisMetricsDesignerComponent } from './metrics/designer/designer'
import { QueryEditorComponent } from './metrics/designer/query/query';
import { RedisCommandPickerComponent } from './metrics/designer/query/command-picker/command-picker';
import { RedisDispatcher } from './dispatcher';

@NgModule({
  declarations: [
    RedisDispatcher,
    RedisSettingsEditorComponent,

    RedisMetricsDesignerComponent,
    QueryEditorComponent,
    RedisCommandPickerComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EdCommonModule,
    EdUilibModule
  ],
  exports: [
    RedisDispatcher,
    RedisSettingsEditorComponent,
    RedisMetricsDesignerComponent
  ]
})
export class RedisModule { }
