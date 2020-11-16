import { Component, HostListener } from '@angular/core';
import { Annotation, TimeRangeStore } from 'common';
import { Subscription } from 'rxjs';
import { BaseChartComponent } from '../../base/chart-base';
import { ChartStore } from '../../base/chart.store';
import { DragRegion } from '../../base/mouse.store';
import { AXIS_X, AXIS_Y_LEFT } from '../../chart.m';

@Component({
  selector: 'annotation-dispatcher',
  templateUrl: './annotations.html'
})
export class AnnotationDispatcherComponent extends BaseChartComponent  {
	
	readonly MIN_LEFT_X = 65;

	offset: any;
	region: DragRegion;

	annotation: Annotation;

	epochEnd: number;
	epochStart: number;

	mouseUpSubs: Subscription;
	mouseDragSubs: Subscription;
	mouseHover: Subscription;

	showAddAnnot: boolean;
	showEditAnnot: boolean;

	get showViewAnnot(){
		return this.annotation?.overRoot || this.annotation?.overPopup;
  }
	
  constructor(
		public store: ChartStore,
		private time: TimeRangeStore ){
			super( store );

			this.mouseDragSubs = store
				.mouse
				.drag$
				.subscribe( x => this.region = x );

			this.mouseUpSubs = store
				.mouse
				.up$
				.subscribe( x => this.onMouseUp( x ) )

			this.mouseHover = store
				.mouse
				.hover$
				.subscribe( x => this.onMouseHover( x ) )
	}

	ngOnDestroy(){
		super.ngOnDestroy();
		this.mouseUpSubs?.unsubscribe();
		this.mouseDragSubs?.unsubscribe();
		this.mouseHover?.unsubscribe();
	}
	
	onMouseUp( e: MouseEvent ){
		if( !( e?.ctrlKey && this.region )){
			return;
		}

		const scaleX = this.scales[ AXIS_X ];
		const rangeStart = this.region.start;
		const rangeEnd = this.region.end;

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

		this.epochStart = this.time.converter.toEpoch( es );
		this.epochEnd = this.time.converter.toEpoch( ee );

		this.offset = this.getPopupLocation( e );

		setTimeout( () => this.showAddAnnot = true );
	}
	
	onEditAnnotation(){
		this.offset.left =  Math.max( this.MIN_LEFT_X, this.offset.left - 100 );
		// this.annotation.overRoot = false;
		// this.annotation.overPopup = false;
		this.showEditAnnot = true;
	}

	onMouseHover( e: MouseEvent ){
		if( !e || this.showAddAnnot || this.showEditAnnot ){
			return;
		}

		const candidates = []

		this
			.annotations
			.forEach( a => {
				const xOk = a.rect?.x1 <= e.offsetX && a.rect?.x2 >= e.offsetX;
				const yOk = a.rect?.y1 <= e.offsetY && a.rect?.y2 >= e.offsetY;

				if( xOk && yOk && a.id ){
					candidates.push( a );
				} else if( a.overRoot ) {
					setTimeout( () => a.overRoot = false, 100 );
				}
			});

		if( candidates.length > 0 ){
			let winner = candidates[ 0 ];

			candidates.forEach( x => {
				if( Math.abs( x.rect.x2 - x.rect.x1 ) <  Math.abs( winner.rect.x2 - winner.rect.x1 ) ){
					winner = x;
				}
			} );

			if( winner != this.annotation ){
				var regionOffset = ( winner.rect.x2 - winner.rect.x1 ) / 2 - 
					( e.offsetX - winner.rect?.x1 );

				this.offset = this.getPopupLocation( e, 100 + regionOffset );
				winner.overRoot = true;
				winner.overPopup = false;
				this.annotation = winner;
			}
		}

		if( !this.showViewAnnot ){
			this.annotation = undefined;
		}

		this.nativeControl.showAnnotView = ( undefined != this.annotation )

		this
			.nativeControl
			.canvas
			.style
			.cursor = ( this.showViewAnnot ) ? 'auto' : 'crosshair';
	}

	getPopupLocation( e: MouseEvent, xAdj = 0, yAdj = 0 ){
		const scaleY = this.scales[ AXIS_Y_LEFT ];
		var rect = this.nativeControl.canvas.getBoundingClientRect();
      
    const maxY = scaleY.bottom;
    
    return {
			left: Math.max( this.MIN_LEFT_X, e.clientX - 200 + xAdj ),
			top: maxY + rect.y + 5 + yAdj,
		}
	}
	
	@HostListener('document:keydown.escape', ['$event'])
  onEscPressed( _: KeyboardEvent) {
    this.showAddAnnot = this.showEditAnnot = false;
	}
}


	

		
