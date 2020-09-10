import { Component } from '@angular/core';
import { FadeInOutAnimation } from 'src/app/uilib/animations';
import { ObservableEx } from 'src/app/uilib/load-or-error/load-wrapper';
import { DataSourceService } from 'src/app/core/services/datasource.s';
import { BaseComponent } from '../../base/base-component';
import { DataSource } from 'src/app/core/models/datasource';
import { tap } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { LayoutMode } from './layout/layout-selector';


@Component({
  selector: 'datasources',
  templateUrl: './datasources.html',
  animations: [FadeInOutAnimation],
  
})
export class DataSourcesComponent extends BaseComponent {
  
  dataSourcesRequest: ObservableEx<DataSource[]>;
  dataSources: DataSource[]
  filter: string;

  mode: LayoutMode = LayoutMode.Grid;
  LayoutModeRef=LayoutMode;

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
