import { Component, ViewEncapsulation } from '@angular/core';
import { AnnotationQueryType, AnnotationRule, BaseDasboardComponent, DashboardStore } from 'common';
import { ColorHelper } from 'uilib';

@Component({
  selector: 'settings-annotations',
  templateUrl: `./annots.html`,
  encapsulation: ViewEncapsulation.None
})
export class AnnotationSettingsComponent extends BaseDasboardComponent{

  selectedRule: AnnotationRule;
  newRule: AnnotationRule;

  get rules():AnnotationRule[]{
    return this.dashboard?.data.annotationRules;
  }

  get hasCustomAnnotations(){
    return this.dashboard &&
      this
        .dashboard
        .data
        ?.annotationRules
        ?.filter( x => !x.buildIn )
        .length > 0;
  }

  constructor( store: DashboardStore){
      super( store );
  }

  onDashboardReady(){
    this.dashboard.data.annotationRules = this.dashboard.data.annotationRules?? [ AnnotationRule.buildIn ];
  }

  onAdd(){
    const r = new AnnotationRule();
    
    r.datasource = "-- ED --";
    r.enable = true;
    r.hide = false;
    r.queryType = AnnotationQueryType.Tags;
    r.color = ColorHelper.DEFAULT_ANNOTATION_COLOR;
    r.limit = 100;

    this.newRule = r;
  }

  onDelete( rule: AnnotationRule ) : number{
    event.stopPropagation();

    const index = this
      .rules
      .indexOf( rule );

    this
      .rules
      .splice( index, 1 );

    return index;
  }

  onUp( rule: AnnotationRule ){
    const index = this.onDelete( rule )

    this
      .rules
      .splice( index - 1, 0, rule );
  }

  onDown( rule: AnnotationRule ){
    const index = this.onDelete( rule )

    this
      .rules
      .splice( index + 1, 0, rule );
  }
}

