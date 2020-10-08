import { DashboardRawSearchHit, FolderSeachHit,
  DashboardSearchHit, Folder } from './dashboard.m';

export class DashboardSearchHelper {

  static readonly LS_KEY_RECENT = 'recent_dashboards';
  
  static toFolders( items: DashboardRawSearchHit[] ) : FolderSeachHit[]{
    const explicitFolders = items
      .filter( x => x.type === "dash-folder" )
      .map( f => this.toFolder( f ));

    const dashboards = items.filter(x => x.type === "dash-db");

    const mapFolders = new Map();
    const keyGeneral = "General";

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
    const recentFolder = DashboardSearchHelper.toNotExistingFolder( "Recent", "fa-clock-o" );

    const dashboards = DashboardSearchHelper.toDashboards( recentFolder, items );

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
    const starredFolder = DashboardSearchHelper.toNotExistingFolder( "Starred", 'fa-star-o' );

    starredFolder.dashboards = DashboardSearchHelper.toDashboards( starredFolder, items );

    return starredFolder;
  }
}