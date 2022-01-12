import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { EdUilibModule } from 'uilib';
import { EdCommonModule, UserService, DashboardService, PlaylistService } from 'common';
import { PlaylistsRoutingModule } from "./playlists.mod-r";
import { PlaylistsComponent } from "./playlists";
import { AddPlaylistComponent } from "./add/add-playlist";
import { PlaylistDashboardPickerComponent } from "./add/dashboards/picker/picker";
import { PlaylistDashboardViewerComponent } from "./add/dashboards/viewer/viewer";

@NgModule({
  declarations:[
    PlaylistsComponent,
    AddPlaylistComponent,
    PlaylistDashboardPickerComponent,
    PlaylistDashboardViewerComponent
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

    PlaylistService,
    UserService,
    DashboardService
    
  ]
})
export class PlaylistsModule{

}