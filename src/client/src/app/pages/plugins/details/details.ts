import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationHelper, NavigationProvider, PageNavigation, Plugin } from 'common';
import { Subscription } from 'rxjs';
import { PluginService } from 'src/app/common/src/public-api';

@Component({
  selector: 'plugin-details',
	templateUrl: './details.html'
})
export class PluginDetailsComponent{
	id: string
	plugin: Plugin;

	navigation: PageNavigation; 
	
	pluginSubs: Subscription;

  constructor( 
		private pluginService: PluginService,
		private activatedRoute: ActivatedRoute,
		private navProvider: NavigationProvider ) {
		
	}
	
	ngOnInit(){
		this.id = this
			.activatedRoute
			.snapshot
			.params['id']; 
		
			console.log( this.id );
      
    this.pluginSubs = this
      .pluginService
      .getPlugin( this.id )
      .subscribe( x =>{
				this.navigation = NavigationHelper.createNavigationFromNode( 
					this.navProvider.plugin( x ), "plugin-details" );
					
				this.plugin = x
			}  );
	}
	
	ngOnDestroy(){
    this.pluginSubs?.unsubscribe();
  }
}
