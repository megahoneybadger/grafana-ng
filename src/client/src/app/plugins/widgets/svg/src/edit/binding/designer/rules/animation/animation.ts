import { Component, Inject } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingBaseRuleComponent } from '../base-rule';

@Component({
  selector: 'binding-animation',
  templateUrl: './animation.html',
  host: {'class': 'gf-form-inline'}
})
export class BindingAnimationComponent extends BindingBaseRuleComponent {

  readonly NONE = 'none';
  readonly LOOP = 'loop';
  readonly DEFAULT_DURATION = 500;

  _from: any;
  _to: any;
  _duration: number;
  _times: number;

  fromSuggestions = [];
  toSuggestions = [];
  durationSuggestions = [];
  timesSuggestions = [];
  
  get from() : any{
    return this.animation.from;
  }

  set from( f: any ){
    this.animation.from = f;
  }

  get to() : any{
    return this.animation.to;
  }

  set to( t: any ){
    this.animation.to = t;
  }

  get duration() : any{
    return this.animation.duration;
  }

  set duration( d: any ){
    this.animation.duration = parseInt( d );
    // setTimeout( () => {
    //   this._duration = ( isNaN( d ) ) ? 
    //     BindingAnimationComponent.DEFAULT_DURATION : parseInt( d )});

  }

  get times() : any{
    return this.animation.times ?? this.LOOP;
  }

  set times( f: any ){
    this.animation.times = ( f == this.LOOP ) ? undefined : parseInt( f );
  }


  get resolver(){
    return this
      .rule
      .resolvers[ 0 ];
  }

  get animation(){
    return this
      .resolver
      .target
      .animation;
  }

  get suggestions(){

    let to, from, copyFrom;

    switch( this.resolver.target.property ){
      case BindingBaseRuleComponent.PROP_OPACITY:
        from = [ this.NONE, 0, 0.1, 0.5, 0.7, 1];    
        copyFrom = [...from];
        copyFrom.shift();
        to = copyFrom
        break;

      case BindingBaseRuleComponent.PROP_ANGLE:
        from = [ this.NONE, 0, 90, 180, 270, 360];    
        copyFrom = [...from];
        copyFrom.shift();
        to = copyFrom
        break;
    }

    to = to ?? [];
    from = from ?? [];

    to = this.wrapWithLabel( to );
    from = this.wrapWithLabel( from );

    return { to, from };
  }

  get defaults(){
    switch( this.resolver.target.property ){
      case BindingBaseRuleComponent.PROP_OPACITY:
        return { from: 0, to: 1 }

      case BindingBaseRuleComponent.PROP_ANGLE:
        return { from: 0, to: 360 }
    }

  }

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );

    this.durationSuggestions = this.wrapWithLabel([ 100, 300, 500, 1000, 2000 ])

    this.timesSuggestions = this.wrapWithLabel([ this.LOOP, 1, 2, 3, 4, 5 ])
    
    this._from = 0;
    this._to = 1;
    this._duration = this.DEFAULT_DURATION;
  }

  ngOnInit(){
    this.targetPropertyChange( false );
  }
  
  onRemoveAnimation(){
    this
      .resolver
      .target
      .animation = undefined;
  }

  targetPropertyChange( setDefaults: boolean = true ){
    let {to, from} = this.suggestions;

    this.toSuggestions = to;
    this.fromSuggestions = from;

    if( setDefaults ){
      const defs = this.defaults;

      this.from = defs.from;
      this.to = defs.to;
    }
  }

  private wrapWithLabel( arr: Array<any> ){
    return arr.map( x =>  { return { label: x } } );
  }
 
}
