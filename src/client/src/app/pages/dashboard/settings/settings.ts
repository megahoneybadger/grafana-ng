import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardStore } from 'common';
import { Subscription } from 'rxjs';
import { ErrorMessages, Notes } from 'uilib';
import { BaseDasboardComponent } from '../base/dashboard-base';
import { Location } from '@angular/common';

@Component({
  selector: 'dashboard',
  templateUrl: `./settings.html`,
  styleUrls: [`./settings.scss`],
  encapsulation: ViewEncapsulation.None,
})
export class DashboardSettingsComponent extends BaseDasboardComponent{
  readonly PARAM_KEY : string = "editview"

  readonly SECTION_SETTINGS: string = "settings";
  readonly SECTION_ANNOTATIONS: string = "annotations";
  readonly SECTION_TEMPLATING: string = "templating";
  readonly SECTION_LINKS: string = "links";
  readonly SECTION_VERSIONS: string = "versions";
  readonly SECTION_PERMISSIONS: string = "permissions";
  readonly SECTION_JSON: string = "dashboard_json";

  sections: any[];
  routeSubs: Subscription;
  activeSectionId: string;

  canSaveAs: boolean;
  canSave: boolean;
  canDelete: boolean;

  constructor( 
    store: DashboardStore,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location ){
      super( store );

      this.routeSubs = this
        .activatedRoute
        .queryParamMap
        .subscribe((params) => {
          this.activeSectionId = params.get( this.PARAM_KEY );
          this.activateSection();
        });
  }

  ngOnDestroy(){
    this.routeSubs?.unsubscribe();
  }

  onDashboardReady(){
    this.buildSections();
    const meta = this.dashboard.meta;

    this.canSaveAs = meta.canEdit /*&& contextSrv.hasEditPermissionInFolders*/;
    this.canSave = meta.canSave;
    this.canDelete = meta.canSave;
  }

  onDashboardError(){
		Notes.error( ErrorMessages.BAD_GET_DASHBOARD );
		this.router.navigate( [DashboardStore.ROOT_MANAGEMENT] );
  }

  buildSections() {
    this.sections = [];

    if (this.dashboard.meta.canEdit) {
      this.sections.push({
        title: 'General',
        id: this.SECTION_SETTINGS,
        icon: 'gicon gicon-preferences',
      });

      this.sections.push({
        title: 'Annotations',
        id: this.SECTION_ANNOTATIONS,
        icon: 'gicon gicon-annotation',
      });

      this.sections.push({
        title: 'Variables',
        id: this.SECTION_TEMPLATING,
        icon: 'gicon gicon-variable',
      });

      this.sections.push({
        title: 'Links',
        id: this.SECTION_LINKS,
        icon: 'gicon gicon-link',
      });
    }

    if (this.dashboard.id && this.dashboard.meta.canSave) {
      this.sections.push({
        title: 'Versions',
        id: this.SECTION_VERSIONS,
        icon: 'fa fa-fw fa-history',
      });
    }

    if (this.dashboard.id && this.dashboard.meta.canAdmin) {
      this.sections.push({
        title: 'Permissions',
        id: this.SECTION_PERMISSIONS,
        icon: 'fa fa-fw fa-lock',
      });
    }

    // if (this.dashboard.meta.canMakeEditable) {
    //   this.sections.push({
    //     title: 'General',
    //     icon: 'gicon gicon-preferences',
    //     id: 'make_editable',
    //   });
    // }

    this.sections.push({
      title: 'JSON Model',
      id: this.SECTION_JSON,
      icon: 'gicon gicon-json',
    });

    // const params = this.$location.search();
    // const url = this.$location.path();

    // for (const section of this.sections) {
    //   const sectionParams = _.defaults({ editview: section.id }, params);
    //   section.url = config.appSubUrl + url + '?' + $.param(sectionParams);
    // }

    this.activateSection();
  }

  activateSection(){
    if( !this.sections ){
      return;
    }

    this.sections?.forEach( x => x.active = false );
    const tab = this.sections?.find( x => x.id == this.activeSectionId );

    if( tab ){
      tab.active = true;
    } else{
      this.activeSectionId = this.sections[ 0 ].id;
    }
  }

  onSectionSelected( id: string ){
    const url = this
      .router
      .createUrlTree([], {
        relativeTo: this.activatedRoute,
        queryParams: {[this.PARAM_KEY]: id},
        //queryParamsHandling: 'merge',
      })
      .toString()

    this.location.go(url);

    this.activeSectionId = id;
  }

  onSave(){
    console.log( 'save' );
  }

  onSaveAs(){
    console.log( 'save as' );
  }

  onDelete(){
    console.log( 'delete' );
  }
}

