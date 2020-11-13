
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from '../_base/base-service';
import { Plugin, PluginType } from './plugin.m';

@Injectable()
export class PluginService extends BaseService{

  getPlugins( type?: PluginType ): Observable<Plugin[]> {
    const qp = ( type ) ? `?type=${type}` : '';

    return this.get<Plugin[]>(`plugins${qp}`);
  }

  getPlugin( type: string ): Observable<Plugin> {
    return this.get<Plugin>(`plugins/${type}/settings`);
  }
}
