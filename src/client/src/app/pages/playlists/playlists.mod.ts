import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { EdUilibModule } from 'uilib';
import { EdCommonModule, UserService, DashboardService, PlaylistService } from 'common';
import { PlaylistsRoutingModule } from "./playlists.mod-r";
import { PlaylistsComponent } from "./playlists";

import { PlaylistDashboardPickerComponent } from "./design/dashboards/picker/picker";
import { PlaylistDashboardViewerComponent } from "./design/dashboards/viewer/viewer";
import { AddPlaylistComponent, EditPlaylistComponent } from "./design/add-edit-playlist";
import { DesignPlaylistComponent } from "./design/design-playlist";

@NgModule({
  declarations:[
    PlaylistsComponent,
    AddPlaylistComponent,
    EditPlaylistComponent,
    DesignPlaylistComponent,
    PlaylistDashboardPickerComponent,
    PlaylistDashboardViewerComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    PlaylistsRoutingModule,
    
    EdUilibModule,
    EdCommonModule,
  ],
  providers: [
    
    DashboardService
  ]
})
export class PlaylistsModule{

}