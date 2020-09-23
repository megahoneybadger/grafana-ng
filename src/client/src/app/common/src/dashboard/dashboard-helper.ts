import { DashboardRawSearchHit, FolderSeachHit,
  DashboardSearchHit, Folder } from './dashboard.m';

export class DashboardSearchHelper {
  
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

  

  static toDashboards( f: FolderSeachHit, dashboards: DashboardRawSearchHit[] ) : DashboardSearchHit[]{
    return dashboards.map( x => {
      return {
        id: x.id,
        uid: x.uid,
        title: x.title,
        url: x.url,
        selected: f.selected,
        folder: f,
        tags: [...x.tags]
      }
    });
  }
}