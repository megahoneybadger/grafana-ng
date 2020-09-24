import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardSearchHelper, DashboardSearchHit,
  DashboardService, FolderSeachHit } from 'common';
import { finalize } from 'rxjs/operators';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { ErrorMessages, Notes } from 'uilib';

@Component({
  selector: 'dashboard-explorer-deleter',
  templateUrl: './deleter.html'
})
export class DashboardExplorerDeleterComponent extends BaseComponent {

  @Input() folders: FolderSeachHit[];
  @Output() openChange = new EventEmitter();
  message: string;
  private _open: boolean;

  deleteCounter: number;

  @Input() set open( o: boolean ){
    this._open = o;

    if( o ){
      this.buildMessage();
    }
  }

  get open(){
    return this._open
  }

  get selectedFolders(){
    return DashboardSearchHelper.getSelectedFolders( this.folders );
  }

  get selectedDashboards(){
    return DashboardSearchHelper.getSelectedDashboards( this.folders );
  }

  constructor( private dbService: DashboardService ){
    super();
  }

  buildMessage(){
    const folderCount = this.selectedFolders.length;
    const dashCount = this.selectedDashboards.length;

    let text = 'Do you want to delete the ';
    let text2: string;

    if (folderCount > 0 && dashCount > 0) {
      text += `selected folder${folderCount === 1 ? '' : 's'} and dashboard${dashCount === 1 ? '' : 's'}?`;
      text2 = `All dashboards of the selected folder${folderCount === 1 ? '' : 's'} will also be deleted`;
    } else if (folderCount > 0) {
      text += `selected folder${folderCount === 1 ? '' : 's'} and all its dashboards?`;
    } else {
      text += `selected dashboard${dashCount === 1 ? '' : 's'}?`;
    }

    this.message = text;
  }

  onClose(){
    this.open=false;
    this.openChange.emit( this.open )
  }

  onDelete(){
    //this.isConfirmDialogOpened = false;

		const folders = this
			.selectedFolders
      .filter(x => x.id );
      
    const folderIds = folders.map(x => x.id);

    let dashboards = this
			.selectedDashboards
      .filter(x => !folderIds.includes(x.folder.id));
    
    this.deleteCounter = folders.length + dashboards.length;

    folders.forEach( x => this.deleteFolder( x ));
    dashboards.forEach(x => this.deleteDashboard(x));
  }

  deleteFolder(f: FolderSeachHit) {
		this
			.dbService
			.deleteFolder(f.uid)
			.pipe(
				finalize(() => this.decreaseDeleteCounter()))
			.subscribe(
				_ => {
          Notes.success(`Folder ${f.title} deleted`)
          const index = this.folders.indexOf( f );
          this.folders.splice( index, 1 );
        },
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETEE_FOLDER ) );
  }

  deleteDashboard(d: DashboardSearchHit) {
		this
			.dbService
			.deleteDashboard( d.uid )
			.pipe(
				finalize(() => this.decreaseDeleteCounter()))
			.subscribe(
				_ => {
          Notes.success(`Dashboard ${d.title} deleted`)
          const index = d.folder.dashboards.indexOf( d );
          d.folder.dashboards.splice( index, 1 );
        },
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_DASHBOARD ) );
	}
  
  decreaseDeleteCounter() {
		--this.deleteCounter;

		if (this.deleteCounter <= 0) {
      //this.deleted.emit();
      
      this.deleteCounter = 0;
      this.onClose();
		}
	}
}
