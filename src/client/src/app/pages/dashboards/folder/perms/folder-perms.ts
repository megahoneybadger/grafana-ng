import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService, FolderStore, NavigationHelper, NavigationProvider  } from 'common';
import { map, tap } from 'rxjs/operators';
import { PermissionBinding, PermissionBindingHelper } from 'src/app/common/src/public-api';
import { FadeInOutAnimation, ObservableEx } from 'uilib';
import { FolderBaseComponent } from '../folder-base';

@Component({
  selector: 'folder-perms',
  templateUrl: './folder-perms.html',
  animations: [FadeInOutAnimation],
})
export class FolderPermissionsComponent extends FolderBaseComponent {
  showPermissionPicker: boolean = false;

  permBindingsRequest : ObservableEx<PermissionBinding[]>;
  permBindings : PermissionBinding[];

  constructor( 
    dbService: DashboardService,
    activatedRoute: ActivatedRoute,
    store: FolderStore,
    navProvider: NavigationProvider ) {
      super(dbService, activatedRoute, store, navProvider);

      this.storeSubs = store
        .folder$
        .subscribe( f => {
          this.folder = f;

          this.navigation = NavigationHelper.createNavigationFromNode( 
            this.navProvider.folder( f ), "folder-perms" );

          if( f.uid ){
            this.loadPermissions();
          }
        });
  }

  ngOnDestroy(){
    this.storeSubs?.unsubscribe();
	}

  loadPermissions(){
		this.permBindingsRequest = new ObservableEx<PermissionBinding[]>( this
			.dbService
      .getFolderPermissions( this.folder.uid )
			.pipe( 
				map( x => x.map( y => PermissionBindingHelper.import( y ) ) ),
				tap( x => x.sort((a, b) => (a.target > b.target) ? -1 : 1) ),
				tap( x => this.permBindings = [ PermissionBindingHelper.admin(), ...x] )));
	}

  onAddPermission( pb: PermissionBinding ){
    console.log( pb )
  }
}
