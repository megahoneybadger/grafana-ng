import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EdUilibModule } from 'uilib';
import { TextPanelEditorComponent } from './edit/editor';
import { OptionsEditorComponent } from './edit/options/options';
import { TextPanelComponent } from './text.c';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  declarations: [
    TextPanelComponent,
    TextPanelEditorComponent,
    OptionsEditorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EdCommonModule,
    EdUilibModule,
    PerfectScrollbarModule,
    AceEditorModule
  ],
  exports: [
    TextPanelComponent,
    TextPanelEditorComponent
  ]
})
export class TextModule { }
