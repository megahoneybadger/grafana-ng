import { Location } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Panel, PANEL_TOKEN } from 'common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'widget-editor',
  templateUrl: './editor.html'
})
export class SvgPanelEditorComponent  {

  index: number = 1;
  routeSubs: Subscription;

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public location: Location,
    @Inject( PANEL_TOKEN ) public panel: Panel  ){
      
      this.routeSubs = this
        .activatedRoute
        .queryParamMap
        .subscribe((params) => {
          const p = params.get( 'tab' );
          const n = +p;

          if( Number.isInteger( n ) ){
            this.index = n;
          } 
        });
  }

  ngOnDestroy(){
    this.routeSubs?.unsubscribe();
  }

  onTabSelected( index: number ){
    const url = this
      .router
      .createUrlTree([], {
        relativeTo: this.activatedRoute,
        queryParams: {tab: index},
        queryParamsHandling: 'merge',
      })
      .toString()

    this.location.go(url);
  }


}
