import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Playlist, PlaylistDashboard } from './playlist.m';
import { BehaviorSubject, Observable } from 'rxjs';
import { PlaylistService } from './playlist.s';
import { switchMap } from 'rxjs/operators';
import { TimeRangeParser } from '../time/helpers/time-parser';

@Injectable()
export class PlaylistStore {
  static readonly ROOT_MANAGEMENT = '/dashboards';
  
  private playlist: BehaviorSubject<Playlist> = new BehaviorSubject(undefined);
  readonly playlist$: Observable<Playlist> = this.playlist.asObservable();

  private timer: any;
  private dashboards: PlaylistDashboard[];
  private index: number = 0;
  private interval: number;

  constructor( 
    private playlistService: PlaylistService,
    private router: Router ){

  }

  start( p: Playlist ){
    this.stop();

    const interval = TimeRangeParser.toMilliseconds( p.interval );

    if( interval <= 0 ){
      this.playlist.next( undefined );
      return;
    }

    this.interval = interval;
    this.playlist.next( p );

    this
      .playlistService
      .getPlaylist( p.id )
      .pipe( 
        switchMap( pd => this
          .playlistService
          .getPlaylistDashboards( pd.id ) ) )
      .subscribe( x => this.play( x ) );
  }

  stop(){
    if( this.playlist.value ){
      console.log( "stop playlist: " + this.playlist.value.name );
    }
    
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

  private play( dashboards: PlaylistDashboard[] ){
    this.dashboards = dashboards;
    this.restartTimer( 0 );
  }

  private restartTimer( startIndex: number ){
    clearInterval( this.timer );

    this.index = startIndex;
    
    this.timer = setInterval( x => this.switchDashboard(), this.interval )
    this.switchDashboard();
  }

  private switchDashboard( inc: boolean = true ){
    if( !this.dashboards?.length ){
      this.stop();
      return;
    }

    if( this.index >= this.dashboards.length ){
      this.index = 0;
    } else if( this.index < 0 ){
      this.index = this.dashboards.length - 1;
    }
    
    const url = this.dashboards[ this.index ].url;
    console.log( "playlist item switch: " + url );

    this.router.navigate( [ url ] );

    ++this.index;
  }
}