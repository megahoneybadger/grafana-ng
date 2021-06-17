import { Inject, Injectable } from "@angular/core";
import { Panel, PANEL_TOKEN } from "common";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { DataProvider } from "./data-provider";
import { Dom, easing, Runner } from "@svgdotjs/svg.js";
import { Element } from "@svgdotjs/svg.js";
import { Point } from "@svgdotjs/svg.js";
import { Matrix } from "@svgdotjs/svg.js";
import { MatrixTransformParam } from "@svgdotjs/svg.js";
import { DataSet } from "../singlestat.m";
import { WidgetConsumer } from "./widget-consumer";


@Injectable()
export class ValueDispatcher extends WidgetConsumer {

	dataSubs: Subscription;

	constructor( 
		@Inject( PANEL_TOKEN ) panel: Panel,
		private dp: DataProvider ){

			super( panel );

			this.dataSubs = dp
				.data$
				.subscribe( x => this.bind( x ) );
	}

	destroy(){
		this.dataSubs?.unsubscribe();
	}

	private bind( data: DataSet[] ){
		
		const block = data[ 0 ];
		console.log( block );
	}

}

