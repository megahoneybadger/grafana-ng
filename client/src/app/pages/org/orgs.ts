import { Component } from '@angular/core';
import { ObservableEx } from 'uilib2';
import { Organization } from 'src/app/core/models/organization';
import { OrgService } from 'src/app/core/services/orgs.s';
import { Router, ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FadeInOutAnimation } from 'src/app/uilib/animations';
import { BaseComponent } from '../base/base-component';

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
