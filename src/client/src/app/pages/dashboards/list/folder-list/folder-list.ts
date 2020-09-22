import { Component, Input } from '@angular/core';
import { DashboardSearchHelper, DashboardService, FolderSeachHit } from 'common';
import { FadeInOutAnimation } from 'uilib';

@Component({
  selector: 'folder-list',
  animations: [FadeInOutAnimation],
  templateUrl: './folder-list.html',
  styleUrls:[ './folder-list.scss' ]
})
export class FolderListComponent {
  @Input() folders: FolderSeachHit[];

  constructor( private dbService: DashboardService ){
  }  

  onExpandFolder( f: FolderSeachHit ){
    f.expanded=!f.expanded;

    if (f.expanded && 0 == f.dashboards.length) {
      console.log( f.id );
      this
        .dbService
        .searchFolder( f.id )
        .subscribe( x => f.dashboards = DashboardSearchHelper.toDashboards( f, x ));
    }
  }
}
