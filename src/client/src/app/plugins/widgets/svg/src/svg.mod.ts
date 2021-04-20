import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EdCommonModule } from 'common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { EdUilibModule } from 'uilib';

import { SvgPanelComponent } from './svg.c';
import { SvgPanelEditorComponent } from './edit/editor';
import { SvgFileImporterComponent } from './edit/import';
import { BindingRulesExplorerComponent } from './edit/binding/binding';
import { SvgElementListComponent } from './edit/binding/list/list';
import { SvgElementListFilter } from './edit/binding/list/list.p';
import { BindingRuleDesignerComponent } from './edit/binding/designer/designer';
import { BindingQueryEditorComponent } from './edit/binding/designer/query/query';
import { BindingQueryParamPickerComponent } from './edit/binding/designer/query/param/param';

import { BindingIfRuleComponent } from './edit/binding/designer/rules/if/if-rule';
import { BindingMapRuleComponent } from './edit/binding/designer/rules/map/map-rule';
import { BindingSwitchRuleComponent } from './edit/binding/designer/rules/switch/switch-rule';
import { SvgSettingsComponent } from './edit/settings/settings';
import { BindingLinkComponent } from './edit/binding/designer/link/link';

@NgModule({
  declarations: [
    SvgPanelComponent,
    SvgPanelEditorComponent,
    SvgFileImporterComponent,
    SvgSettingsComponent,
    
    BindingRulesExplorerComponent,
    SvgElementListComponent,
    SvgElementListFilter,

    BindingRuleDesignerComponent,
    BindingLinkComponent,
    BindingIfRuleComponent,
    BindingMapRuleComponent,
    BindingSwitchRuleComponent,
    BindingQueryEditorComponent,
    BindingQueryParamPickerComponent,
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
