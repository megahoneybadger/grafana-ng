import { NgModule, SecurityContext } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { EdUilibModule } from 'uilib';
import { EdCommonModule, PluginService } from 'common';
import { PluginsComponent } from './list/plugins';
import { PluginsRoutingModule } from './plugins.mod-r';
import { PluginsFilterPipe } from './list/plugins.p';
import { PluginDetailsComponent } from './details/details';
import { MarkdownModule } from "ngx-markdown";

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
    MarkdownModule.forChild(),
  ],
  providers: [
    
  ]
})
export class PluginsModule{

}