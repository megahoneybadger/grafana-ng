import { convertToParamMap, ParamMap, Params } from '@angular/router';
import { Observable, ReplaySubject } from 'rxjs';

/**
 * An ActivateRoute test double with a `paramMap` observable.
 * Use the `setParamMap()` method to add the next `paramMap` value.
 */
export class ActivatedRouteStub {
  // Use a ReplaySubject to share previous values with subscribers
  // and pump new values into the `paramMap` observable
  private subject = new ReplaySubject<ParamMap>();

  constructor(initialParams?: Params) {
    this.setParamMap(initialParams);
    //this.snapshot.setParamMap(initialParams);
    this.snapshot = new ActivatedRouteSnapshotStub( initialParams );
    
  }

  /** The mock paramMap observable */
  readonly paramMap = this.subject.asObservable();
  readonly snapshot;

  /** Set the paramMap observables's next value */
  setParamMap(params?: Params) {
    this.subject.next(convertToParamMap(params));
  }
}

export class ActivatedRouteSnapshotStub{
  private _params : Params;

  constructor(initialParams?: Params) {
    this._params = initialParams;
  }

  get params() : Params{
    return this._params;
  }
}