import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EdUilibModule } from 'uilib';
import { GaugeDisplayEditorComponent } from './edit/display/display';
import { GaugeColorsEditorComponent } from './edit/color/color';
import { SinglestatPanelEditorComponent } from './edit/editor';
import { SinglestatPanelComponent } from './singlestat.c';
import { GaugeValueEditorComponent } from './edit/value/value';

@NgModule({
  declarations: [
    SinglestatPanelComponent,
    SinglestatPanelEditorComponent,

    GaugeDisplayEditorComponent,
    GaugeValueEditorComponent,
    GaugeColorsEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    EdCommonModule,
    EdUilibModule,
    
    PerfectScrollbarModule
  ],
  exports: [
    SinglestatPanelComponent,
    SinglestatPanelEditorComponent
  ]
})
export class SinglestatModule { }
