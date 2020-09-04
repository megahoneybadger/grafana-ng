import { FormControl } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { TeamService } from 'src/app/core/services/teams.s';

export function checkTakenTeamName(ts: TeamService, notMyId: boolean, c: FormControl ): Observable<any> {
  let name = c.value.toLowerCase();

  return timer(200)
    .pipe(
      switchMap(() =>
        ts
          .getTeams()
          .pipe( 
            map(teams => teams.filter(item => item.name.toLowerCase() === name )),
            map(teams => ( notMyId ) ? teams.filter(item => item.id != this.team.id ) : teams ),
            map(teams => 0 != teams.length ?  { invalidTeamNameTaken: true } : null ))));
}
