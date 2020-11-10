import { Component, Inject } from '@angular/core';
import { AlertAnnotation, AlertState, DashboardStore, Moment, Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { finalize, map, tap } from 'rxjs/operators';
import { AnnotationService, Annotation, AlertHelper } from 'common';
import { ErrorMessages, Notes, ObservableEx } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import * as _ from 'lodash';

@Component({
  selector: 'editor-alert-history',
  templateUrl: './alert-history.html'
})
export class AlertHistoryEditorComponent extends BaseChartEditorComponent  {

  historyRequest: ObservableEx<Annotation[]>
  storeSubs : Subscription;
  history: Annotation[];

  ErrorMessagesRef = ErrorMessages;
  AlertHelperRef = AlertHelper;

  dashboardId: number;

  deleteDialogOpened: boolean
  deleting: boolean;

  constructor(
    @Inject( PANEL_TOKEN ) panel: Panel,
    private store: DashboardStore,
    private annotService: AnnotationService ){
      super( panel );

      this.storeSubs = store
        .dashboard$
        .subscribe( x => {
          if( x ){
            this.dashboardId = x.id;
            this.loadHistory();
          }
        } );
  }

  ngOnDestroy(){
		this.storeSubs?.unsubscribe();
	}

  loadHistory(){
		const filter = `dashboardId=${this.dashboardId}&panelId=${this.panel.id}&limit=50&type=alert`;

		this.historyRequest = new ObservableEx<Annotation[]>( this
			.annotService
			.find( filter )
			.pipe(
				tap(x => this.history = [...x])) );
  }
 
  getFormattedTime( a: Annotation ){
		return Moment.format( a.time );
  }
  
  getInfo( a:Annotation  ) {
    const alert = a.alert;

    if (_.isArray(alert.data)) { 
      return _.reduce( alert.data, (res, ev) => {
        if (ev.Metric !== undefined && ev.Value !== undefined) {
          res.push(ev.Metric + '=' + ev.Value);
        }
    
        return res;
      }, [] )
      .join(', ');
    } 

    return alert.data?.error ? `Error: ${alert.data?.error}` : '';
  }

  
  onClearHistory(){
    this.deleting = true;

		this
			.annotService
			.clear( this.dashboardId, +this.panel.id )
			.pipe( 
				finalize( () => this.deleting = this.deleteDialogOpened = false ) )
			.subscribe( 
				x => {
					this.history = [];
					Notes.success( x.message )
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_ANNS ) );
  }
}
