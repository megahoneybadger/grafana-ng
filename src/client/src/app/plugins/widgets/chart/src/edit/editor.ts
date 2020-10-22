import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'widget-editor',
  templateUrl: './editor.html'
})
export class ChartEditorComponent {
  index: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location){
      this
        .activatedRoute
        .queryParamMap
        .subscribe((params) => {
          const p = params.get( 'tab' );

          if( Number.isInteger( +p )){
            this.index = +p;
          } 
        });
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
