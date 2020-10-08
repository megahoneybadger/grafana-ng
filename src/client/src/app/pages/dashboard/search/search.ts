import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { NavigationStart, Router, RouterEvent } from '@angular/router';
import { DashboardSearchHelper, DashboardService,
	FolderSeachHit, SearchFilter, Tag } from 'common';
import { forkJoin, fromEvent, Observable, of } from 'rxjs';
import { debounceTime, finalize, map, tap } from 'rxjs/operators';
import { BaseComponent } from '../../base/base-component';

@Component({
  selector: 'dashboard-search',
	templateUrl: './search.html',
	styleUrls:[ './search.scss' ]
})
export class DashboardSearchComponent extends BaseComponent {
  @ViewChild('tbQuery') queryTextBox: ElementRef;
  @ViewChild('searchDropdown') searchDropdown: ElementRef;
  
  @Output() close = new EventEmitter();

	searchFilter = new SearchFilter();

	folders: FolderSeachHit[];
	recent: FolderSeachHit;
	starred: FolderSeachHit;
	tags: Tag[];

	constructor( 
    private dbService: DashboardService,
    private router: Router ){
    super();
	}

	ngOnInit(){
    this.search();
    
    this
      .router
      .events
      .subscribe((event: RouterEvent) => {
        if( event instanceof NavigationStart ){
          this.close.emit();
        }
      });
	}

	ngAfterViewInit(){
    fromEvent(this.queryTextBox.nativeElement, 'keyup')
    .pipe(
      map((event:any) => event.target.value ),
      debounceTime(500),
      tap( x => this.searchFilter.query = x ) )
    .subscribe( q => this.search()  );
	}
	
	search(){
		this.folders = [];
    this.recent = null;
		this.starred = null;
		
    if( this.searchFilter.empty ){
			this.searchDefault();
    } else {
      this.searchByFilter();
    }
	}

	searchDefault(){
		this.waiting = true;
		
		forkJoin( [ this.starred$, this.recent$, this.top$, this.tags$ ] )
			.pipe(
				finalize( () => this.waiting = false ) )
			.subscribe( x => {
        
				this.starred = x[ 0 ];
				this.recent = x[ 1 ];
				this.folders = x[ 2 ];
        this.tags = x[ 3 ];
			} );
	}
	
	searchByFilter(){
    this.searchFilter.query = this.queryTextBox.nativeElement.value;
    const request = this.searchFilter.request;
    
    this.waiting = true;

    this
      .dbService
      .search( request )
      .pipe( 
        map( x => DashboardSearchHelper.toFolders( x ) ),
        finalize( () => this.waiting = false ) )
      .subscribe( x => this.folders = x );
	}

	get recent$():Observable<FolderSeachHit>{
		const ids = DashboardSearchHelper.getRecent();
    
    if( 0 == ids.length ){
      return of();
    }

    let request = '';
    ids.forEach( x => request += `${request ? '&' : '' }dashboardIds=${x}`)
  
    return this
      .dbService
			.search(request)
			.pipe( 
        map( x => DashboardSearchHelper.toRecentFolder( x ) ));
  }
	
	get top$() : Observable<FolderSeachHit[]>{
    return this
      .dbService
      .searchTop()
      .pipe( 
        map( items => DashboardSearchHelper.toFolders(items) ) );
	}

	get starred$():Observable<FolderSeachHit>{
    return this
      .dbService
			.search( 'starred=true' )
			.pipe( 
        map( x => DashboardSearchHelper.toStarredFolder( x ) ));
  }
	
	get tags$() : Observable<Tag[]>{
    return this
      .dbService
      .getTags()
      
  }

  @HostListener('document:mousedown', ['$event'])
	public documentClick(event: any): void {
    if( event.target.classList.contains('ps__thumb-y') ){
      return;
    }

		if (event.target == this.searchDropdown.nativeElement) {
			this.close.emit();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscPressed(event: KeyboardEvent) {
    this.close.emit();
  }
}

