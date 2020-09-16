import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DatasourcesRoutingModule } from './datasources.mod-r';
import { UilibModule } from 'src/app/uilib/uilib.mod';
import { DataSourceService } from 'src/app/core/services/datasource.s';
import { DataSourcesNameFilterPipe } from './list/datasources.p';
import { AddDataSourceComponent } from './add/add-datasource';
import { DataSourcesLayoutSwitcherComponent } from './list/switcher/layout-switcher';
import { DataSourcesComponent } from './list/datasources';
import { UilibModule2 } from 'uilib2';

@NgModule({
  declarations:[
    DataSourcesComponent,
    DataSourcesNameFilterPipe,
    DataSourcesLayoutSwitcherComponent,
    AddDataSourceComponent,
    
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DatasourcesRoutingModule,
    
    UilibModule,
    UilibModule2,
  ],
  providers: [
    DataSourceService
  ]
})
export class DatasourcesModule{

}