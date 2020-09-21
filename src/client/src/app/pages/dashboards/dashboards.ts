import { Component, ViewChild } from '@angular/core';
import { DashboardService, PageNavigation } from 'common';
import { FadeInOutAnimation } from 'uilib';

@Component({
  selector: 'manage-dashboards',
  animations: [FadeInOutAnimation],
  templateUrl: './dashboards.html',
  styleUrls:[ './dashboards.scss' ]
})
export class ManageDashboardsComponent {
  navigation: PageNavigation;
  list: any;

  constructor( private dsService: DashboardService ){
    this
      .dsService
      .search('folderIds=0')
      .subscribe( x => {
        this.list = [...x];
        console.log( x );
        ManageDashboardsComponent.buildFolderTree( x );
      } );
  }

  onClick( item ){
    console.log( 'click' );
  }

  static buildFolderTree(items) {
    const explicitFolders = items.filter(x => x.type === "dash-folder" );
    const dashboards = items.filter(x => x.type === "dash-db");

    const mapFolders = new Map();
    //const keyGeneral = Folder.EMBEDDED_GENERAL;

    console.log( explicitFolders );
    console.log( dashboards );

  }
}
