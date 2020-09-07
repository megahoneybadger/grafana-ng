import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { finalize } from 'rxjs/operators';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';
import { OrgService } from 'src/app/core/services/orgs.s';

@Component({
  selector: 'admin-add-org',
  templateUrl: './add-org.html',
	styles:[`
		.org-description {
			width: 555px;
			margin-bottom: 20px;
		}
	`]
})
export class AdminAddOrgComponent extends BaseComponent {
	form: FormGroup;

	get name() {
		return this.form.get('name');
	}

	constructor( 
		private orgService: OrgService,
		private router: Router,
		private activeRoute: ActivatedRoute ) {
			super();
	}

	ngOnInit(){
		this.form = new FormGroup({
			'name': new FormControl( null, Validators.required),
    });
	}

	onSubmit(){
		this.waiting = true
		
		this
			.orgService
			.create( this.form.value )
			.pipe( 
				finalize( () => this.waiting = false ))
			.subscribe( 
				x => {
					Notes.success( x.message );
					this.router.navigate(['../'], { relativeTo: this.activeRoute })
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CREATE_ORG ));
	}
}
