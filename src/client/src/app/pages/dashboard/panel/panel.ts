import { Component, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Panel, PluginActivator, PANEL_TOKEN, AlertState } from 'common';
import { PanelWidgetAnchorDirective } from './anchors.dir';

@Component({
  selector: 'panel',
  templateUrl: './panel.html',
  styleUrls: ['./panel.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardPanelComponent {
  loadingPluginError: boolean;

  @Input() canResize: boolean;
  @Input() canMove: boolean;
  @Input() fullSize: boolean;
  AlertStateRef = AlertState;

  @Output() remove = new EventEmitter();
  @Output() duplicate = new EventEmitter();

  @ViewChild(PanelWidgetAnchorDirective) widgetPlaceholder: PanelWidgetAnchorDirective;

  constructor( 
    private pluginActivator: PluginActivator,
    @Inject( PANEL_TOKEN ) public panel: Panel ){
  }

  ngAfterViewInit(){
    
    setTimeout( _ => this
      .pluginActivator
      .createWidget( this.panel, this.widgetPlaceholder.viewContainerRef )
      .subscribe( 
        x => {},
        e => this.loadingPluginError = true ))
  }
}
