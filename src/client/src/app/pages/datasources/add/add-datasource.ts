import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base-component';
import { PluginsService, PluginType, Plugin } from 'common';
import { ObservableEx } from 'uilib';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'add-datasource',
  templateUrl: './add-datasource.html',
  styleUrls: ["./add-datasource.scss"]
})
export class AddDataSourceComponent extends BaseComponent {

  pluginsRequest: ObservableEx<Plugin[]>;
  plugins: Plugin[];

  filter: string;
 
  constructor( private pluginsService: PluginsService ) {
    super();

    this.pluginsRequest = new ObservableEx( this
      .pluginsService
      .getPlugins( PluginType.DataSource )
      .pipe(
        tap(x => this.plugins = [...x] )));
  }

  onPluginClick( p : Plugin ){
    console.log( "plugin selected" );
  }
}
