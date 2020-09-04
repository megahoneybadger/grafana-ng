
import { Pipe, PipeTransform } from "@angular/core";
import { OrgUser } from 'src/app/core/models/user';

@Pipe({
  name: 'teamMemberNameFilter'
})
export class TeamMemberNameFilterPipe implements PipeTransform{
  transform( value: any, filter: string ){
    if( !value || value.length === 0 || null == filter || "" === filter )
      return value;

    let arr = <OrgUser[]> value;

    return ( null == filter ) ?
      arr : arr.filter( x => 
        x.login.toLowerCase().includes( filter ) ||
        x.email.toLowerCase().includes( filter ) );
  }
}