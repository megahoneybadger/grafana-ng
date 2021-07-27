import { Inject, Injectable } from "@angular/core";
import { Panel, PANEL_TOKEN, DataSet, Moment } from 'common';
import { WidgetConsumer } from "./widget-consumer";
import { ColumnStyleRule, ColumnType } from "../grid.m";
import { getDateMeta } from "@fullcalendar/core";

import * as moment_ from 'moment';
import { AxisUnitHelper } from "uilib";
const moment = moment_;

@Injectable()
export class DataFormatter extends WidgetConsumer {

	get rules(){
		return this.widget.rules;
	}
  
	constructor ( @Inject( PANEL_TOKEN ) panel: Panel ) {
			super( panel );
	}

	getRules( cols: string[] ) : Map<string,ColumnStyleRule>{
		const map = new Map<string, ColumnStyleRule>();

		for( let i = 0; i < cols.length; ++i ){
			const c = cols[ i ];
			map.set( c, this.getRule( c ) );
		}

		return map;
	}

	getRule( col: string ) : ColumnStyleRule {
		for( let i = 0; i < this.rules.length; ++i ){
			let rule = this.rules[ i ];
			let key = rule.key;

			const regex = this.validateRegex( key );

			let match = ( regex ) ?
					regex.test( col ) : 
					( 0 == col.localeCompare( key, undefined, { sensitivity: 'base' }));

			if( match ) {
				return rule;
			}
		}
	}

	getColumnHeader( col: string, rule: ColumnStyleRule ){
		const mappedCol = rule?.header;

		return mappedCol?.length > 0 ? mappedCol : col;
	}

	// getColumnHeader( col: string ){
	// 	return this.getColumnHeaderByRule( col, this.getRule( col ) ) ;
	// }

	getValue( rule: ColumnStyleRule, v: any ){
		if( !rule ){
			return v;
		}

		if( v === null || v === undefined ){
			return '-'; //todo
		}

		switch( rule.type ){
			case ColumnType.Date:
				return Moment.format( v, rule.format);

			case ColumnType.String:
				return this.getString( v );

			case ColumnType.Number:
				const decimals = Math.min( 7, rule.decimals ?? 2 );
				return isNaN( v ) ? v : AxisUnitHelper.getFormattedValue( v, rule.unit, decimals )
		}

		return v
	}

	private getString( v: any ){
		return v;
	}


	private validateRegex(pattern: string) : RegExp {
    let parts = pattern.split('/'),
      regex = pattern,
      options = "";

		if( parts.length == 1 ){
			return undefined;
		}
		
    if (parts.length > 1) {
			regex = parts[1];
			options = parts[2];
    }

    try {
      return RegExp(regex, options);
    }
    catch(e) {
       return undefined;
    }
}


}



