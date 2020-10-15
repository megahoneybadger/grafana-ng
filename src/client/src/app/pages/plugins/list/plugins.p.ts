import { Pipe, PipeTransform } from "@angular/core";
import { Plugin } from 'common';


@Pipe({
  name: 'pluginsFilter'
})
export class PluginsFilterPipe implements PipeTransform{
  transform( value: Plugin[], filter: string ){
    if( !value || value.length === 0 || null == filter || "" === filter )
      return value;

    return ( null == filter ) ?
      value : value.filter( x =>
        x.name.toLowerCase().includes( filter ) ||
        x.type.toLowerCase().includes( filter ));
  }
}