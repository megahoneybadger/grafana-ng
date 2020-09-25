import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardSearchHelper, DashboardService, FolderSeachHit,
  FolderStore, NavigationHelper, NavigationProvider } from 'common';
import { Subject } from 'rxjs';
import { finalize, mergeMap, tap } from 'rxjs/operators';
import { SearchFilter } from 'src/app/common/src/public-api';
import { FolderBaseComponent } from '../folder-base';

@Component({
  selector: 'folder-content',
  template: `
    <ed-page [navigation]="navigation" >
      <dashboard-explorer *ngIf="showExplorer; else invitation" [hidden]="preliminaryHideExplorer"
        [folders]="folders" 
        (search)="search.next( $event )">
      </dashboard-explorer>

      <ng-template #invitation>
        <ed-empty-list 
          (ready)="router.navigate( ['new'], { relativeTo: activatedRoute } )"
          title="This folder doesn\'t have any dashboards yet."
          buttonTitle="Create Dashboard"
          buttonIcon="gicon gicon-dashboard-new"
          proTip="Add/move dashboards to your folder at -> Manage dashboards">
        </ed-empty-list>
      </ng-template>
      
    </ed-page>`
})
export class FolderContentComponent extends FolderBaseComponent {
  folders: FolderSeachHit[];
  search = new Subject<SearchFilter>();
  filter = new SearchFilter();
  preliminaryHideExplorer: boolean = true;

  get hasDashboards() : boolean {
    return ( !this.folders || !this.folders.length ) ?
      false : this.folders[ 0 ].dashboards?.length > 0
  }

  get showExplorer() : boolean{
    return ( this.hasDashboards ||  this.filter.notEmpty || this.waiting );
  }
  
  constructor( 
    dbService: DashboardService,
    activatedRoute: ActivatedRoute,
    store: FolderStore,
    navProvider: NavigationProvider ) {
      super(dbService, activatedRoute, store, navProvider);

      this.waiting = true;

      this.storeSubs = store
        .folder$
        .subscribe( f => {
          this.navigation = NavigationHelper.createNavigationFromNode( 
            this.navProvider.folder( f ), "folder-content" );

          if( f.id ){
            this.folder = f;

            this
              .search
              .pipe(
                tap( f => {
                  f.folderId = this.folder.id
                  this.waiting = true;
                  this.filter = f;
                } ),
                mergeMap( f => this
                  .dbService
                  .search( f.request )
                  .pipe( 
                    finalize( () => this.waiting = false ))))
              
              .subscribe( (res) => {
                const f = DashboardSearchHelper.toFolder( this.folder );
                f.dashboards = DashboardSearchHelper.toDashboards( f, res )
                f.expanded = true;
                f.hideHeader = true;
                this.folders = f.dashboards.length > 0 ? [ f ] : []
                this.preliminaryHideExplorer = false;
              });
          }

          this.search.next( this.filter );
        });
  }
}



