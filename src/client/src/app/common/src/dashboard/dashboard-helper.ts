import { DashboardRawSearchHit, FolderSeachHit,
  DashboardSearchHit, Folder } from './dashboard.m';

export class DashboardSearchHelper {

  static readonly LS_KEY_RECENT = 'recent_dashboards';
  static readonly LS_SEARCH_RECENT_EXPANDED = 'search.sections.recent';
  static readonly LS_SEARCH_STARRED_EXPANDED = 'search.sections.starred';

  static readonly FOLDER_STARRED = 'Starred';
  static readonly FOLDER_RECENT = 'Recent';
  static readonly FOLDER_GENERAL = 'General';

  static get generalFolder(){
    return  {
      id: 0,
      title: DashboardSearchHelper.FOLDER_GENERAL,
      uid: undefined,
      expanded: true,
      dashboards: []
    }
  }
  
  static toFolders( items: DashboardRawSearchHit[] ) : FolderSeachHit[]{
    const explicitFolders = items
      .filter( x => x.type === "dash-folder" )
      .map( f => this.toFolder( f ));

    const dashboards = items.filter(x => x.type === "dash-db");

    const mapFolders = new Map();
    const keyGeneral = this.FOLDER_GENERAL;

    dashboards.forEach( ( d: DashboardRawSearchHit ) => {
      let folderTitle = d.folderTitle;

      if (!folderTitle) {
        folderTitle = keyGeneral;
      }

      var tf = mapFolders.get(folderTitle);

      if (!tf) {
        tf = {
          id: d.folderId ?? 0,
          uid: d.folderUid,
          title: folderTitle,
          expanded: !explicitFolders.find( x => x.title == folderTitle ),
          dashboards: []
        };

        mapFolders.set(folderTitle, tf);

        const existing = explicitFolders.find(x => x.title == tf.title);

        if (existing) {
          const index = explicitFolders.indexOf(existing);
          explicitFolders.splice(index, 1);
        }
      }

      tf.dashboards.push( {
        id: d.id,
        uid: d.uid,
        title: d.title,
        url: d.url,
        tags: [...d.tags],

        folder: tf
      });
    });

    let implicitFolders = Array.from(mapFolders.values());

    const res = [...explicitFolders, ...implicitFolders];

    res.sort((a, b) => a.title.localeCompare(b.title));

    const generalFolder = res.find(x => x.title == keyGeneral);

    if (generalFolder) {
      const index = res.indexOf(generalFolder);
      res.splice(index, 1);
      res.push(generalFolder);
    } else {
      res.push(this.generalFolder);
    }

    return res;
  }

  static toFolder( x: DashboardRawSearchHit | Folder ) : FolderSeachHit{
    return {
      id: x.id,
      uid: x.uid,
      title: x.title,
      url: x.url,

      expanded: false,

      dashboards: []
    };
  }

  static toNotExistingFolder( title: string, icon: string = '', expanded: boolean = true ) : FolderSeachHit{
    return {
      id: 0,
      uid: '',
      url: '',
      expanded: expanded,
      title: title,
      icon: icon,
      dashboards: [],
    };
  }

  static toDashboards( f: FolderSeachHit, dashboards: DashboardRawSearchHit[] ) : DashboardSearchHit[]{
    return dashboards.map( x => {
      return {
        id: x.id,
        uid: x.uid,
        title: x.title,
        url: x.url,
        selected: f.selected,
        folder: f,
        tags: x.tags ? [...x.tags] : []
      }
    });
  }

  static getSelectedDashboards(folders: FolderSeachHit[] ) : DashboardSearchHit[]{
    return folders
      ?.filter( x => x?.dashboards.length > 0 )
      .reduce( (x, y) => y.dashboards?.concat(x), [])
      .filter( x => x.selected );
  }

  static getSelectedFolders(folders: FolderSeachHit[] ) : FolderSeachHit[] {
    return folders.filter( x => x.selected );
  }

  static addRecent( id: number ){
    if( !Number.isInteger( id ) ){
      return;
    }
    
    let ids = DashboardSearchHelper.getRecent();

    ids = ids.filter( x => x != id  )
    ids.unshift( id );
    ids = ids.slice( 0, 5 );

    localStorage.setItem( this.LS_KEY_RECENT, ids.toString() );
  }
  
  static updateRecent( ids: number[] ){
    localStorage.setItem( this.LS_KEY_RECENT, ids.toString() );
  }

  static getRecent(): number[]{
    const value = localStorage.getItem( this.LS_KEY_RECENT );
    let ids = [];

    if( value ){
      ids = value
        .split(',')
        .map( x => parseInt( x ) )
        .filter( x => Number.isInteger( x ) );
    }

    return ids;
  }

  static toRecentFolder( items: DashboardRawSearchHit[] ) : FolderSeachHit{
    const recentFolder = DashboardSearchHelper.toNotExistingFolder( this.FOLDER_RECENT, "fa-clock-o" );

    const dashboards = DashboardSearchHelper.toDashboards( recentFolder, items );

    recentFolder.expanded = ( 'true' == localStorage.getItem( this.LS_SEARCH_RECENT_EXPANDED ));

    const sortedDashboards = [];

    DashboardSearchHelper
     .getRecent()
     .forEach( x => {
         const item = dashboards.find( y => x == y.id );

         if( item ){
           sortedDashboards.push( item );
         }
     } );

     DashboardSearchHelper.updateRecent( sortedDashboards.map( x => x.id ) )
    
    recentFolder.dashboards = sortedDashboards;

    return recentFolder;
  }

  static toStarredFolder( items: DashboardRawSearchHit[] ) : FolderSeachHit{
    const starredFolder = DashboardSearchHelper.toNotExistingFolder( this.FOLDER_STARRED, 'fa-star-o' );

    starredFolder.expanded = ( 'true' == localStorage.getItem( this.LS_SEARCH_STARRED_EXPANDED ));

    starredFolder.dashboards = DashboardSearchHelper.toDashboards( starredFolder, items );

    return starredFolder;
  }

  static toggleFolder( f: FolderSeachHit ){
    if( f.title == this.FOLDER_STARRED ){
      localStorage.setItem( this.LS_SEARCH_STARRED_EXPANDED, f.expanded.toString() );
    } else if( f.title == this.FOLDER_RECENT ){
      localStorage.setItem( this.LS_SEARCH_RECENT_EXPANDED, f.expanded.toString() );
    }
  }


}