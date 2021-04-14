import { Component, Input, Output, EventEmitter,
  forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';

@Component({
  selector: 'ed-color-picker',
  templateUrl: './color-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),  
      multi: true
    }
  ],
  styleUrls: [ 'color-picker.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class ColorPickerComponent extends BaseNgModelComponent {
  @Input() label: string;
  @Input() labelWidth:number;
  @Input() width: number;
  @Input() tooltip: string;

  @Output() selected = new EventEmitter<string>();
  @Output() pick = new EventEmitter<string>();

  showPaletteDialog: boolean = false;

  getLabelWidth(){
    return {
      [`width-${this.labelWidth}`]: (this.labelWidth)
    }
  }
}

