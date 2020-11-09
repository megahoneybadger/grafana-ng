import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { finalize } from 'rxjs/operators';
import { checkTakenTeamName } from 'src/app/pages/teams/pipes/team-name-taken'
import { ErrorMessages, Notes } from 'uilib';
import { TeamService } from 'common';

@Component({
  selector: 'notification-channels',
  templateUrl: './notif-channels.html',
})
export class NotificationChannelsComponent extends BaseComponent {

  
  constructor( 
	
		public router: Router ) {
      super();
      
    
  }
}
