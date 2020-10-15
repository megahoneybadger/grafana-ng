import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { EdUilibModule } from 'uilib';
import { EdCommonModule } from 'common';
import { PluginService } from 'src/app/common/src/public-api';
import { PluginsComponent } from './list/plugins';
import { PluginsRoutingModule } from './plugins.mod-r';
import { PluginsFilterPipe } from './list/plugins.p';
import { PluginDetailsComponent } from './details/details';

@NgModule({
  declarations:[
   PluginsComponent,
   PluginsFilterPipe,
   PluginDetailsComponent
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PluginsRoutingModule,
    
    EdUilibModule,
    EdCommonModule,
  ],
  providers: [
   PluginService
    
  ]
})
export class PluginsModule{

}