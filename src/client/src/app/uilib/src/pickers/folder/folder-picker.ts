import { Component, Output, EventEmitter, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseNgModelComponent } from '../../base/ng-model-cmp';
import { DashboardSearchHelper, DashboardService, FolderSeachHit, Permission } from 'common';
import { finalize } from 'rxjs/operators';
import { ErrorMessages } from '../../note/error-messages';
import { Notes } from '../../note/note-dispatcher';
import { SelectItem } from 'primeng';


@Component({
  selector: 'ed-folder-picker',
  templateUrl: './folder-picker.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FolderPickerComponent),
      multi: true
    }]
  })
export class FolderPickerComponent extends BaseNgModelComponent {
  readonly KEY_CREATE = "-- New Folder --"

  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() width: number;

  @Input() label: string;
  @Input() labelWidth: number = 8;

  folders = [];
  showCreate: boolean;
  creating: boolean;
  newFolderName: string;
  
  @Output() pick = new EventEmitter<Permission>()

  get value(): any {
    return this._value;
  };
 
  set value(v: any) {

    if( v ==  this.KEY_CREATE ){
      this.showCreate = true;
      return;
    }

    if (v !== this._value) {
      this._value = v;
      this.onChange(v);

      this.pick.emit( this._value );
    }
  }

  constructor( private dbService: DashboardService ) {
    super()
  }

  ngOnInit(){
    this.loading = true;

    this
      .dbService
      .searchTop()
      .pipe(
        finalize( () => this.loading = false ))
      .subscribe( x => {
        const items = DashboardSearchHelper
          .toFolders( x )
          .map( x => this.toFolderItem( x ) )
        
        this.folders = [ this.createItem, ...items ];
        this.value = this._value ?? this.defaultValue;
      } );
  }

  onCreate(){
    this.creating = true;

    var request = {
      title: this.newFolderName
    }

    this
      .dbService
			.createFolder( request )
			.pipe( 
				finalize( () => {
          this.creating = false
          this.showCreate = false;
          this.newFolderName = undefined;
        } ))
      .subscribe( 
        x => {
          Notes.success( "Folder created" );
          const f = this.toFolderItem( x );
          this.folders = [ ...this.folders, f ];
          this.value = f.value;
        },
				e => Notes.error( e.error?.message ?? ErrorMessages.BAD_CREATE_FOLDER ));
  }

  toFolderItem( f: FolderSeachHit ) : SelectItem{
    return { 
      label: f.title,
      value: {
        id: f.id,
        title: f.title,
        uid: f.uid
      } }
  }

  get createItem() : SelectItem{
    return { label: this.KEY_CREATE, value: this.KEY_CREATE };
  }

  get defaultValue(){
    return  {
      id: 0,
      title: DashboardSearchHelper.FOLDER_GENERAL,
      uid: undefined
    } 
  }
}

