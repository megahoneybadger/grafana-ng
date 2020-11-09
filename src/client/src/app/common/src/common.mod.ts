import { NgModule } from '@angular/core';

import { DashboardService } from './dashboard/dashboard.s';
import { UserService } from './user/user.s';

@NgModule({
  declarations: [
  ],
  imports: [
    //CommonModule,
  ],
  exports: [
  ],
  providers:[
    DashboardService,
    UserService
  ]
})
export class EdCommonModule { }
