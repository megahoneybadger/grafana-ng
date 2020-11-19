import { Component, Input } from '@angular/core';
import { BaseDasboardComponent, DashboardLink, DashboardLinkIcon, DashboardService, DashboardStore, SearchFilter } from 'common';

@Component({
  selector: 'list-link',
  template: `
    <div  class="gf-form-inline">
      <plain-link *ngFor="let link of children" [link]="link" [routing]="true">
      </plain-link>
    </div>`
})
export class DashboardListLinkComponent extends BaseDasboardComponent {
  
  @Input() link : DashboardLink;
  children: DashboardLink[];

  get hasTags() : boolean {
    return this
      .link
      .tags
      .length > 0;
  }

  constructor( 
    store: DashboardStore,
    private dbService: DashboardService ){
      super( store )
  }

  onDashboardReady(){
    if( !this.hasTags ){
      return;
    }

    const sf = new SearchFilter();
    sf.tags = [...this.link.tags];

    const key = sf.request; 

    this
      .dbService
      .search( key )
      .subscribe( x => this.children = x
        .filter( y => y.id != this.dashboard.id  )
        .map( x => {
          const l = new DashboardLink();
          l.title = x.title;
          l.url = x.url;
          l.icon = DashboardLinkIcon.Dashboard;
          return l;
        } )	);
  }
}
