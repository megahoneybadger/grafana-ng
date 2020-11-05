import { Component, Inject } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN } from 'common';
import { BaseQueryComponent } from '../query-base';
import * as _ from 'lodash';
import { GroupByFillOptions, GroupByObject, 
  GroupByOption, GroupByTimeOptions, MetricVars, OrderByTime } from '../../../metrics.m';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'group-by-editor',
  templateUrl: './group-by.html'
})
export class GroupByEditorComponent extends BaseQueryComponent  {

  availableCommands : Array<GroupByCommand>;
  selectedCommands : Array<GroupByCommand>;
  OrderByTimeRef = OrderByTime;

  get limit() : number {
		return this.query.limit;
	}

	set limit( l: number ){
    this.query.limit = l;
    
    if( !l ){
      this.needRebuild();
    }
  }
  
  get slimit() : number {
		return this.query.slimit;
	}

	set slimit( l: number ){
    this.query.slimit = l;
    
    if( !l ){
      this.needRebuild();
    }
	}

	get time() {
		return this.groupBy.find( x => x.type == GroupByOption.Time );
	}

	get timeValue() {
		return this.time.params[ 0 ];
  }
  
  set timeValue( v: string ){
    if( v == this.REMOVE ){
      const index = this
        .groupBy
        .findIndex( x=> x.type == GroupByOption.Time );

      if( -1 !== index ){
        this.groupBy.splice( index, 1 );
      }
		} else{
			this.time.params = [ v ];
    }
    
    this.needRebuild();
  }

	get tags() {
		return this.query.groupBy.filter( x => x.type == GroupByOption.Tag );
	}

	get fill() {
		return this.groupBy.find( x => x.type == GroupByOption.Fill );
	}

	get fillValue() {
		return this.fill.params[ 0 ];
	}

	set fillValue( v: string ){
    if( v == this.REMOVE ){
      const index = this
        .groupBy
        .findIndex( x=> x.type == GroupByOption.Fill );

      if( -1 !== index ){
        this.groupBy.splice( index, 1 );
      }
		} else{
			this.fill.params = [ v ];
    }
    
    this.needRebuild();
  }
  	
  get timeOptions$() {
    return of( [this.REMOVE, ...Object.values(GroupByTimeOptions)] );
	}

	get fillOptions$(){
		return of( [this.REMOVE, ...Object.values(GroupByFillOptions)] );
  }
  
  get groupByOptions$(){
		var options = [];

		if( !this.fill ){
			options.push( this.availableCommands[ 0 ].text );
		}

		if( !this.time ){
			options.push( this.availableCommands[ 1 ].text );
		}

		if( !this.query.limit ){
			options.push( this.availableCommands[ 2 ].text );
		}

		if( !this.query.slimit ){
			options.push( this.availableCommands[ 3 ].text );
		}

		if( this.query.order != OrderByTime.Desc ){
			options.push( this.availableCommands[ 4 ].text );
		}

		const q = (this.query.measurement) ?
			`SHOW TAG KEYS from ${this.query.measurement}` :
			`SHOW TAG KEYS`;

		return this
			.proxy(q)
			.pipe(
				map(x => {
					const tags = (!x.length) ?
						[] : x[0].values.reduce((acc, value) => acc.concat(value), []);

					this.availableCommands = this
						.availableCommands
						.filter( x => x.type != GroupByCommandType.Tag )
						
					tags.forEach( e => this.availableCommands.push( 
						new GroupByCommand( GroupByCommandType.Tag, `tag(${e})`, e )));

					const tagCommands = this
						.availableCommands
						.filter( c => c.type == GroupByCommandType.Tag )
						.filter( c => !this.query.groupBy.find( x =>
							x.type == GroupByCommandType.Tag &&	x.params[ 0 ] == c.value ) )
						.map( c => c.text )

					return [ ...options, ...tagCommands	];
				}))

	}


  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dsService: DataSourceService ){
      super( panel, dsService );

      this.selectedCommands = [];

      this.availableCommands = [
        new GroupByCommand( GroupByCommandType.Fill, "fill(null)", "null" ),
        new GroupByCommand( GroupByCommandType.Time, "time($interval)", MetricVars.TIME_INTERVAL ),
        new GroupByCommand( GroupByCommandType.Limit, "LIMIT", 10 ),
        new GroupByCommand( GroupByCommandType.SLimit, "SLIMIT", 10 ),
				new GroupByCommand( GroupByCommandType.OrderBy, "ORDER BY time DESC" )]
	}
  
	onOptionPick( e: string ){
    var command = this
      .availableCommands
      .find( x => x.text == e );

    if( !command ){
      return 
    }

    this.selectedCommands.push( command );
    
		switch( command.type ){
      case GroupByCommandType.Time:
				this.groupBy.push( new GroupByObject( GroupByOption.Time, [command.value] ) );
        break;
        
			case GroupByCommandType.Fill:
				this.groupBy.push( new GroupByObject( GroupByOption.Fill, [command.value] ) );
				break;

			case GroupByCommandType.Limit:
				this.query.limit = command.value;
				break;

				case GroupByCommandType.SLimit:
				this.query.slimit = command.value;
				break;

			case GroupByCommandType.OrderBy:
				this.query.order = OrderByTime.Desc;
				break;

			case GroupByCommandType.Tag:
				this.groupBy.push( new GroupByObject( GroupByOption.Tag, [command.value] ) );
				break;
    }
    
    this.needRebuild()
  }

  onRemoveTag( t: string ){
    this.query.groupBy = this
      .groupBy
      .filter( x => !( x.type == GroupByOption.Tag && x.params[ 0 ] == t ) );

    this.needRebuild();
	}
}

class GroupByCommand{
	constructor( 
		public type:GroupByCommandType,
		public text: string,
		public value: any = undefined ){

	}
}

enum GroupByCommandType{
	Fill,
	Time,
	Tag,
	Limit,
	SLimit,
	OrderBy
}