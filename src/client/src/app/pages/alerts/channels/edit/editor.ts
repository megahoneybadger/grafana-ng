import { Component, ChangeDetectorRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AlertService, NotificationChannelType } from 'common';
import { BaseComponent } from '../../../base/base-component';
import { DropDownComponent, ErrorMessages, FadeInOutAnimation, Notes } from 'uilib';
import { ChannelEditFormService } from './channel-form.s';
import { finalize } from 'rxjs/operators';

@Component({
	selector: 'alert-channel-editor',
	templateUrl: './editor.html',
	animations: [FadeInOutAnimation],
	providers:[ ChannelEditFormService ],
})
export class AlertChannelEditorComponent extends BaseComponent {
  form:  FormGroup;
  isNew: boolean;
  id: number;

  testing: boolean = false;

  availableChannelTypes = DropDownComponent.wrapEnum( NotificationChannelType );
  NotificationChannelTypeRef = NotificationChannelType;

  get type(){
    return this.form.get( 'type' );
  }

  get name(){
    return this.form.get( 'name' );
  }

  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    protected channelFormService: ChannelEditFormService,
    private alertService: AlertService,
    private cdr: ChangeDetectorRef ){
      super();

      this
        .channelFormService
        .form$
        .subscribe( x => {
          this.form = x;
          this.ngAfterFormConnectInit();
        } );
  }

  ngAfterFormConnectInit(){
    this.isNew = this
      .route
      .snapshot
      .data['isNew'];

    if( this.isNew ) {
      this.initCreate();
    } else {
      this.initUpdate();
    }
  }

  initCreate(){
    this.form.patchValue( {
      type: NotificationChannelType.Telegram
    } )
  }

  initUpdate(){
    this.id = +this
      .route
      .snapshot
      .params['id'];

    this
      .alertService
      .getNotification( this.id )
      .subscribe( 
        nt => {
          this.form.patchValue( {
            type: nt.type
          } )

          setTimeout( () => this.form.patchValue( nt ) )
        },
        _ => {
          Notes.error( ErrorMessages.BAD_GET_ALERT_NOTIF );
          this.back()
        } );
  }

  onTypeChange( t: NotificationChannelType ){
    this.form.patchValue( {
      type: t
    } )

    this.cdr.detectChanges();
  }

  back(){
    this.router.navigate( ['/alerting/notifications'] );
  }

  onSubmit(){
    this.waiting = true;

    if( this.isNew ){
      this.create();
    } else {
      this.update();
    }
  }

  create(){
    this
      .alertService
      .createNotification( this.form.value )
      .pipe(
        finalize( () => this.waiting = false ) )
      .subscribe( 
        _ => {
          Notes.success( "Notification created" );
          this.back();
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CREATE_ALERT_NOTIF ) );
  }

  update(){
    this
      .alertService
      .updateNotification( this.id, this.form.value )
      .pipe(
        finalize( () => this.waiting = false ) )
      .subscribe( 
        _ => Notes.success( "Notification updated" ),
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_ALERT_NOTIF ) );
  }

  onTest(){
    this.testing = true;

    this
      .alertService
      .testNotification( this.form.value )
      .pipe(
        finalize( () => this.testing = false ) )
      .subscribe( 
        x => Notes.success( x.message ),
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_TEST_ALERT_NOTIF ) );
  }

}
