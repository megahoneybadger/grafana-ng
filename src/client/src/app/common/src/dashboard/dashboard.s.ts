import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { Dashboard, DashboardRawSearchHit, DashboardRouteChange,
  DashboardSaveResult, Folder, Tag, UpdateFolderRequest } from './dashboard.m';
import { TextMessage } from '../settings/settings.m';
import { PermissionAssignment, PermissionRule } from '../security/security.m';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';

@Injectable()
export class DashboardService extends BaseService{
  static readonly LS_KEY_RECENT = 'recent_dashboards';

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    http: HttpClient ){
      super( http );
    }

  searchTop() : Observable<any>{
    return this.search( 'foldersIds=0' );
  }

  searchFolder( id: number ) : Observable<any>{
    return this.search( `folderIds=${id}` );
  }

  search( query: string ) : Observable<DashboardRawSearchHit[]>{
    return this
      .http
      .get<DashboardRawSearchHit[]>( `${this.baseUri}/search?${query}`, this.headers )
  }

  getFolder( uid: string ) : Observable<Folder>{
    return this
      .http
      .get<Folder>( `${this.baseUri}/folders/${uid}`, this.headers )
  }

  createFolder( folder ) : Observable<any>{
    return this
      .http
      .post( `${this.baseUri}/folders`, folder, this.headers );
  }

  deleteFolder( uid: string ) : Observable<TextMessage>{
    return this
      .http
      .delete<TextMessage>( `${this.baseUri}/folders/${uid}`, this.headers );
  }

  updateFolder( r: UpdateFolderRequest ) : Observable<Folder>{
    return this
      .http
      .put<Folder>( `${this.baseUri}/folders/${r.uid}`, r, this.headers )
  }

  deleteDashboard( uid: string ) : Observable<TextMessage>{
    return this
      .http
      .delete<TextMessage>( `${this.baseUri}/dashboards/uid/${uid}`, this.headers );
  }

  getTags() : Observable<Tag[]>{
    return this
      .http
      .get<Tag[]>( `${this.baseUri}/dashboards/tags`, this.headers )
      .pipe( 
        map( res => res.sort((a, b) => a.term.localeCompare(b.term))) )
  }

  getFolderPermissions(uid: string) : Observable<PermissionRule[]>{
    return this
      .http
      .get<PermissionRule[]>( `${this.baseUri}/folders/${uid}/permissions`, this.headers )
  }
  	
	updateFolderPermissions( uid: string, perms: PermissionAssignment[] ) : Observable<TextMessage>{
    return this
      .http
      .post<TextMessage>( `${this.baseUri}/folders/${uid}/permissions`, perms, this.headers )
  }

  getDashboard( uid: string ) : Observable<Dashboard>{
    return this
      .http
      .get<Dashboard>( `${this.baseUri}/dashboards/uid/${uid}`, this.headers );
  }
  
  updateDashboard( d: Dashboard, message: string,
    folderId: number, overwrite: boolean ) : Observable<DashboardSaveResult>{

    const arg = {
      dashboard: DashboardService.toBackendModel( d ),
      message: message,
      folderId: folderId,
      overwrite: overwrite
    }

    return this
      .http
      .put<DashboardSaveResult>( `${this.baseUri}/dashboards/db`, arg, this.headers );
  }

  static toBackendModel( d: Dashboard ){
    var r = _.cloneDeep(d.data);

    r.panels.forEach( x => {
      delete x.error;
      delete x.widget.component
    } )

    return {
      id: d.id,
      uid : d.uid,
      title: d.title,
      //tags: d.tags,
      
      version: d.version,
      data: r
    };
  } 

  
  evalAlert( d: Dashboard, panelId: number ) : Observable<any> {
    const arg = {
      dashboard:  DashboardService.toBackendModel( d ),
      panelId: panelId
    };

    return this
      .http
      .post( `${this.baseUri}/alerts/test`, arg, this.headers )
  }
 

 


  
	



  // public getDashboardPermissions(id: number) : Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/dashboards/id/${id}/permissions`, this.headers )
  // }
  
  // public updateDashboardPermissions(id: number, perms) : Observable<any>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/dashboards/id/${id}/permissions`, perms, this.headers )
  // }

  // public getDashboardVersions(id: number, limit: number = 10, start: number = 0) : Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/dashboards/id/${id}/versions?limit=${limit}&start=${start}`, this.headers )
  // }

  // public restoreDashboardVersion(id: number, arg : any) : Observable<any>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/dashboards/id/${id}/restore`, arg, this.headers )
  // }

  // public compareDashboards( arg : any) : Observable<any>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/dashboards/calculate-diff`, arg, this.headers )
  // }



  

  // // public createDashboard( d: Dashboard, overwrite: boolean ) : Observable<Dashboard>{
  // //   let url = `${this.baseUri}/dashboards/db`;

  // //   const arg = {
  // //     dashboard: {
	// // 			title: d.title,
	// // 			tags: d.tags,
  // //       data: {
  // //         panels: d.panels,
	// // 				time: d.time,

	// // 				description: d.description,
	// // 				editable: d.editable
  // //       }
  // //     },
  // //     overwrite: overwrite,
  // //     folderId: d.folder.id,
  // //   }

  // //   return this
  // //     .http
  // //     .post( url, arg, this.headers )
  // //     .pipe(
  // //       map( x => Dashboard.import( x ) ) );
  // // }

  // public createDashboard( d: Dashboard, message: string, 
	// 	folderId: number, overwrite: boolean ) : Observable<any>{

  //   const arg = {
  //     dashboard: this.createDashboardModel( d ),
  //     message: message,
  //     folderId: folderId,
  //     overwrite: overwrite
  //     }
    

  //   return this
  //     .http
  //     .post( `${this.baseUri}/dashboards/db`, arg, this.headers );
  // }

	

  


  // private convertBoardItems( records : any [] ) : BoardItem[]{
  //   let list = new Array<BoardItem>();

  //   records.forEach( x =>{
  //     let item;

  //     switch( x.type ){
  //       case "dash-db":
  //         item = Dashboard.import( x );
  //         break;
  
  //       case "dash-folder":
  //         item = Folder.import( x );
  //         break;
  //     }

  //     if( item ){
  //       list.push( item );
  //     }
  //   });

  //   //console.log( list );

  //   return list;
  // }

  // static saveRecentDashboards( id: number ){
  //   if( !Number.isInteger( id ) ){
  //     return;
  //   }
    
  //   let ids = DashboardsService.getRecentDashboards();

  //   ids = ids.filter( x => x != id  )
  //   ids.unshift( id );
  //   ids = ids.slice( 0, 5 );

  //   localStorage.setItem( this.LS_KEY_RECENT, ids.toString() );
  // }

  // static updateRecentDashboards( ids: number[] ){
  //   localStorage.setItem( this.LS_KEY_RECENT, ids.toString() );
  // }


  // static getRecentDashboards(){
  //   const value = localStorage.getItem( this.LS_KEY_RECENT );
  //   let ids = [];

  //   if( value ){
  //     ids = value
  //       .split(',')
  //       .map( x => parseInt( x ) )
  //       .filter( x => Number.isInteger( x ) );
  //   }

  //   return ids;
  // }

  listenRouteChange() : Observable<DashboardRouteChange>{
    return this
      .router
      .events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          let uid: string;
          let existing: boolean;
          let panelId: number;

          while (route.firstChild ) {
            route = route.firstChild;

            uid = uid ?? route.snapshot.params[ "uid" ];
            existing = existing ?? route.snapshot.data.existing;
            const p = +route.snapshot.params['panelId'];

            if( Number.isInteger( p ) ){
              panelId = p;
            }
          }

          return {
            uid, existing, panelId
          };
        }))
  }

}
