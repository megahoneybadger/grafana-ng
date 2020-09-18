import { Component, ViewChild } from '@angular/core';
import { BaseComponent } from '../../base/base-component';
import { PluginsService, NavigationHelper, PageNavigation, 
  NavigationProvider, Plugin, DataSourceService, DataSource  } from 'common';
import { ActivatedRoute } from '@angular/router';
import { Notes, ErrorMessages } from 'uilib';
import { PluginLoader } from 'src/app/plugins/loader/plugin-loader.s';
import { DataSourcePluginAnchorDirective } from './plugin-anchor.dir';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';

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

	get name(){
		return this.form.get('name');
	}

  @ViewChild(DataSourcePluginAnchorDirective, {static: false}) 
    pluginPlaceholder: DataSourcePluginAnchorDirective;
   
  constructor( 
    private pluginsService: PluginsService,
    private dsService: DataSourceService,
    private navProvider: NavigationProvider,
    private activatedRoute: ActivatedRoute,
    private pluginLoader: PluginLoader ) {
      super();

      this.form = new FormGroup({
        'name': new FormControl( null, Validators.required ),
        'isDefault': new FormControl( null ),
      });

      this.id = +this
        .activatedRoute
        .snapshot
        .params['id'];

      this.updateNavigation();
  }

  ngAfterViewInit(){
    this.loadDataSource()
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
          this.pluginInstance.form.patchValue( this.dataSource );
        },
        e => Notes.error( "Failed to instantiate plugin", e.message ) )
    
  }

  onSave(){
    this.waiting = true;
    this.showPingResult = false;

    const ds = {
      id: this.dataSource.id,
      type: this.dataSource.type,

      ...this.form.value,
      ...this.pluginInstance.form.value
    };

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
    console.log( "delete" );
  }

  

  

  
}

