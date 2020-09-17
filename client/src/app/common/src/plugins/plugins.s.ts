
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from '../_base/base-service';
import { Plugin } from '../plugins/plugins.m';

@Injectable()
export class PluginsService extends BaseService{

  getPluginSetting( type: string ): Observable<Plugin> {
    return this
      .http
      .get<Plugin>(`${this.baseUri}/plugins/${type}/settings`, this.headers);

  }
}
