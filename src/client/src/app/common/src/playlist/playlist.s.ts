import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Playlist } from './playlist.m';
import { BaseService } from '../_base/base-service';
import { TextMessage } from '../settings/settings.m';

@Injectable()
export class PlaylistService extends BaseService{

  private readonly ROOT : string = 'playlists';

  getPlaylists() : Observable<Playlist[]>{
    return this.get<Playlist[]>( `${this.ROOT}` );
	}

  getPlaylist( id: number ) : Observable<Playlist>{
    return this.get<Playlist>( `${this.ROOT}/${id}` );
	}

  createPlaylist( p: Playlist ) : Observable<Playlist>{
		return this.post<Playlist>( `${this.ROOT}`, p );
  }

  updatePlaylist( id: number, p: Playlist ) : Observable<Playlist>{
		return this.put<Playlist>( `${this.ROOT}/${id}`, p );
  }

  deletePlaylist( id: number ) : Observable<any>{
		return this.delete<TextMessage>( `${this.ROOT}/${id}` );
  }
}