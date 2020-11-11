import { Component, Inject } from '@angular/core';
import { AlertService, Panel, PANEL_TOKEN, AlertChannel } from 'common';
import { of } from 'rxjs';
import { ErrorMessages, Notes } from 'uilib';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';

@Component({
  selector: 'editor-alert-notifications',
  templateUrl: './alert-nots.html'
})
export class AlertNotificationsEditorComponent extends BaseChartEditorComponent  {

  availableChannels: AlertChannel[] = [];

  get channels$() {
    return of( [...this
      .availableChannels
			.filter( x => !this.notifications?.includes( x.id ) )
    	.map( x => x.name ) ] )
  }

  get notifications(): number[]{
    return this.alert.notifications;
  }
  
  getChannelByName( name: string ){
		return this.availableChannels.find( x => x.name == name );
	}

	getChannelById( id: number ){
		return this.availableChannels.find( x => x.id == id );
	}

  constructor(
    @Inject( PANEL_TOKEN ) panel: Panel,
    private alertService: AlertService){
      super( panel );

      
      this.alert.notifications = this.notifications ?? [];

      this
        .alertService
        .getNotifications()
        .subscribe( 
          x => {
            this.availableChannels = x

            this.alert.notifications = this
              .notifications
              .filter( y => this.availableChannels.find(z => z.id == y )  ) ;
          },
          e => Notes.error( e.error?.message ?? ErrorMessages.BAD_GET_ALERT_NOTIFS ));
  }

  onAdd( e: string ) {
    const notif = this.getChannelByName( e );
    
		if( notif ){
      this.notifications.push( notif.id );
		}
	}

	onRemove( id: number ){
    const index = this.notifications.findIndex( x => x == id );
		
    if ( -1 !== index ) {
			this.notifications.splice( index, 1 )
    }
	}
}
