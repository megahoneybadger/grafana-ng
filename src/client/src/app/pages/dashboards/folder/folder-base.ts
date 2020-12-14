import { Directive } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService, Folder, FolderStore, NavigationProvider, PageNavigation } from 'common';
import { Subscription } from 'rxjs';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { ErrorMessages, Notes } from 'uilib';

@Directive() 
export class FolderBaseComponent extends BaseComponent {
  navigation: PageNavigation; 
  folder: Folder;
  uid: string;

  folderSubs: Subscription;
  storeSubs: Subscription;
  storePrelimSubs: Subscription;
  
  constructor( 
    public dbService: DashboardService,
    public activatedRoute: ActivatedRoute,
    public store: FolderStore,
    public navProvider: NavigationProvider ) {
      super();
  }

  ngOnInit(){
    this.uid = this
			.activatedRoute
			.snapshot
      .params['uid'];  

    this.storePrelimSubs = this
      .store
      .folder$
      .subscribe( x => {
        if( x.uid == this.uid ){
          return;
        }

        console.log( `loading folder: ${this.uid}`);

        this.folderSubs = this
          .dbService
          .getFolder( this.uid )
          .subscribe( 
            folder => {
              this.folder = folder;
              this.store.add( folder );
            },
            _ => Notes.error( ErrorMessages.BAD_GET_FOLDER ));
        },
      );
  }

  ngOnDestroy(){
    this.storePrelimSubs?.unsubscribe();
    this.folderSubs?.unsubscribe();
    this.storeSubs?.unsubscribe();
  }
}
