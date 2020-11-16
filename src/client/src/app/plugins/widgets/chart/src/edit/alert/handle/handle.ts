import { Component, ViewChild, ElementRef, Inject } from '@angular/core';
import { AlertEvalType, AlertEvaluator, Panel, PANEL_TOKEN } from 'common';
import { BaseChartEditorComponent } from '../../../base/chart-base-editor';
import { AXIS_Y_LEFT } from '../../../chart.m';

@Component({
	selector: 'alert-handle',
	templateUrl: './handle.html',
	styleUrls: [
		'./handle.scss']
})
export class AlertHandleComponent extends BaseChartEditorComponent {
	resizeFuncHandler: any;
	stopResizeFuncHandler: any;

	@ViewChild( "handle" ) handle : ElementRef;
	@ViewChild( "wrapper" ) wrapper : ElementRef;

	get handleMidHeight() : number{
		return 14;/*this
			.handle
			?.nativeElement
			.offsetHeight / 2*/14;
	}

	get scale(){
		return this.chartControl.scales[ AXIS_Y_LEFT ];;
	}

	get evaluator() : AlertEvaluator{
		const conds = this.alert?.conditions;

		return conds ? conds[ 0 ].evaluator : undefined;
	}

	get evaluatorParam1(){
		return this
			?.evaluator
			?.params[ 0 ];
	}

	get evaluatorParam2(){
		return this
			?.evaluator
			?.params[ 1 ];
	}

	set evaluatorParam1( v: any ){
		if( !this.evaluator ){
			return;
		}

		this
			.evaluator
			.params[ 0 ] = v;
	}

	set evaluatorParam2( v: any ){
		if( !this.evaluator ){
			return;
		}

		this
			.evaluator
			.params[ 1 ] = v;
	}

	get pixel1():number{
		return this.getPixel( this.evaluatorParam1 )
	}

	get pixel2():number{
		return this.getPixel( this.evaluatorParam2 )
	}

	getPixel( p: number ){
		if( !this.scale ){
			return;
		}

		let v = Math.max( this.scale.min, p );
		v = Math.min( this.scale.max, v );

		return this
			.scale
			?.getPixelForValue( v ) - this.handleMidHeight
	}

	get showSecondHandle(){
		switch( +this.evaluator?.type ){
			case AlertEvalType.IsWithinRange:
			case AlertEvalType.IsOutsideRange:
				return true;
		}

		return false;
	}

	constructor( @Inject( PANEL_TOKEN ) panel: Panel ){
		super( panel );

	}
	
	onGripClick(e, index){
		e.preventDefault();

		const offset = this.wrapper.nativeElement.getBoundingClientRect().top + window.scrollY;
		const top = offset + e.offsetY;

		let resizeFunc = function (e) {
      e.preventDefault();

			this.calculateValueForPixel( e.clientY - top, index );

			this.refresh();
    }

		let stopResizeFunc = (e) => {
      window.removeEventListener('mousemove', this.resizeFuncHandler, true);
			window.removeEventListener('mouseup', this.stopResizeFuncHandler, true);
		}
		
		this.resizeFuncHandler = resizeFunc.bind(this);
    this.stopResizeFuncHandler = stopResizeFunc.bind(this);

		window.addEventListener('mousemove', this.resizeFuncHandler, true);
    window.addEventListener('mouseup', this.stopResizeFuncHandler, true);
	}

	calculateValueForPixel( pix: number, index: number ){
		const minY = this.scale.getPixelForValue( this.scale.min ) - this.handleMidHeight;

		const maxY = -this.handleMidHeight;

		var pricePixel = Math.min( minY, Math.max( maxY, pix ) );
		var preciseValue = this.scale.getValueForPixel( pricePixel + this.handleMidHeight );
		var roundedValue = this.round( preciseValue );
	
		if( 1 == index ){
			this.evaluatorParam1 = roundedValue;
		} else {
			this.evaluatorParam2 = roundedValue;
		}
	}

	round( v: number ) : number{
		const dec1 = this.countDecimals( this.scale.max );
		const dec2 = this.countDecimals( this.scale.min );

		return +v.toFixed( Math.max( dec1, dec2 ) )
	}

	countDecimals(value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
	}
}


