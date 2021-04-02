import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EdUilibModule } from 'uilib';
import { BinderComponent } from './edit/binder/binder';
import { SvgPanelEditorComponent } from './edit/editor';
import { ObjectsExplorerComponent } from './edit/explorer/explorer';
import { ExplorerFilterPipe } from './edit/explorer/explorer.p';
import { MappingEditorComponent } from './edit/mapping/mapping';
import { SvgPanelComponent } from './svg.c';

@NgModule({
  declarations: [
    SvgPanelComponent,
    SvgPanelEditorComponent,
    MappingEditorComponent,
    ObjectsExplorerComponent,
    ExplorerFilterPipe,
    BinderComponent,
    
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
    SvgPanelComponent,
    SvgPanelEditorComponent
  ]
})
export class SvgModule { }
