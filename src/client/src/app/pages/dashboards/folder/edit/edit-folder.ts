import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService, FolderStore, NavigationHelper, NavigationProvider  } from 'common';
import { finalize } from 'rxjs/operators';

import { ErrorMessages, Notes } from 'uilib';
import { FolderBaseComponent } from '../folder-base';
import { checkFolderNameTaken } from '../folder-name-taken';

@Component({
  selector: 'edit-folder',
  templateUrl: './edit-folder.html'
})
export class EditFolderComponent extends FolderBaseComponent {
  form: FormGroup;

  deleteConfirmOpen: boolean;

  get name() {
		return this.form.get('name');
  }
  
  constructor( 
    dbService: DashboardService,
    activatedRoute: ActivatedRoute,
    store: FolderStore,
    navProvider: NavigationProvider,
    private router: Router ) {
      super(dbService, activatedRoute, store, navProvider);

      this.form = new FormGroup({
        'name': new FormControl('', Validators.required,  
          checkFolderNameTaken.bind( this, dbService, true ))
      });

      this.storeSubs = store
        .folder$
        .subscribe( f => {
          this.folder = f;
          this.updateNavigation();
          this.name.setValue( f.title );
        });
  }

  updateNavigation(){
    this.navigation = NavigationHelper.createNavigationFromNode( 
      this.navProvider.folder( this.folder ), "folder-settings" );
  }

  onSave() {
    this.waiting = true

    const request = {
      title: <string>this.name.value,
      uid: this.folder.uid,
      version: this.folder.version
    }

    this
      .dbService
      .updateFolder( request )
      .pipe( 
        finalize( () => this.waiting = false ))
      .subscribe( 
        x => {
          Notes.success( "Folder saved" );
          this.folder.title =  x.title;
          this.folder.version = x.version;
          this.updateNavigation();
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_FOLDER ))
  }

  onDelete(){
    this.waiting = true

    this
      .dbService
      .deleteFolder( this.folder.uid )
      .pipe(
        finalize(() => {
          this.deleteConfirmOpen = false;
          this.waiting = false;
        } ))
      .subscribe( 
        x => {
          Notes.success( x.message );
          this.router.navigate( ['dashboards'] );
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_FOLDER ))
  }
}
