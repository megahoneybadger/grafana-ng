import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'common';
import { finalize } from 'rxjs/operators';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { ErrorMessages, Notes } from 'uilib';
import { checkFolderNameTaken } from '../folder-name-taken';

@Component({
  selector: 'add-folder',
  templateUrl: './add-folder.html'
})
export class AddFolderComponent extends BaseComponent {
  form: FormGroup;

  get name() {
		return this.form.get('name');
  }
  
  constructor( 
    private  dbService: DashboardService,
    private activatedRoute: ActivatedRoute,
    private router: Router ) {
      super();

      this.form = new FormGroup({
        'name': new FormControl(null, Validators.required,  
          checkFolderNameTaken.bind( this, dbService, false ))
      });
  }

  onSubmit() {
    this.waiting = true

    var request = {
      title: this.name.value
    }

    this
      .dbService
			.createFolder( request )
			.pipe( 
				finalize( () => this.waiting = false ))
      .subscribe( 
        x => {
          Notes.success( "Folder created" );
          this.router.navigate( ['dashboards'] );
        },
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CREATE_FOLDER ));
  }

  
}
