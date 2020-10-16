import { Component, Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import { Tag } from 'common';

@Component({
  selector: 'ed-tag-picker',
  templateUrl: './tag-picker.html',
  styleUrls: ['./tag-picker.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagPickerComponent),  // replace name as appropriate
      multi: true
    }]
  
  })
export class TagPickerComponent extends BaseNgModelComponent {
  data: SelectItem[];
  _tags: Tag[];

  @Input() set tags( t: Tag[] ){
    this._tags = t;
    this._value = [];
    this.data = t?.map(x => { return { label: `${x.term} (${x.count})` , value: x } })
  }

  @Output() selected = new EventEmitter<Tag[]>();

  get value(): any {
    return this._value;
  };
  
  set value(v: any) {
    if (v !== this._value) {
      this._value = v;
      this.onChange(v);

      if( this.value ){
        this.selected.emit( this.value )
      }
    }
  }

  clear(){
    this.value = [];
    this.tags = this._tags;
  }

  onSelectedTagsChange( tags: Tag[] ){
    tags.forEach( x => {
      const index = this.data.findIndex( y => y.value.term == x.term )

      if( -1 != index ){
        this.data.splice( index, 1 );
      } 
    });
  }

  onTagClick( t: Tag, e ){
    e.preventDefault();
    e.stopPropagation();

    const index = this.value.findIndex( x => t == x );

    if( -1 != index ){
      this.value.splice( index, 1 );
      this.data.push( { label: t.term, value: t } );

      this.data.sort( (a, b)=> (a.label > b.label) ? 1 : -1  );

      this.selected.emit( this.value )
    }
  }
}

