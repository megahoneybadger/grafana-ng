import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPanel } from 'common';

@Component({
  selector: 'panel-header',
  templateUrl: './header.html',
  styleUrls: [ './header.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardPanelHeaderComponent {
  
  @Input() panel: IPanel;
  @Input() loading: boolean = false;

  contextMenuItems = [];

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute ){
   
  }

  ngOnInit(){
    this.contextMenuItems = [
      {
        label: 'View',
        icon: 'fa fa-eye mr-3',
        shortcut: 'v',
        styleClass: 'width-8',
        command: ( _ ) => this.router.navigate( ['view', this.panel.id],
          {relativeTo: this.activatedRoute, queryParamsHandling: "merge"})
      },
      {
        label: 'Edit',
        icon: 'fa fa-edit mr-3',
        shortcut: 'e',
        command: ( _ ) => this.router.navigate( ['edit', this.panel.id],
          {relativeTo: this.activatedRoute, queryParamsHandling: "merge"})
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
