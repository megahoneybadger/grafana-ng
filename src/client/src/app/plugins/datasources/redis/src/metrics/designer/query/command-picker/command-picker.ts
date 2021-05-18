import { Component, EventEmitter, forwardRef, Inject, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DataSourceService, Panel, PANEL_TOKEN, TimeRangeStore  } from 'common';
import { BaseNgModelComponent, DropDownComponent } from 'uilib';
import { CommandHelper, RedisCommand } from '../../../metrics.m';

@Component({
  selector: 'redis-command-picker',
  templateUrl: './command-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RedisCommandPickerComponent),
      multi: true
    }]
  })
export class RedisCommandPickerComponent {
  availableCommands = DropDownComponent.wrapEnum( RedisCommand );
  RedisCommandRef = RedisCommand;
  CommandHelperRef = CommandHelper;

  @Output() pick = new EventEmitter<RedisCommand>()

  protected _value: any = '';
  
  protected onChange: any = () => { };
  protected onTouched: any = () => { };

  get value(): any {
    return this._value;
  };
 
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);

      this.pick.emit( this._value );
    }
  }

  constructor(){
    console.log( DropDownComponent.wrapEnum( RedisCommand ) )

    
  }

  onBlur() {
    this.onTouched();
  }

  writeValue(value: any) {
    //console.log( v );
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

  change(value: any) {
    this.onChange(this._value);
    this.onTouched();
  }
}


