import { Pipe, PipeTransform } from "@angular/core";
import { DataSource } from 'src/app/core/models/datasource';

@Pipe({
  name: 'dataSourceNameFilter'
})
export class DataSourcesNameFilterPipe implements PipeTransform{
  transform( value: any, filter: string ){
    if( !value || value.length === 0 || null == filter || "" === filter )
      return value;

    let arr = <DataSource[]> value;

    return ( null == filter ) ?
      arr : arr.filter( x => x.name.toLowerCase().includes( filter ) );
  }
}