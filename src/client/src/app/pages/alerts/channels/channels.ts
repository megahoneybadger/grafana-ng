import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { tap } from 'rxjs/operators';
import { ErrorMessages, FadeInOutAnimation, Notes, ObservableEx } from 'uilib';
import { AlertService, AlertChannel } from 'common';

@Component({
  selector: 'alert-channels',
  templateUrl: './channels.html',
  animations: [FadeInOutAnimation],
})
export class AlertChannelsComponent extends BaseComponent {

  channelsRequest: ObservableEx<AlertChannel[]>
	channels: AlertChannel[];
  
  constructor( 
    private alertService: AlertService,
		public router: Router,
		private activatedRoute: ActivatedRoute ) {
      super();
  }

  ngOnInit() {
		this.channelsRequest = new ObservableEx<AlertChannel[]>(this
			.alertService
			.getNotifications()
			.pipe(
				tap(x => this.channels = [...x])));
  }
  
  onRemoveNotification(notif) {
		this
			.alertService
			.deleteNotification(notif.id)
			.subscribe(
				x => {
					delete notif.confirmDelete;
					Notes.success(x.message);

					const index = this
						.channels
						.findIndex(y => notif.id == y.id );

					if (-1 !== index) {
						this.channels.splice(index, 1);
					}
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_ALERT_NOTIF ));
	}
}
