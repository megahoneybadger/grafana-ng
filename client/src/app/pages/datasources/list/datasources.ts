import { Component } from '@angular/core';
import { FadeInOutAnimation } from 'src/app/uilib/animations';
import { ObservableEx } from 'uilib2';

import { DataSourceService } from 'src/app/core/services/datasource.s';
import { DataSource, DataSourcesLayoutMode } from 'src/app/core/models/datasource';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../base/base-component';

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
        tap( x => console.log( x ) ),
        tap( x=> this.dataSources = [...x] ) ) );
  }
}
