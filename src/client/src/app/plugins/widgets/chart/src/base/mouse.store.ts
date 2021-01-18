import { Inject, Injectable } from '@angular/core';
import { Panel, PANEL_TOKEN, TimeRangeStore } from 'common';
import { BehaviorSubject, Observable } from 'rxjs';
import { AXIS_X } from '../chart.m';

export interface DragRegion{
	start: MouseEvent;
	end: MouseEvent;
}

@Injectable()
export class MouseStore {

	private _down: BehaviorSubject<MouseEvent> = new BehaviorSubject(null);
	readonly down$: Observable<MouseEvent> = this._down.asObservable();

	private _up: BehaviorSubject<MouseEvent> = new BehaviorSubject(null);
	readonly up$: Observable<MouseEvent> = this._up.asObservable();

	private drag: BehaviorSubject<DragRegion> = new BehaviorSubject(null);
	readonly drag$: Observable<DragRegion> = this.drag.asObservable();

	private hover: BehaviorSubject<MouseEvent> = new BehaviorSubject(null);
	readonly hover$: Observable<MouseEvent> = this.hover.asObservable();

	get component(){
		return this
			.panel
			.widget
			?.component;
	}

	get chart(){
		return this
			.component
			.control
			.chart;
	}

	constructor( 
		@Inject( PANEL_TOKEN ) public panel: Panel,
		private time: TimeRangeStore ){
		
	}

	down( s: MouseEvent )  {
		this.drag.next( {
			start: s,
			end: s/*!? */
		} );

		this._down.next( s );

		(<any>s.target).setPointerCapture( 1 );
	}

	up( e: MouseEvent ){
		(<any>e.target).releasePointerCapture( 1 );

		this._up.next( e );

		if( !e.ctrlKey ){
			this.zoomIn();
		}

		this.drag.next( undefined );

		this.refresh();
	}

	move( m: MouseEvent ){
		this.hover.next( m );

		const d = this.drag.value;

		if( !d ){
			return;
		}

		this.drag.next( {
			start: d.start,
			end: m
		} )
	}

	leave( e: MouseEvent ){
		this.hover.next( undefined );

		this.refresh();
	}

	private refresh(){
		this.component.control.refresh();
	}

	private zoomIn(){
		const scaleX = this.chart.scales[ AXIS_X ];

		if( !this.drag.value?.end ){
			return;
		}

		const sx = this.drag.value.start.offsetX;
		const ex = this.drag.value.end.offsetX;

		const start = Math.min( sx, ex );
		const end = Math.max( sx, ex );

		const os = Math.max( start, scaleX.left );
		const oe = Math.max( scaleX.left,	Math.min( end, scaleX.right ));

		if( Math.abs( os - oe ) == 0 ){
			return;
		}

		const from = scaleX.getValueForPixel( os );
		const to = scaleX.getValueForPixel( oe );

		const minsDiff = Math.abs( from.diff( to, "minutes" ) );

		if( minsDiff >= 1 ){
			this.time.zoom( { from, to} )
		}
	}
}
