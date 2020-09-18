import { Component } from '@angular/core';
import { Router, RouterEvent, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ed-module-loader',
  styleUrls:[ 'module-loader.scss' ],
  template: `
    <div class="modal-wrapper" *ngIf="isLoadingModule"  >
      <ed-progress message="loading module..."></ed-progress>
    </div>`
})
export class ModuleLoaderComponent {
  routeSubs: Subscription;
  asyncLoadCount: number = 0;
  isLoadingModule: boolean;

  constructor(public router: Router){
    
  }

  ngOnInit(){
    this.routeSubs = this
      .router
      .events
      .subscribe((event: RouterEvent) => {
        if (event instanceof RouteConfigLoadStart) {
          this.asyncLoadCount++;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.asyncLoadCount--;
        }
        
        setTimeout( () => this.isLoadingModule = !!this.asyncLoadCount, /*??*/50 );
      });

    //this.isLoadingModule = true;
  }

  ngOnDestroy(){
    this.routeSubs?.unsubscribe();
  }
}


