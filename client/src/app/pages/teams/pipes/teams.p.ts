
import { Pipe, PipeTransform } from "@angular/core";
import { Team } from 'src/app/core/models/teams';

@Pipe({
  name: 'teamNameFilter'
})
export class TeamsNameFilterPipe implements PipeTransform{
  transform( value: any, filter: string ){
    if( !value || value.length === 0 || null == filter || "" === filter )
      return value;

    let arr = <Array<Team>> value;

    return ( null == filter ) ?
      arr : arr.filter( x => x.name.toLowerCase().includes( filter ) );
  }
}