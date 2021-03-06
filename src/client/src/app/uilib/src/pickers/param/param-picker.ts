import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ContextMenuComponent } from '../../dropdowns/context-menu/context-menu';


@Component({
	selector: 'ed-parameter-picker',
	templateUrl: `./param-picker.html`,
	styleUrls: ['./param-picker.scss']})
export class ParameterPickerComponent  {

	_items: any[];

	get items(){
		return this._items
	}

	@Input() set items( arr : any[] ){
		this._items = arr;

		this
			._items
			.forEach( x => x.command = ( y ) => this.onPick( y.item ) )
	}

	_value: string;
	backupValue: string = '';

	@ViewChild('editor') ctrlEditorElement: ElementRef;
	@ViewChild("suggestions") public ctrlSuggestions: ContextMenuComponent;
	isEditorVisible = false;
	isSuggestionMenuOpen = false;

	@Output() pick = new EventEmitter<string>()
	@Output() valueChange = new EventEmitter<string>();

	get value(): string {
    return this._value;
	};
	
	@Input() set value( v : string ){

		const shoudFirePick = ( undefined !== this._value && v !== this._value );

		this._value = v;

		if( shoudFirePick ){
			this.valueChange.emit( this._value );
			this.pick.emit( this._value );
		}
	}

	ngOnInit(){
		this
			.items
			?.forEach( x => x.command = ( y ) => this.onPick( y.item ) )
	}
	
	onShowEditor( e ){
		this.backupValue = this.value;

		this.isSuggestionMenuOpen = true;
		this.ctrlSuggestions.show(/*this.ctrlEditorElement*/e);

    setTimeout(() => { 
			this.isEditorVisible = true;

			setTimeout( () => this.ctrlEditorElement.nativeElement.focus(), 0 )
    }, 0);
	}
	
	onEditorFocusOut(){
    if( !this.isSuggestionMenuOpen ){
      this.isEditorVisible = false;
			
			if( !this.value ){
				this.value = this.backupValue;
			}
    }
  }

  onEditorKeyDown(){
    this.isSuggestionMenuOpen = false;
    this.ctrlSuggestions.hide()
	}

	onPick( e )  {
		this.value = this.backupValue = e.label;
		this.isEditorVisible = false;
	}

	onValueChange(){

	}
}




