import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ApiKeysRoutingModule } from './api-keys.mod-r';
import { ApiKeysComponent } from './api-keys';
import { ApiKeysNameFilterPipe } from './pipes/api-keys.p';
import { AddApiKeyComponent } from './add/add-api-key';
import { EdUilibModule } from 'uilib';
import { EdCommonModule, ApiKeysService } from 'common';

@NgModule({
  declarations:[
    ApiKeysComponent,
    ApiKeysNameFilterPipe,
    AddApiKeyComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ApiKeysRoutingModule,
    
    EdUilibModule,
    EdCommonModule
  ],
  providers:[
    ApiKeysService
  ]
})
export class ApiKeysModule{

}