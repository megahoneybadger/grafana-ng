import { ErrorMessages, Notes, ObservableEx } from 'uilib';

import { Component } from '@angular/core';
import { NavigationHelper } from 'src/app/common/src/nav/nav.s';
import { PageNavigation } from 'src/app/common/src/nav/nav.m';

@Component({
  selector: 'not-found',
	templateUrl: './not-found.html',
	styleUrls: ['not-found.scss']
  
})
export class NotFoundComponent {
	navigation: PageNavigation;

	constructor(){
		this.navigation = NavigationHelper.notFound;
	}
}