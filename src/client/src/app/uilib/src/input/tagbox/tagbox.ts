import { Component, Input, forwardRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';

@Component({
  selector: 'ed-tagbox',
  templateUrl: './tagbox.html',
  styleUrls: [
    './tagbox.scss',
    '../../tags/tag.scss',
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagBoxComponent),  
      multi: true
    }
  ]
})
export class TagBoxComponent extends BaseNgModelComponent {
  @Input() label: string;
  @Input() labelWidth:number;
  @Input() labelClass:string;
  @Input() width: number;
  @Input() hint: string;
  @Input() maxlength: number;
  @Input() placeholder: string = 'add tags';
  
  @Output() add = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
  @Output() update = new EventEmitter<string[]>();

  newTag: string; 

  get value(): string[] {
    return this._value;
  };
  
  set value(v: string[]) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);

      this.update.emit( v )
    }
  }

  getLabelWidth(){
    return {
      [`width-${this.labelWidth}`]: (this.labelWidth),
      [this.labelClass]: true
    }
  }

  getContentWidth(){
    return {
      [`width-${this.width}`]: (this.width)
    }
  }

  onRemove( tag: string ){
    this.remove.emit( tag );
    this.value = this.value.filter( x => x != tag );
  }

  onAdd(){
    this.value = this.value ?? [];
    const tag = this.newTag?.trim();

    if( tag && -1 == this.value.indexOf( tag ) ){
      this.add.emit( tag );
      this.value = [...this.value, tag];
    }
    
    this.newTag = undefined;
  }
}

