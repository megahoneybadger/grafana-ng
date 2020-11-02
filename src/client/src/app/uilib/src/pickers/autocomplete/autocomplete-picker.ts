import { Component, ViewChild,  Input, Output, EventEmitter, forwardRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import { AutoCompleteComponent } from '../../dropdowns/autocomplete/autocomplete';

@Component({
  selector: 'ed-autocomplete-picker',
  templateUrl: './autocomplete-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AutoCompletePickerComponent),  // replace name as appropriate
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class AutoCompletePickerComponent extends BaseNgModelComponent {
  private _data: any;
  private _autocomplete: AutoCompleteComponent;
  
  public _request$: Observable<string[]>;

  filter = '';
  showSuggestions = false;

  @Input() valueStyle;
  @Input() placeholder : string;
	@Input() formatString : string;
  @Input() readonly : boolean = false;

  @Output() valueChanged = new EventEmitter<string>();

  @Input() request : Observable<string[]>

  get isIconPlaceholder(){
    return ( this.placeholder && this.placeholder.startsWith( 'fa ' ) );
  }

  get data(){
    return ( !this.filter || this.filter.length == 0 ) ? 
      this._data : 
      this._data.filter( x => x.toLowerCase().includes( this.filter ) );
  }

  get formattedValue(){
    return ( this.formatString ) ? this.formatString.replace('{0}', this.value) : this.value;
  }

  @ViewChild('autocomplete') set autocomplete(content: AutoCompleteComponent) {
     this._autocomplete = content;

    if( this._autocomplete ){
      setTimeout( () => this._autocomplete?.focus(), 0 )
    }
  }

  get value(): any {
    return this._value;
  };
  
  set value(v: any) {
    if ( v && v !== this._value) {
      const oldValue = this._value;
      this._value = v;
      this.onChange(v);
  
      this.valueChanged.emit( v );
    }
  }

  reset(){
    this.filter = '';
    this._data = null;
    this.value = '';

    console.log( 'reset' );
  }

  onAutocompleteValueChanged( v: string ){
    if( !this.readonly ){
      this.value = v;
			this.showSuggestions = false;
    }
  }
}

