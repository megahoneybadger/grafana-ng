
import { Pipe, PipeTransform } from "@angular/core";
import { OrgUser } from 'common';

@Pipe({
  name: 'userNameFilter'
})
export class AdminUserNameFilterPipe implements PipeTransform{
  transform( value: any, filter: string ){
    if( !value || value.length === 0 || null == filter || "" === filter )
      return value;

    let arr = <Array<OrgUser>> value;

    return ( null == filter ) ?
			arr : arr.filter( x => 
				//x.name.toLowerCase().includes( filter ) ||
        x.login.toLowerCase().includes( filter ) ||
        x.email.toLowerCase().includes( filter ) );
  }
}