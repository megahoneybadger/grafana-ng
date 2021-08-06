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
import { DashboardCanvasComponent } from './layout/rgl-canvas';

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
import { AnnotationSettingsComponent } from './settings/annots/annots';
import { AnnotationRuleEditorComponent } from './settings/annots/edit/annot-edit';
import { LinkSettingsComponent } from './settings/links/links';
import { LinkEditorComponent } from './settings/links/edit/link-edit';
import { DashboardSettingsBarComponent } from './settings-bar/settings-bar';
import { DashboardPlainLinkComponent } from './settings-bar/links/plain-link';
import { DashboardDropLinkComponent } from './settings-bar/links/drop-link';
import { DashboardListLinkComponent } from './settings-bar/links/list-link';
import { VersionPermissionsComponent } from './settings/prems/perms';
import { DashboardSharerComponent } from './share/share';
import { DashboardShareLinkComponent } from './share/link/link';
import { DashboardSaveAsComponent } from './saver/save-as/save-as';
import { DashboardSaveAsOverwriteComponent } from './saver/save-as-overwrite/save-as-overwrite';
import { DashboardShareExportComponent } from "./share/export/export";


@NgModule({
  declarations:[
    DashboardComponent,
    DashboardToolbarComponent,
    DashboardSettingsBarComponent,
    DashboardPlainLinkComponent,
    DashboardDropLinkComponent,
    DashboardListLinkComponent,
    DashboardSearchComponent,

    DashboardCanvasComponent,
    
    DashboardPanelComponent,
    DashboardPanelHeaderComponent,
    DashboardPanelEditorComponent,
    DashboardPanelInfoCornerComponent,

    DashboardSaveDispatcherComponent,
    DashboardSaveComponent,
    DashboardSaveAsComponent,
    DashboardSaveAsOverwriteComponent,
    
    PanelWidgetAnchorDirective,
    PanelWidgetEditorAnchorDirective,

    DashboardSettingsComponent,
    GeneralSettingsComponent,
    VersionSettingsComponent,
    VersionPermissionsComponent,
    DiffViewerComponent,
    AnnotationSettingsComponent,
    AnnotationRuleEditorComponent,
    LinkSettingsComponent,
    LinkEditorComponent,

    DashboardSharerComponent,
    DashboardShareLinkComponent,
    DashboardShareExportComponent

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