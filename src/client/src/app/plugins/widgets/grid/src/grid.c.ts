import { Component, ElementRef, Inject, ViewChild, ViewEncapsulation } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';
import { DataFormatter } from './base/data-formatter';
import { DataProvider } from './base/data-provider';
import { WidgetConsumer } from './base/widget-consumer';
import { GridSchema } from './grid.m'

@Component({
  selector: 'widget',
  templateUrl: './grid.html',
  styleUrls:[ './grid.scss' ],
  encapsulation: ViewEncapsulation.None,
  providers:[
    DataProvider,
    DataFormatter
  ]
})
export class GridPanelComponent  extends WidgetConsumer  {
  schema: GridSchema;
  data: any = null;

  schemaSubs: Subscription;
  dataSubs: Subscription;

  get showPager() : boolean{
    return this.data?.length > this.widget.pageSize;
  }

  @ViewChild('container') public container: ElementRef;

  constructor(
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dataProvider: DataProvider,
    public dataFormatter: DataFormatter ) {
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

    // pager size trick
    this
      .container
      .nativeElement
      .getElementsByClassName( "p-datatable-scrollable-wrapper" )[ 0 ]
      .style
      .height = "1px";
  }

  ngOnDestroy(){
    this.widget.component = undefined;

    this.dataProvider.destroy();

    this.schemaSubs?.unsubscribe();

    this.dataSubs?.unsubscribe();
  }
}


