import { Component, Inject } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN } from 'common';
import { AggrFunc, Field, FuncObject } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';

@Component({
  selector: 'fields-editor',
  template: `
    <field-editor *ngFor="let f of query.fields" 
      [query]="query" 
      [field]="f"
      (remove)="onRemove(f)"
      (add)="onAdd()"
      (change)="change.emit()" >
    </field-editor> `
})
export class FieldsEditorComponent extends BaseQueryComponent  {

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dsService: DataSourceService ){
      super( panel, dsService );
  }

  ngOnInit() {
    if (!this.fields?.length) {
      this.query.fields = [this.createEmpyField()];
    }
  }

  onRemove(f: Field) {
    const fields = this.query.fields;

    if (1 < fields.length) {

      const index = fields.indexOf( f );

      if( -1 !== index ){
        this.query.fields.splice( index, 1 );
      }
    }
  }

  onAdd() {
    this
      .query
      .fields
      .push(this.createEmpyField());
  }

  createEmpyField() {
    const def = new FuncObject();
    def.name = AggrFunc.Mean;

    const field = new Field();
    field.functions = [ def ];

    return field;
  }
}