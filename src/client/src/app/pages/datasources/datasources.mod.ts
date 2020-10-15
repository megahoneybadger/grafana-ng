import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DatasourcesRoutingModule } from './datasources.mod-r';

import { DataSourcesNameFilterPipe } from './list/datasources.p';
import { NewDataSourcesComponent } from './new/new-datasources';
import { DataSourcesComponent } from './list/datasources';
import { EdUilibModule } from 'uilib';
import { EdCommonModule } from 'src/app/common/src/common.mod';
import { DataSourceService, PluginService } from 'common';
import { EditDataSourceComponent } from './edit/edit-datasource';
import { DataSourcePluginAnchorDirective } from './edit/plugin-anchor.dir';


@NgModule({
  declarations:[
    DataSourcesComponent,
    DataSourcesNameFilterPipe,
    NewDataSourcesComponent,
    EditDataSourceComponent,
    DataSourcePluginAnchorDirective,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DatasourcesRoutingModule,
    
    EdUilibModule,
    EdCommonModule
  ],
  providers: [
    DataSourceService,
    PluginService
  ]
})
export class DatasourcesModule{

}