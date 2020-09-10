
import { Pipe, PipeTransform } from "@angular/core";
import { ApiKey } from '../../../core/models/api-keys';

@Pipe({
	name: 'apiKeyNameFilter',
	pure: false
})
export class ApiKeysNameFilterPipe implements PipeTransform{
  transform( value: any, filter: string ){
    if( !value || value.length === 0 || null == filter || "" === filter )
      return value;

    let arr = <ApiKey[]> value;

    return ( null == filter ) ?
      arr : arr.filter( x => x.name.toLowerCase().includes( filter ) );
  }
}