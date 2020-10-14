import { NgModule } from '@angular/core';


import { DashboardService } from './dashboard/dashboard.s';
import { TimeRangeStore } from './time/time.store';
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
