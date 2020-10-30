import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';

@Component({
  selector: 'panel-info-corner',
  templateUrl: './corner.html',
  styleUrls: [ './corner.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPanelInfoCornerComponent {

  get mode() : InfoMode{
    if( this.panel.error ){
      return InfoMode.Error;
    }

    if( this.panel.description ){
      return InfoMode.Description;
    }

    // if( this.widget.info?.links?.length > 0 ){
    //   return InfoMode.Links;
    // }

    return InfoMode.None;
  }

  get cornerClass() : string {
    let classExt = '';

    switch( this.mode ){
      case InfoMode.Error:
        classExt = "--error";
        break;

      case InfoMode.Description:
        classExt = "--info";
        break;
    }
    
    return `panel-info-corner${classExt}`
  }

  get cornerHint() : string{
    switch( this.mode ){
      case InfoMode.Error:
        return this.panel.error;

      case InfoMode.Description:
        return this.panel.description;
    }

    return ''
  }

  constructor( @Inject( PANEL_TOKEN ) private panel: Panel ){
  }
}

enum InfoMode {
  None,
  Error,
  Description,
  Links
}

