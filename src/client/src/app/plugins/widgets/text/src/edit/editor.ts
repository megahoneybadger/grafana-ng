import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'widget-editor',
  templateUrl: './editor.html'
})
export class TextPanelEditorComponent {
  index: number = 1;
  routeSubs: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location){

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
