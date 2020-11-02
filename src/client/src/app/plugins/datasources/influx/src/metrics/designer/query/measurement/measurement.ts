import { Component } from '@angular/core';
import { DataSourceService } from 'common';
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

  constructor( private dsService: DataSourceService ){
    super();
  }

  ngOnInit() {
    //this.resetTags();

    if( !this.query.tags?.length ){
      this.query.tags.push(new Tag());
    }

    if (!this.query.policy) {
      this.query.policy = this.DEFAULT_POLICY;
    }
  }

  showRetentionPolicies() {
    return this
      .dsService
      .proxy( 1, `SHOW RETENTION POLICIES`)
      .pipe(
        map(x => ['default', ...x[0].values.map(y => y[0])]));
  }

  showMeasurementsRequest() {
    return this
      .dsService
      .proxy( 1, `SHOW MEASUREMENTS`)
      .pipe(
        map(x => [...x[0].values].reduce((acc, value) => acc.concat(value), [])))
  }

  tagOperatorsRequest( tag:Tag ) {
    const isRegexValue = this.isRegex( tag.value );
    const allOperators = Object.values(TagOperator);

    let result = isRegexValue ? allOperators.slice( 4, 6 ) : allOperators.slice( 0, 4 )

    return of( result );
  }

  showTagValuesRequest(tag: Tag) {
    const q = `SHOW TAG VALUES  WITH KEY=${tag.key}`;

    return this
      .dsService
      .proxy(1, q)
      .pipe(
        map(x => x[0].values.map(y => y[1])));
  }

  showTagKeysRequest() {
    const q = (this.query.measurement) ?
      `SHOW TAG KEYS from ${this.query.measurement}` :
      `SHOW TAG KEYS`;

    return this
      .dsService
      .proxy(1, q)
      .pipe(
        map(x => [...x[0].values.reduce((acc, value) => acc.concat(value), []), '--remove--']))
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

  andOrRequest() {
    return of(Object.values(TagCondition));
  }
}