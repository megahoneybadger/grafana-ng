import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { ContextMenuComponent } from 'uilib';

@Component({
	selector: 'query-param-picker',
	templateUrl: `./param.html`,
	styleUrls: ['./param.scss']})
export class AlertQueryParamPickerComponent  {
	@Input() items : any[];

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
		this._value = v;
		this.valueChange.emit( this._value );
		this.pick.emit( this._value );
	}

	ngOnInit(){
		this
			.items
			.forEach( x => x.command = ( y ) => this.onPick( y.item ) )
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
	
}




