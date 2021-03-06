import { Component, Inject, Input } from '@angular/core';
import { Panel, PANEL_TOKEN } from 'common';
import { BindingBaseRuleComponent } from '../../base-rule';
import { AnimationRange, AnimationRangeHelper } from './range-helper';

@Component({
  selector: 'binding-animation',
  templateUrl: './animation.html',
  host: {'class': 'gf-form-inline'}
})
export class BindingAnimationComponent extends BindingBaseRuleComponent {

  readonly NONE = 'none';
  readonly LOOP = 'loop';
  readonly DEFAULT_DURATION = 500;

  _property: string;

  fromSuggestions = [];
  toSuggestions = [];
  durationSuggestions = [];
  timesSuggestions = [];

  ranges = new Map<string,AnimationRange>();

  @Input() set property( p : string ){
    if( this._property ){
      this.targetPropertyChange();
    }

    this._property = p;
  }

  get from() : any{
    return this.animation.from;
  }

  set from( f: any ){

    this
      .ranges
      .get( this.target.property )
      .from = f;

    this.animation.from = AnimationRangeHelper.validate( this.target.property, f );
  }

  get to() : any{
    return this.animation.to;
  }

  set to( t: any ){
    this
      .ranges
      .get( this.target.property )
      .to = t;

    this.animation.to = AnimationRangeHelper.validate( this.target.property, t );
  }

  get duration() : any{
    return this.animation.duration;
  }

  set duration( d: any ){
    this.animation.duration = parseInt( d );
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

      case BindingBaseRuleComponent.PROP_X:
      case BindingBaseRuleComponent.PROP_Y:
        from = [ this.NONE, -100, -50, 10, 20, 50, 100, 200];    
        copyFrom = [...from];
        copyFrom.shift();
        to = copyFrom
        break;

      case BindingBaseRuleComponent.PROP_ZOOM:
        from = [ this.NONE, 0.5, 0.7, 1, 1.1, 1.2, 1.5, 1.7, 2];    
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

  constructor(@Inject(PANEL_TOKEN) panel: Panel) {
    super( panel );

    this.durationSuggestions = this.wrapWithLabel([ 100, 300, 500, 1000, 2000 ])

    this.timesSuggestions = this.wrapWithLabel([ this.LOOP, 1, 2, 3, 4, 5 ])
  }

  ngOnInit(){

    const anim = this.animation;

    this.ranges.set( this.target.property,
       new AnimationRange( anim.from, anim.to ) )

    this.targetPropertyChange();
  }
  
  onRemoveAnimation(){
    this
      .resolver
      .target
      .animation = undefined;
  }

  private targetPropertyChange(){
    let {to, from} = this.suggestions;

    this.toSuggestions = to;
    this.fromSuggestions = from;

    const p = this.resolver.target.property;

    const defs = AnimationRangeHelper.getDefault( p )  

    const range = this.ranges.get( p ) ?? {...defs};

    this.ranges.set( p, range );

    this.from = range.from;
    this.to = range.to;
  }

  private wrapWithLabel( arr: Array<any> ){
    return arr.map( x =>  { return { label: x } } );
  }
 
}

