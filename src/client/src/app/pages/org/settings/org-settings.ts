import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription, forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ErrorMessages, Notes } from 'uilib';
import { BaseComponent } from '../../base/base-component';
import { OrgService, DashboardService, Preferences, AuthService } from 'common';

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
