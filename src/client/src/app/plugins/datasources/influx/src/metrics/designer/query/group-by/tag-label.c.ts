import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: '[tag-label]',
	template: `
	<span (click)="cm.show($event)" class="gf-form-label">tag({{value}})</span>

	<ed-context-menu [items]="[deleteMenuItem]" #cm>`,
})
export class GroupByTagLabelComponent {
	@Input()value:string;
	@Output() removed = new EventEmitter();

	deleteMenuItem = {
		label: 'Remove',
		command: _ => this.removed.emit( this.value )
	}
} 









