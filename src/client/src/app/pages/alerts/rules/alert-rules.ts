import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { finalize, tap } from 'rxjs/operators';
import { checkTakenTeamName } from 'src/app/pages/teams/pipes/team-name-taken'
import { DropDownComponent, ErrorMessages, Notes, ObservableEx } from 'uilib';
import { AlertService, AlertState, AlertStateFilter, Annotation } from 'common';

@Component({
  selector: 'alert-rules',
  templateUrl: './alert-rules.html',
})
export class AlertRulesComponent extends BaseComponent {
  _state: AlertStateFilter;
  filter: string;

  availableStates = DropDownComponent.wrapEnum( AlertStateFilter )

  rulesRequest: ObservableEx<any[]>
  rules =  [];

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

		this.rulesRequest = new ObservableEx<any[]>( this
			.alertService
			.getStates( this.state )
			.pipe(
				finalize( () => this.waiting = false ),
				tap( x => console.log( x ) ),
				tap(x => this.rules = [...x])) );

  }
  
  
  getStateClass( a: AlertState ){
    console.log( a );
    switch( a ){
      case AlertState.Alerting:
        return 'alert-state-critical'; 

      case AlertState.Pending:
        return 'alert-state-warning'; 

      case AlertState.NoData:
        return 'alert-state-warning'; 

      case AlertState.Unknown:
      case AlertState.Paused:
        return 'alert-state-paused'; 

      default: return 'alert-state-ok';
    }
  }

  getStateIconClass( a: AlertState ){
    switch( a ){
      case AlertState.Alerting:
        return 'icon-gf icon-gf-critical'; 

      case AlertState.NoData:
        return 'fa fa-question'; 

      case AlertState.Pending:
        return 'fa fa-exclamation'; 

      case AlertState.Ok:
        return 'icon-gf icon-gf-online'; 

      case AlertState.Paused:
        return 'fa fa-pause'; 

      default: return 'fa fa-question';
    }
  }
}


