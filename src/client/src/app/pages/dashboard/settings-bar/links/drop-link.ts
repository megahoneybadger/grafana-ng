import { Component, Input } from '@angular/core';
import { BaseDasboardComponent, DashboardLink, DashboardRawSearchHit,
   DashboardService, DashboardStore, SearchFilter } from 'common';
import { PopupOffset } from 'uilib';

@Component({
  selector: 'drop-link',
  template: `
  <a class="pointer gf-form-label" (click)="onLoadDashboards( $event )">
    <i class="fa fa-fw fa fa-bars mr-1"></i>
    <span>{{link.title}}</span>
  </a>

  <ed-popup [offset]="offset" [(visible)]="showDropdown" >

    <ul class="ed-dropdown-menu">
      <li *ngFor="let d of dashboards" >
        <a [routerLink]="d.url" (click)="showDropdown=false"> {{d.title}}</a>
      </li>
    </ul>
    
  </ed-popup>`
 })
export class DashboardDropLinkComponent extends BaseDasboardComponent  {

  @Input() link : DashboardLink;

  get hasTags() : boolean {
    return this
      .link
      .tags
      .length > 0;
  }

  showDropdown: boolean = false;
	dashboards: DashboardRawSearchHit[];
  offset: PopupOffset;
    
 
  constructor( 
    store: DashboardStore,
    private dbService: DashboardService ){
      super( store )
  }

  onLoadDashboards( e ){
    if( !this.hasTags ){
      return;
    }

    this.calculateOffset( e );

    const sf = new SearchFilter();
    sf.tags = [...this.link.tags];
    
    this
      .dbService
      .search( sf.request )
      
      .subscribe( x => {
				this.dashboards = [...x.filter( y => y.id != this.dashboard.id )];
        this.showDropdown = true;
			}	);
  }

  calculateOffset( e ){
    let el = e.target;
 
		while( el.tagName.toLowerCase() != 'a' ){
			el = el.parentElement;
    }
	
		const rect = el.getBoundingClientRect();

		this.offset = {
			left: rect.left,
			top: rect.bottom
		}
  }
}
