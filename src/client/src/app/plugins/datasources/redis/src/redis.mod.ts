import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { RedisSettingsEditorComponent } from './settings/settings';



@NgModule({
  declarations: [
    RedisSettingsEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EdCommonModule,
    EdUilibModule
  ],
  exports: [
    RedisSettingsEditorComponent
  ]
})
export class RedisModule { }
