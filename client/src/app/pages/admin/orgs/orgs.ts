import { Component } from '@angular/core';
import { ObservableEx } from 'src/app/uilib/load-or-error/load-wrapper';
import { Organization } from 'src/app/core/models/organization';
import { OrgService } from 'src/app/core/services/orgs.s';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../base/base-component';
import { tap } from 'rxjs/operators';
import { FadeInOutAnimation } from 'src/app/uilib/animations';

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
		private router: Router,
		private activatedRoute: ActivatedRoute ) {
			super();
  }
  
  ngOnInit() {
    this.orgsRequest = new ObservableEx<Organization[]>(this
			.orgService
			.getOrgs()
			.pipe(
				tap(x => this.orgs = [...x])));
  }

}
