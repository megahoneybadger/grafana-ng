import { FormControl } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { DashboardSearchHelper, DashboardService } from 'common';

export function checkFolderNameTaken(ds: DashboardService, notMyId: boolean, c: FormControl ): Observable<any> {
  let title = c.value.toLowerCase();

  return timer(200)
    .pipe(
      switchMap(() =>
        ds
          .searchTop()
          .pipe( 
            map( hits => DashboardSearchHelper.toFolders( hits )),
            map(folders => folders.filter(item => item.title.toLowerCase() === title )),
            map(folders => ( notMyId ) ? folders.filter(item => item.id != this.folder.id ) : folders ),
            map(folders => 0 != folders.length ?  { invalidFolderNameTaken: true } : null ))));
}
