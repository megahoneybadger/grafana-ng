import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseComponent } from '../../base/base-component';
import { PluginsService, NavigationHelper, PageNavigation, 
  NavigationProvider, Plugin, DataSourceService, DataSource  } from 'common';
import { ActivatedRoute } from '@angular/router';
import { Notes, ErrorMessages } from 'uilib';
import { PluginLoader } from 'src/app/plugins/loader/plugin-loader.s';
import { DataSourcePluginAnchorDirective } from './plugin-anchor.dir';


@Component({
  selector: 'edit-datasource',
  templateUrl: './edit-datasource.html'
})
export class EditDataSourceComponent extends BaseComponent {
  navigation: PageNavigation; 

  dataSource: DataSource;
  plugin: Plugin;
  id: number;

  instance: any;

  @ViewChild(DataSourcePluginAnchorDirective, {static: false}) 
    pluginPlaceholder: DataSourcePluginAnchorDirective;
   
  constructor( 
    private pluginsService: PluginsService,
    private dsService: DataSourceService,
    private navProvider: NavigationProvider,
    private activatedRoute: ActivatedRoute,
    private pluginLoader: PluginLoader ) {
      super();

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
        },
        e => Notes.error( e.error?.message ?? ErrorMessages.BAD_GET_DATA_SOURCE ))
  }

  loadPluginSettings( type: string ){
    this
      .pluginsService
      .getPluginSetting( type )
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
      .load( this.plugin.module, "ds-settings-editor" )
      .subscribe( 
        cf => {
          const vcr = this.pluginPlaceholder.viewContainerRef;
          vcr.clear();
          this.instance = vcr.createComponent(cf)?.instance;
          
        },
        e => {
          console.log( e );
          Notes.error( "Failed to instantiate plugin", e.message )
        } )
    
  }

  onShow(){
    console.log( this.instance.form.value )
    console.log( this.instance.form.valid )
  }

  

  
}

