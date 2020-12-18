import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { Dashboard, DashboardRawSearchHit, DashboardRestoreReply, DashboardRestoreRequest, DashboardRouteChange,
  DashboardSaveResult, DashboardVersion, Folder, Tag, UpdateFolderRequest } from './dashboard.m';
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

  searchTop() : Observable<DashboardRawSearchHit[]>{
    return this.searchFolder( 0 );
  }

  searchFolder( id: number ) : Observable<DashboardRawSearchHit[]>{
    return this.search( `folderIds=${id}` );
  }

  search( query: string ) : Observable<DashboardRawSearchHit[]>{
    return this.get<DashboardRawSearchHit[]>( `search?${query}` )
  }

  getFolder( uid: string ) : Observable<Folder>{
    return this.get<Folder>( `folders/${uid}` )
  }

  createFolder( folder: UpdateFolderRequest ) : Observable<any>{
    return this.post( `folders`, folder );
  }

  deleteFolder( uid: string ) : Observable<TextMessage>{
    return this.delete<TextMessage>( `folders/${uid}`);
  }

  updateFolder( r: UpdateFolderRequest ) : Observable<Folder>{
    return this.put<Folder>( `folders/${r.uid}`, r )
  }

  deleteDashboard( uid: string ) : Observable<TextMessage>{
    return this.delete<TextMessage>( `dashboards/uid/${uid}` );
  }

  getTags() : Observable<Tag[]>{
    return this
      .get<Tag[]>( `dashboards/tags` )
      .pipe( 
        map( res => res.sort((a, b) => a.term.localeCompare(b.term))) )
  }

  getFolderPermissions(uid: string) : Observable<PermissionRule[]>{
    return this.get<PermissionRule[]>( `folders/${uid}/permissions` )
  }
  	
	updateFolderPermissions( uid: string, perms: PermissionAssignment[] ) : Observable<TextMessage>{
    return this.post<TextMessage>( `folders/${uid}/permissions`, perms )
  }

  getDashboard( uid: string ) : Observable<Dashboard>{
    return this.get<Dashboard>( `dashboards/uid/${uid}` );
  }

  createDashboard( d: Dashboard, folderId: number, overwrite: boolean ) : Observable<Dashboard>{
    const arg = {
      dashboard: DashboardService.toBackendModel( d ),
      folderId: folderId,
      overwrite: overwrite
    }

    d.meta.folder = d.meta.folder ?? <any>{ id: folderId }

    return this.post( `dashboards/db`, arg )
  }
  
  updateDashboard( d: Dashboard, message: string,
    folderId: number, overwrite: boolean ) : Observable<DashboardSaveResult>{

    const arg = {
      dashboard: DashboardService.toBackendModel( d ),
      message: message,
      folderId: folderId,
      overwrite: overwrite
    }

    return this.put<DashboardSaveResult>( `dashboards/db`, arg );
  }

  static toBackendModel( d: Dashboard ){
    var r = _.cloneDeep(d.data);

    r.panels.forEach( x => {
      delete x.error;
      delete x.loading;
      delete x.alertState;
      delete x.annotations
      delete x.widget.component
    } )

    return {
      id: d.id,
      uid : d.uid,
      title: d.title,
      tags: [...d.meta?.tags],
      version: d.version,

      data: r,
    };
  } 

  
  evalAlert( d: Dashboard, panelId: number ) : Observable<any> {
    const arg = {
      dashboard:  DashboardService.toBackendModel( d ),
      panelId: panelId
    };

    return this.post( `alerts/test`, arg )
  }

  getDashboardVersions(id: number, limit: number = 10, start: number = 0) : Observable<DashboardVersion[]>{
    return this.get<DashboardVersion[]>( `dashboards/id/${id}/versions?limit=${limit}&start=${start}` )
  }

  compareDashboards( arg : any ) : Observable<any>{
    return this.post<any>( `dashboards/calculate-diff`, arg )
  }

  getDashboardPermissions(id: number) : Observable<PermissionRule[]>{
    return this.get( `dashboards/id/${id}/permissions` )
  }

  updateDashboardPermissions(id: number, perms: PermissionAssignment[]) : Observable<TextMessage>{
    return this.post( `dashboards/id/${id}/permissions`, perms )
  }

  restoreDashboardVersion(id: number, arg : DashboardRestoreRequest) : Observable<DashboardRestoreReply>{
    return this.post( `dashboards/id/${id}/restore`, arg )
  }





  

 

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
