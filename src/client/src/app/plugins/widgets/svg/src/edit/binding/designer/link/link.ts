import { Component, Inject, Input, ViewChild } from '@angular/core';
import { DashboardRawSearchHit, DashboardService, Panel,
  PanelLinkType, PANEL_TOKEN, SearchFilter } from 'common';
import { WidgetConsumer } from '../../../../base/base-panel';
import * as _ from 'lodash';
import { SvgElementLink } from '../../../../svg.m';
import { AutoCompleteComponent, DropDownComponent } from 'uilib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'binding-link',
  templateUrl: './link.html'
})
export class BindingLinkComponent extends WidgetConsumer {

  private _id: string;

  link: SvgElementLink;
  availableTypes = DropDownComponent.wrapEnum( PanelLinkType )
  PanelLinkTypeRef = PanelLinkType;

  @ViewChild( "linkAutocomplete" ) linkAutocomplete: AutoCompleteComponent;

  @Input() set id( s: string ){
    this._id = s;

    this.link = this
      .links
      ?.find( x => x.id == this._id );

    setTimeout( () => this.ngAfterViewInit() );
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

  constructor(@Inject(PANEL_TOKEN) panel: Panel,
    private dbService: DashboardService) {
      super( panel );
  }

  ngAfterViewInit(){
    if( this.linkAutocomplete ){
      this
        .linkAutocomplete
        .autocomplete
        .inputEL
        .nativeElement
        .value = this.link.title
    }
  }

  onAddLink(){
    const link = new SvgElementLink();
    link.id = this._id;
    link.type = PanelLinkType.Dashboard;

    this.link = link;

    this.widget.links = this.widget.links ?? new Array<SvgElementLink>();
    this.widget.links.push( link );
  }

  onDashboardPick( d: DashboardRawSearchHit ){
    if( d ){
      this.link.url = d.url;
      this.link.title = d.title;
    }
  }

  onRemoveLink(){
    const index = this.links.indexOf( this.link );
    this.widget.links.splice( index, 1 );
    this.link = undefined;
  }
  
}
