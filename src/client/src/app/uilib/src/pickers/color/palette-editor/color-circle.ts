import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'color-circle',
	template: `
		<span [style.color]="value">
			<span (click)="onSelected()" *ngIf="!active">
				<i class="fa fa-circle" ></i>
			</span>

			<span *ngIf="active">
				<i class="fa fa-circle-o" ></i>
			</span>
		</span>
	`
})
export class ColorCircleComponent {
	@Input() value : string;
	@Input() active : boolean = false;
	@Input() canBeActive : boolean = true;

	@Output() selected = new EventEmitter<string>()

	onSelected(){
		event.stopPropagation();
		
		if( this.canBeActive ){
			this.active = true;
		}

		this.selected.emit( this.value );
	}
}




