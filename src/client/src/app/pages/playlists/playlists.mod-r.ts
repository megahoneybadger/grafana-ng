import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPlaylistComponent } from './add/add-playlist';
import { PlaylistsComponent } from './playlists';


const routes: Routes = [
  { path: '',  component: PlaylistsComponent },
  { path: 'new', component: AddPlaylistComponent },
  // { path: 'edit/:id', component: TeamMembersComponent},
  // { path: 'edit/:id/members', component: TeamMembersComponent},
  // { path: 'edit/:id/settings', component: TeamSettingsComponent },
  // { path: 'new/:type', component: DataSourceEditorComponent, data: {mode: 'Create'}}
];

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
  
})
export class PlaylistsRoutingModule { }
