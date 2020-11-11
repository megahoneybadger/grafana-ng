import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { EdUilibModule } from 'uilib';
import { EdCommonModule, AlertService } from 'common';
import { AlertRulesComponent } from './rules/alert-rules';
import { AlertChannelsComponent } from './channels/channels';
import { AlertsRoutingModule } from './alerts.mod-r';
import { AlertChannelEditorComponent } from './channels/edit/editor';
import { TelegramEditorComponent } from './channels/edit/editors/telegram/telegram';

@NgModule({
  declarations:[
    AlertRulesComponent,
    AlertChannelsComponent,
    AlertChannelEditorComponent,
    TelegramEditorComponent,
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