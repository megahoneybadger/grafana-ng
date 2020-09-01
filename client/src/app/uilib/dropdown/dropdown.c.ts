import { Component, Input, Output, EventEmitter, ContentChild, TemplateRef, forwardRef } from '@angular/core';
import { DropDownValueTemplate, DropDownSelectedValueTemplate } from './directives';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {SelectItem} from 'primeng/api';

import * as _ from 'lodash';

@Component({
  selector: 'ed-dropdown',
  templateUrl: './dropdown.c.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownComponent),  // replace name as appropriate
      multi: true
    }
  ],
  styleUrls: [ 'dropdown.c.css' ]
})
export class DropDownComponent {

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

  @Output() selectionChange = new EventEmitter();
  @Output() dropClick = new EventEmitter();

  @ContentChild(DropDownValueTemplate)
    valueTemplate: TemplateRef<DropDownValueTemplate> 

  @ContentChild(DropDownSelectedValueTemplate)
    selectedValueTemplate: TemplateRef<DropDownSelectedValueTemplate> 
  
  private _value: any = '';
  
  private onChange: any = () => { };
  private onTouched: any = () => { };

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

  forceValue( v : any ){
    this._value = v;
    this.onChange(v);
  }

  getStyle(){
    if( this.noBorders ){
      return {
        border: '1px solid var(--border1)',
        backgroundColor: '#09090b',
        borderRadius:'0px'
      }
    }

    return( this.label ) ? {} : {
      border: 'solid 1px var(--border1)',
      borderRadius:'3px'
    }
        
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
  
  onBlur() {
    this.onTouched();
  }

  writeValue(value: any) {
    if (value !== this._value) {
      this._value = value;
    }
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
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
    return arr
      .map( x => {
        return {
          label: ( labelProp ) ? x[ labelProp ] : x.toString(),
          value: x
        }
      } );
  }
}

// Dropdown.prototype.onInputFocus = function (event) {
//   setTimeout(() => {
//     this.focused = true;
//     this.onFocus.emit(event);
//   });
// };
// Dropdown.prototype.onInputBlur = function (event) {
//   setTimeout(() => {
//     this.focused = false;
//     //this.onModelTouched();
//     //this.onBlur.emit(event);
//   });
// };

