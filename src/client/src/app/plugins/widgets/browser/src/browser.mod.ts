import { NgModule, SecurityContext } from '@angular/core';
import { BrowserPanelComponent } from './browser.c';

import { OptionsEditorComponent } from './edit/options/options';

import { BrowserPanelEditorComponent } from './edit/editor';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { EdUilibModule } from 'uilib';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    BrowserPanelComponent,
    BrowserPanelEditorComponent,
    OptionsEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    EdCommonModule,
    EdUilibModule,
    PerfectScrollbarModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
  ],
  exports: [
    BrowserPanelComponent,
    BrowserPanelEditorComponent
  ]
})
export class BrowserModule { }
