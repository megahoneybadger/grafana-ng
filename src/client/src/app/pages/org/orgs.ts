import { Component } from '@angular/core';
import { ObservableEx, FadeInOutAnimation, Notes, ErrorMessages } from 'uilib';
import { Router, ActivatedRoute } from '@angular/router';
import { finalize, tap } from 'rxjs/operators';
import { BaseComponent } from '../base/base-component';
import { Organization, OrgService } from 'common';

@Component({
  selector: 'admin-orgs',
  templateUrl: './orgs.html',
  animations: [FadeInOutAnimation],
})
export class AdminOrgsComponent extends BaseComponent {
  orgsRequest: ObservableEx<Organization[]>
  orgs: Organization[];

  constructor( 
		private orgService: OrgService,
		public router: Router,
		public activatedRoute: ActivatedRoute ) {
			super();
  }
  
  ngOnInit() {
    this.orgsRequest = new ObservableEx<Organization[]>(this
			.orgService
			.getOrgs()
			.pipe(
				tap(x => this.orgs = [...x])));
  }

  onRemoveOrg( org: Organization ){
    this.waiting = true;

		this
			.orgService
			.remove( org.id )
			.pipe(
				finalize( () =>  {
					this.waiting = false;
					delete (<any>org).confirmDelete;
				} ))
			.subscribe(
				x => {
					Notes.success(x.message);

					const index = this
						.orgs
						.findIndex(y => org.id == y.id );

					if (-1 !== index) {
						this.orgs.splice(index, 1);
					}
				},
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_ORG ))
  }
}
