import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Folder } from './dashboard.m';

@Injectable()
export class FolderStore {

  private _folder: BehaviorSubject<Folder> = new BehaviorSubject(FolderStore.stub);
	public readonly folder$: Observable<Folder> = this._folder.asObservable();
	
  static get stub(): Folder{
    return {
      id: 0,
      orgId: 0,
      title: '',
      uid: '',
      url: '',
      version: 0
    }
  }

	add( f: Folder ){
    this._folder.next( f );
  }
  
  reset(){
    this._folder.next( FolderStore.stub );
	}
}