import { Component, Output, EventEmitter, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { Annotation, AnnotationService, TimeRangeStore } from 'common';
import { ChartStore } from '../../../base/chart.store';
import { BaseChartComponent } from '../../../base/chart-base';
import { ErrorMessages, Notes } from 'uilib';

@Component({
  selector: 'edit-annotation',
  templateUrl: './edit-annot.html',
  styleUrls: ['./edit-annot.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EditAnnotationComponent extends BaseChartComponent {
  timeLabel: string;

  @Input() epochStart: number;
  @Input() epochEnd: number;

  @Output() close = new EventEmitter();
  @Input() annotation: Annotation;

  storeSubs: Subscription;
  
  constructor( 
    public store: ChartStore,
    private annotService: AnnotationService,
    private time: TimeRangeStore ){
      super( store );

  }

  ngOnInit(){
    if( !this.annotation ){
      this.annotation = Annotation.create( this.epochStart, this.epochEnd );
      this.annotations.push( this.annotation );

      this.refresh();
    }

    this.timeLabel = this
      .time
      .converter
      .toDateTimeString( this.annotation.time );
  }
 
  ngOnDestroy(){
    this.panel.annotations = this.annotations.filter( x => x.id )

    this.refresh();
  }

  onSave(){
    if( this.annotation.id ){
      this.onUpdate();
    } else {
      this.onCreate();
    }
  }

  onCreate(){
    this.annotation.panelId = <number>this.panel.id;
    this.annotation.dashboardId = this.dashboardId;
    delete this.annotation.rect;

    this
			.annotService
      .create( this.annotation )
      .pipe( 
        finalize( () => this.close.emit() ) )
			.subscribe( 
        x => {
          Notes.success( x.message );
          
          this
            .store
            .annotationStore
            .update();
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CREATE_ANN ))
  }

  onUpdate(){
    const annot = {
      time: this.annotation.time,
      timeEnd: this.annotation.timeEnd,
      text: this.annotation.text,
      tags: [...this.annotation.tags],
      alertId: this.annotation.alert?.id
    };

    this
			.annotService
      .update( this.annotation.id, annot )
      .pipe( 
        finalize( () => this.close.emit() ) )
			.subscribe( 
        x =>{
          Notes.success( x.message );

          this
            .store
            .annotationStore
            .update();
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_ANN ))
  }
  
  onDelete(){
    this
			.annotService
      .remove( this.annotation.id )
      .pipe( 
        finalize( () => this.close.emit() ) )
			.subscribe( 
        x => {
          Notes.success( x.message );

          this
            .store
            .annotationStore
            .update();
        } ,
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_ANN ))
  }
}


	

		
