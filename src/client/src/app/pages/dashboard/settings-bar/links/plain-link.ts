import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardLink, DashboardLinkHelper } from 'common';

@Component({
  selector: 'plain-link',
  template: `
    <a class="pointer gf-form-label" [edHint]="link.tooltip" (click)="onNavigate()"  >
      <i class="fa fa-fw mr-1" [ngClass]="DashboardLinkHelperRef.getIcon( link )"></i>{{link.title}}
    </a>`
})
export class DashboardPlainLinkComponent {
  
  @Input() link: DashboardLink;
  @Input() routing: boolean;
  DashboardLinkHelperRef = DashboardLinkHelper;

  constructor( private router: Router ){

  }

  onNavigate(){
    if( this.routing ){
      this.router.navigate( [this.link.url] );
    } else{
      window.location.href = this.link.url;
    }
  }
}
