import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ChannelEditFormService } from '../../channel-form.s';
import { BaseChannelEditorComponent } from '../base-editor';

@Component({
  selector: 'telegram-editor',
  templateUrl:'./telegram.html',
})
export class TelegramEditorComponent extends BaseChannelEditorComponent {
  constructor( protected channelFormService: ChannelEditFormService ){
    super( channelFormService )    
    this.model = new TelegramChannel();
  }

  addValidators(){
    this.addValidator( 'token', Validators.required );
    this.addValidator( 'chatId', Validators.required );
  }
}

export class TelegramChannel{
  token: string = '';
  chatId: string = ''
}







