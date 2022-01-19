import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPlaylistComponent, EditPlaylistComponent } from './design/add-edit-playlist';
import { PlaylistsComponent } from './playlists';

const routes: Routes = [
  { path: '',  component: PlaylistsComponent },
  { path: 'new', component: AddPlaylistComponent },
  { path: 'edit/:id', component: EditPlaylistComponent},
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
