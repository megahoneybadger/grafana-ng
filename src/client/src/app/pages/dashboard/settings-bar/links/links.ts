import { Component, ViewEncapsulation } from '@angular/core';
import { BaseDasboardComponent, DashboardLink,
  DashboardLinkIcon,
  DashboardLinkType, DashboardRawSearchHit, 
  DashboardService, DashboardStore, SearchFilter } from 'common';
import { DashboardLinkHelper } from 'src/app/common/src/public-api';


@Component({
  selector: 'dashboard-settings-bar-links',
	templateUrl: './links.html',
	encapsulation: ViewEncapsulation.None
})
export class DashboardSettingsBarLinksComponent extends BaseDasboardComponent {
  
  DashboardLinkTypeRef = DashboardLinkType;
  DashboardLinkHelperRef = DashboardLinkHelper;

  showDropdownDashboardLinks: boolean = false;
	dropdownDashboards: DashboardRawSearchHit[];
  offset: any;
  
  notDropdownDashboardLinks: DashboardLink[] = [];

  get links(): DashboardLink[]{
    return this
      .dashboard
      ?.data
      .links;
  }
  
  constructor( 
    store: DashboardStore,
    private dbService: DashboardService ){
      super( store );

  }

  onDashboardReady(){
    console.log( this.links );
    this.loadNotDropdownDashboards();
  }

  loadNotDropdownDashboards(){
		this
			.links
			.filter( x => 
				!x.dropdown &&
				x.type == "dashboard" &&
				x.tags.length > 0 )
			.forEach( x => {
				const sf = new SearchFilter();
				sf.tags = [...x.tags];
				const key = sf.request; 
				this
					.dbService
					.search( key )
					.subscribe( y => this.embedNotDropdownDashboardsIntoLinks( x, y )	);
			} );

  }
  
  embedNotDropdownDashboardsIntoLinks( parent: DashboardLink, dashboards: DashboardRawSearchHit[] ){
		(<any>parent).children = dashboards.map( x => {
      const l = new DashboardLink();
      l.title = x.title;
      l.url = x.url;

      return l;
    } );
	}

  onLoadDropdownDashboards( link: DashboardLink, e ){
    if( !link.tags.length ){
      return;
    }

    let el = e.target;
 
		while( el.tagName.toLowerCase() != 'div' ){
			el = el.parentElement;
		}
	
		const rect = el.getBoundingClientRect();

		this.offset = {
			left: rect.left,
			top: rect.bottom
		}

    const sf = new SearchFilter();
    sf.tags = [...link.tags];
    
    this
      .dbService
      .search( sf.request )
      .subscribe( x => {
				this.dropdownDashboards = [...x];
				this.showDropdownDashboardLinks = true;
			}	);
  }

  
}
