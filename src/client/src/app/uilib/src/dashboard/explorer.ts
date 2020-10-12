import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService, DashboardSearchHelper, DashboardService, 
  FolderSeachHit, OrgUser, SearchFilter, DashboardSearchHit } from 'common';
import { SelectItem } from 'primeng/api';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { ValueChangedEventArgs } from '../dropdown/dropdown';


@Component({
  selector: 'dashboard-explorer',
  templateUrl: './explorer.html',
  styleUrls:[ './explorer.scss' ]
})
export class DashboardExplorerComponent {

  @Input() folders: FolderSeachHit[];
  @Input() loading: boolean;
  @Input() showToolbar: boolean = true;
  @Input() canSelect: boolean = true;

  @Input() set folder( f: FolderSeachHit ){
    this.folders = [ f ];
  }

  @Output() search = new EventEmitter();
  @Output() folderToggle = new EventEmitter<FolderSeachHit>()
  
  filter = new SearchFilter();
 
  selectAll: boolean;

  availableTags$: Observable<SelectItem[]>;
  availableStarred: any;

  user: OrgUser;
  userSubs: Subscription;

  isDeleterOpen: boolean = false;
  isMoverOpen: boolean = false;

  get hasSelected(){
    return this.hasSelectedFolders || this.hasSelectedDashboards;
  }

  get hasSelectedFolders(){
    return DashboardSearchHelper.getSelectedFolders( this.folders ).length;
  }

  get hasSelectedDashboards(){
    return DashboardSearchHelper.getSelectedDashboards( this.folders ).length;
  }
  
  constructor(
		private dbService: DashboardService,
		private authService: AuthService ) {
			this.userSubs = authService
        .user$
        .subscribe( x => this.user = x );
			
			this.availableStarred = [
        {label:'Filter by Starred', disabled:true},
				{label:'Yes', value: 0 },
        {label:'No', value: 1 }
      ]

      this.availableTags$ = this
        .dbService
        .getTags()
        .pipe(
          map( x => <any>[  
            {label:'Filter by Tag', disabled:true}, 
            ...x
              .map(y => {return {label: y.term, value: y.term}})
              .sort( (a, b)=> (a.label > b.label) ? 1 : -1 )] ));
  }
  
  ngOnDestroy(){
    this.userSubs?.unsubscribe();
  }

  onQueryFilterChanged( q: string ){
    this.filter.query = q;
    this.emitSearch();
  }

  onAddStarred(e: ValueChangedEventArgs) {
    this.filter.starred = ( e.newValue == 0 );
    this.emitSearch();
  }

  onRemoveStarred(){
    this.filter.starred = false;
    this.emitSearch();
  }
  
  onAddTag(e: ValueChangedEventArgs) {
		if (!this.filter.tags.includes(e.newValue)) {
      this.filter.tags.push(e.newValue);
      this.emitSearch();

      if( !this.showToolbar ){
        this.filter.tags = [];
      }
		}
  }

  onRemoveTag( tag: string ){
    const index = this.filter.tags.indexOf( tag );
    this.filter.tags.splice( index, 1 );
    this.emitSearch();
  }

  onTagClick( d: DashboardSearchHit, t: string, e: any ){
    e.preventDefault();
    e.stopPropagation();
    this.onAddTag( { oldValue: undefined, newValue: t } )
  }

  onClearFilter(){
    this.filter.query = '';
    this.filter.starred = false;
    this.filter.tags = [];
    this.emitSearch();
  }

  emitSearch(){
    this.search.emit( this.filter.copy() );
  }

  onExpandFolder( f: FolderSeachHit ){
    f.expanded=!f.expanded;

    if (f.expanded && 0 == f.dashboards.length && f.id ) {
      this
        .dbService
        .searchFolder( f.id )
        .subscribe( x => f.dashboards = DashboardSearchHelper.toDashboards( f, x ));
    }

    this.folderToggle.emit( f );
  }

  onFolderChecked( f: FolderSeachHit ){
    f.dashboards.forEach( x => x.selected = f.selected );
  }

  onAllChecked(){
    this.folders.forEach( x => {
      x.dashboards.forEach( d => d.selected = this.selectAll );
    });
  }
}
