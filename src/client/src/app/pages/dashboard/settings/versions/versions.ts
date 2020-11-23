import { Component, ViewEncapsulation } from '@angular/core';
import { BaseDasboardComponent, DashboardService,
  DashboardStore, DashboardVersion, TimeRangeParser } from 'common';
import { finalize, tap } from 'rxjs/operators';
import { ErrorMessages, FadeInOutAnimation, Notes, ObservableEx } from 'uilib';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'settings-versions',
  templateUrl: `./versions.html`,
  styleUrls: [`./versions.scss`],
  encapsulation: ViewEncapsulation.None,
  animations: [FadeInOutAnimation],
})
export class VersionSettingsComponent extends BaseDasboardComponent{

  versionsRequest : ObservableEx<DashboardVersion[]>;
  versions : DashboardVersion[]
  versionsLoadFrom: number = 0;
  versionsLoadLimit: number = 5;

  comparing: boolean;
  compResult: any;
  compRequest: any[];

  isRestoreDialogOpened: boolean = false;
  versionToRestore: any;

  ErrorMessagesRef = ErrorMessages;

  get canCompare() : boolean{
    return this
      .versions
      .filter( x => x.selected )
      .length == 2;
  }
  
  constructor( 
    store: DashboardStore,
    private dsService: DashboardService){
      super( store );
  }

  onDashboardReady(){
    this.loadVersions();
  }

  loadVersions( attach: boolean = false ){
    this.versionsLoadFrom = 0;

		this.versionsRequest = new ObservableEx<DashboardVersion[]>( this
			.dsService
			.getDashboardVersions( this.dashboard.id, this.versionsLoadLimit, this.versionsLoadFrom )
			.pipe( 
				tap( x => {
          this.versions = [...x];
          this.versions.forEach( y => y.selected = false );
        } ) ) );
  }

  getFormattedDate( v ){
    return moment( v.created ).format( TimeRangeParser.DEFAULT_DATE_TIME_FORMAT );
  }

  onLoadMore(){
    this.versionsLoadFrom += this.versionsLoadLimit;
    
    this
			.dsService
      .getDashboardVersions( this.dashboard.id, this.versionsLoadLimit, this.versionsLoadFrom )
      .subscribe( x =>{
        this.versions = [...this.versions, ...x];
        this.versions.forEach( y => y.selected = false )
      });
  }

  onTrySelect( e: boolean, v: DashboardVersion ){
    const cands = this
      .versions
      .filter( x => x.selected );

    if( cands.length > 2 ){
      setTimeout( () => v.selected = false );
    }
  }
  
  onCompare(){
    const cands = this
      .versions
      .filter( x => x.selected );

    const v1 = cands[ 0 ].version;
    const v2 = cands[ 1 ].version;

    const arg = {
      base : {
        dashboardId: this.dashboard.id,
        version: Math.min( v1, v2 )
      },
      new: {
        dashboardId: this.dashboard.id,
        version: Math.max( v1, v2 )
      },
      diffType: "json"
    }

    this.comparing = true;
    this.compResult = undefined;
    this.compRequest = [...cands];

    this
      .compRequest
      .sort((a, b) => (a.version > b.version) ? 1 : -1)

    this
      .dsService
      .compareDashboards( arg )
      .pipe(
        finalize( () => {
          this.comparing = false
          console.log( this.compResult )
        } ))
      .subscribe( 
        x => this.compResult = x,
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_COMP_DASHBOARDS ))
  }

  onClearComparison(){
    this.compResult = undefined;
    this.compRequest = undefined;
    this.versions.forEach( y => y.selected = false );
  }

  onRestore( version: number ){
    this.isRestoreDialogOpened=false;
    this.onClearComparison();

    this.isRestoreDialogOpened = false;

    const arg = {
      version: version
    }

    this
      .dsService
      .restoreDashboardVersion( this.dashboard.id, arg )
      .subscribe( 
        x => {
          Notes.success( "Dashboard restored" );
          this.store.reload();
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_RESTORE_DASHBOARD ))
  }
}

