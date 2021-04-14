import { Component, Inject } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { isRegex } from '../../../builder';
import { Tag, TagCondition, TagOperator } from '../../../metrics.m';
import { BaseQueryComponent } from '../query-base';

@Component({
  selector: 'measurement-editor',
  templateUrl: './measurement.html'
})
export class MeasurementEditorComponent extends BaseQueryComponent  {

  readonly DEFAULT_POLICY = 'default';

  get retentionPolicies$() {
    return this
      .proxy( `SHOW RETENTION POLICIES`)
      .pipe(
        map(x => ['default', ...x[0].values.map(y => y[0])]));
  }

  get measurements$() {
    return this
      .proxy( `SHOW MEASUREMENTS`)
      .pipe(
        map(x => [...x[0].values].reduce((acc, value) => acc.concat(value), [])))
  }

  tagOperators$( tag:Tag ) {
    const isRegexValue = isRegex( tag.value );
    const allOperators = Object.values(TagOperator);

    let result = isRegexValue ? allOperators.slice( 4, 6 ) : allOperators.slice( 0, 4 )

    return of( result );
  }

  get tagAddKeys$() {
    const q = (this.query.measurement) ?
      `SHOW TAG KEYS from ${this.query.measurement}` :
      `SHOW TAG KEYS`;

    return this
      .proxy( q )
      .pipe(
        map(x => (!x.length || !x[0].values) ? [] :
          [...x[0].values?.reduce((acc, value) => acc.concat(value), [])]));
  }

  get tagEditKeys$() {
    return this
      .tagAddKeys$
      .pipe( 
        map( x => [this.REMOVE, ...x ] ));
  }

  tagValues$( tag: Tag ) {
    const q = `SHOW TAG VALUES WITH KEY=${tag.key}`;

    return this
      .proxy( q )
      .pipe(
        map(x => x[0]?.values.map(y => y[1])));
  }

  get conditions$() {
    return of(Object.values(TagCondition));
  }

  get canAddTag(){
    const tags = this.query.tags;
    return ( !tags?.length ) || ( tags[ tags.length - 1 ] ).value;
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dsService: DataSourceService ){
      super( panel, dsService );
  }

  ngOnInit() {
    if (!this.query.policy) {
      this.query.policy = this.DEFAULT_POLICY;
    }
  }
 
  onTagAddKeyPick( k: string ) {
    var tag = new Tag();
    tag.key = k;
    this.query.tags.push( tag );
  }

  onTagKeyEditPick( k: string, t: Tag ) {
    if( k == this.REMOVE ){
      this.query.tags = this.query.tags.filter( x => x != t );
    }
  }

  onTagValuePick(t: Tag, v: string) {
    if( v === t.value ){
      return;
    }

    let oldValueIsRegEx = isRegex( t.value );
    t.value = v;
    let newValueIsRegEx = isRegex( t.value );

    const regExChanged = ( oldValueIsRegEx != newValueIsRegEx );

    if( regExChanged ){
      t.operator = ( newValueIsRegEx ) ? TagOperator.RegExEq : TagOperator.Eq;
    } 

    this.needRebuild()
  }
}