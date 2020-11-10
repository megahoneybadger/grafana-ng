import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { finalize, tap } from 'rxjs/operators';
import { DropDownComponent, ErrorMessages, Notes, ObservableEx } from 'uilib';
import { AlertService, AlertStateFilter, AlertHelper, DateTime, EvaluatedAlertRule } from 'common';
import * as moment_ from 'moment';
const moment = moment_;

@Component({
  selector: 'alert-rules',
  templateUrl: './alert-rules.html',
})
export class AlertRulesComponent extends BaseComponent {
  _state: AlertStateFilter;
  filter: string;

  availableStates = DropDownComponent.wrapEnum( AlertStateFilter )
  AlertHelperRef = AlertHelper;

  rulesRequest: ObservableEx<EvaluatedAlertRule[]>
  rules:  EvaluatedAlertRule[];

  get state(){
		return this._state;
	}

	set state( s : AlertStateFilter ){
		this._state = s;
		this.reload();
	}
  
  constructor( 
		private alertService : AlertService,
		public router: Router ) {
      super();
      
      this.state = AlertStateFilter.All;
  }

  reload(){
    this.waiting = true;

		this.rulesRequest = new ObservableEx<EvaluatedAlertRule[]>( this
			.alertService
			.getStates( this.state )
			.pipe(
				finalize( () => this.waiting = false ),
				tap(x => this.rules = [...x])) );
  }

  onTogglePause( rule: EvaluatedAlertRule ){
    this
			.alertService
			.pause( rule.id )
			.subscribe( 
				x => {
					rule.state = x.state;
					rule.newStateDate = <DateTime>moment();
					Notes.success( x.message )
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_PAUSE_ALERT ))
  }

  getFormattedTime( rule: EvaluatedAlertRule ){
		return moment( (<any>rule).newStateDate ).fromNow( true );
	}
	
	onNavigate( a: EvaluatedAlertRule ){
		this
			.router
			.navigate( [`${a.url}/edit/${a.panelId}`], { queryParams: { tab: 5 }  });
	}
}


