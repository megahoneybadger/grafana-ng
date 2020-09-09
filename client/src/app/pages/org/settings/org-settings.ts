import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription, forkJoin } from 'rxjs';

import { Preferences } from 'src/app/core/models/settings';
import { finalize } from 'rxjs/operators';

import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';
import { AuthService } from 'src/app/core/services/auth-service';
import { DashboardService } from 'src/app/core/services/dashboard.s';
import { OrgService } from 'src/app/core/services/orgs.s';
import { BaseComponent } from '../../base/base-component';

@Component({
  selector: 'org-settings',
  templateUrl: './org-settings.html',

  providers:[
    OrgService,
    DashboardService,
  ]
})
export class OrgSettingsComponent extends BaseComponent {

  formProfile: FormGroup;
  loaderPrefs$: Observable<[Preferences,any]>;

  waitingProfile: boolean = false;
  waitingPrefs: boolean = false;

  userSubs: Subscription;
  
  get name() {
		return this.formProfile.get('name');
	}

  constructor( 
    private authService: AuthService,
    private orgService: OrgService,
    private dsService: DashboardService ) {
    super();

    this.formProfile = new FormGroup({
      'name': new FormControl( null, Validators.required )
    });

    this.userSubs = this
      .authService
      .user$
      .subscribe( x => {
        this.formProfile.patchValue({
          name: x.orgName
        });

        this.loaderPrefs$ = forkJoin(
          this.orgService.getPreferences(),
          this.dsService.search( 'starred=true' ));
      });
  }

  ngOnDestroy(){
		this.userSubs.unsubscribe();
  }

  onSubmitProfile(){
    this.waitingProfile = true;
    const updatedOrg = this.formProfile.value;
    
    console.log( updatedOrg );

		this
			.orgService
			.updateCurrentProfile( updatedOrg )
			.pipe( 
				finalize( () => this.waitingProfile = false ))
			.subscribe( 
				x => {
          Notes.success( x.message );
          this.authService.updateToken( x.token );
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_ORG ) );
  }

  onSubmitPreferences( p: Preferences ){
    console.log( p );
    this.waitingPrefs = true;
		
		this
			.orgService
			.updatePreferences( p )
			.pipe( 
				finalize( () => this.waitingPrefs = false ))
      .subscribe( 
        x => {
          Notes.success( x.message );
          this.authService.updateToken( x.token );
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_ORG_PREF ) );
    }
}
