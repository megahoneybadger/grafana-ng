import { Component, ContentChildren, QueryList,
   Output, EventEmitter, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../base/ng-model-cmp';
import { TabComponent } from './tab';

@Component({
  selector: 'ed-tabstrip',
  templateUrl: './tabstrip.html',
  styleUrls: [ 'tabstrip.scss' ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TabStripComponent),  
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class TabStripComponent extends BaseNgModelComponent {
  
  @Input() header: string;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> 

  @Output() selected = new EventEmitter<number>();

  get value(): any {
    return this._value;
  };
 
  set value(v: any) {
    if (v !== this._value && null != v) {
      const selectedTab = this
        .tabs
        .find( x => x.selected );

      if( selectedTab ){
        selectedTab.selected = false;
      }

      const tabs = this.tabs.toArray();

      if( tabs[ v ] )  {
        tabs[ v ].selected = true;
      }

      this._value = v;
      this.onChange(v);

      this.selected.emit( this._value );
    }
  }

  writeValue(value: any) {
    if (value !== this._value) {
      this.value = value;
    }
  }

  constructor(){
    super();
    this._value = undefined;
  }
}

