import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, DashboardService, FolderStore, UserService,
  TeamService, DashboardStore, TimeRangeStore, TimeRangeConverter } from 'common';
import { DashboardRoutingModule } from './dashboard.mod-r';
import { DashboardComponent } from './dashboard';
import { DashboardToolbarComponent } from './toolbar/toolbar';
import { DashboardSearchComponent } from './search/search';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardCanvasComponent } from './layout/rgl-canvas.c';
import { DashboardPanelComponent } from './layout/panel/panel';
import { DashboardPanelHeaderComponent } from './layout/panel/header/header';
import { PanelWidgetAnchorDirective, PanelWidgetEditorAnchorDirective } from './layout/panel/anchors.dir';

@NgModule({
  declarations:[
    DashboardComponent,
    DashboardToolbarComponent,
    DashboardSearchComponent,

    DashboardCanvasComponent,
    
    DashboardPanelComponent,
    DashboardPanelHeaderComponent,
    
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
    
    FolderStore,
    UserService,
    TeamService,

    TimeRangeConverter,
    TimeRangeStore,
  ]
})
export class DashboardModule{

}