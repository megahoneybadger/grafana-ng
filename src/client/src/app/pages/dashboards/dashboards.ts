import { Component } from '@angular/core';
import { DashboardSearchHelper, DashboardService, FolderSeachHit, FolderStore } from 'common';


@Component({
  selector: 'manage-dashboards',
  templateUrl: './dashboards.html'
})
export class ManageDashboardsComponent {
  folders: FolderSeachHit[];

  constructor( 
    private dsService: DashboardService,
    private store: FolderStore ){
    this
      .dsService
      .search('folderIds=0')
      .subscribe( x => this.folders = DashboardSearchHelper.toFolders( x ));
  }

  ngOnInit(){
    this.store.reset();
  }
}
