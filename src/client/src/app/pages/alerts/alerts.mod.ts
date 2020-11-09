import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, ApiKeysService, AlertService } from 'common';
import { AlertRulesComponent } from './rules/alert-rules';
import { NotificationChannelsComponent } from './channels/notif-channels';
import { AlertsRoutingModule } from './alerts.mod-r';

@NgModule({
  declarations:[
    AlertRulesComponent,
    NotificationChannelsComponent,
  ],
  imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AlertsRoutingModule,
    
    EdUilibModule,
    EdCommonModule
  ],
  providers:[
    AlertService
  ]
})
export class AlertsModule{

}