import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN } from 'common';
import { map } from 'rxjs/operators';
import { AggrFuncGroup, AggrFuncHelper, FuncObject } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';
import * as _ from 'lodash';
import { menuItems } from './func/picker/func-items';

@Component({
  selector: 'field-editor',
  templateUrl: './field.html'
})
export class FieldEditorComponent extends BaseQueryComponent  {

  index: number;
  fieldFuncItems = menuItems; 

  @Input() field: any;

  @Output() remove = new EventEmitter();
  @Output() add = new EventEmitter();

  get functions(): FuncObject[]{
    return this.field.functions;
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dsService: DataSourceService ){
      super( panel, dsService );
  }

  ngOnInit(){
    this.index = this
      .query
      .fields
      .indexOf( this.field );

    const flatFieldFuncItems = this
      .fieldFuncItems
      .map( p => p.items )
      .reduce( (a, b) => a.concat(b));

    this
      .field
      .functions
      .forEach( f => {
        if( f.param ){
          let s = flatFieldFuncItems.find( x => x.text === f.name );
          
          if( s && s.param && s.param.suggestions ){
            f.param.suggestions = [...s.param.suggestions];
          }
        }
      });
  }

  get fields$() {
    return this
      .proxy(`SHOW FIELD KEYS FROM \"${this.query.measurement}\"`)
      .pipe(
        map(x => {
          if( !x || 0 == x.length ){
            return null;
          }

          const fields = [...x[0].values.map(y => y[0])];
          return ( this.query.fields.length > 1 ) ? [ this.REMOVE, ...fields ] : fields;
        } ));
  }

  onFieldPick( field: string ){
    if( field === this.REMOVE ){
      this.remove.emit();
    } else{
      this.field.key = field; 
    }
  }
 
  onFuncPick( arg ){
    const fo = new FuncObject();
    fo.name = arg.label;

    if( arg.label == "field" ){
      this.add.emit();
      return;
    }

    if( arg.param )  {
      fo.param = _.cloneDeep( arg.param );
    }

    const alias = this.functions.find( x => 
      AggrFuncHelper.getGroup( x.name ) ==  AggrFuncGroup.Alias )

    const math = this.functions.find( x => 
      AggrFuncHelper.getGroup( x.name ) == AggrFuncGroup.Math )

    const len = this.functions.length;
		const funcs = this.functions

    switch( AggrFuncHelper.getGroup( arg.label ) ){
      case AggrFuncGroup.Aggregations:
      case AggrFuncGroup.Selectors:
        const duplicate = this
          .field
          .functions
          .find( x => 
            AggrFuncHelper.getGroup( x.name ) == AggrFuncGroup.Aggregations ||
            AggrFuncHelper.getGroup( x.name ) == AggrFuncGroup.Selectors );

        if( duplicate ){
          funcs[ 0 ] = fo;
        } else{
          funcs.splice( 0, 0, fo);
        }
        break;

        case AggrFuncGroup.Transformations:
          if( !alias ){
            funcs.push( fo );
          } else{
            funcs.splice( len - 1, 0, fo);
          }
          break;

        case AggrFuncGroup.Math:
          if( math && !alias ){
            funcs[ len -1 ] = fo;
          } else if( !math && alias ) {
            funcs.splice( len - 1, 0, fo);
          } else {
            funcs.push( fo );
          }
          break;

        case AggrFuncGroup.Alias:
          if( alias ){
            this.functions[ len -1 ] = fo;
          } else {
            this.functions.push( fo );
          }
          break;
    }
  }

  onFuncRemove( f: FuncObject ){
    const index = this.functions.indexOf( f );

    if( -1 !== index ){
      this.functions.splice( index, 1 );
    }
  }
}