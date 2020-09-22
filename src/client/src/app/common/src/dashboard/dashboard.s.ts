import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BaseService } from '../_base/base-service';
import { DashboardRawSearchHit, Folder } from './dashboard.m';

@Injectable()
export class DashboardService extends BaseService{
  static readonly LS_KEY_RECENT = 'recent_dashboards';

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

  // public getTags() : Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/dashboards/tags`, this.headers )
  // }

  // public createFolder( folder ) : Observable<any>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/folders`, folder, this.headers );
  // }

  // public updateFolder( f: Folder ) : Observable<Folder>{
  //   return this
  //     .http
  //     .put( `${this.baseUri}/folders/${f.uid}`, f, this.headers )
  //     .pipe( 
  //       map( x => Folder.import( x ) ));
  // }

  // public deleteFolder( folder ) : Observable<any>{
  //   return this
  //     .http
  //     .delete( `${this.baseUri}/folders/${folder.uid}`, this.headers );
  // }


  // public getDashboard( uid: string ) : Observable<Dashboard>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/dashboards/uid/${uid}`, this.headers )
  //     .pipe( 
  //        map( x =>  {
	// 				return  Dashboard.import( x );
					
	// 			 }  ) );
	// }
	
	// public getFolderPermissions(uid: string) : Observable<any>{
  //   return this
  //     .http
  //     .get( `${this.baseUri}/folders/${uid}/permissions`, this.headers )
	// }
	
	// public updateFolderPermissions(uid: string, perms) : Observable<any>{
  //   return this
  //     .http
  //     .post( `${this.baseUri}/folders/${uid}/permissions`, perms, this.headers )
  // }

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

  // public evalAlert( d: Dashboard, panelId: number ) : Observable<any> {

  //   const arg = {
  //     dashboard: this.createDashboardModel( d ),
  //     panelId: panelId
  //   };

  //   return this
  //     .http
  //     .post( `${this.baseUri}/alerts/test`, arg, this.headers )
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

	// public updateDashboard( d: Dashboard, message: string, 
	// 	folderId: number, overwrite: boolean ) : Observable<any>{

  //  const arg = {
  //   dashboard: this.createDashboardModel( d ),
  //   message: message,
  //   folderId: folderId,
  //   overwrite: overwrite
  //  }

  //   return this
  //     .http
  //     .put( `${this.baseUri}/dashboards/db`, arg, this.headers );
  // }

  // private createDashboardModel( d: Dashboard ){
  //   return {
  //     id: d.id,
  //     uid : d.uid,
  //     title: d.title,
  //     tags: d.tags,
     
      
  //     version: d.version,
  //     data: {
  //       panels: d.panels,
  //       time: d.time,
  //       annotationRules: [...d.annotationRules],
  //       links: [ ...d.links ],

  //       description: d.description,
  //       editable: d.editable
        
  //     }
	// 	};
  // } 

  // public deleteDashboard( d: Dashboard ) : Observable<any>{
  //   return this
  //     .http
  //     .delete( `${this.baseUri}/dashboards/uid/${d.uid}`, this.headers );
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

}
