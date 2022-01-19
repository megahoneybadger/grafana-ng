import { DashboardRawSearchHit, PlaylistItem, PlaylistItemType } from 'common';

export class PlaylistItemRows{
	dashboards: PlaylistItemRow [];
	tags: PlaylistItemRow [];
	hidden: PlaylistItemRow[];

	private _tagMode: boolean = false;

	get tagMode() : boolean{
		return this._tagMode;
	}

	set tagMode( m : boolean ) {
		this._tagMode = m;
	}

	get dashboardMode(){
		return !this.tagMode;
	}

	set dashboardMode( m: boolean ){
		this.tagMode = !m;
	}
	
	get content() : PlaylistItemRow[]{
		return this.tagMode ? this.tags : this.dashboards;
	}

	update( dashboards: DashboardRawSearchHit[] ){
		this.hidden = [];

		this.dashboards = dashboards.map( x => {
			var row = new PlaylistItemRow();
			row.dashboard = x;
			row.type = PlaylistItemType.Id 
			return row;
		} );

		var map = new Map<string, number>();

		var tags = dashboards.reduce( (a, b) => a.concat(b.tags), [])
		
		tags.forEach( x => map.set( x, ( map.get( x ) || 0 ) + 1 ));	

		this.tags = [];

		for (const [key, value] of map.entries()) {
			var row = new PlaylistItemRow();
			row.tagName = key;
			row.tagCount = value;
			row.type = PlaylistItemType.Tag 
			this.tags.push( row );
		}

		this.sortTags();
		this.sortDashboards();
	}

	private sortTags(){
		this.tags.sort( (a,b) =>  a.tagName.localeCompare( b.tagName ));
	}

	private sortDashboards(){
		this.dashboards.sort( (a,b) =>  a.dashboard.title.localeCompare( b.dashboard.title ));
	}

	pick( r: PlaylistItemRow ){
		this.hidden.push( r );

		const list = ( r.type == PlaylistItemType.Id ) ? this.dashboards : this.tags;
		const index = list.indexOf( r );

		if( -1 !== index ){
			list.splice( index, 1);
		}
	}

	hide( item: PlaylistItem ){
		if( item.type == PlaylistItemType.Id ){
			const index = this
				.dashboards
				?.findIndex( x => x.dashboard.id == +item.value );

			if( undefined !== index && -1 !== index ){
				const r = this.dashboards[ index ];
				this.dashboards.splice(index, 1);
				this.hidden.push( r );
			}
		} else {
			const index = this
				.tags
				?.findIndex( x => x.tagName == item.value );

			if( undefined !== index && -1 !== index ){
				const r = this.tags[ index ];
				this.tags.splice(index, 1);
				this.hidden.push( r );
			}
		}
	}

	push( item: PlaylistItem ){
		if( item.type == PlaylistItemType.Id ){
			const index = this
				.hidden
				.findIndex( x => x.type == PlaylistItemType.Id && x.dashboard.id == +item.value );

			if( undefined !== index && -1 !== index ){
				const r = this.hidden[ index ];
				this.hidden.splice( index, 1 );
				this.dashboards.push( r );
				this.sortDashboards();
			}
		} else {
			const index = this
				.hidden
				.findIndex( x => x.type == PlaylistItemType.Tag && x.tagName == item.value );

			if( undefined !== index && -1 !== index ){
				const r = this.hidden[ index ];
				this.hidden.splice( index, 1 );
				this.tags.push( r );
				this.sortTags();
			}
		}
	}
}

export class PlaylistItemRow{
	type: PlaylistItemType;
	dashboard: DashboardRawSearchHit;
	tagName: string;
	tagCount: number;

	get tagText(){
		return `${this.tagName} (${this.tagCount})`
	}
}