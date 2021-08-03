import { Inject, Injectable } from "@angular/core";
import { Panel, PANEL_TOKEN, DataSet, Moment } from 'common';
import { WidgetConsumer } from "./widget-consumer";
import { ColorMode, ColumnStyleRule, ColumnType, GridValueItem } from "../grid.m";
import { getDateMeta } from "@fullcalendar/core";

import * as moment_ from 'moment';
import { AxisUnitHelper } from "uilib";
import { SortEvent } from "primeng/api";
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

	getValue( rule: ColumnStyleRule, v: any ) : GridValueItem{
		if( !rule ){
			return new GridValueItem( v, v );
		}

		if( v === null || v === undefined ){
			return new GridValueItem( "-", undefined );
		}

		switch( rule.type ){
			case ColumnType.Date:
				return new GridValueItem( Moment.format( v, rule.format), v );

			case ColumnType.String:
				return this.getString( rule, v );

			case ColumnType.Number:
				return this.getNumber( rule, v );
		}

		return v
	}

	private getNumber( rule: ColumnStyleRule, v: any) : GridValueItem{
		const decimals = Math.min( 7, rule.decimals ?? 2 );

		const text = isNaN( v ) ?
			v : AxisUnitHelper.getFormattedValue( v, rule.unit, decimals )

		const color =  this.getColor( rule, v );

		const foreground = ( rule.colorMode == ColorMode.Text ) ? color : "";
		const background = ( rule.colorMode == ColorMode.Cell ) ? color : "";

		return new GridValueItem( text, v, foreground, background )
	}

	private getString(  rule: ColumnStyleRule, v: any ){
		return new GridValueItem( v, v )
	}

	private getColor( rule: ColumnStyleRule, v: any ){
    const thresholds = rule.thresholds;

		if( !thresholds || thresholds.length == 0 ){
			return;
		}  

    const arr = thresholds
      ?.filter( x => x.value !== undefined )
      .sort( ( a, b ) => b.value - a.value );

    let color;

    for( let i = 0; i < arr.length; ++i ){
      const t = arr[ i ];

      if( v >= t.value ){
        color = t.color;
        break;
      }
    }

    if( !color && thresholds.length > 0 ){
      color = thresholds[ 0 ].color;
    }

    return color;
  }


	sort( event: SortEvent ){
		event.data.sort((data1, data2) => {
      let value1 = data1[event.field]?.value;
      let value2 = data2[event.field]?.value;

      if( event.order > 0 ){
        if(value1 < value2) { return -1; }
        if(value2 > value2) { return 1; }
      } else{
        if(value1 > value2) { return -1; }
        if(value2 < value2) { return 1; }
      }
      
      return 0;
    });
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



