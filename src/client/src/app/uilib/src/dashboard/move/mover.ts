import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DashboardSearchHelper, DashboardSearchHit,
   DashboardService, Folder, FolderSeachHit } from 'common';
import { finalize, mergeMap } from 'rxjs/operators';
import { Notes } from '../../note/note-dispatcher';

@Component({
  selector: 'dashboard-explorer-mover',
  templateUrl: './mover.html'
})
export class DashboardExplorerMoverComponent  {
  @Input() folders: FolderSeachHit[];
  @Output() openChange = new EventEmitter();
  @Input() open: boolean;
  @Output() move = new EventEmitter();

  folder: Folder;
  moveCounter: number;
  
  get dashboards(){
    return DashboardSearchHelper.getSelectedDashboards( this.folders );
  }

  get count(){
    return this.dashboards?.length;
  }

  constructor( private dbService: DashboardService ){
  }

  onClose(){
    this.open=false;
    this.openChange.emit( this.open )
  }

  onMove() {
    const dashboards = this.dashboards;
    this.moveCounter = dashboards.length;

		dashboards.forEach(x => this.moveDashboard( x ));
  }
  
  moveDashboard(d: DashboardSearchHit) {
    this
      .dbService
      .getDashboard( d.uid )
      .pipe( 
        mergeMap( x => this.dbService.updateDashboard( x, '', this.folder.id, false ) ),
        finalize( () => this.decreaseMoveCounter() ) )
      .subscribe(
			  _ => Notes.success(`Dashboard ${d.title} moved`),
		  	_ => Notes.error(`Failed to move dashboard ${d.title}`));
  }
  
  decreaseMoveCounter() {
		--this.moveCounter;

		if (this.moveCounter <= 0) {
      this.moveCounter = 0;
      this.onClose();
      this.move.emit();
		}
	}
}
