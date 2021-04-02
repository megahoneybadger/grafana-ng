import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BaseSvgPanelComponent } from '../base';


@Component({
  selector: 'binder',
  templateUrl: './binder.html',
  styleUrls: [ './binder.scss' ]
})
export class BinderComponent extends BaseSvgPanelComponent {

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );
  }


}
