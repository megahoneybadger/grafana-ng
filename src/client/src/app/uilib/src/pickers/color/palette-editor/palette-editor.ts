import { Component, Output, EventEmitter,
	forwardRef, ViewEncapsulation, ViewChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../../base/ng-model-cmp';
import { ColorHelper } from '../color-helper';
import { ColorCircleComponent } from './color-circle';

@Component({
	selector: 'ed-palette-editor',
	templateUrl: './palette-editor.html',
	styleUrls: ['./palette-editor.scss'],
	providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PaletteEditorComponent),  
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class PaletteEditorComponent extends BaseNgModelComponent {
	
	index : number = 0;
	selectedCircle: ColorCircleComponent;

	colors = [ ...ColorHelper.sortColorsByHue( ColorHelper.colors )];

	@Output() selected = new EventEmitter<string>();
	@ViewChildren( ColorCircleComponent ) items;
	
	get value(): any {
    return this._value;
  };
 
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);

      this.selected.emit( this._value );
    }
	}
	
	writeValue(value: any) {
    if (value && value !== this._value) {
			this._value = value;
			
			this.activateCircle( value );
    }
  }

	onSelected( v : string){
		this.value = v;
		this.activateCircle( v );
	}

	activateCircle( v : string ){
		const items = this
			.items
			.toArray();

		items.forEach( x => x.active = false );

		const target = items.find( x => x.value == v );

		if( target ){
			target.active = true;
			this.selectedCircle = target;
		}
	}
}




