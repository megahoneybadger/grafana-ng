import { Component, Inject, OnInit } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { DataProvider } from './base/data-provider';
import { WidgetConsumer } from './base/widget-consumer';
import { GridSchema } from './grid.m'

@Component({
  selector: 'widget',
  templateUrl: './grid.html',
  styleUrls:[ './grid.scss' ],
  providers:[
    DataProvider
  ]
})
export class GridPanelComponent  extends WidgetConsumer  {

  products: Product[];
  schema: GridSchema;
  data: any = null;

  schemaSubs: Subscription;
  dataSubs: Subscription;

  constructor(
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dataProvider: DataProvider ) {
      super( panel );

      this.schemaSubs = dataProvider
        .schema$
        .subscribe( x => this.schema = x );

      this.dataSubs = dataProvider
        .data$
        .subscribe( x => this.data = x );
  }

  ngAfterViewInit(){
    this.widget.component = this;
  }

  ngOnDestroy(){
    this.widget.component = undefined;

    this.dataProvider.destroy();

    this.schemaSubs?.unsubscribe();

    this.dataSubs?.unsubscribe();
  }

  customSort( e ){
    console.log( e );
  }
}

export class Product{
  constructor( 
    public code: number,
    public name: string,
    public category: string,
    public quantity: number ){

    }
}
