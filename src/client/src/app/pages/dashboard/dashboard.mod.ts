import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService, FolderStore, UserService,
  TeamService, DashboardStore, TimeRangeStore, TimeRangeConverter, AnnotationService,
   PluginLoader, PluginActivator, AnnotationStore, AlertService } from 'common';
import { DashboardRoutingModule } from './dashboard.mod-r';
import { DashboardComponent } from './dashboard';
import { DashboardToolbarComponent } from './toolbar/toolbar';
import { DashboardSearchComponent } from './search/search';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardCanvasComponent } from './layout/rgl-canvas.c';

import { DashboardPanelComponent } from './panel/panel';
import { DashboardPanelHeaderComponent } from './panel/header/header';
import { PanelWidgetAnchorDirective, PanelWidgetEditorAnchorDirective } from './panel/anchors.dir';
import { DashboardPanelEditorComponent } from './panel/edit/panel-editor';
import { DashboardPanelInfoCornerComponent } from './panel/header/corner/corner';
import { DashboardSaveDispatcherComponent } from './saver/save-dispatcher';
import { DashboardSaveComponent } from './saver/save/save';
import { DashboardSettingsComponent } from './settings/settings';
import { GeneralSettingsComponent } from './settings/general/general';
import { VersionSettingsComponent } from './settings/versions/versions';
import { DiffViewerComponent } from './settings/versions/diff-viewer/diff-viewer';


@NgModule({
  declarations:[
    DashboardComponent,
    DashboardToolbarComponent,
    DashboardSearchComponent,

    DashboardCanvasComponent,
    
    DashboardPanelComponent,
    DashboardPanelHeaderComponent,
    DashboardPanelEditorComponent,
    DashboardPanelInfoCornerComponent,

    DashboardSaveDispatcherComponent,
    DashboardSaveComponent,
    
    PanelWidgetAnchorDirective,
    PanelWidgetEditorAnchorDirective,

    DashboardSettingsComponent,
    GeneralSettingsComponent,
    VersionSettingsComponent,
    DiffViewerComponent,

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
    AnnotationStore,
    AlertService,
    AnnotationService,
    
    FolderStore,
    UserService,
    TeamService,
    PluginLoader,
    PluginActivator,

    TimeRangeConverter,
    TimeRangeStore,
  ]
})
export class DashboardModule{

}