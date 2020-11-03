import { Component, Inject } from '@angular/core';
import { DataSourceService, Panel, PANEL_TOKEN } from 'common';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
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
    const isRegexValue = this.isRegex( tag.value );
    const allOperators = Object.values(TagOperator);

    let result = isRegexValue ? allOperators.slice( 4, 6 ) : allOperators.slice( 0, 4 )

    return of( result );
  }

  get tagKeys$() {
    const q = (this.query.measurement) ?
      `SHOW TAG KEYS from ${this.query.measurement}` :
      `SHOW TAG KEYS`;

    return this
      .proxy( q )
      .pipe(
        map(x => [...x[0].values.reduce((acc, value) => acc.concat(value), []), this.REMOVE]))
  }

  tagValues$( tag: Tag ) {
    const q = `SHOW TAG VALUES  WITH KEY=${tag.key}`;

    return this
      .proxy( q )
      .pipe(
        map(x => x[0].values.map(y => y[1])));
  }

  get conditions$() {
    return of(Object.values(TagCondition));
  }

  constructor( 
    @Inject( PANEL_TOKEN ) panel: Panel,
    public dsService: DataSourceService ){
      super( panel, dsService );
  }

  ngOnInit() {
    //this.resetTags();

    if( !this.tags?.length ){
      this.tags.push(new Tag());
    }

    if (!this.query.policy) {
      this.query.policy = this.DEFAULT_POLICY;
    }
  }
 
  isRegex(expr) {
    let isValid = true;
    try {
      new RegExp(expr);

      isValid = ( expr.startsWith( '/' ) && expr.endsWith( '/' )  )
    } catch (e) {
      isValid = false;
    }

    return isValid;
  }

  resetTags() {
    this.query.tags = [];
    this.tags.push(new Tag());
  }

  onTagKeyPick( t: Tag, k: string) {
    const index = this.tags.indexOf( t );  

    if (k?.startsWith(this.REMOVE)) {
      this.query.tags = this.tags.filter( x => x != t );

      if (0 === this.tags.length) {
        this.resetTags();
      }
    } else {
      t.key = k;
      t.value = '';
  
      const len = this.tags.length;
  
      if ( index === len - 2 && this.tags[len - 1].key.length === 0) {
        // if value is selected remove new tag (for plus sign)
        this.tags.pop();
      }
    }
  }

  onTagValuePick(t: Tag, v: string) {
    let oldValueIsRegEx = this.isRegex( t.value );
    t.value = v;
    let newValueIsRegEx = this.isRegex( t.value );

    const regExChanged = ( oldValueIsRegEx != newValueIsRegEx );

    if( regExChanged ){
      t.operator = ( newValueIsRegEx ) ? TagOperator.RegExEq : TagOperator.Eq;
    } 

    if (this.tags.indexOf( t ) === this.tags.length - 1) {
      const nt = new Tag();
      this.tags.push(nt);
    }
  }
}