import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { UilibModule } from 'src/app/uilib/uilib.mod';
import { ApiKeysRoutingModule } from './api-keys.mod-r';
import { ApiKeysComponent } from './api-keys';
import { ApiKeysNameFilterPipe } from './pipes/api-keys.p';
import { AddApiKeyComponent } from './add/add-api-key';
import { ApiKeysService } from 'src/app/core/services/api-keys.s';
import { UilibModule2 } from 'uilib2';

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
    
    UilibModule,
    UilibModule2
  ],
  providers:[
    ApiKeysService
  ]
})
export class ApiKeysModule{

}