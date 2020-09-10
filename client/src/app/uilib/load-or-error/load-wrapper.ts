import { catchError, shareReplay, finalize, tap } from 'rxjs/operators';
import { Subject, Observable, of } from 'rxjs';
import { defer } from 'rxjs';

export class ObservableEx<T> {
	private readonly _errorLoading$ = new Subject<boolean>();
	private _loading: boolean = false;
	private _completed: boolean = false;

	get loading(){
		return this._loading;
	}

  readonly errorLoading$: Observable<boolean> = this._errorLoading$.pipe(
    shareReplay(1)
	);

	public data$: Observable<T>;

  constructor(data: Observable<T>) {
		
    this.data$ = defer(() => {
			
			this._completed = false;
			var start = +new Date()

			this._loading = true;		
			
			return data.pipe(
				shareReplay(1),
				finalize( () => {
					this._completed = true;
					this._loading = false;
				} ),
				catchError(error => {
					this._errorLoading$.next(true);
					return of(null);
				}));
		})
	}

}