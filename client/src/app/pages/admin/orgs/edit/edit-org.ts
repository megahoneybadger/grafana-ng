import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from 'src/app/pages/base/base-component';
import { finalize } from 'rxjs/operators';
import { Notes } from 'src/app/uilib/note/note-dispatcher';
import { ErrorMessages } from 'src/app/uilib/note/error-messages';
import { OrgService } from 'src/app/core/services/orgs.s';

@Component({
  selector: 'admin-edit-org',
  templateUrl: './edit-org.html',

})
export class AdminEditOrgComponent {
	
}
