
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from '../_base/base-service';
import { Plugin, PluginType } from './plugin.m';

@Injectable()
export class PluginService extends BaseService{

  getPlugins( type?: PluginType ): Observable<Plugin[]> {
    const qp = ( type ) ? `?type=${type}` : '';

    return this
      .http
      .get<Plugin[]>(`${this.baseUri}/plugins${qp}`, this.headers);

  }

  getPlugin( type: string ): Observable<Plugin> {
    return this
      .http
      .get<Plugin>(`${this.baseUri}/plugins/${type}/settings`, this.headers);

  }
}
