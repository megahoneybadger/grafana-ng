import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeRangeMod, Panel, PANEL_TOKEN, TimeRangeParser, TimeRangeStore } from 'common';

@Component({
  selector: 'panel-header',
  templateUrl: './header.html',
  styleUrls: [ './header.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPanelHeaderComponent {

  contextMenuItems = [];

  get title(){
    return this.panel?.title ?? this.panel?.widget.info?.title; // TODO
  }

  get timeMod():TimeRangeMod{
    return this
      .panel
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
    const mod = this.panel?.widget?.time;
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

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private time: TimeRangeStore,
    @Inject( PANEL_TOKEN ) private panel: Panel ){
  }

  ngOnInit(){
    this.contextMenuItems = [
      {
        label: 'View',
        icon: 'fa fa-eye mr-3',
        shortcut: 'v',
        styleClass: 'width-8',
        command: ( _ ) => this.router.navigate( ['view', this.panel.id],
          {relativeTo: this.activatedRoute})
      },
      {
        label: 'Edit',
        icon: 'fa fa-edit mr-3',
        shortcut: 'e',
        command: ( _ ) => {
          this.router.navigate( ['edit', this.panel.id],
            {relativeTo: this.activatedRoute, queryParamsHandling: "merge"})
        }
      },
      
      {
        label: 'Share',
        icon: 'fa fa-share  mr-3',
        shortcut: 'p s',
      },
      {
        label: 'More...',
        icon: 'fa fa-cube  mr-3',
      },

      {
        separator: true,
      },
      
      {
        label: 'Remove',
        icon: 'fa fa-trash  mr-3',
        shortcut: 'p r',
        command: _ => { console.log( 'remove' ) }
      },
    ];
  }


}
