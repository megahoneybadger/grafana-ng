
import { Plugin } from './plugin.m';

export class PluginHelper{
  static getImageSource( p: Plugin, small: boolean = true ){
    let logo = small ? p?.info?.logos?.small : p?.info?.logos?.large;
    return logo ? `/assets/plugins/${p.id}/${logo}` : "";
  }
}