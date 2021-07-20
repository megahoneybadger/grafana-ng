import { Component, Inject, OnInit } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
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

  constructor(
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dataProvider: DataProvider ) {
      super( panel );

      dataProvider.schema$.subscribe( x =>{
        this.schema = x;
        console.log( "schema change" );
      }  );
      
      this.products = [
        new Product( 1, "Jong Smith", "cat 1", 4 ),
        new Product( 2, "Denis", "cat 2", 34 )]
  }

  

  ngOnInit() {
  }

  ngOnDestroy(){
    this.widget.component = undefined;

    this.dataProvider.destroy();
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
