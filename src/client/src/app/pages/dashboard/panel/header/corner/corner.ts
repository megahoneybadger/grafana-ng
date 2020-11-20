import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { Panel, PANEL_TOKEN, PanelLinkType } from 'common';

@Component({
  selector: 'panel-info-corner',
  templateUrl: './corner.html',
  styleUrls: [ './corner.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPanelInfoCornerComponent {

  InfoModeRef = InfoMode;
  PanelLinkTypeRef = PanelLinkType;

  infoPopup = {
    overRoot: false,
    overPopup: false,
    overPopupEnter: false,
  }

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

  get showDropdown(){
		return this.infoPopup.overRoot || this.infoPopup.overPopup;
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
        return "";
    }
  }

  constructor( @Inject( PANEL_TOKEN ) private panel: Panel ){
  }

  onMouseCornerEnter(){
    this.infoPopup.overRoot = true
  }

  onMouseCornerLeave(){
    setTimeout( () => this.infoPopup.overRoot = false, 100 );
  }

  onMouseDropdownEnter(){
    this.infoPopup.overPopupEnter = true;
    this.infoPopup.overRoot = false;
		this.infoPopup.overPopup = true;
  }

  onMouseDropdownLeave(){
    this.infoPopup.overPopupEnter = false;
    
    setTimeout( () => {
      if( !this.infoPopup.overPopupEnter ){
        this.infoPopup.overPopup = false;      
      }
    }, 300 )
  }
}

enum InfoMode {
  None,
  Error,
  Description,
  Links
}

