import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { mergeMap } from 'rxjs/operators';
import { Panel, TimeRangeStore, PluginActivator, PANEL_TOKEN, DataSet } from 'common';
import { WidgetConsumer } from "./widget-consumer";
import { GridModel, GridTransform, GridSchema, GridSchemaItem } from "../grid.m";



@Injectable()
export class DataFormatter extends WidgetConsumer {

	get rules(){
		return this.widget.rules;
	}
  
	constructor ( @Inject( PANEL_TOKEN ) panel: Panel ) {
			super( panel );
	}

	getColumnHeader( col: string ){

		const rule = this
			.rules
			.find( r => new RegExp( r.key ).test( col ) );

		console.log( rule );

		//return rule?.header ?? col;

		return ( rule ) ? rule.header : col;
	}


}



