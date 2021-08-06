
import { Component, Output, EventEmitter } from "@angular/core";
import { BaseDasboardComponent, Dashboard, DashboardService, DashboardStore } from 'common';

@Component({
  selector: 'share-export',
  templateUrl: './export.html',
  styleUrls: ['../link/link.scss']
})
export class DashboardShareExportComponent extends BaseDasboardComponent {
  
	@Output() close = new EventEmitter();

  constructor( store: DashboardStore ){
      super( store );
  }

  onSaveFile(){
		const model = DashboardService.toBackendModel( this.dashboard );
		const content = JSON.stringify( model );

		try{
			var a = document.createElement("a");

			var file = new Blob([content], { type: 'application/json' });
			a.href = URL.createObjectURL( file );
			a.download = `${this.dashboard.url}`;

			a.click();
		}
		finally{
			//document.removeChild(a);
		}
	}

	onViewJson(){
		console.log( this.dashboard );
		console.log( "view json" );
	}
}
