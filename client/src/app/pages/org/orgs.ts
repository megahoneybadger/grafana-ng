import { Component } from '@angular/core';
import { ObservableEx, FadeInOutAnimation } from 'uilib';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
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

  onClick(){
    console.log( 'on click' );
  }

  onRemoveOrg( e ){
    
  }

}
