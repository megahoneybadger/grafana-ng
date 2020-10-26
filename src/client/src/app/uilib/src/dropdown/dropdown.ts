import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef, forwardRef, ViewEncapsulation } from '@angular/core';
import { DropDownValueTemplate, DropDownSelectedValueTemplate } from './directives';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {SelectItem} from 'primeng/api';

import * as _ from 'lodash';
import { BaseNgModelComponent } from '../base/ng-model-cmp';

@Component({
  selector: 'ed-dropdown',
  templateUrl: './dropdown.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),  // replace name as appropriate
      multi: true
    }
  ],
  styleUrls: [ 'dropdown.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class DropDownComponent extends BaseNgModelComponent {

  @Input() data: any;
  @Input() disabled :boolean;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() tooltip: string;
  @Input() loading: boolean = false;
  @Input() readonly: boolean = false;

  @Input() labelWidth:number;
  @Input() width: number;

  @Input() noBorders: boolean = false;
  @Input() prettySelection = false;

  @Output() selectionChange = new EventEmitter<ValueChangedEventArgs>();
  @Output() dropClick = new EventEmitter();

  @ContentChild(DropDownValueTemplate) valueTemplate: DropDownValueTemplate;
  @ContentChild(DropDownSelectedValueTemplate) selectedValueTemplate: DropDownSelectedValueTemplate; 

  get value(): any {
    return this._value;
  };
  
  set value(v: any) {
    if (v !== this._value) {
      const oldValue = this._value;
      this._value = v;
      this.onChange(v);
  
      this.selectionChange.emit( {
        newValue: this._value,
        oldValue: oldValue
      });
    }
  }

  forceValue( v : any = undefined ){
    this._value = v;
    this.onChange(v);
  }

  forceValueAsync( v : any = undefined ){
    setTimeout( ()=> this.forceValue( v ) )
  }

  getStyleClass(){
    return ( this.noBorders ) ? 'no-borders' : ( ( this.label ) ? '' : 'no-label' );
  }

  getLabelWidth(){
    return {
      [`width-${this.labelWidth}`]: (this.labelWidth)
    }
  }

  getContentClass(){
    return {
      'prettySelection': this.prettySelection,
      [`width-${this.width}`]: (this.width)
    }
  }

  getWrapperWidth(){
    return ( this.label || this.labelWidth ) ?
      {} : {
        [`width-${this.width}`]: (this.width)
      };
  }

  getDropDownIcon(){
    return this.loading ? "fa fa-spinner fa-spin" : "fa fa-caret-down"
  }
 
  static wrapEnum( en: any ) : SelectItem[] {
    return Object
      .keys( en )
      .filter( x => isNaN( +x ) )
      .map( x => {
        return {
          label: _.startCase(x.toString()),
          value: en[ x ]
        }
      } );
  }

  static wrapArray( arr: any[], labelProp: string = undefined ) : SelectItem[] {
    if( !arr ){
      return [];
    }

    return arr
      .map( x => {
        return {
          label: ( labelProp ) ? x[ labelProp ] : x.toString(),
          value: x
        }
      } );
  }
}

export interface ValueChangedEventArgs{
  newValue: any;
  oldValue: any;
}
