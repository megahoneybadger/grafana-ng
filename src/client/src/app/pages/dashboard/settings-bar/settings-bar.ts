import { Component, ViewEncapsulation } from '@angular/core';
import { AnnotationRule, DashboardLink, DashboardStore } from 'common';
import { BaseDasboardComponent } from '../base/dashboard-base';


@Component({
  selector: 'dashboard-settings-bar',
	templateUrl: './settings-bar.html',
  styleUrls:[ './settings-bar.scss' ],
	encapsulation: ViewEncapsulation.None
})
export class DashboardSettingsBarComponent extends BaseDasboardComponent {

  get annotationRules(): AnnotationRule[]{
    return this
      .dashboard
      ?.data
      .annotationRules
      ?.filter( x => !x.buildIn );
  }

  get links(): DashboardLink[]{
    return this
      .dashboard
      ?.data
      .links;
  }
	
  constructor( store: DashboardStore ){
      super( store );

  }
}
