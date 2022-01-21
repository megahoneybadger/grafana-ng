import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist, PlaylistDashboard } from './playlist.m';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlaylistService } from './playlist.s';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class PlaylistStore {
  static readonly ROOT_MANAGEMENT = '/dashboards';
  
  private playlist: BehaviorSubject<Playlist> = new BehaviorSubject(undefined);
  readonly playlist$: Observable<Playlist> = this.playlist.asObservable();

  private timer: any;
  private dashboards: PlaylistDashboard[];
  private index: number = 0;

  constructor( 
    private playlistService: PlaylistService,
    private router: Router ){

  }

  start( p: Playlist ){
    this.stop();

    this
      .playlistService
      .getPlaylist( p.id )
      .pipe( 
        switchMap( pd => this
          .playlistService
          .getPlaylistDashboards( pd.id ) ) )
      .subscribe( x => this.play( 30000, x ) );
    
    this.playlist.next( p );
  }

  stop(){
    clearInterval( this.timer );
    this.dashboards = [];
    this.index = 0;
    this.playlist.next( undefined );
  }

  prev(){
    this.restartTimer( this.index - 2 );
  }

  next(){
    this.restartTimer( this.index );
  }

  private play( interval: number, dashboards: PlaylistDashboard[] ){
    this.dashboards = dashboards;
    this.restartTimer( 0 );
  }

  private restartTimer( startIndex: number ){
    clearInterval( this.timer );

    this.index = startIndex;
    
    this.timer = setInterval( x => this.switchDashboard(), 10000 )
    this.switchDashboard();
  }

  private switchDashboard( inc: boolean = true ){
    if( this.index >= this.dashboards.length ){
      this.index = 0;
    } else if( this.index < 0 ){
      this.index = this.dashboards.length - 1;
    }
    
    const url = this.dashboards[ this.index ].url;
    console.log( "playlist switch: " + url );

    this.router.navigate( [ url ] );

    ++this.index;
  }
}