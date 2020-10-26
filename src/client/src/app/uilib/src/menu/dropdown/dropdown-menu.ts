import { Component, Input, forwardRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {SelectItem, MenuItem} from 'primeng/api';
import * as _ from 'lodash';
import { ContextMenuComponent } from '../context/context-menu';
import { DropDownComponent } from '../../dropdown/dropdown';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';

@Component({
  selector: 'ed-dropdown-menu',
  templateUrl: './dropdown-menu.html',
  styleUrls: [ 
    '../../dropdown/dropdown.scss',
    './dropdown-menu.scss' ],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownMenuComponent),  // replace name as appropriate
      multi: true
    }
  ]
})
export class DropDownMenuComponent extends BaseNgModelComponent {
  _dataDropDown : SelectItem[];
  _itemsContextMenu : MenuItem[];
  _value: any;

  @Input() valueProperty : string = '';
  @Input() disabled :boolean;
  @Input() label: string;
  @Input() tooltip: string;

  @Input() labelWidth:number;
  @Input() width: number;

  @Input() loading: boolean;
  
  @ViewChild( ContextMenuComponent ) menu: ContextMenuComponent;

  @Input() set items(arr: MenuItem[] ){
    const flat = arr
      .map( x => x.items )
      .reduce((a, b) => a.concat(b));

    flat.forEach( x => x.command = ( y ) => {
      const item = this
        ._dataDropDown
        .find( x => x.value[this.valueProperty] == y.item[this.valueProperty] )

      this.value = item.value;
    } );

    this._dataDropDown = DropDownComponent.wrapArray( flat, 'label' );
    this._itemsContextMenu = arr;
  }

  getLabelWidth(){
    return {
      [`width-${this.labelWidth}`]: (this.labelWidth)
    }
  }

  getContentClass(){
    return {
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

  get value(): any {
    return this._value;
  };
 
  set value(v: any) {
    console.log( v );
    if (v !== this._value) {
      this._value = v;

      this.onChange(v.type);
    }
  }


  writeValue(value: any) {
    const v = this
      ._dataDropDown
      .find( x => x.value[this.valueProperty] == value );

    console.log( value );

    if (v?.value !== this._value) {
      this._value = v?.value;
    }
  }
}

