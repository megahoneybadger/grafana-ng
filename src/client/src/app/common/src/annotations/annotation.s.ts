import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { Annotation, AnnotationCreateRequest, AnnotationUpdateRequest } from './annotation.m';
import { TextMessage } from '../settings/settings.m';

@Injectable()
export class AnnotationService extends BaseService{

  create( r: AnnotationCreateRequest ) : Observable<any>{
    return this.post( `annotations`, r );
  }

  update( id: number, r: AnnotationUpdateRequest ) : Observable<TextMessage>{
    return this.put<TextMessage>( `annotations/${id}`, r );
  }

  remove( id: number ) : Observable<TextMessage>{
    return this.delete<TextMessage>( `annotations/${id}` );
  }

  clear( dashboardId: number, panelId: number ) : Observable<TextMessage>{
    const arg = {
      dashboardId: dashboardId,
      panelId: panelId
    };

    return this.post<TextMessage>( `annotations/mass-delete`, arg );
  }

  find( q: string ) : Observable<Annotation[]>{
    return this.get<Annotation[]>( `annotations?${q}` );
  }
}
