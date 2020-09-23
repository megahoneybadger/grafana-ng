import { Component } from '@angular/core';
import { DashboardSearchHelper, DashboardService,
   FolderSeachHit, FolderStore } from 'common';
import { Subject } from 'rxjs';
import { debounceTime, finalize, map, mergeMap, tap } from 'rxjs/operators';
import { SearchFilter } from '../../common/src/dashboard/search-filter.m';

@Component({
  selector: 'manage-dashboards',
  template: `
    <ed-page navigation="manage-dashboards" >
      <dashboard-explorer 
        [folders]="folders" 
        (search)="search.next( $event )">
      </dashboard-explorer>
    </ed-page>`
})
export class ManageDashboardsComponent{
  folders: FolderSeachHit[];
  search = new Subject<SearchFilter>();

  constructor( 
    private dbService: DashboardService,
    private store: FolderStore ){
  }

  ngOnInit(){
    this.store.reset();

    this
      .search
      .pipe(
        tap( f => f.folderId = f.empty ? 0 : undefined),
        mergeMap( f => this
          .dbService
            .search( f.request )
            .pipe(
              map( items => DashboardSearchHelper.toFolders( items )))))
      .subscribe( res => this.folders = res);

    this.search.next( new SearchFilter() );
  }

  ngAfterViewInit() {
    
  }
}
