import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RglRect } from 'common';

@Injectable()
export class ReactGridLayoutStore {

  private _layoutInit: BehaviorSubject<RglRect[]> = new BehaviorSubject([]);
  public initialized$: Observable<RglRect[]> = this._layoutInit.asObservable();

  private _layout: BehaviorSubject<RglRect[]> = new BehaviorSubject([]);
  public readonly changed: Observable<RglRect[]> = this._layout.asObservable();

  private _addRequest: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public readonly addRect$: Observable<string> = this._addRequest.asObservable();

  private _removeRequest: BehaviorSubject<string> = new BehaviorSubject(undefined);
  public readonly removeRect$: Observable<string> = this._removeRequest.asObservable();

  constructor(){
    console.log( 'created ReactGridLayoutStore' )
  }

  clear(){
    this._layoutInit.next( [] );
    this._layout.next( [] );
    this._addRequest.next( undefined );
    this._removeRequest.next( undefined );
  }

  init( layout: RglRect[] ){
    this._layoutInit.next( layout );
  }

  change( layout: RglRect[]  ){
    this._layout.next( [...layout] );
  }

  add(id: number) {
    this._addRequest.next( id.toString() );
  }

  remove(id: number) {
    this._removeRequest.next( id.toString() );
  }
}
