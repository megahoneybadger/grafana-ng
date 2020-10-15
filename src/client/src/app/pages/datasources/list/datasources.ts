import { Component } from '@angular/core';
import { ObservableEx, FadeInOutAnimation, CardsLayoutMode } from 'uilib';

import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { DataSource, DataSourceService, PluginHelper } from 'common';

@Component({
  selector: 'datasources',
  templateUrl: './datasources.html',
  animations: [FadeInOutAnimation],
  
})
export class DataSourcesComponent extends BaseComponent {
  
  dataSourcesRequest: ObservableEx<DataSource[]>;
  dataSources: DataSource[]
  filter: string;

  layout =  CardsLayoutMode.Tiles;
  LayoutModeRef = CardsLayoutMode;
  PluginHelperRef = PluginHelper;

  constructor( 
    public dsService : DataSourceService,
    public router: Router,
		public activatedRoute: ActivatedRoute  ) {
    super();

    this.dataSourcesRequest = new ObservableEx( this
      .dsService
      .getDataSources()
      .pipe(        
        tap( x=> this.dataSources = [...x] ) ) );
  }
}
