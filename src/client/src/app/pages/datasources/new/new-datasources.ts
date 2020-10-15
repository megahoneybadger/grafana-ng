import { Component } from '@angular/core';
import { BaseComponent } from '../../base/base-component';
import { PluginService, PluginType, Plugin, PluginHelper } from 'common';
import { ObservableEx } from 'uilib';
import { tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'new-datasources',
  templateUrl: './new-datasources.html',
  styleUrls: ["./new-datasources.scss"]
})
export class NewDataSourcesComponent extends BaseComponent {

  pluginsRequest: ObservableEx<Plugin[]>;
  plugins: Plugin[];

  filter: string;

  PluginHelperRef = PluginHelper;
 
  constructor( 
    private pluginsService: PluginService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) {
      super();

      this.pluginsRequest = new ObservableEx( this
        .pluginsService
        .getPlugins( PluginType.DataSource )
        .pipe(
          tap(x => this.plugins = [...x] )));
  }

  onPluginClick( p : Plugin ){
    this.router.navigate( [p.id],{ relativeTo: this.activatedRoute });
  }
}
