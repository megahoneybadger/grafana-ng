import { Component, EventEmitter, Inject, Output, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeRangeMod, Panel, PANEL_TOKEN, TimeRangeParser,
  TimeRangeStore, DashboardStore, BaseDasboardComponent } from 'common';

@Component({
  selector: 'panel-header',
  templateUrl: './header.html',
  styleUrls: [ './header.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPanelHeaderComponent extends BaseDasboardComponent {

  contextMenuItems = [];

  @Output() remove = new EventEmitter();
  @Output() duplicate = new EventEmitter();
  showRemovalDialog: boolean;

  get title(){
    return this._panel?.title; // TODO
  }

  get loading(){
    return this._panel?.loading; // TODO
  }

  get timeMod():TimeRangeMod{
    return this
      ._panel
      ?.widget
      ?.time;
  }

  get showTimeModLabel(){
    const mod = this.timeMod;

    if( !mod || mod.hide ){
      return false
    }

    const dashboardTime = this.time.range.raw;
    const isAbsDashboardTime = TimeRangeParser.isAbsTimeRange( dashboardTime ) 

    return ((  mod.from && !isAbsDashboardTime) || mod.shift ); 
  }

  get timeModLabel() : string {
    const mod = this._panel?.widget?.time;
    const dashboardTime = this.time.range.raw;
    
    if( !mod || mod.hide ){
      return '';
    }

    var label = '';
    const isAbsDashboardTime = TimeRangeParser.isAbsTimeRange( dashboardTime ) 
    
    if( mod.from && !isAbsDashboardTime ){
      label = this.time.converter.toLabel( 
        TimeRangeParser.getOverriddenRelativeRange( mod.from ) );
    }

    if( mod.shift ){
      label += label ? ' ' : '';
      label = `${label}timeshift-${mod.shift}`
    }
    
    return label;
  }

  get canEdit() : boolean{
    return this.dashboard.meta.canEdit && this.dashboard?.data.editable;
  }

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private time: TimeRangeStore,
    store: DashboardStore,
    @Inject( PANEL_TOKEN ) private _panel: Panel ){
      super(store);
      
  }

  onDashboardReady(){

    let items = []; 

    const itemView = {
      label: 'View',
      icon: 'fa fa-eye mr-3',
      shortcut: 'v',
      styleClass: 'width-8',
      command: ( _ ) => this.router.navigate( [ this.dashboard.url, 'view', this._panel.id],
        {relativeTo: this.activatedRoute})
    }

    const itemEdit =  {
      label: 'Edit',
      icon: 'fa fa-edit mr-3',
      shortcut: 'e',
      command: ( _ ) => {
        this.router.navigate( [ this.dashboard.url, 'edit', this._panel.id],
          {relativeTo: this.activatedRoute, queryParamsHandling: "merge"})
      }
    }

    const itemShare = {
      label: 'Share',
      icon: 'fa fa-share  mr-3',
      shortcut: 'p s',
    }

    const itemRemove = {
      label: 'Remove',
      icon: 'fa fa-trash  mr-3',
      shortcut: 'p r',
      command: _ => { this.showRemovalDialog= true;  }
    }

    const itemDuplicate = {
      label: 'Duplicate',
      command: _ => { this.duplicate.emit(); }
    }

    let itemsMore = [
      {
        label: 'Panel JSON'
      },
      {
        label: 'Export CSV'
      }
    ];
   

    this.contextMenuItems = [
      itemView,
    ];

    if( this.canEdit ){
      this.contextMenuItems.push( itemEdit );
      itemsMore = [ itemDuplicate, ...itemsMore ];
    }

    if( this.dashboard.meta.canShare ){
      this.contextMenuItems.push( itemShare );
    }

    const itemMore =  {
      label: 'More...',
      icon: 'fa fa-cube  mr-3',
      items: itemsMore
    };

    this.contextMenuItems.push( itemMore );

    if( this.canEdit ){
      this.contextMenuItems.push( { separator: true } )
      this.contextMenuItems.push( itemRemove );
    }
  }
}
