import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../../../../base/base-component';
import { DashboardService, PlaylistItem,	PlaylistItemType } from 'common';
import { AbstractControl, ControlValueAccessor, 
	NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'playlist-dashboards-viewer',
  templateUrl: './viewer.html',
	styles: [`
		.selected-playlistitem-settings {
			text-align: right;
		}`
	],
	providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PlaylistDashboardViewerComponent),
      multi: true
    },
		{
      provide: NG_VALIDATORS,
      multi: true,
			useExisting: PlaylistDashboardViewerComponent,
    }

  ],
	
})
export class PlaylistDashboardViewerComponent 
	extends BaseComponent 
	implements ControlValueAccessor, Validator  {

	data: PlaylistItem[];

	get items(){
		return this.data;
	}

	@Input() set items( d: PlaylistItem[] ){
		this.data = d;
		this.onChange( d );
	}

	 
	@Output() remove = new EventEmitter<PlaylistItem>();
	PlaylistItemTypeRef = PlaylistItemType;
  
  constructor( 
		private dbService: DashboardService,
		public router: Router ) {
      super();
  }

	push( item: PlaylistItem ){
		this.items = this.items ?? [];
		this.items.push( item );
		this.onChange( this.items );
	}

	onUp( item: PlaylistItem ){
		const index = this
			.items
			.indexOf( item );

		const itemOrder = item.order;
		item.order = this.items[ index - 1 ].order;
		this.items[ index - 1 ].order = itemOrder;

		this
			.items
			.splice( index, 1 );

		this
			.items
			.splice( index - 1, 0, item );

		this.onChange(this.items);
	}

	onDown( item: PlaylistItem ){
		const index = this
			.items
			.indexOf( item );

		const itemOrder = item.order;
		item.order = this.items[ index + 1 ].order;
		this.items[ index + 1 ].order = itemOrder;

		this
			.items
			.splice( index, 1 );

		this
			.items
			.splice( index + 1, 0, item );

		//onChange.
	}

	onDelete( item: PlaylistItem ){
		const index = this
			.items
			.findIndex(y => item.value == y.value );

		if (-1 !== index) {
			this.items.splice(index, 1);
		}

		this.remove.emit( item );
		this.onChange(this.items);
	}


	// c) copy paste this code
  onChange: any = () => {}
  onTouch: any = () => {}
	
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }




  writeValue(input: any) {
		this.items  = input;
  }

	validate(control: AbstractControl): ValidationErrors | null {
		//console.log( "my validation" ) 

		if (!control.value?.length) {
			return {
				mustBeNotEmpty: true
			};
		}
	}

}

