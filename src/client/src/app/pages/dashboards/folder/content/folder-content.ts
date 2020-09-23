import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardRawSearchHit, DashboardSearchHelper, DashboardService, FolderSeachHit,
  FolderStore, NavigationHelper, NavigationProvider } from 'common';
import { Subject } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { SearchFilter } from 'src/app/common/src/public-api';
import { FolderBaseComponent } from '../folder-base';

@Component({
  selector: 'folder-content',
  template: `
    <ed-page [navigation]="navigation" >
      <dashboard-explorer 
        [folders]="folders" 
        (search)="search.next( $event )">
      </dashboard-explorer>
    </ed-page>`
})
export class FolderContentComponent extends FolderBaseComponent {
  folders: FolderSeachHit[];
  search = new Subject<SearchFilter>();

  constructor( 
    dbService: DashboardService,
    activatedRoute: ActivatedRoute,
    store: FolderStore,
    private navProvider: NavigationProvider ) {
      super(dbService, activatedRoute, store);

      this.storeSubs = store
        .folder$
        .subscribe( f => {
          this.navigation = NavigationHelper.createNavigationFromNode( 
            this.navProvider.folder( f ), "folder-content" );

          if( f.id ){
            this
            .search
            .pipe(
              tap( f => f.folderId = this.folder.id ),
              mergeMap( f => this
                .dbService
                .search( f.request )))
            .subscribe( (res) => {
              const f = DashboardSearchHelper.toFolder( this.folder );
              f.dashboards = DashboardSearchHelper.toDashboards( f, res )
              f.expanded = true;
              f.hideHeader = true;
              this.folders = f.dashboards.length > 0 ? [ f ] : []
            });
          }

          this.search.next( new SearchFilter() );
         
        });
  }
}
