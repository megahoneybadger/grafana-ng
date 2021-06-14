import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingBaseRuleComponent } from '../../base-rule';


export class AnimationRangeHelper  {
  static getDefault( prop: string ) : AnimationRange{
    switch( prop ){
      case BindingBaseRuleComponent.PROP_OPACITY:
        return new AnimationRange( 0, 1 );

      case BindingBaseRuleComponent.PROP_ANGLE:
        return new AnimationRange( 0, 360 );

      case BindingBaseRuleComponent.PROP_ZOOM:
        return new AnimationRange( 1, 1.2 );

      case BindingBaseRuleComponent.PROP_X:
      case BindingBaseRuleComponent.PROP_Y:
        return new AnimationRange( 0, 50 );

      case BindingBaseRuleComponent.PROP_FILL:
      case BindingBaseRuleComponent.PROP_STROKE:
        return new AnimationRange( "#0a437c", '#890f02' );
    }
  }

  static validate( prop: string, value: any ) : any{
    switch( prop ){
      case BindingBaseRuleComponent.PROP_ZOOM:
        const v = parseFloat( value );
        return isNaN( v ) ? value : v;

      default: 
        return value;
    }
  }
}

export class AnimationRange{
  constructor( public from: any, public to: any ){

  }
  
}
