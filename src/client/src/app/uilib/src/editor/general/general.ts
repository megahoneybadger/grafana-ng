import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN, PanelLink, PanelLinkType,
  DashboardService, SearchFilter, DashboardRawSearchHit } from 'common';
import { map } from 'rxjs/operators';
import { DropDownComponent } from '../../dropdowns/dropdown/dropdown';


@Component({
  selector: 'editor-general',
  templateUrl: './general.html'
})
export class GeneralEditorComponent {

  availableTypes = DropDownComponent.wrapEnum( PanelLinkType )
  PanelLinkTypeRef = PanelLinkType;
  
  get links() : PanelLink[]{
    return this.panel.links;
  }

  dashboards$ = (pattern: string) =>  {
    const sf = new SearchFilter();
    sf.query = pattern;

    return this
      .dbService
      .search( sf.request )
      .pipe( 
        map( x => x.filter( y=> y.type != "dash-folder" ) ))
  }
 
  constructor(
    @Inject( PANEL_TOKEN ) public panel: Panel,
    private dbService: DashboardService ){
  }

  onAddLink(){
    this.panel.links = this.links ?? []
    this.links.push( new PanelLink());
  }

  onRemoveLink( l: PanelLink ){
    const index = this.links.indexOf( l );
    this.links.splice( index, 1 );
  }

  onDashboardPick( l: PanelLink, d: DashboardRawSearchHit ){
    l.url = d.url;
    l.title = d.title;
  }
}
