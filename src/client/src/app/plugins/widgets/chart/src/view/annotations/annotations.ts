import { Component } from '@angular/core';
import { Annotation, TimeRangeStore } from 'common';
import { Subscription } from 'rxjs';
import { BaseChartComponent } from '../../base/chart-base';
import { ChartStore } from '../../base/chart.store';
import { DragRegion, MouseStore } from '../../base/mouse.store';
import { AXIS_X, AXIS_Y_LEFT } from '../../chart.m';

@Component({
  selector: 'annotation-dispatcher',
  templateUrl: './annotations.html'
})
export class AnnotationDispatcherComponent extends BaseChartComponent  {
	
	offset: any;
	region: DragRegion;

	showAddAnnot: boolean = false;
	showEditAnnot: boolean = false;
	annotToShow: Annotation;

	epochEnd: number;
	epochStart: number;

	mouseSubs: Subscription;
	regionSubs: Subscription;
	
  constructor(
		public store: ChartStore,
		private mouse: MouseStore,
		private time: TimeRangeStore ){
			super( store );

			this.regionSubs = mouse
				.drag$
				.subscribe( x => this.region = x );

			this.mouseSubs = mouse
				.up$
				.subscribe( x => this.onMouseUp( x ) )
	}

	ngOnDestroy(){
		super.ngOnDestroy();
		this.mouseSubs?.unsubscribe();
		this.regionSubs?.unsubscribe();
	}
	
	onMouseUp( e: MouseEvent ){
		if( !( e?.ctrlKey && this.region )){
			return;
		}

		const chart = this.component.control.chart;
		const scaleX = chart.scales[ AXIS_X ];

		const dr = this.region;

		const rangeStart = dr.start;
		const rangeEnd = dr.end ?? dr.start;

		let start = Math.min( rangeStart.offsetX, rangeEnd.offsetX );
		let end = Math.max( rangeStart.offsetX, rangeEnd.offsetX );

		start = Math.max( start, scaleX.left );
		end = Math.min( end, scaleX.right );

		const es = scaleX
			.getValueForPixel( start )
			.valueOf();

		const ee = this.epochEnd = scaleX
			.getValueForPixel( end )
			.valueOf();

			console.log( es );

		this.epochStart = this.time.converter.toEpoch( es );
		this.epochEnd = this.time.converter.toEpoch( ee );

		this.offset = this.getPopupLocation( chart, e );

		setTimeout( () => this.showAddAnnot = true );
	}

	getPopupLocation( chart, e, xAdj = 0, yAdj = 0 ){
		const scaleX = chart.scales[ AXIS_Y_LEFT ];
		var rect = chart.canvas.getBoundingClientRect();
      
    const maxY = scaleX.bottom;
    
    return {
			left: e.clientX - 200 + xAdj ,
			top: maxY + rect.y + 5 + yAdj,
		}
  }
  // offset: any;
	// @ViewChild('popupAdd', { read: ElementRef }) public popupAdd: ElementRef;
  // @ViewChild('popupEdit', { read: ElementRef }) public popupEdit: ElementRef;
  
	// showAddAnnot: boolean = false;
	// showEditAnnot: boolean = false;
	// annotToShow: any;
	// epochEnd: number;
	// epochStart: number;
  
  // get showViewAnnot(){
	// 	return this.annotToShow?.overRoot || this.annotToShow?.overPopup;
  // }

  // get animationSettings(){
  //   return { 
  //     type: 'fade',
  //     duration: 150
  //   };
	// }

	// constructor( private timeManager: TimeManager ){
	// 	super();
	// }

  // create( chart, e ){
	// 	const scaleX = chart.scales['x-axis-0'];
	// 	const dr = chart.dragRegion;

	// 	let start = Math.min( dr.start.offsetX, dr.end.offsetX );
	// 	let end = Math.max( dr.start.offsetX, dr.end.offsetX );

	// 	start = Math.max( start, scaleX.left );
	// 	end = Math.min( end, scaleX.right );

	// 	const es = scaleX
	// 		.getValueForPixel( start )
	// 		.valueOf();

	// 	const ee = this.epochEnd = scaleX
	// 		.getValueForPixel( end )
	// 		.valueOf();

	// 	this.epochStart = this.timeManager.convertTzEpoch( es );
	// 	this.epochEnd = this.timeManager.convertTzEpoch( ee );
	
	// 	this.offset = this.getPopupLocation( chart, e );
		
	// 	setTimeout( () => this.showAddAnnot = true, 0 );
  // }
  
  // onHover( chart, e ){
	// 	if( this.showAddAnnot || this.showEditAnnot ){
	// 		return;
	// 	}

	// 	const candidates = []
	
	// 	chart
	// 		.widget
	// 		.annotations
	// 		?.forEach( a => {
	// 			const xOk = a.rect?.x1 <= e.offsetX && a.rect?.x2 >= e.offsetX;
	// 			const yOk = a.rect?.y1 <= e.offsetY && a.rect?.y2 >= e.offsetY;

	// 			if( xOk && yOk && a.id ){
	// 				candidates.push( a );
	// 			} else if( a.overRoot ) {
	// 				setTimeout( () => a.overRoot = false, 100 );
	// 			}
	// 		});

	// 	if( candidates.length > 0 ){
	// 		let winner = candidates[ 0 ];

	// 		candidates.forEach( x => {
	// 			if( Math.abs( x.rect.x2 - x.rect.x1 ) <  Math.abs( winner.rect.x2 - winner.rect.x1 ) ){
	// 				winner = x;
	// 			}
	// 		} );

	// 		if( winner != this.annotToShow ){
	// 			var regionOffset = ( winner.rect.x2 - winner.rect.x1 ) / 2 - 
	// 				( e.offsetX - winner.rect?.x1 );

	// 			this.offset = this.getPopupLocation( chart, e, 100 + regionOffset );
	// 			winner.overRoot = true;
	// 			winner.overPopup = false;
	// 			this.annotToShow = winner;
	// 		}
	// 	}

	// 	if( !this.showViewAnnot ){
	// 		this.annotToShow = undefined;
	// 	}

	// 	chart.showAnnotView = ( undefined != this.annotToShow )

	// 	chart
	// 		.chart
	// 		.canvas
	// 		.style
	// 		.cursor = ( chart.showAnnotView ) ? 'auto' : 'crosshair';
  // }

  // onEditAnnotation(){
	// 	this.offset.left -= 100;
	// 	this.annotToShow.overRoot = false;
	// 	this.annotToShow.overPopup = false;
	// 	this.showEditAnnot = true;
  // }
	
	// @HostListener('document:keydown.escape', ['$event'])
  // onEscPressed(event: KeyboardEvent) {
  //   this.showAddAnnot = this.showEditAnnot = false;
  // }
    
  // getPopupLocation( chart, e, xAdj = 0, yAdj = 0 ){
	// 	const scaleYA = chart.scales[ "A" ];
	// 	var canvas = document.getElementById( e.target.id )
	// 	var rect = canvas.getBoundingClientRect();
      
  //   const maxY = scaleYA.bottom;
    
  //   return {
	// 		left: e.clientX - 200 + xAdj ,
	// 		top: maxY + rect.y + 5 + yAdj,
	// 	}
  // }
}


	

		
