import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService, FolderStore, NavigationHelper, NavigationProvider  } from 'common';
import { FolderBaseComponent } from '../folder-base';

@Component({
  selector: 'folder-perms',
  templateUrl: './folder-perms.html'
})
export class FolderPermissionsComponent extends FolderBaseComponent {
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
            this.navProvider.folder( f ), "folder-perms" );
          
        });
  }
}
