import { Component, ViewEncapsulation } from '@angular/core';
import { BaseDasboardComponent, DashboardLink, DashboardStore } from 'common';

@Component({
  selector: 'settings-links',
  templateUrl: `./links.html`,
  encapsulation: ViewEncapsulation.None
})
export class LinkSettingsComponent extends BaseDasboardComponent{
  selectedLink: DashboardLink;
  newLink: DashboardLink;

  get links():DashboardLink[]{
    return this.dashboard?.data.links;
  }

  constructor( store: DashboardStore){
      super( store );
  }

  onAdd(){
    this.newLink = new DashboardLink();
  }

  onDelete( l: DashboardLink ){
    event.stopPropagation();

    const index = this
      .links
      .indexOf( l );

    this
      .links
      .splice( index, 1 );

    return index;
  }

  onUp( l: DashboardLink ){
    const index = this.onDelete( l )

    this
      .links
      .splice( index - 1, 0, l );
  }

  onDown( l: DashboardLink ){
    const index = this.onDelete( l )

    this
      .links
      .splice( index + 1, 0, l );
  }
  

}

