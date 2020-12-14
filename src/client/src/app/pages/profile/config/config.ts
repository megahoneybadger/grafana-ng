import { Component } from '@angular/core';
import { ObservableEx, FadeInOutAnimation, ErrorMessages } from 'uilib';
import { OrgService } from 'common';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'backend-setting',
  templateUrl: './config.html',
  styleUrls: ['./config.scss'],
  animations: [FadeInOutAnimation],
})
export class BackendSettingsComponent {
  settingRequest: ObservableEx<any[]>;
  settings: any;
  settingKeys: string[];
  ErrorMessagesRef = ErrorMessages;

  constructor( private orgService: OrgService ) {
			
  }

  ngOnInit() {
    this.settingRequest = new ObservableEx<any[]>(this
			.orgService
			.getSettings()
			.pipe(
				tap( x => this.settings = x )));
  }

  getSections(){
    return Object.keys( this.settings );
  }

  getSection( section: string ){
    return Object.entries( this.settings[ section ] );
  }
}
