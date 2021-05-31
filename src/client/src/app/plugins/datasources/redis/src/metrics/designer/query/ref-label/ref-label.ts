import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN } from 'common';

import { BaseQueryComponent } from '../query-base';

@Component({
  selector: 'ref-id-label',
  templateUrl: './ref-label.html',
  styleUrls:[ './ref-label.scss' ]
})
export class QueryRefIdLabelComponent extends BaseQueryComponent {
 
  opened: boolean = true;
  isEditorVisible: boolean = false;

  @Output() toggle = new EventEmitter<boolean>();
  newRefId: string;

  get errorMessage(){
    if( !this.newRefId.trim() )  
      return 'Ref id can not be empty';

    return ( this.isValidRefId( this.newRefId ) ) ? '' : `Ref id '${this.newRefId}' is already in use`
  }

  constructor(
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dsService: DataSourceService ){
      super( panel, dsService );
  }

  onToggleEditor(){
    this.newRefId = this.query.refId;
    this.isEditorVisible = !this.isEditorVisible;;
  }

  onCloseEditor(){
    this.isEditorVisible=false;

    const nr = this.newRefId.trim();

    if( this.isValidRefId( nr ) ){
      this.query.refId = nr;
    }
  }

  isValidRefId( r: string ){
    if( !r )
      return false;

    const existing = this
      .metrics
      .targets
      .filter( x => x != this.query )
      .find( x => x.refId.toLowerCase() == r.toLowerCase() );

    return ( !existing );
  }
}


