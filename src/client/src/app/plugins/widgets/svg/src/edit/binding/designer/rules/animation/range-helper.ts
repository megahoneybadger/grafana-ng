import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingBaseRuleComponent } from '../base-rule';


export class AnimationRangeHelper  {
  static getDefault( prop: string ) : AnimationRange{
    switch( prop ){
      case BindingBaseRuleComponent.PROP_OPACITY:
        return new AnimationRange( 0, 1 );

      case BindingBaseRuleComponent.PROP_ANGLE:
        return new AnimationRange( 0, 360 );

      case BindingBaseRuleComponent.PROP_FILL:
      case BindingBaseRuleComponent.PROP_STROKE:
        return new AnimationRange( "#0a437c", '#890f02' );
    }

  }
}

export class AnimationRange{
  constructor( public from: any, public to: any ){

  }
  
}
