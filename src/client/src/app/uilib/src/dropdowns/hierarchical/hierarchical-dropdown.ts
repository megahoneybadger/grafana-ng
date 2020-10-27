import { Component, Input, forwardRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import {SelectItem, MenuItem} from 'primeng/api';
import * as _ from 'lodash';

import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import { ContextMenuComponent } from '../context-menu/context-menu';
import { DropDownComponent } from '../dropdown/dropdown';

@Component({
  selector: 'ed-hierarchical-dropdown',
  templateUrl: './hierarchical-dropdown.html',
  styleUrls: [ 
    '../dropdown/dropdown.scss',
    './hierarchical-dropdown.scss' ],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => HierarchicalDropDownComponent),  // replace name as appropriate
      multi: true
    }
  ]
})
export class HierarchicalDropDownComponent extends BaseNgModelComponent {
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

  @Input() set data(arr: MenuItem[] ){
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

  createCommand(){
    
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
    if (v !== this._value) {
      this._value = v;

      this.onChange(v.type);
    }
  }

  writeValue(value: any) {
    const v = this
      ._dataDropDown
      .find( x => x.value[this.valueProperty] == value );

    if (v?.value !== this._value) {
      this._value = v?.value;
    }
  }
}

