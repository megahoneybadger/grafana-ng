
import { Component } from "@angular/core";
import { BaseDasboardComponent, DashboardStore, Theme, TimeRangeStore } from 'common';
import { DropDownComponent } from 'uilib';

@Component({
  selector: 'share-link',
  templateUrl: './link.html',
  styleUrls: ['./link.scss']
})
export class DashboardShareLinkComponent extends BaseDasboardComponent {

  _currentTimeRange: boolean = true;
	_templateVars: boolean = true;
  _theme: Theme = Theme.Default;
  url: string;

  availableThemes = DropDownComponent.wrapEnum( Theme )  

  get currentTimeRange():boolean{
		return this._currentTimeRange;
	}

	set currentTimeRange( tr: boolean ){
		this._currentTimeRange = tr;
		this.rebuildUrl();
	}

	set templateVars( tr: boolean ){
		this._templateVars = tr;
		this.rebuildUrl();
	}

	get templateVars():boolean{
		return this._templateVars;
	}

	set theme( t: Theme ){
		this._theme = t;
		this.rebuildUrl();
	}

	get theme():Theme{
		return this._theme;
	}
  
  constructor( 
    store: DashboardStore,
    private time: TimeRangeStore ){
      super( store );
      
  }

  onDashboardReady(){
    this.rebuildUrl();
  }

  rebuildUrl(){
		const range = this.time.range; 

		if( !range ){
			return;
		}

		let url = window
			.location
			.href;
		
		url = url.split('?')[0] ?? url;

		let params:any = {};

		if( this.currentTimeRange ){
			params.from = range.from.valueOf();
			params.to = range.to.valueOf();
		}

		if( this.theme != Theme.Default ){
			params.theme = Theme[this.theme].toString();
		}

		const res = (new URLSearchParams(params)).toString();

		this.url = ( res ) ? `${url}?${res.toString()}` : url
  }
  
  onCopyToClipboard(el){
		el.select();
    document.execCommand('copy');
    el.setSelectionRange(0, 0);
	}
}
