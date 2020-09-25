import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService, FolderStore, NavigationHelper, NavigationProvider  } from 'common';
import { FolderBaseComponent } from '../folder-base';

@Component({
  selector: 'folder-perms',
  templateUrl: './folder-perms.html'
})
export class FolderPermissionsComponent extends FolderBaseComponent {
  showPermissionPicker: boolean = true;

  constructor( 
    dbService: DashboardService,
    activatedRoute: ActivatedRoute,
    store: FolderStore,
    navProvider: NavigationProvider ) {
      super(dbService, activatedRoute, store, navProvider);

      this.storeSubs = store
        .folder$
        .subscribe( f => {
          this.navigation = NavigationHelper.createNavigationFromNode( 
            this.navProvider.folder( f ), "folder-perms" );
          
        });
  }

  onAddPermission(){
    console.log( 'add permission' );
  }
}
