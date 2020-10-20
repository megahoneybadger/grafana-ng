import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { IPanel } from './dashboard.m';

@Injectable()
export class PanelStore {
  private panel: BehaviorSubject<IPanel> = new BehaviorSubject(null);
  readonly panel$: Observable<IPanel> = this.panel.asObservable();

  next( p: IPanel ){
    
    this.panel.next( p );
  }

  constructor(){
    console.log( "create PanelStore" )
  }
}