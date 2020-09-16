import { ErrorMessages, Notes, ObservableEx } from 'uilib2';

import { Component } from '@angular/core';
import { NavigationHelper } from 'src/app/core/services/navigation.s';
import { PageNavigation } from 'src/app/core/models/nav';

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