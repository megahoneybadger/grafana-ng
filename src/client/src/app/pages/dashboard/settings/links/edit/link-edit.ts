import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DashboardLink, DashboardLinkIcon, DashboardLinkType } from 'common';
import { DropDownComponent } from 'uilib';

@Component({
  selector: 'link-editor',
  templateUrl: './link-edit.html'
})
export class LinkEditorComponent {

	@Input() link: DashboardLink;
	@Input() edit: boolean = true;
  
	@Output() update = new EventEmitter();
	@Output() add = new EventEmitter();

	availableTypes = DropDownComponent.wrapEnum( DashboardLinkType )

	availableIcons = DropDownComponent.wrapEnum( DashboardLinkIcon )

	DashboardLinkTypeRef = DashboardLinkType;
	DashboardLinkIconRef = DashboardLinkIcon;
}




