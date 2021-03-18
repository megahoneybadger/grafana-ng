import { CommonModule } from '@angular/common';
import { NgModule, SecurityContext } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EdUilibModule } from 'uilib';
import { TextPanelEditorComponent } from './edit/editor';
import { OptionsEditorComponent } from './edit/options/options';
import { TextPanelComponent } from './text.c';
import { AceEditorModule } from 'ng2-ace-editor';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    TextPanelComponent,
    TextPanelEditorComponent,
    OptionsEditorComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EdCommonModule,
    EdUilibModule,
    PerfectScrollbarModule,
    AceEditorModule,	
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
  ],
  exports: [
    TextPanelComponent,
    TextPanelEditorComponent
  ]
})
export class TextModule { }
