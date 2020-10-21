import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService, FolderStore, UserService,
  TeamService, DashboardStore, TimeRangeStore,
  TimeRangeConverter, DataSourceService, PluginLoader } from 'common';
import { DashboardRoutingModule } from './dashboard.mod-r';
import { DashboardComponent } from './dashboard';
import { DashboardToolbarComponent } from './toolbar/toolbar';
import { DashboardSearchComponent } from './search/search';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardCanvasComponent } from './layout/rgl-canvas.c';

import { DashboardPanelComponent } from './panel/panel';
import { DashboardPanelHeaderComponent } from './panel/header/header';
import { PanelWidgetAnchorDirective, PanelWidgetEditorAnchorDirective } from './panel/anchors.dir';
import { DashboardPanelEditorComponent } from './edit/panel-editor';

@NgModule({
  declarations:[
    DashboardComponent,
    DashboardToolbarComponent,
    DashboardSearchComponent,

    DashboardCanvasComponent,
    
    DashboardPanelComponent,
    DashboardPanelHeaderComponent,
    DashboardPanelEditorComponent,
    
    PanelWidgetAnchorDirective,
    PanelWidgetEditorAnchorDirective,

  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule,

    PerfectScrollbarModule,

    EdUilibModule,
    EdCommonModule
  ],
  providers: [
    DashboardService,
    DashboardStore,
    DataSourceService,
    
    FolderStore,
    UserService,
    TeamService,
    PluginLoader,

    TimeRangeConverter,
    TimeRangeStore,
  ]
})
export class DashboardModule{

}