import { Component, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { BaseComponent } from '../../base/base-component';
import { PluginService, NavigationHelper, PageNavigation, 
  NavigationProvider, Plugin, DataSourceService, DataSource  } from 'common';
import { ActivatedRoute, Router } from '@angular/router';
import { Notes, ErrorMessages } from 'uilib';
import { PluginLoader } from 'src/app/common/src/plugins/plugin-loader.s';
import { DataSourcePluginAnchorDirective } from './plugin-anchor.dir';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

export enum DataSourceEditorMode{
  Create = "create",
  Update = "update"
}

@Component({
  selector: 'edit-datasource',
  templateUrl: './edit-datasource.html',
  styleUrls: ['./edit-datasource.scss']
})
export class EditDataSourceComponent extends BaseComponent {
  navigation: PageNavigation; 

  dataSource: DataSource;
  plugin: Plugin;
  pluginInstance: any;
  id: number;

  form: FormGroup;

  showPingResult: boolean;
  waitingPing: boolean;
  pingResult: boolean;
  pingMessage: string;

  mode: DataSourceEditorMode;
  type: string;

	get name(){
		return this.form.get('name');
	}

  @ViewChild(DataSourcePluginAnchorDirective, {static: false}) 
    pluginPlaceholder: DataSourcePluginAnchorDirective;
   
  constructor( 
    private pluginsService: PluginService,
    private dsService: DataSourceService,
    private navProvider: NavigationProvider,
    private activatedRoute: ActivatedRoute,
    private pluginLoader: PluginLoader,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location ) {
      super();

      this.form = new FormGroup({
        'name': new FormControl( null, Validators.required ),
        'isDefault': new FormControl( false ),
      });

      this.id = +this
        .activatedRoute
        .snapshot
        .params['id'];

      this.mode = <DataSourceEditorMode>this
        .route
        .snapshot
        .data['mode'];

      this.updateNavigation();
  }

  ngAfterViewInit(){
    if( this.mode == DataSourceEditorMode.Update ){
      this.loadDataSource()
    } else {
      this.type = this
        .activatedRoute
        .snapshot
        .params['type'];

      this.loadPluginSettings( this.type );
    }
    
  }

  updateNavigation(){
    this.navigation = NavigationHelper.createNavigationFromNode( 
      this.navProvider.datasource( this.plugin, this.dataSource ), "settings" );
  }

  loadDataSource(){
    this
      .dsService
      .getDataSource( this.id )
      .subscribe( 
        ( ds: DataSource ) => {
          this.dataSource = ds;
          this.type = ds.type;
          this.loadPluginSettings( ds.type );
          this.form.patchValue( ds );
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_GET_DATA_SOURCE ))
  }

  loadPluginSettings( type: string ){
    this
      .pluginsService
      .getPlugin( type )
      .subscribe( 
        ( p : Plugin ) => {
          this.plugin = <any>p;
          this.updateNavigation();
          this.loadModule();
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_GET_PLUGIN_SETTING ) )
  }

  loadModule(){
    this
      .pluginLoader
      .load( `${this.plugin.id}/${this.plugin.module}`, "ds-settings-editor" )
      .subscribe( 
        cf => {
          const vcr = this.pluginPlaceholder.viewContainerRef;
          vcr.clear();
          this.pluginInstance = vcr.createComponent(cf)?.instance;

          if( this.dataSource ){
            this.pluginInstance.form.patchValue( this.dataSource );
          }
          
        },
        e => Notes.error( "Failed to instantiate plugin", e.message ) )
    
  }

  onSave(){
    this.waiting = true;
    this.showPingResult = false;

    const ds = {
      id: this.dataSource?.id,
      type: this.type,

      ...this.form.value,
      ...this.pluginInstance.form.value
    };

    if( this.mode == DataSourceEditorMode.Create ){
      this.create( ds )
    } else {
      this.update( ds )
    }
  }

  create( ds ){
    this
      .dsService
      .create( ds )
      .pipe(
        finalize( () => this.waiting = false ) )
      .subscribe( 
        x => {
          Notes.success( "Datasource added" );
          this.form.patchValue( x );
          this.ping( x );
          
          this.dataSource = x;
          this.dataSource.name = x.name;
          this.updateNavigation();

          this.location.replaceState( `datasources/edit/${x.id}`);
          this.mode = DataSourceEditorMode.Update;
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_ADD_DATA_SOURCE ) );
  }

  update( ds ){
    this
      .dsService
      .update( ds )
      .pipe(
        finalize( () => this.waiting = false ) )
      .subscribe( 
        x => {
          Notes.success( "Datasource updated" );
          // this.form.patchValue( x );
          this.ping( x );
          this.dataSource.name = ds.name;
          this.updateNavigation();
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_UPDATE_DATA_SOURCE ) );
  }

  ping(x: DataSource){
    this.waitingPing = true;

    this
      .dsService
      .ping( x )
      .pipe( 
        finalize ( () => {
          this.waitingPing = false;
          this.showPingResult = true;
        } ) )
      .subscribe( 
        x => {
          this.pingMessage = "Datasource is working";
          this.pingResult = true;
         },
        e => {
          this.pingMessage = e.error.message;
          this.pingResult = false;
        });
  }

  onDelete(){
    this
      .dsService
      .delete( this.dataSource )
      .pipe(
        finalize( () => this.waiting = false ) )
      .subscribe( 
        x => {
          Notes.success( x.message );
          this.router.navigate( ['datasources'] );
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_DELETE_DATA_SOURCE ) );
        
  }

}

