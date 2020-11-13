import { Component, Output, EventEmitter, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Annotation, AnnotationService, Moment } from 'common';
import { ChartStore } from '../../../base/chart.store';
import { BaseChartComponent } from '../../../base/chart-base';
import { ErrorMessages, Notes } from 'uilib';

@Component({
  selector: 'add-annotation',
  templateUrl: './add-annot.html',
  styleUrls: ['./add-annot.scss']
})
export class AddAnnotationComponent extends BaseChartComponent {
  desc: string;
  tags: string[] = []
  timeLabel: string;

  @Input() epochStart: number;
  @Input() epochEnd: number;

  @Output() close = new EventEmitter();

  storeSubs: Subscription;
  annotation: Annotation;

  //dashboard : Dashboard;

  chart: any;

  chartSubs : Subscription;
  
  constructor( 
    public store: ChartStore,
    private annotService: AnnotationService,
    //private annotsManager: AnnotationManager,
    //private store: DashboardStore,
    //private chartStore: ChartStore,
    //private timeManager: TimeManager 
    ){
      super( store );

    // this.chartSubs = chartStore
    //   .chart$
    //   .subscribe( x => this.chart = x )
  }

  ngOnInit(){
    console.log( this.epochStart );
    // this.storeSubs = this
    //   .store
    //   .dashboard$
    //   .subscribe( x => {
    //     if( !x?.error ){
    //       this.dashboard = x.dashboard;
    //     } 
    //   });

    // if( !this.chart?.widget.annotations ){
    //   this.chart.widget.annotations = [];
    // }

    // if( this.annotation ){
    //   this.timeLabel = this.timeManager.absoluteTzDateToString( this.annotation.time );

    //   this.desc = this.annotation.text;
    //   this.tags = [...this.annotation.tags];
    // } else {
    //   this
    //     .chart
    //     .widget
    //     .annotations
    //     .push( {
    //       time: moment( this.epochStart ),
    //       timeEnd: ( this.epochEnd != this.epochStart ) ?
    //         moment( this.epochEnd ) : undefined,
    //     } );

    //   this.timeLabel =  this.timeManager.absoluteTzDateToString( this.epochStart );

    //   this.chart.update();
    // }
  }
  
  ngOnDestroy(){
    // this.storeSubs.unsubscribe();
    // this.chartSubs.unsubscribe();

    // const w = this
    //   .chart
    //   .widget;
    
    // w.annotations = w
    //   .annotations
    //   .filter( x => x.id )

    // this.chart.update();
  }

  onSave(){
    if( this.annotation ){
      this.update();
    } else {
      this.create();
    }
  }

  create(){
    console.log( "create" );

    const annot = {
      time : this.epochStart,
      timeEnd: ( this.epochStart != this.epochEnd ) ? this.epochEnd : 0,
			dashboardId: 20, //this.dashboard.id,
      panelId: this.store.panel.id,

      text: this.desc,
      tags: [...this.tags]
    }

    let toAdd = _.omit(annot, 'time');
    toAdd.time = Moment.toDate( annot.time );

    this
			.annotService
      .create( annot )
      .pipe( 
        finalize( () => this.close.emit() ) )
			.subscribe( 
        x => {
          Notes.success( x.message );

          //this.annotsManager.update();
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CREATE_ANN ))
  }

  update(){
    // const annot = {
    //   time: this.annotation.time,
    //   timeEnd: this.annotation.timeEnd,
    //   text: this.desc,
    //   tags: [...this.tags],
    //   alertId: this.annotation.alert?.id
    // };

    // this
		// 	.annotService
    //   .update( this.annotation.id, annot )
    //   .pipe( 
    //     finalize( () => this.close.emit() ) )
		// 	.subscribe( 
    //     x =>{
    //       NotificationDispatcher.success( x.message );

    //       this.annotsManager.update();
    //     },
    //     e => NotificationDispatcher.error( 
		// 			e.error?.message ?? ResultMessages.BAD_UPDATE_ANN ))
  }

  onAddTag( e ){
		// const tag = e.target.value;

		// if( tag ) {
		// 	if( !this.tags ){
		// 		this.tags = [];
		// 	}

		// 	if( !this.tags.includes( tag )){
		// 		this.tags.push( tag );
		// 	}

		// 	e.target.value = '';
		// } 
	}

	onRemoveTag(tag){
    // event.stopPropagation();
		// const index = this.tags.indexOf( tag );

		// if( -1 !== index ){
		// 	this.tags.splice( index, 1 );
		// }
  }
  
  onDelete(){
    // this
		// 	.annotService
    //   .delete( this.annotation.id )
    //   .pipe( 
    //     finalize( () => this.close.emit() ) )
		// 	.subscribe( 
    //     x => {
    //       NotificationDispatcher.success( x.message );

    //       this.annotsManager.update();
    //     } ,
    //     e => NotificationDispatcher.error( 
		// 			e.error?.message ?? ResultMessages.BAD_DELETE_ANN ))
  }

}


	

		
