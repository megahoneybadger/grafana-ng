import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { Annotation } from './annotation.m';
import { TextMessage } from '../settings/settings.m';


@Injectable()
export class AnnotationService extends BaseService{

  // public create( annot ) : Observable<any>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/annotations`, annot, this.headers );
  // }

  // public update( id, annot ) : Observable<any>{
  //   return this
  //     .http
  //     .put( `${this.baseUri}/annotations/${id}`, annot, this.headers );
  // }

  // public delete( id: number ) : Observable<any>{
  //   return this
  //     .http
  //     .delete( `${this.baseUri}/annotations/${id}`, this.headers );
  // }

  clear( dashboardId: number, panelId: number ) : Observable<TextMessage>{
    const arg = {
      dashboardId: dashboardId,
      panelId: panelId
    };

    return this
      .http
      .post<TextMessage>( `${this.baseUri}/annotations/mass-delete`, arg, this.headers );
  }

  find( q: string ) : Observable<Annotation[]>{
    return this
      .http
      .get<Annotation[]>( `${this.baseUri}/annotations?${q}` , this.headers );
  }
}
