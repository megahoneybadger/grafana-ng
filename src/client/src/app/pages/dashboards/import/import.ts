import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Dashboard, DashboardService, NavigationHelper, NavigationProvider, PageNavigation } from 'common';
import { finalize } from 'rxjs/operators';
import { JsonExplorerComponent, Notes } from 'uilib';
import { BaseComponent } from '../../base/base-component';


@Component({
  selector: 'import-dashboard',
  templateUrl: './import.html'
})
export class ImportDashboardComponent extends BaseComponent {
 
  navigation: PageNavigation; 

  
  constructor( 
    private  dbService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private navProvider: NavigationProvider,
    private router: Router ) {
      super();

    
      this.navigation = NavigationHelper.createNavigationFromNode( 
        this.navProvider.import, "import-dashboard" );

      console.log( this.navigation );
  }

  
  onFileSelected( e ){
    const reader = new FileReader()

    reader.onload = ( event ) => {
      const d = JSON.parse( <string> event.target.result );

      this.import( d );
    };

    reader.readAsText(e.target.files[0])
  }

  private import( d: Dashboard ){

    console.log( d );
    
    this
    .dbService
    .createDashboard( d, 0, false )
    .pipe( 
      finalize( () => {
        //this.saving = false;
        //this.onClose()
      } ) )
    .subscribe( 
      x => Notes.success( "Dashboard imported" ),
      e => {
        
        // if( ResultCodes.BAD_CREATE_DASHBOARD_DUPLICATE == e.error?.code ){
        //   this.overwrite.emit();
        // }
        // else {
        //   Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_DASHBOARD,  e.error?.details )
        // }
      } );
  }
}
