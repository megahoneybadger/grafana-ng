import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DatasourcesRoutingModule } from './datasources.mod-r';
import { UilibModule } from 'src/app/uilib/uilib.mod';
import { DataSourceService } from 'src/app/core/services/datasource.s';
import { DataSourcesNameFilterPipe } from './pipes/datasources.p';
import { AddDataSourceComponent } from './add/add-datasource';
import { DataSourcesComponent } from './list/datasources';
import { DataSourcesLayoutSelectorComponent } from './list/layout/layout-selector';
import { DataSourcesGridLayoutComponent } from './list/layout/grid/grid-layout';
import { DataSourcesTilesLayoutComponent } from './list/layout/tiles/tiles-layout';

@NgModule({
  declarations:[
    DataSourcesComponent,
    DataSourcesNameFilterPipe,
    DataSourcesLayoutSelectorComponent,
    DataSourcesGridLayoutComponent,
    DataSourcesTilesLayoutComponent,
    AddDataSourceComponent,
    
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DatasourcesRoutingModule,
    
    UilibModule,
  ],
  providers: [
    DataSourceService
  ]
})
export class DatasourcesModule{

}