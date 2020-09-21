import { Component } from '@angular/core';
import { ObservableEx, FadeInOutAnimation } from 'uilib';

import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { DataSource, DataSourceService } from 'common';
import { DataSourcesLayoutMode } from './switcher/layout-switcher';

@Component({
  selector: 'datasources',
  templateUrl: './datasources.html',
  styleUrls: ['datasources.scss'],
  animations: [FadeInOutAnimation],
  
})
export class DataSourcesComponent extends BaseComponent {
  
  dataSourcesRequest: ObservableEx<DataSource[]>;
  dataSources: DataSource[]
  filter: string;

  mode: DataSourcesLayoutMode = DataSourcesLayoutMode.Grid;
  LayoutModeRef = DataSourcesLayoutMode;

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
