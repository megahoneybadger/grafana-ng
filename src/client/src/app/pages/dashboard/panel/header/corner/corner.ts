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

    if( this.panel.links?.length > 0 ){
      return InfoMode.Links;
    }

    if( this.panel.description ){
      return InfoMode.Description;
    }

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

      case InfoMode.Links:
        classExt = "--links";
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

      case InfoMode.Links:
        return this.linksMarkup;
    }
  }

  get linksMarkup() : string{
    let list = ''

    for (const link of this.panel.links) {
      list += `<li><a class="panel-menu-link" href="${link.url}">${link.title}</a></li>`;
    }

    return `<div class="markdown-html"><p>${this.panel.description}</p><ul>${list}</ul></div>`;
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

